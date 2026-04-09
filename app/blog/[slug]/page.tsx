import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata, blogPostSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { blogPosts } from "@/lib/data";
import { Breadcrumb }    from "@/components/ui/Breadcrumb";
import { FaqAccordion }  from "@/components/ui/FaqAccordion";

interface Props { params: { slug: string } }

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title:         `${post.title} | ZC777 Casino Blog`,
    description:   post.excerpt,
    path:          `/blog/${post.slug}`,
    type:          "article",
    datePublished: post.dateISO,
    dateModified:  post.dateModifiedISO ?? post.dateISO,
    author:        post.author,
  });
}

/** Converts markdown inline syntax to HTML (bold + links) */
function inlineHtml(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong style='color:#F0EAD6'>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' style='color:#D4AF37;text-decoration:underline;text-underline-offset:3px;' >$1</a>");
}

/** Very simple markdown → JSX converter for blog content */
function renderContent(md: string) {
  const lines = md.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## "))  { elements.push(<h2 key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line.slice(3)) }} />); i++; continue; }
    if (line.startsWith("### ")) { elements.push(<h3 key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line.slice(4)) }} />); i++; continue; }
    if (line.startsWith("#### ")){ elements.push(<h4 key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line.slice(5)) }} />); i++; continue; }
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<h5 key={i} className="font-bold" style={{ color: "#F0EAD6" }}>{line.slice(2, -2)}</h5>);
      i++; continue;
    }

    // Numbered list
    if (/^\d+\./.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ""));
        i++;
      }
      elements.push(<ol key={i} className="list-decimal">{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: inlineHtml(item) }} />)}</ol>);
      continue;
    }

    // Bullet list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(<ul key={i}>{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: inlineHtml(item) }} />)}</ul>);
      continue;
    }

    // Inline image: ![alt](src)
    if (line.startsWith("![")) {
      const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        const [, alt, src] = imgMatch;
        elements.push(
          <figure key={i} className="my-6">
            <Image src={src} alt={alt} title={alt} width={800} height={500} loading="lazy" className="w-full rounded-xl" style={{ borderRadius: "12px", border: "1px solid var(--border)" }} />
            {alt && <figcaption className="text-xs text-center mt-2" style={{ color: "var(--text-muted)" }}>{alt}</figcaption>}
          </figure>
        );
      }
      i++; continue;
    }

    // Paragraph
    if (line.trim() !== "") {
      elements.push(<p key={i} dangerouslySetInnerHTML={{ __html: inlineHtml(line) }} />);
    }
    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const postFaqs = [
    { question: `What is the main topic of this article?`,      answer: post.excerpt },
    { question: `Who wrote this article?`,                      answer: `This article was written by ${post.author}, ${post.authorTitle} at ZC777 Casino.` },
    { question: `When was this article published?`,             answer: `This article was published on ${post.date} and covers ${post.category} strategies for Pakistani players.` },
  ];

  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema({ title: post.title, description: post.excerpt, datePublished: post.dateISO, dateModified: post.dateModifiedISO ?? post.dateISO, author: post.author, authorTitle: post.authorTitle, slug: post.slug })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(postFaqs)) }} />

      {/* ARTICLE HERO */}
      <section
        className="pt-[72px] pb-12 border-b"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%), linear-gradient(180deg,#0F0F18,#0A0A0F)", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />

          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}
            itemProp="headline">
            {post.title}
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{post.excerpt}</p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="py-16" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="datePublished" content={post.dateISO} />
        <meta itemProp="author" content={post.author} />

        <div className="max-w-3xl mx-auto px-6">

          {/* Feature Image / Thumb */}
          {post.featureImage ? (
            <figure className="mb-10">
              <img
                src={post.featureImage.src}
                alt={post.featureImage.alt}
                title={post.featureImage.title}
                loading="eager"
                fetchPriority="high"
                className="w-full rounded-2xl"
                style={{ border: "1px solid var(--border)" }}
              />
              {post.featureImage.caption && (
                <figcaption className="text-xs text-center mt-2" style={{ color: "var(--text-muted)" }}>
                  {post.featureImage.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <div className={`h-64 flex items-center justify-center text-8xl rounded-2xl mb-10 bg-gradient-to-br ${post.bgClass}`} aria-hidden="true">
              {post.emoji}
            </div>
          )}

          {/* Content */}
          <div className="prose-casino" itemProp="articleBody">
            {post.content ? renderContent(post.content) : <p>Content coming soon.</p>}
          </div>

          {/* FAQ */}
          <section className="mt-16" aria-labelledby="post-faq-heading">
            <h2 id="post-faq-heading" className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={postFaqs} />
          </section>

          {/* Author box */}
          {/* Post navigation */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <Link href="/blog" className="casino-card p-5 block hover:no-underline">
              <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>← All Articles</div>
              <div className="text-sm font-bold" style={{ color: "#F0EAD6" }}>Back to Blog</div>
            </Link>
            <Link href="/#play-now" className="casino-card p-5 block text-right hover:no-underline">
              <div className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Ready to play? →</div>
              <div className="text-sm font-bold" style={{ color: "#D4AF37" }}>Start at ZC777</div>
            </Link>
          </div>

        </div>
      </article>
    </>
  );
}
