import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { Footer } from "@/components/blog/Footer";
import { Header } from "@/components/blog/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import type { BlogPosting, WithContext } from "schema-dts";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const result = await wisp.getPost(resolvedParams.slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });
  description?.replace(/Powered by Wisp/gi, "");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [generatedOgImage, image] : [generatedOgImage],
    },
  };
}
interface Params {
  slug: string;
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params;
  const slug=resolvedParams.slug
  const result = await wisp.getPost(slug);

  if (!result || !result.post) {
    return notFound();
  }

  const { title, publishedAt, updatedAt, image, author } = result.post;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image ? image : undefined,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      "@type": "Person",
      name: author.name ?? undefined,
      image: author.image ?? undefined,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className=" dark:bg-gray-900">
        <Header />
        <BlogPostContent post={result.post} />
        <Footer />
      </div>
    </>
  );
};

export default Page;