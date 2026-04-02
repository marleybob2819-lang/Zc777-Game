import Link from "next/link";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="casino-card overflow-hidden" itemScope itemType="https://schema.org/BlogPosting">
      <Link href={`/blog/${post.slug}`} className="block hover:no-underline">
        {post.featureImage ? (
          <img
            src={post.featureImage.src}
            alt={post.featureImage.alt}
            title={post.featureImage.title}
            loading="lazy"
            className="w-full h-52 object-cover"
          />
        ) : (
          <div className={`h-52 flex items-center justify-center text-6xl bg-gradient-to-br ${post.bgClass}`} aria-hidden="true">
            {post.emoji}
          </div>
        )}
        <div className="p-5">
          <h3 className="text-base font-bold leading-snug" style={{ fontFamily: "var(--font-cinzel)", color: "#F0EAD6" }} itemProp="headline">
            {post.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
