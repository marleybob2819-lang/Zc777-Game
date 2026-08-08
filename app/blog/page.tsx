import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/data";
import { BlogGrid }  from "@/components/sections/BlogGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = buildMetadata({
  title:       "ZC777 Game Blog – Tips, Guides & APK Updates",
  description: "ZC777 Game guides for Pakistan: APK download, Teen Patti tips, deposits, withdrawals, PC setup, and safety advice.",
  keywords:    "ZC777 Game blog, ZC777 APK guide, Teen Patti tips Pakistan, ZC777 deposit guide, ZC777 PC download",
  path:        "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]) as Record<string, unknown>} />

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="blog-h1">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 id="blog-h1" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
            ZC777 Game Blog &amp; Guides
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            APK download guides, Teen Patti tips, payment help, and safety advice for ZC777 Game players in Pakistan.
          </p>
        </div>
      </section>

      {/* ALL POSTS */}
      <section className="py-8"  aria-labelledby="all-posts-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 id="all-posts-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
              ZC777 Tips, Strategies &amp; Guides
            </h2>
            <div className="gold-divider" />
          </div>

          <BlogGrid posts={blogPosts.filter((p) => p.slug !== "zc777-game-about-us")} />
        </div>
      </section>

    </>
  );
}
