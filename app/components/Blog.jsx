"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";
import { blogPosts } from "./constant/blogData";
import Link from "next/link";

const Blog = () => {
  const [activeSlug, setActiveSlug] = useState(null);

  useEffect(() => {
    const savedSlug = localStorage.getItem("activePostSlug");
    if (savedSlug) {
      setActiveSlug(savedSlug);
    }
  }, []);

  return (
    <section data-aos="zoom-out-up" id="blog" className="py-16 sm:py-20">
      <Container>
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-5xl font-bold text-white">From the Blog</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Notes on building interfaces that feel intentional, fast, and human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => {
            const isActive = activeSlug === post.slug;

            const handleClick = () => {
              localStorage.setItem("activePostSlug", post.slug);
              setActiveSlug(post.slug);
            };

            return (
              <article
                key={post.slug}
                className="group h-full flex flex-col rounded-2xl border border-gray-700 bg-gray-900/80 overflow-hidden shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-amber-500/20">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-sm text-amber-500 font-semibold">
                    {post.date} • {post.readTime}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={handleClick}
                    className={`
                      mt-3 text-2xl font-bold transition-colors
                      ${isActive ? "text-amber-500" : "text-white"}
                      active:text-amber-500 focus:text-amber-500
                      group-hover:text-amber-400
                    `}>
                    {post.title}
                  </Link>
                  <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base grow">
                    {post.summary}
                  </p>
                  <Button
                    href={`/blog/${post.slug}`}
                    className="mt-6 px-4 py-2 text-sm sm:text-base border-gray-600 hover:border-amber-500">
                    Read More
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
