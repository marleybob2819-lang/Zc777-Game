import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { BASE_URL }  from "@/lib/seo";

const LAST_MOD = new Date("2026-04-13T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`,         lastModified: LAST_MOD, changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE_URL}/blog`,    lastModified: LAST_MOD, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/about`,   lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: LAST_MOD, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE_URL}/terms`,   lastModified: LAST_MOD, changeFrequency: "yearly",  priority: 0.6 },
  ];

  const priorityMap: Record<string, { priority: number; changeFrequency: "weekly" | "monthly" }> = {
    "download-zc777-apk":            { priority: 0.9, changeFrequency: "weekly"  },
    "zc777-game-for-pc":             { priority: 0.9, changeFrequency: "weekly"  },
    "zc777-deposit-and-withdrawal":  { priority: 0.8, changeFrequency: "monthly" },
    "top-zc777-games":               { priority: 0.8, changeFrequency: "monthly" },
    "zc777-game-tips":               { priority: 0.8, changeFrequency: "monthly" },
    "zc777-account-registration":    { priority: 0.8, changeFrequency: "monthly" },
    "zc777-game-safety-in-pakistan": { priority: 0.8, changeFrequency: "monthly" },
    "zc777-latest-version-2026":     { priority: 0.8, changeFrequency: "monthly" },
    "zc777-game-about-us":           { priority: 0.8, changeFrequency: "monthly" },
  };

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const map = priorityMap[post.slug] ?? { priority: 0.8, changeFrequency: "monthly" as const };
    return {
      url:             `${BASE_URL}/blog/${post.slug}`,
      lastModified:    LAST_MOD,
      changeFrequency: map.changeFrequency,
      priority:        map.priority,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
