import React from "react";
import Container from "./Container";

const testimonials = [
  {
    name: "Aria Patel",
    role: "Product Manager, Stellar Labs",
    quote:
      "Zubayer translated every rough idea into a crisp interface. Pixel-perfect, fast, and a pleasure to iterate with.",
  },
  {
    name: "Jorge Mendes",
    role: "Founder, NovaFit",
    quote:
      "He owned the frontend delivery end-to-end. Clean React patterns, thoughtful UX, and shipped ahead of schedule.",
  },
  {
    name: "Sofia Laurent",
    role: "Creative Lead, Bluepine",
    quote:
      "A rare mix of design taste and engineering discipline. Our users felt the improvement within days of launch.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-5xl font-bold text-white">Testimonials</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Proof from partners who shipped with me on tight timelines and high stakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/80 via-gray-800 to-gray-900 p-6 shadow-xl shadow-black/30">
              <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-amber-600/80 blur-xl"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-lg font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-amber-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
