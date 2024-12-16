import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const result = await wisp.getPosts({ limit: 6 });
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
      {result.posts.map((post) => (
        <div className="break-words" key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <div className="aspect-[16/9] relative">
              {post.image ? (
                <Image
                  alt={post.title}
                  className="object-cover"
                  src={post.image}
                  fill
                />
              ) : (
                <img src="https://placehold.co/600x400" />
              )}
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
            <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
              {(post.publishedAt || post.updatedAt).toLocaleString()}
            </div>
            <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
              {post.description}
            </div>
            <div className="text-sm text-muted-foreground">
              {post.tags.map((tag) => (
                <div key={tag.id} className="mr-2 inline-block">
                  #{tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
