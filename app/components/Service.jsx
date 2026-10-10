import React from "react";
import Container from "./Container";
import { FaFigma, FaReact } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import { DiResponsive } from "react-icons/di";
import { MdOutlineIntegrationInstructions, MdSpeed } from "react-icons/md";
import { TbBrandWebflow } from "react-icons/tb";
import "aos/dist/aos.css";

const servicesData = [
  {
    Icon: FaReact,
    title: "React & Next.js",
    description:
      "Building scalable, fast, and interactive web applications using React and Next.js with modern architecture.",
    tags: ["React 19", "Next.js", "SSR / ISR"],
  },
  {
    Icon: DiResponsive,
    title: "Responsive UI Design",
    description:
      "Designing clean, pixel-perfect, and mobile-first interfaces using Tailwind CSS and modern styling techniques.",
    tags: ["Tailwind CSS", "Mobile-First", "Flex & Grid"],
  },
  {
    Icon: MdOutlineIntegrationInstructions,
    title: "Frontend Integration",
    description:
      "Connecting REST APIs, Sanity CMS, and backend services for seamless real-time data flow and UI interaction.",
    tags: ["REST APIs", "Sanity CMS", "State Sync"],
  },
  {
    Icon: FaFigma,
    title: "Component Design",
    description:
      "Developing reusable, modular, and optimized UI design systems accurately transformed from Figma prototypes.",
    tags: ["Figma to Code", "Modular UI", "Accessibility"],
  },
  {
    Icon: MdSpeed,
    title: "Website Optimization",
    description:
      "Enhancing page load speeds, SEO structure, Core Web Vitals, and lightweight asset delivery across all devices.",
    tags: ["Core Web Vitals", "SEO Ready", "Fast Load"],
  },
  {
    Icon: TbBrandWebflow,
    title: "Webflow Development",
    description:
      "Building clean, responsive, and production-ready visual websites with Webflow CMS and custom interactions.",
    tags: ["Webflow CMS", "Interactions", "Custom Code"],
  },
];

const Service = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      data-aos-duration="700"
      className="mt-16 sm:mt-20 lg:mt-28"
    >
      <Container>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center">
          Services
        </h2>

        <p className="text-gray-400 text-center leading-6 py-4 sm:py-5 text-sm sm:text-base max-w-2xl mx-auto">
          Crafting high-performance, responsive web applications and interactive digital experiences with modern web technologies.
        </p>

        {/* Services Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 sm:gap-6 md:gap-8 
            mt-8
          "
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              Icon={service.Icon}
              title={service.title}
              description={service.description}
              tags={service.tags}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Service;
