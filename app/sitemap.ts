import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { BASE_URL }  from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url:             `${BASE_URL}/`,
      lastModified:    new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority:        1.0,
    },
    {
      url:             `${BASE_URL}/blog`,
      lastModified:    new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority:        0.8,
    },
  ];

  const priorityMap: Record<string, number> = {
    "download-zc777-apk":          0.9,
    "zc777-deposit-and-withdrawal": 0.8,
    "top-zc777-games":             0.8,
    "zc777-game-tips":             0.8,
    "zc777-account-registration":  0.7,
    "zc777-game-for-pc":           0.7,
    "zc777-game-safety-in-pakistan": 0.7,
    "zc777-latest-version-2026":   0.7,
    "zc777-game-about-us":         0.6,
  };

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url:             `${BASE_URL}/blog/${post.slug}`,
    lastModified:    new Date(post.dateISO),
    changeFrequency: "monthly" as const,
    priority:        priorityMap[post.slug] ?? 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
