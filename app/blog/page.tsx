import { BlogPostsPreview } from "@/components/blog/BlogPostPreview";
import { BlogPostsPagination } from "@/components/blog/BlogPostsPagination";
import { Footer } from "@/components/blog/Footer";
import { Header } from "@/components/blog/Header";
import { wisp } from "@/lib/wisp";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const resolvedParams = await searchParams;
  const page = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
      <Footer />
    </div>
  );
};

export default Page;
