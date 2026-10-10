import React from "react";
import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { FaAward, FaCheckCircle, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiWebflow,
} from "react-icons/si";

const floatingIcons = [
  {
    name: "JavaScript",
    icon: (
      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#F7DF1E] rounded-md flex items-end justify-end p-0.5 select-none shadow-xs">
        <span className="text-black font-extrabold text-[11px] sm:text-[12px] leading-none font-sans tracking-tight">
          JS
        </span>
      </div>
    ),
    className: "top-[5%] -left-3 sm:-left-5 md:-left-7",
    animation: "animate-float-slow",
    delay: "0s",
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-[#1572B6] text-2xl sm:text-3xl" />,
    className: "-top-4 left-[20%] sm:-top-5 sm:left-[22%] md:-top-6 md:left-[24%]",
    animation: "animate-float-medium",
    delay: "0.8s",
  },
  {
    name: "React.js",
    icon: (
      <SiReact className="text-[#00D8FF] text-2xl sm:text-3xl animate-[spin_25s_linear_infinite]" />
    ),
    className: "-top-3 right-[12%] sm:-top-4 sm:right-[15%] md:-top-5 md:right-[18%]",
    animation: "animate-float-fast",
    delay: "0.4s",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4] text-2xl sm:text-3xl" />,
    className: "top-[14%] -right-3 sm:-right-5 md:-right-7",
    animation: "animate-float-reverse",
    delay: "1.4s",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#4169E1] text-2xl sm:text-3xl" />,
    className: "top-[26%] -left-4 sm:-left-6 md:-left-8",
    animation: "animate-float-medium",
    delay: "1.0s",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-2xl sm:text-3xl" />,
    className: "top-[34%] -right-4 sm:-right-6 md:-right-8",
    animation: "animate-float-medium",
    delay: "0.9s",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#339933] text-2xl sm:text-3xl" />,
    className: "top-[48%] -left-2 sm:-left-4 md:-left-5",
    animation: "animate-float-slow",
    delay: "0.6s",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248] text-2xl sm:text-3xl" />,
    className: "top-[54%] -right-3 sm:-right-5 md:-right-7",
    animation: "animate-float-slow",
    delay: "1.3s",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-[#E34F26] text-2xl sm:text-3xl" />,
    className: "bottom-[12%] -left-1 sm:-left-3 md:-left-4",
    animation: "animate-float-reverse",
    delay: "1.7s",
  },
  {
    name: "Webflow",
    icon: <SiWebflow className="text-[#146EF5] text-2xl sm:text-3xl" />,
    className: "bottom-[16%] -right-2 sm:-right-4 md:-right-5",
    animation: "animate-float-medium",
    delay: "0.5s",
  },
];

const stats = [
  {
    icon: FaLaptopCode,
    value: "2+",
    label: "Years of Experience",
  },
  {
    icon: FaRocket,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: FaCheckCircle,
    value: "100%",
    label: "Client Commitment",
  },
  {
    icon: FaAward,
    value: "Clean",
    label: "Code & Architecture",
  },
];

const AboutMe = () => {
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="700" className="py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
          About Me
        </h2>

        <p className="text-gray-400 text-center leading-6 py-4 sm:py-5 text-sm sm:text-base max-w-2xl mx-auto">
          Creating modern, responsive, and engaging web experiences that are visually appealing, user-friendly, and built for real-world impact.
        </p>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center mt-10 gap-10 lg:gap-14">
          {/* Profile Image & Floating Tech Badges */}
          <div className="relative flex justify-center items-center w-full lg:w-5/12 px-6 sm:px-8 py-6">
            <div className="relative group max-w-full">
              {/* Soft organic ambient glow behind image (matching reference image) */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-orange-500/20 rounded-[45%_55%_65%_35%/50%_40%_60%_50%] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Decorative curved contour lines inspired by the reference image */}
              <svg
                className="absolute -inset-6 sm:-inset-10 w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] h-[calc(100%+3rem)] sm:h-[calc(100%+5rem)] pointer-events-none select-none opacity-40"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 20 220 C 110 260, 160 310, 200 370 C 240 430, 310 470, 480 440"
                  stroke="url(#contourGrad1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 30 190 C 120 230, 170 290, 210 370"
                  stroke="url(#contourGrad2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 170 460 L 490 460"
                  stroke="url(#contourGrad1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="contourGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="contourGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fb923c" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Main Profile Image Frame */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-gray-800/80 to-gray-950 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Zubayer Mahmud Samin"
                  height={600}
                  width={600}
                  className="w-64 sm:w-76 md:w-84 lg:w-[24rem] h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Subtle bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Tech Badges (randomly over and around the image) */}
              {floatingIcons.map((tech) => (
                <div
                  key={tech.name}
                  className={`group/badge absolute ${tech.className} ${tech.animation} z-20 cursor-pointer`}
                  style={{ animationDelay: tech.delay }}
                >
                  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-white/95 text-gray-900 shadow-[0_10px_25px_-4px_rgba(0,0,0,0.35),0_4px_6px_-2px_rgba(0,0,0,0.2)] border border-white/90 backdrop-blur-md transition-all duration-300 group-hover/badge:scale-125 group-hover/badge:shadow-amber-500/30 group-hover/badge:shadow-xl">
                    {tech.icon}
                  </div>
                  <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/badge:opacity-100 transition-all duration-200 bg-gray-900/95 text-amber-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-lg whitespace-nowrap border border-amber-500/30 z-30">
                    {tech.name}
                  </span>
                </div>
              ))}

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 bg-gray-900/95 border border-amber-500/40 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl backdrop-blur-md flex items-center gap-2 z-25 whitespace-nowrap">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  Available for Work
                </span>
              </div>
            </div>
          </div>

          {/* Text Content & Stats */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Crafting Scalable Web Applications & Interactive Digital Experiences
            </h3>

            <div className="space-y-3.5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a dedicated frontend developer specializing in building fast, scalable, and responsive web applications with <span className="text-amber-400 font-semibold">React.js, Next.js, and Tailwind CSS</span>. I also build clean visual websites and CMS solutions using <span className="text-amber-400 font-semibold">Webflow</span>.
              </p>
              <p className="text-gray-400">
                My workflow centers around component-based architecture, seamless REST API & Sanity CMS integration, performance optimization, and translating Figma designs into pixel-perfect, accessible user interfaces.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-gray-800">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-3 sm:p-4 rounded-xl bg-gray-800/40 border border-gray-700/40 text-center hover:border-amber-500/30 transition-colors"
                  >
                    <Icon className="text-amber-500 text-lg sm:text-xl mx-auto mb-1.5" />
                    <span className="block text-xl sm:text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
              <Button
                href="https://drive.google.com/file/d/1PTYnuO-ks4EVe_wdok-n0k4g8ZeI2ev6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Zubayer Mahmud Samin's CV"
                className="mt-0"
              >
                Download CV
              </Button>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center text-sm sm:text-md md:text-lg font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-md border border-amber-500/40 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
