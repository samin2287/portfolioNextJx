import React from "react";
import Container from "./Container";
import { FaSearch, FaDraftingCompass, FaCode, FaRocket } from "react-icons/fa";
import "aos/dist/aos.css";

const steps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    icon: FaSearch,
    description:
      "Deep-diving into project goals, target audience, user flows, and reviewing Figma design specifications.",
    tag: "Roadmap & Specs",
  },
  {
    step: "02",
    title: "Architecture & UI",
    icon: FaDraftingCompass,
    description:
      "Setting up Next.js app structure, creating reusable modular components, and establishing responsive design tokens.",
    tag: "Design System",
  },
  {
    step: "03",
    title: "Development & APIs",
    icon: FaCode,
    description:
      "Writing clean, maintainable code, integrating RESTful APIs, connecting Sanity CMS, and managing frontend state.",
    tag: "Clean Code & CMS",
  },
  {
    step: "04",
    title: "Optimization & Launch",
    icon: FaRocket,
    description:
      "Fine-tuning Core Web Vitals, testing cross-browser responsiveness, optimizing SEO, and deploying to Vercel/Webflow.",
    tag: "Live Production",
  },
];

const WorkProcess = () => {
  return (
    <section
      id="process"
      data-aos="fade-up"
      data-aos-duration="700"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-1">
            HOW I WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Streamlined Development Process
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From initial concept to production-ready deployment, every step is engineered for high performance, clean architecture, and business impact.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="600"
                className="
                  group relative flex flex-col justify-between 
                  p-6 sm:p-7 rounded-2xl 
                  bg-gradient-to-b from-gray-800 to-gray-900 
                  border border-gray-700/60 hover:border-amber-500/50 
                  shadow-lg hover:shadow-xl hover:shadow-amber-500/10 
                  hover:-translate-y-2 transition-all duration-300
                "
              >
                {/* Step Number & Ambient Glow */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-xl group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tag */}
                <div className="pt-3 border-t border-gray-700/50 mt-auto">
                  <span className="inline-block text-[11px] sm:text-xs font-medium text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WorkProcess;
