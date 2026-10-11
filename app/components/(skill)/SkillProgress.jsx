"use client";

import React, { useState } from "react";
import SkillProgressCard from "./SkillProgressCard";
import Container from "../Container";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiWebflow,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiGit,
  SiBootstrap,
  SiPostgresql,
} from "react-icons/si";
import { HiCodeBracket } from "react-icons/hi2";

const categories = [
  "All Stack",
  "Frontend Core",
  "Frameworks & Styling",
  "Backend & Database",
  "Tools & Workflow",
];

const skillsData = [
  {
    title: "React.js",
    subtitle: "Daily Driver",
    badge: "CORE",
    icon: <SiReact />,
    tags: ["React 19", "Hooks", "SPA"],
    categories: ["Frontend Core", "Frameworks & Styling"],
  },
  {
    title: "Next.js",
    subtitle: "Production Hub",
    badge: "CORE",
    icon: <SiNextdotjs />,
    tags: ["App Router", "SSR", "ISR"],
    categories: ["Frontend Core", "Frameworks & Styling"],
  },
  {
    title: "JavaScript",
    subtitle: "Deep Architecture",
    badge: "ES6+",
    icon: <SiJavascript />,
    tags: ["Async/Await", "DOM API", "Logic"],
    categories: ["Frontend Core"],
  },
  {
    title: "Webflow",
    subtitle: "CMS & Interactions",
    badge: "CERTIFIED",
    icon: <SiWebflow />,
    tags: ["Client-First", "Interactions", "NoCode"],
    categories: ["Frontend Core", "Tools & Workflow"],
  },
  {
    title: "Tailwind CSS",
    subtitle: "Design Systems",
    badge: "STYLING",
    icon: <SiTailwindcss />,
    tags: ["Responsive", "Tokens", "v4 Ready"],
    categories: ["Frameworks & Styling"],
  },
  {
    title: "Node & Express",
    subtitle: "RESTful Services",
    badge: "RUNTIME",
    icon: <SiExpress />,
    tags: ["API Routes", "Auth", "Middleware"],
    categories: ["Backend & Database"],
  },
  {
    title: "MongoDB & SQL",
    subtitle: "Data Schemas",
    badge: "DATABASE",
    icon: <SiMongodb />,
    tags: ["Mongoose", "Aggregation", "Modeling"],
    categories: ["Backend & Database"],
  },
  {
    title: "Figma to Code",
    subtitle: "Design Handoff",
    badge: "UI / UX",
    icon: <SiFigma />,
    tags: ["Components", "AutoLayout", "Tokens"],
    categories: ["Frontend Core", "Tools & Workflow"],
  },
  {
    title: "HTML5 & SEO",
    subtitle: "Accessible Web",
    badge: "MARKUP",
    icon: <HiCodeBracket />,
    tags: ["ARIA", "Semantics", "OpenGraph"],
    categories: ["Frontend Core"],
  },
  {
    title: "Git & CI/CD",
    subtitle: "Version Control",
    badge: "WORKFLOW",
    icon: <SiGit />,
    tags: ["GitHub", "Vercel", "Actions"],
    categories: ["Tools & Workflow"],
  },
  {
    title: "Bootstrap",
    subtitle: "Rapid Prototyping",
    badge: "UI KIT",
    icon: <SiBootstrap />,
    tags: ["Flexbox", "Grid", "Utilities"],
    categories: ["Frameworks & Styling"],
  },
  {
    title: "PostgreSQL",
    subtitle: "Structured Data",
    badge: "RELATIONAL",
    icon: <SiPostgresql />,
    tags: ["Queries", "Prisma", "Relations"],
    categories: ["Backend & Database"],
  },
];

const SkillProgress = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Stack");

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === "All Stack") return true;
    return skill.categories.includes(selectedCategory);
  });

  return (
    <section id="skills" className="py-14 sm:py-20 lg:py-24 relative">
      <Container>
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-500 bg-amber-500/10 border border-amber-500/25 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
            TECHNICAL EXPERTISE
          </div>

          {/* Heading */}
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Skills
          </h2>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            Proficiency and practical experience across core frontend technologies, frameworks, and
            modern full-stack workflows.
          </p>

          {/* Category Filter Tabs */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-gray-900/90 border border-gray-800 max-w-full sm:max-w-fit mx-auto mt-8 backdrop-blur-md"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#FD6F00] text-white shadow-md shadow-orange-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/60"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-12">
          {filteredSkills.map((skill) => (
            <SkillProgressCard
              key={skill.title}
              icon={skill.icon}
              badge={skill.badge}
              title={skill.title}
              subtitle={skill.subtitle}
              tags={skill.tags}
            />
          ))}
        </div>

        {/* Section Divider with Glowing Center Dot */}
        <div className="relative flex items-center justify-center mt-16 sm:mt-24">
          <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gray-700/80 to-transparent" />
          <div className="absolute flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FD6F00] shadow-[0_0_12px_#FD6F00] ring-4 ring-gray-900" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillProgress;
