import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article itemScope itemType="https://schema.org/BlogPosting">
      <Link href={`/blog/${post.slug}`} className="block hover:no-underline">
        {post.featureImage && (
          <Image
            src={post.featureImage.src}
            alt={post.featureImage.alt}
            title={post.featureImage.title}
            width={600}
            height={208}
            loading="lazy"
            className="w-full h-52 object-cover mb-4"
          />
        )}
        <h3 className="text-base font-bold leading-snug" style={{ fontFamily: "var(--font-cinzel)", color: "#333333" }} itemProp="headline">
          {post.title}
        </h3>
      </Link>
    </article>
  );
}
