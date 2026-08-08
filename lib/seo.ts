import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.zc777apk.com.pk";
const SITE_NAME = "ZC777 Game";

interface SEOProps {
  title:       string;
  description: string;
  keywords?:   string;
  path?:       string;
  type?:       "website" | "article";
  image?:      string;
  datePublished?: string;
  dateModified?:  string;
  author?:     string;
  noIndex?:    boolean;
}

/** Keep SERP titles ~50–60 chars and descriptions ~150–160 chars. */
export function clipForSerp(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const sliced = clean.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 40 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}

export function buildMetadata({
  title,
  description,
  keywords,
  path = "/",
  type = "website",
  image = "/images/ZC777-GAME-APK.webp",
  datePublished,
  dateModified,
  author,
  noIndex = false,
}: SEOProps): Metadata {
  const url      = `${BASE_URL}${path === "/" ? "" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const serpTitle = clipForSerp(title, 60);
  const serpDesc  = clipForSerp(description, 160);

  return {
    metadataBase: new URL(BASE_URL),
    title: { absolute: serpTitle },
    description: serpDesc,
    keywords,
    authors: author ? [{ name: author }] : [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Games",
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: serpTitle,
      description: serpDesc,
      siteName: SITE_NAME,
      locale: "en_PK",
      images: [{ url: imageUrl, alt: serpTitle }],
      ...(datePublished && { publishedTime: datePublished }),
      ...(dateModified  && { modifiedTime:  dateModified  }),
      ...(author        && { authors:        [author]      }),
    },
    twitter: {
      card: "summary_large_image",
      title: serpTitle,
      description: serpDesc,
      images: [imageUrl],
    },
    other: {
      "geo.region":    "PK",
      "geo.placename": "Pakistan",
      "content-language": "en",
    },
  };
}

// ── JSON-LD SCHEMAS ────────────────────────────────────────
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: `${BASE_URL}/`,
    name: SITE_NAME,
    alternateName: ["ZC777", "ZC777 APK", "ZC777 Game APK"],
    description: "Download ZC777 Game APK for Android in Pakistan. Play Teen Patti, Rummy and real money card games with JazzCash & EasyPaisa.",
    inLanguage: "en",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: SITE_NAME,
    url: `${BASE_URL}/`,
    foundingDate: "2019",
    description: "ZC777 Game APK download guides, Teen Patti tips, and payment help for players in Pakistan.",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/ZC777-GAME-APK.webp`,
      width: 160,
      height: 40,
    },
    image: `${BASE_URL}/images/ZC777-GAME-APK.webp`,
    areaServed: { "@type": "Country", name: "Pakistan" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@zc777casino.com",
      availableLanguage: ["English"],
      areaServed: "PK",
    },
  };
}

export function softwareApplicationSchema(downloadUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZC777 Game",
    alternateName: "ZC777 Game APK",
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Card Game",
    countriesSupported: "PK",
    inLanguage: "en",
    ...(downloadUrl && downloadUrl !== "#download" && { downloadUrl }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
    },
    softwareVersion: "V1.230",
    fileSize: "49MB",
    description: "Free ZC777 Game APK for Android in Pakistan. Play Teen Patti, Rummy and more. Withdraw via JazzCash & EasyPaisa.",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function blogPostSchema({
  title, description, datePublished, dateModified, author, authorTitle, slug, image,
}: {
  title: string; description: string; datePublished: string;
  dateModified: string; author: string; authorTitle: string; slug: string;
  image?: string;
}) {
  const imageUrl = image
    ? (image.startsWith("http") ? image : `${BASE_URL}${image}`)
    : `${BASE_URL}/images/ZC777-GAME-APK.webp`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: clipForSerp(title, 110),
    url: `${BASE_URL}/blog/${slug}`,
    mainEntityOfPage: `${BASE_URL}/blog/${slug}`,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
      jobTitle: authorTitle,
      worksFor: { "@id": `${BASE_URL}/#organization` },
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    description: clipForSerp(description, 160),
    image: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    inLanguage: "en",
    isPartOf: { "@id": `${BASE_URL}/#website` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export { BASE_URL, SITE_NAME };
