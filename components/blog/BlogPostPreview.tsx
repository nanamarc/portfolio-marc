"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Calendar, Tag } from "lucide-react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
}> = ({ post }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-background shadow-md transition-all hover:shadow-xl dark:bg-gray-800/50 dark:shadow-gray-800/30">
      <Link href={`/blog/details/${post.slug}`} className="block">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            alt={post.title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            src={post.image || "http://localhost/images/placeholder.webp"}
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>
      
      <div className="relative p-6">
        {/* Date with icon */}
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <time dateTime={new Date(post.publishedAt || post.updatedAt).toISOString()}>
            {format(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
          </time>
        </div>

        {/* Title */}
        <h2 className="mb-3 font-sans text-2xl font-bold tracking-tight text-primary transition-colors group-hover:text-primary/80 dark:text-white md:text-3xl">
          <Link href={`/blog/details/${post.slug}`}>{post.title}</Link>
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-base leading-relaxed text-muted-foreground dark:text-gray-300">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {post.tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.name}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-16 lg:gap-16 md:grid-cols-3",
        className
      )}
    >
      {posts.map((post) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
