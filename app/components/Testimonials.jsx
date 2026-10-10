import React from "react";
import Container from "./Container";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Aria Patel",
    role: "Product Manager, Stellar Labs",
    rating: 5,
    quote:
      "Zubayer translated every rough idea into a crisp interface. Pixel-perfect, fast, and a pleasure to iterate with.",
  },
  {
    name: "Jorge Mendes",
    role: "Founder, NovaFit",
    rating: 5,
    quote:
      "He owned the frontend delivery end-to-end. Clean React patterns, thoughtful UX, and shipped ahead of schedule.",
  },
  {
    name: "Sofia Laurent",
    role: "Creative Lead, Bluepine",
    rating: 5,
    quote:
      "A rare mix of design taste and engineering discipline. Our users felt the improvement within days of launch.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-aos="fade-up"
      data-aos-duration="700"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900/50"
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Testimonials
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Proof from founders, product managers, and partners who collaborated with me on tight timelines and high-stakes products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              data-aos-duration="600"
              className="
                group relative flex flex-col justify-between 
                rounded-2xl border border-gray-700/60 hover:border-amber-500/40 
                bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900 
                p-6 sm:p-7 shadow-xl shadow-black/40 
                hover:-translate-y-2 hover:shadow-amber-500/10 
                transition-all duration-300 ease-out
              "
            >
              {/* Top ambient glow */}
              <div className="absolute -top-3 left-6 h-6 w-16 rounded-full bg-amber-500/20 blur-lg group-hover:bg-amber-500/40 transition-colors" />

              <div>
                {/* Header with Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-amber-500/40 group-hover:text-amber-500 transition-colors text-2xl">
                    <FaQuoteLeft />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Client Info & Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-700/50 mt-auto">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 text-white font-bold text-base shadow-md">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base group-hover:text-amber-400 transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
