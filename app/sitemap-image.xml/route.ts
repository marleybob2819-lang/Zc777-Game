import { blogPosts } from "@/lib/data";
import { BASE_URL } from "@/lib/seo";
import { homepageScreenshots } from "@/lib/screenshots";

export const dynamic = "force-static";
export const revalidate = 86400;

/** Blog slug redirected to /about — exclude from sitemap. */
const REDIRECTED_SLUGS = new Set(["zc777-game-about-us"]);

type Freq = "daily" | "weekly" | "monthly" | "yearly";

interface SitemapImage {
  loc: string;
  title: string;
  caption: string;
}

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: Freq;
  priority: string;
  images: SitemapImage[];
}

function toDateOnly(iso?: string): string {
  if (!iso) return new Date().toISOString().slice(0, 10);
  return iso.slice(0, 10);
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function imageBlock(image: SitemapImage): string {
  return [
    "    <image:image>",
    `      <image:loc>${escapeXml(image.loc)}</image:loc>`,
    `      <image:title>${escapeXml(image.title)}</image:title>`,
    `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
    "    </image:image>",
  ].join("\n");
}

function urlBlock(entry: SitemapEntry): string {
  return [
    "  <url>",
    `    <loc>${escapeXml(entry.loc)}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "    <mobile:mobile/>",
    ...entry.images.map(imageBlock),
    "  </url>",
  ].join("\n");
}

function absImage(path: string): string {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

export async function GET() {
  const latestPostDate = blogPosts
    .map((p) => p.dateModifiedISO ?? p.dateISO)
    .filter(Boolean)
    .sort()
    .slice(-1)[0];
  const homeDate = toDateOnly(latestPostDate);

  const keyGuideSlugs = [
    "download-zc777-apk",
    "zc777-deposit-and-withdrawal",
    "zc777-game-for-pc",
    "zc777-latest-version-2026",
  ] as const;

  const homeImages: SitemapImage[] = [
    {
      loc: absImage("/images/ZC777-GAME-APK.webp"),
      title: "ZC777 Game",
      caption: "ZC777 Game logo and APK brand mark for Android download in Pakistan",
    },
    ...homepageScreenshots.map((slide) => ({
      loc: absImage(`/images/${slide.file}`),
      title: slide.title,
      caption: slide.alt,
    })),
  ];

  function postImages(post: (typeof blogPosts)[number]): SitemapImage[] {
    if (!post.featureImage) return [];
    return [
      {
        loc: absImage(post.featureImage.src),
        title: post.featureImage.title || post.title,
        caption: post.featureImage.caption || post.featureImage.alt || post.excerpt,
      },
    ];
  }

  const keyGuides: SitemapEntry[] = keyGuideSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))
    .map((post) => ({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: toDateOnly(post.dateModifiedISO ?? post.dateISO),
      changefreq: "weekly" as const,
      priority: "0.9",
      images: postImages(post),
    }));

  const otherPosts: SitemapEntry[] = blogPosts
    .filter(
      (post) =>
        !REDIRECTED_SLUGS.has(post.slug) &&
        !(keyGuideSlugs as readonly string[]).includes(post.slug)
    )
    .map((post) => ({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: toDateOnly(post.dateModifiedISO ?? post.dateISO),
      changefreq: "monthly" as const,
      priority: post.slug === "top-zc777-games" ? "0.9" : "0.8",
      images: postImages(post),
    }));

  const entries: SitemapEntry[] = [
    {
      loc: `${BASE_URL}/`,
      lastmod: homeDate,
      changefreq: "daily",
      priority: "1.0",
      images: homeImages,
    },
    ...keyGuides,
    {
      loc: `${BASE_URL}/blog`,
      lastmod: homeDate,
      changefreq: "weekly",
      priority: "0.8",
      images: blogPosts
        .filter((post) => !REDIRECTED_SLUGS.has(post.slug))
        .flatMap(postImages),
    },
    ...otherPosts,
    {
      loc: `${BASE_URL}/about`,
      lastmod: "2026-03-31",
      changefreq: "monthly",
      priority: "0.7",
      images: [],
    },
    {
      loc: `${BASE_URL}/contact`,
      lastmod: "2026-03-31",
      changefreq: "monthly",
      priority: "0.7",
      images: [],
    },
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map(urlBlock),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
