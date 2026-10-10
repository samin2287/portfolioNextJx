"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { blogPosts as fallbackPosts } from "./constant/blogData";
import { client } from "../../sanity/lib/client";
import { postsQuery } from "../../sanity/lib/queries";
import { urlForImage } from "../../sanity/lib/image";
import { FaArrowRight, FaCalendarAlt, FaClock, FaChevronDown } from "react-icons/fa";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  if (/[a-zA-Z]/.test(dateStr)) return dateStr;
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

const Blog = ({ initialPosts = [] }) => {
  const [posts, setPosts] = useState(() => {
    return Array.isArray(initialPosts) && initialPosts.length > 0
      ? initialPosts
      : fallbackPosts;
  });
  const [showAll, setShowAll] = useState(false);

  // If server had no Sanity posts, attempt client-side fallback
  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) return;

    const fetchPosts = async () => {
      try {
        const sanityPosts = await client.fetch(postsQuery);
        if (sanityPosts && sanityPosts.length > 0) {
          setPosts(sanityPosts);
        }
      } catch (err) {
        console.warn("Could not fetch Sanity posts on client, using local data:", err);
      }
    };

    fetchPosts();
  }, [initialPosts]);

  // Display only first 3 posts unless showAll is true
  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-gray-900/60 relative">
      <Container>
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span>Articles & Insights</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            From the <span className="text-amber-500">Blog</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Notes on building web interfaces that feel intentional, fast, and human.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visiblePosts.map((post, index) => {
            const imageUrl =
              post.image?.asset
                ? urlForImage(post.image)?.width(700).url()
                : typeof post.image === "string"
                ? post.image
                : null;

            return (
              <article
                key={post.slug || index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 150}
                className="group relative flex flex-col h-full rounded-2xl border border-gray-800 bg-gray-900/90 hover:bg-gray-900/95 overflow-hidden shadow-lg shadow-black/40 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
                
                {/* Cover Image Container */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-gray-950">
                  <Link href={`/blog/${post.slug}`} className="block w-full h-full relative">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={post.title || "Blog cover"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-amber-950/40 text-amber-500/40 font-bold text-xl">
                        <span>{post.category || "Article"}</span>
                      </div>
                    )}
                    {/* Subtle gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                  </Link>

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-md bg-gray-950/80 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-sm">
                    {post.category || "Article"}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    {/* Meta info: Date & Read Time */}
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                      {post.date && (
                        <span className="inline-flex items-center gap-1.5">
                          <FaCalendarAlt className="text-amber-500/80 text-[11px]" />
                          {formatDate(post.date)}
                        </span>
                      )}
                      {post.readTime && (
                        <>
                          <span className="text-gray-600">•</span>
                          <span className="inline-flex items-center gap-1.5">
                            <FaClock className="text-amber-500/80 text-[11px]" />
                            {post.readTime}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Blog Title */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="block text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </Link>

                    {/* Blog Summary */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-sm font-semibold text-amber-500 group-hover:text-amber-400 transition-colors">
                    <span className="inline-flex items-center gap-2">
                      Read Article
                      <FaArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                    <span className="text-xs text-gray-600 font-mono">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View More / Show Less Toggle Button (if more than 3 posts) */}
        {posts.length > 3 && (
          <div data-aos="fade-up" className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-700 bg-gray-800/80 hover:bg-gray-800 text-white font-semibold hover:border-amber-500 hover:text-amber-400 transition-all duration-300 shadow-lg cursor-pointer">
              <span>{showAll ? "Show Fewer Articles" : `View All Articles (${posts.length})`}</span>
              <FaChevronDown
                className={`w-3.5 h-3.5 transform transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Blog;
