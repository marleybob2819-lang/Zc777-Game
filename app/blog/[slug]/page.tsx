import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata, blogPostSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/data";
import { Breadcrumb }    from "@/components/ui/Breadcrumb";
import styles from "@/styles/prose.module.css";

interface Props { params: { slug: string } }

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return blogPosts
    .filter((p) => p.slug !== "zc777-game-about-us")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title:         post.title,
    description:   post.excerpt,
    keywords:      `ZC777 Game, ${post.title}, ZC777 APK, Pakistan`,
    path:          `/blog/${post.slug}`,
    type:          "article",
    image:         post.featureImage?.src,
    datePublished: post.dateISO,
    dateModified:  post.dateModifiedISO ?? post.dateISO,
    author:        post.author,
  });
}

/** Converts markdown inline syntax to HTML (bold + links) */
function inlineHtml(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong style='color:#333333'>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href='$2' style='color:#1a1a1a;text-decoration:underline;text-underline-offset:3px;' >$1</a>");
}

/** Very simple markdown JSX converter for blog content */
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
      elements.push(<h5 key={i} className="font-bold" style={{ color: "#333333" }}>{line.slice(2, -2)}</h5>);
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

  return (
    <>
      {/* Schemas */}
      <JsonLd data={blogPostSchema({ title: post.title, description: post.excerpt, datePublished: post.dateISO, dateModified: post.dateModifiedISO ?? post.dateISO, author: post.author, authorTitle: post.authorTitle, slug: post.slug, image: post.featureImage?.src }) as Record<string, unknown>} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }]) as Record<string, unknown>} />

      {/* ARTICLE HERO */}
      <section
        className="pt-[72px] pb-6 border-b"
        style={{ background: "#ffffff", borderColor: "var(--border)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />

          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}
            itemProp="headline">
            {post.title}
          </h1>
          <p className="text-sm mb-4 m-0" style={{ color: "var(--text-muted)" }}>
            By <span itemProp="author">{post.author}</span>
            {post.authorTitle ? ` · ${post.authorTitle}` : ""}
            {" · "}
            <time dateTime={post.dateISO} itemProp="datePublished">{post.date}</time>
            {post.dateModifiedISO && post.dateModifiedISO !== post.dateISO && (
              <>
                {" · Updated "}
                <time dateTime={post.dateModifiedISO} itemProp="dateModified">
                  {post.dateModifiedISO}
                </time>
              </>
            )}
            {" · "}{post.readTime}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>{post.excerpt}</p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="py-8" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="datePublished" content={post.dateISO} />
        <meta itemProp="author" content={post.author} />

        <div className="max-w-3xl mx-auto px-6">

          {/* Feature Image / Thumb */}
          {post.featureImage ? (
            <figure className="mb-6">
              <Image
                src={post.featureImage.src}
                alt={post.featureImage.alt}
                title={post.featureImage.title}
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto rounded-2xl"
                style={{ border: "1px solid var(--border)" }}
              />
              {post.featureImage.caption && (
                <figcaption className="text-xs text-center mt-2" style={{ color: "var(--text-muted)" }}>
                  {post.featureImage.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <div className={`h-64 rounded-none mb-6 bg-gradient-to-br ${post.bgClass}`} aria-hidden="true" />
          )}

          {/* Content */}
          <div className={styles.prose} itemProp="articleBody">
            {post.content ? renderContent(post.content) : <p>Content coming soon.</p>}
            <p>
              Visit the{" "}
              <Link href="/" className="underline underline-offset-2" style={{ color: "#1a1a1a" }}>
                ZC777 Game
              </Link>{" "}
              homepage for APK download, payments, and full game details.
            </p>
          </div>


        </div>
      </article>
    </>
  );
}
