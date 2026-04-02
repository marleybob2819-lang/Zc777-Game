import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.zc777casino.com";

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
}

export function buildMetadata({
  title,
  description,
  keywords,
  path = "/",
  type = "website",
  image = "/images/og-default.jpg",
  datePublished,
  dateModified,
  author,
}: SEOProps): Metadata {
  const url      = `${BASE_URL}${path}`;
  const imageUrl = `${BASE_URL}${image}`;

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : [{ name: "ZC777 Casino" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "ZC777 Casino",
      locale: "en_PK",
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      ...(datePublished && { publishedTime: datePublished }),
      ...(dateModified  && { modifiedTime:  dateModified  }),
      ...(author        && { authors:        [author]      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "geo.region":    "PK",
      "geo.placename": "Pakistan",
      language:        "English",
      "revisit-after": "7 days",
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
    name: "ZC777 Casino",
    description: "Pakistan's premier online casino gaming platform with 500+ games",
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "ZC777 Casino",
    url: `${BASE_URL}/`,
    foundingDate: "2019",
    description: "ZC777 Casino is Pakistan's most trusted online casino platform offering 500+ games including slots, poker, roulette, and live dealer games.",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/og-default.jpg`,
      width: 1200,
      height: 630,
    },
    areaServed: ["PK", "BD", "IN", "LK"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
    },
  };
}

export function softwareApplicationSchema(downloadUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ZC777 Game",
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    ...(downloadUrl && downloadUrl !== "#download" && { downloadUrl }),
    offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "200000" },
    softwareVersion: "V1.230",
    fileSize: "49MB",
    description: "Pakistan's premier online card game platform — play Teen Patti, Rummy, Dragon vs Tiger and win real money via JazzCash & EasyPaisa.",
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
  title, description, datePublished, dateModified, author, authorTitle, slug,
}: {
  title: string; description: string; datePublished: string;
  dateModified: string; author: string; authorTitle: string; slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    dateModified,
    author: { "@type": "Person", name: author, jobTitle: authorTitle, worksFor: { "@type": "Organization", name: "ZC777 Casino" } },
    publisher: { "@id": `${BASE_URL}/#organization` },
    description,
    inLanguage: "en",
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
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export { BASE_URL };
