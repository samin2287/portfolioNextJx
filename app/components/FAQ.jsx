"use client";
import React, { useState } from "react";
import Container from "./Container";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import "aos/dist/aos.css";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary depending on project scope. A standard responsive landing page or Webflow site typically takes 1 to 2 weeks, while a full-scale Next.js web application with CMS or backend integration takes 3 to 4 weeks. I always establish clear sprint milestones before kicking off.",
  },
  {
    question: "Can you convert Figma or Adobe XD designs into clean Next.js/Webflow code?",
    answer:
      "Yes, absolutely! I specialize in converting design prototypes into pixel-perfect, accessible, and responsive code with semantic HTML, Tailwind CSS, and smooth interactive micro-animations.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. Every project includes 2 to 4 weeks of complimentary post-launch support to resolve any unexpected bugs and ensure smooth operation. Long-term maintenance and retainer arrangements are also available.",
  },
  {
    question: "What technologies and tools do you specialize in?",
    answer:
      "My core frontend stack includes React, Next.js (App Router, SSR, ISR), JavaScript (ES6+), and Tailwind CSS. For visual and CMS-driven websites, I utilize Webflow. I also regularly integrate Sanity CMS, MongoDB, REST APIs, and deploy to Vercel.",
  },
  {
    question: "How do we collaborate and communicate during development?",
    answer:
      "I prioritize transparent and responsive communication via WhatsApp, Slack, Google Meet, or Email. Throughout development, I provide interactive live staging links so you can review real-time progress and share feedback seamlessly.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      data-aos="fade-up"
      data-aos-duration="700"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-1">
            <FaQuestionCircle />
            <span>HAVE QUESTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Clear answers to common questions about my development process, turnaround times, and collaboration.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`
                  rounded-2xl border transition-colors duration-300 overflow-hidden
                  ${
                    isOpen
                      ? "border-amber-500/50 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg shadow-amber-500/5"
                      : "border-gray-700/60 bg-gray-800/40 hover:border-gray-600 hover:bg-gray-800/60"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base sm:text-lg transition-colors ${
                      isOpen ? "text-amber-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center shrink-0 
                      transition-transform duration-300
                      ${
                        isOpen
                          ? "rotate-180 bg-amber-500/20 text-amber-400"
                          : "bg-gray-700/60 text-gray-400"
                      }
                    `}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                {/* Smooth animated accordion body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-gray-700/40">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
