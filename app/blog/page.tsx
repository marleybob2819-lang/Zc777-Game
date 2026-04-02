import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { blogPosts } from "@/lib/data";
import { BlogGrid }  from "@/components/sections/BlogGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title:       "Casino Blog | Tips, Strategies & Guides for Pakistani Players | ZC777",
  description: "Read expert casino tips, game strategies, and guides on ZC777 Blog. Learn how to play slots, poker, roulette, and blackjack online in Pakistan.",
  keywords:    "casino blog Pakistan, online casino tips, poker strategy, slot tips, roulette strategy, blackjack guide",
  path:        "/blog",
});

const categories = ["All", "Games", "Teen Patti", "Rummy", "Dragon Tiger", "Slots", "Strategy", "Payments"];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }])) }} />

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="blog-h1">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Casino Blog" }]} />
          <h1 id="blog-h1" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
            Casino Blog &amp; Guides
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Expert casino strategies, game tutorials, responsible gambling tips, and industry news — written specifically for Pakistani and South Asian players.
          </p>
        </div>
      </section>

      {/* ALL POSTS */}
      <section className="py-16" style={{ background: "var(--bg-section)" }} aria-labelledby="all-posts-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">All Articles</span>
            <h2 id="all-posts-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              ZC777 Tips, Strategies &amp; Guides
            </h2>
            <div className="gold-divider" />
          </div>

          <BlogGrid posts={blogPosts} categories={categories} />
        </div>
      </section>

    </>
  );
}
