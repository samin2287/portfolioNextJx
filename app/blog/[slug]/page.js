import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
} from "../../components/constant/blogData";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto py-12 px-6">
          {/* Back Button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 border border-gray-700">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            />
          </div>

          {/* Article Header */}
          <article className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8 md:p-12">
            <div className="mb-6">
              <p className="text-sm text-amber-500 font-semibold mb-4">
                {post.date} • {post.readTime}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {post.summary}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Article Content */}
            <div
              className="text-gray-300 leading-relaxed space-y-6
                [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4
                [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3
                [&_p]:text-gray-300 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base [&_p]:md:text-lg
                [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-gray-300 [&_ul]:my-6 [&_ul]:space-y-2
                [&_li]:text-gray-300 [&_li]:mb-2 [&_li]:ml-4
                [&_strong]:text-white [&_strong]:font-semibold
                [&_a]:text-amber-500 [&_a]:hover:text-amber-400 [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Navigation */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-amber-600 hover:border-amber-600 transition-all duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
