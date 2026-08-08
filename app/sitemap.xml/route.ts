import { blogPosts } from "@/lib/data";
import { BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

/** Blog slug redirected to /about — exclude from sitemap. */
const REDIRECTED_SLUGS = new Set(["zc777-game-about-us"]);

type Freq = "daily" | "weekly" | "monthly" | "yearly";

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: Freq;
  priority: string;
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

function urlBlock(entry: SitemapEntry): string {
  return [
    "  <url>",
    `    <loc>${escapeXml(entry.loc)}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "    <mobile:mobile/>",
    "  </url>",
  ].join("\n");
}

export async function GET() {
  const latestPostDate = blogPosts
    .map((p) => p.dateModifiedISO ?? p.dateISO)
    .filter(Boolean)
    .sort()
    .slice(-1)[0];
  const homeDate = toDateOnly(latestPostDate);

  // Key guides listed like cardrummy top-level money pages (weekly / 0.9)
  const keyGuideSlugs = [
    "download-zc777-apk",
    "zc777-deposit-and-withdrawal",
    "zc777-game-for-pc",
    "zc777-latest-version-2026",
  ] as const;

  const keyGuides: SitemapEntry[] = keyGuideSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((post) => ({
      loc: `${BASE_URL}/blog/${post!.slug}`,
      lastmod: toDateOnly(post!.dateModifiedISO ?? post!.dateISO),
      changefreq: "weekly" as const,
      priority: "0.9",
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
    }));

  const entries: SitemapEntry[] = [
    {
      loc: `${BASE_URL}/`,
      lastmod: homeDate,
      changefreq: "daily",
      priority: "1.0",
    },
    ...keyGuides,
    {
      loc: `${BASE_URL}/blog`,
      lastmod: homeDate,
      changefreq: "weekly",
      priority: "0.8",
    },
    ...otherPosts,
    {
      loc: `${BASE_URL}/about`,
      lastmod: "2026-03-31",
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      loc: `${BASE_URL}/contact`,
      lastmod: "2026-03-31",
      changefreq: "monthly",
      priority: "0.7",
    },
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">',
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
