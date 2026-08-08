import type { BlogPost } from "@/types";
import { BlogCard } from "@/components/sections/BlogCard";

interface Props {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
