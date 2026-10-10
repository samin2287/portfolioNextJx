import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";
import BlogShareButtons from "../../components/BlogShareButtons";
import {
  blogPosts as fallbackPosts,
  getBlogPostBySlug as getFallbackPostBySlug,
  getAllBlogSlugs as getFallbackSlugs,
} from "../../components/constant/blogData";
import { client } from "../../../sanity/lib/client";
import { postQuery, postSlugsQuery } from "../../../sanity/lib/queries";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

// ISR: Cache individual blog posts for 60 seconds
export const revalidate = 60;

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (/[a-zA-Z]/.test(dateStr)) return dateStr;
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

async function getPost(slug) {
  try {
    const sanityPost = await client.fetch(postQuery, { slug });
    if (sanityPost) return sanityPost;
  } catch (err) {
    console.warn("Could not fetch post from Sanity:", err);
  }
  return getFallbackPostBySlug(slug) || null;
}

async function getRelatedPosts(currentSlug) {
  try {
    const sanityPosts = await client.fetch(
      groq`*[_type == "post" && slug.current != $slug] | order(date desc)[0...2] {
        _id,
        title,
        "slug": slug.current,
        date,
        readTime,
        category,
        summary,
        image
      }`,
      { slug: currentSlug }
    );
    if (sanityPosts && sanityPosts.length > 0) return sanityPosts;
  } catch (err) {
    console.warn("Could not fetch related posts from Sanity:", err);
  }

  return fallbackPosts.filter((p) => p.slug !== currentSlug).slice(0, 2);
}

export async function generateStaticParams() {
  let sanitySlugs = [];
  try {
    sanitySlugs = await client.fetch(postSlugsQuery);
  } catch (err) {
    console.warn("Could not fetch Sanity slugs for static params:", err);
  }

  const fallbackSlugs = getFallbackSlugs();
  const allSlugs = Array.from(new Set([...(sanitySlugs || []), ...fallbackSlugs])).filter(Boolean);

  return allSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl =
    post.image?.asset
      ? urlForImage(post.image)?.url()
      : typeof post.image === "string"
        ? post.image
        : null;

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }) => {
      const imgUrl = value?.asset ? urlForImage(value)?.url() : null;
      if (!imgUrl) return null;
      return (
        <figure className="my-8 rounded-2xl overflow-hidden border border-gray-800 bg-gray-950">
          <div className="relative w-full h-72 sm:h-96">
            <Image
              src={imgUrl}
              alt={value.alt || "Article illustration"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="text-xs text-center text-gray-400 py-2.5 px-4 bg-gray-900/80 border-t border-gray-800">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 tracking-tight border-b border-gray-800/80 pb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mt-8 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-6 italic text-gray-300 bg-amber-500/5 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-300 my-6 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-300 my-6 pl-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed marker:text-amber-500">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed marker:text-amber-500">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-amber-400 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-700">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const isExternal = (value?.href || "").startsWith("http");
      return (
        <a
          href={value?.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-amber-400 underline underline-offset-4 hover:text-amber-300 transition-colors">
          {children}
        </a>
      );
    },
  },
};

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug);

  const imageUrl =
    post.image?.asset
      ? urlForImage(post.image)?.width(1000).url()
      : typeof post.image === "string"
        ? post.image
        : null;

  return (
    <main className="min-h-screen bg-gray-900 py-8 sm:py-14">
      <Container>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Top Bar: Back Link & Share Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-amber-400 transition-colors group">
              <FaArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to Articles</span>
            </Link>

            <BlogShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Article Header Card */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {post.category || "Article"}
              </span>

              {post.date && (
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                  <FaCalendarAlt className="text-amber-500/80 text-[11px]" />
                  {formatDate(post.date)}
                </span>
              )}

              {post.readTime && (
                <>
                  <span className="text-gray-600">•</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                    <FaClock className="text-amber-500/80 text-[11px]" />
                    {post.readTime}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {post.summary && (
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {post.summary}
              </p>
            )}
          </header>

          {/* Featured Hero Image */}
          {imageUrl && (
            <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden mb-10 border border-gray-800 bg-gray-950 shadow-2xl">
              <Image
                src={imageUrl}
                alt={post.title || "Blog cover"}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              />
            </div>
          )}

          {/* Article Body */}
          <article className="bg-gray-800/40 rounded-2xl border border-gray-800 p-6 sm:p-10 md:p-12 shadow-xl">
            {Array.isArray(post.content) ? (
              <PortableText value={post.content} components={portableTextComponents} />
            ) : typeof post.content === "string" ? (
              <div
                className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg
                  [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-gray-800/80 [&_h2]:pb-3
                  [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:text-amber-400 [&_h3]:mt-8 [&_h3]:mb-3
                  [&_p]:mb-6 [&_p]:leading-relaxed
                  [&_ul]:list-disc [&_ul]:list-inside [&_ul]:my-6 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:my-6 [&_ol]:space-y-2
                  [&_li]:marker:text-amber-500
                  [&_strong]:text-white [&_strong]:font-semibold
                  [&_a]:text-amber-400 [&_a]:underline [&_a]:hover:text-amber-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : null}

            {/* Bottom Share Row */}
            <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Found this helpful? Share it with your network:
              </p>
              <BlogShareButtons title={post.title} slug={post.slug} />
            </div>
          </article>

          {/* Author Bio Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gray-800/60 border border-gray-800 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-lg">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-amber-500/60 shadow-md bg-gray-900">
              <Image
                src="/profile.png"
                alt="Zubayer Mahmud Samin"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Zubayer Mahmud Samin</h3>
                  <p className="text-xs text-amber-500 font-medium">Full-Stack Developer with Webflow Expertise</p>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-3 text-gray-400">
                  <a
                    href="https://github.com/samin2287"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-1.5 rounded-lg bg-gray-900 hover:text-amber-400 border border-gray-700/80 transition-colors">
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samin-093081228"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-1.5 rounded-lg bg-gray-900 hover:text-amber-400 border border-gray-700/80 transition-colors">
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                Building modern, high-performance web applications with React, Next.js,Node.js, Express and Webflow. Passionate about design systems, animation, and thoughtful digital interfaces.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-14 pt-10 border-t border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase font-semibold text-amber-500 tracking-wider">Keep Exploring</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">Read Next</h2>
                </div>
                <Link
                  href="/#blog"
                  className="text-xs sm:text-sm font-semibold text-gray-400 hover:text-amber-400 transition-colors">
                  All Posts →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {relatedPosts.map((relPost) => {
                  const relImage = relPost.image?.asset
                    ? urlForImage(relPost.image)?.width(600).url()
                    : typeof relPost.image === "string"
                      ? relPost.image
                      : null;

                  return (
                    <Link
                      key={relPost.slug}
                      href={`/blog/${relPost.slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-gray-800 bg-gray-800/40 hover:bg-gray-800/80 hover:border-amber-500/50 p-5 transition-all duration-300 shadow-md">
                      <div>
                        {relImage && (
                          <div className="relative w-full h-36 rounded-lg overflow-hidden mb-3 bg-gray-950">
                            <Image
                              src={relImage}
                              alt={relPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 400px"
                            />
                          </div>
                        )}
                        <span className="text-[11px] font-semibold text-amber-500">
                          {relPost.category || "Article"}
                        </span>
                        <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mt-1">
                          {relPost.title}
                        </h3>
                        <p className="mt-1.5 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                          {relPost.summary}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-amber-500 font-semibold">
                        <span>Read Post</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 border border-gray-700 bg-gray-800/80 px-6 py-3 rounded-lg text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all duration-300 shadow-md">
              <FaArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Articles</span>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
