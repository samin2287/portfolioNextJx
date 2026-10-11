"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaStar, FaQuoteRight, FaArrowRight } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Aria Patel",
    role: "Product Manager, Stellar Labs",
    initials: "AP",
    rating: 5,
    isFeatured: false,
    quote:
      "Zubayer translated every rough idea into a crisp interface. Pixel-perfect, fast, and a genuine pleasure to iterate with.",
  },
  {
    name: "Jorge Mendes",
    role: "Founder, NovaFit",
    initials: "JM",
    rating: 5,
    isFeatured: true,
    verified: true,
    quote:
      "He owned the frontend delivery end-to-end. Clean React patterns, thoughtful UX, and shipped ahead of schedule.",
  },
  {
    name: "Sofia Laurent",
    role: "Creative Lead, Bluepine",
    initials: "SL",
    rating: 5,
    isFeatured: false,
    quote:
      "A rare mix of design taste and engineering discipline. Our users felt the performance and visual improvement within days of launch.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-500 bg-amber-500/10 border border-amber-500/25 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            CLIENT FEEDBACK
          </div>

          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Testimonials
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            Proof from founders, product managers, and partners who collaborated with me on tight
            timelines and high-stakes products.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 items-stretch">
          {testimonials.map((item, index) => {
            return (
              <article
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  item.isFeatured
                    ? "bg-[#141824] border-2 border-amber-500/50 shadow-2xl shadow-orange-950/30 md:-translate-y-2"
                    : "bg-[#121622]/80 border border-gray-800/80 hover:border-gray-700 hover:bg-[#151928]"
                }`}
              >
                <div>
                  {/* Card Header */}
                  {item.isFeatured ? (
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-amber-500 bg-amber-500/15 border border-amber-500/30">
                        <span>★</span> FEATURED REVIEW
                      </span>
                      <FaQuoteRight className="text-amber-500 text-lg opacity-90" />
                    </div>
                  ) : null}

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#FD6F00] text-sm mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-200 text-sm sm:text-base font-normal leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Client Avatar and Identity */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-800/80 mt-auto">
                  <div
                    className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center font-bold text-sm ${
                      item.isFeatured
                        ? "bg-[#FD6F00] text-white shadow-md shadow-orange-500/30"
                        : "bg-gray-800 text-gray-300 border border-gray-700/60"
                    }`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base flex items-center gap-1">
                      {item.name}
                      {item.verified && (
                        <MdVerified className="text-amber-500 text-base shrink-0" />
                      )}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Banner Pill Directly Under Testimonials */}
        <div data-aos="fade-up" className="mt-14 sm:mt-16 relative flex items-center justify-center">
          <div className="absolute inset-0 max-w-3xl mx-auto bg-amber-500/15 blur-2xl rounded-full -z-10" />

          <div className="w-full max-w-3xl rounded-full bg-[#121622]/95 border border-gray-800 px-5 sm:px-8 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FD6F00] shadow-[0_0_10px_#FD6F00] animate-pulse shrink-0" />
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                <span className="text-white font-semibold">
                  Ready for next project kickoff
                </span>
                <span className="text-gray-400 font-mono">
                  — Available for Q2 sprints
                </span>
              </div>
            </div>

            <Link
              href="/#contact"
              className="bg-[#FD6F00] hover:bg-[#e06200] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-200 hover:gap-3 shadow-md hover:shadow-orange-500/25 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
            >
              Get in touch
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
