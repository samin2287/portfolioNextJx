"use client";
import React, { useState } from "react";
import Container from "./Container";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarDays,
  FaAward,
  FaCircleCheck,
  FaCertificate,
  FaLayerGroup,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import "aos/dist/aos.css";

const certifications = [
  {
    title: "Complete Web Development (MERN Stack)",
    issuer: "Creative IT Institute",
    issuerUrl: "https://www.creativeitinstitute.com/", // Replace with institution website URL
    period: "2024-2025",
    credentialId: "U NODE-25090109",
    certificateUrl: "https://certificate.citsmp.com/?certificate_id=U+NODE-25090109", // Replace with online certificate URL
    description:
      "Comprehensive mastery in modern full-stack web engineering: React 19, Next.js, Node.js, Express.js, MongoDB Atlas, RESTful API architecture, and cloud deployment.",
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    verified: true,
  },
  // {
  //   title: "Frontend Developer Professional Specialization",
  //   issuer: "Professional Development Track",
  //   issuerUrl: "#", // Replace with institution website URL
  //   period: "2023 - 2024",
  //   credentialId: "FEND-SPEC-9921",
  //   certificateUrl: "#", // Replace with online certificate URL
  //   description:
  //     "Advanced curriculum covering component design patterns, modern JavaScript (ES6+), React state architecture, UI/UX principles, and accessible web standards (WCAG).",
  //   skills: ["JavaScript ES6+", "React Hooks", "State Management", "UI/UX", "Clean Code"],
  //   verified: true,
  // },
  {
    title: "Webflow Visual Development & CMS Architecture",
    issuer: "Creative IT Institute",
    issuerUrl: "https://www.creativeitinstitute.com/", // Replace with institution website URL
    period: "2025",
    credentialId: "EWF-25020115",
    certificateUrl: "https://certificate.citsmp.com/?certificate_id=EWF-25020115", // Replace with online certificate URL
    description:
      "Certified expertise in Webflow visual canvas, Finsweet Client-First style system, dynamic CMS collections, custom JavaScript integrations, and responsive interactions.",
    skills: ["Webflow CMS", "Client-First", "Custom Interactions", "SEO Structure"],
    verified: true,
  },
  // {
  //   title: "Responsive Web Design & Architecture",
  //   issuer: "freeCodeCamp / Developer Curriculum",
  //   issuerUrl: "https://www.freecodecamp.org/", // Replace with institution website URL
  //   period: "2023",
  //   credentialId: "FCC-RWD-7712",
  //   certificateUrl: "#", // Replace with online certificate URL
  //   description:
  //     "Rigorous hands-on certification focused on mobile-first responsive layouts, modern CSS Grid, Flexbox architecture, semantic HTML5, and Core Web Vitals optimization.",
  //   skills: ["HTML5", "CSS3 Grid & Flexbox", "Mobile-First", "Core Web Vitals"],
  //   verified: true,
  // },
];

const experiences = [
  {
    role: "Frontend Developer (Next.js & React)",
    company: "Freelance & Client Projects",
    companyUrl: "#", // Replace with company/client website URL
    location: "Remote Worldwide",
    period: "2024 - Present",
    description:
      "Engineering modern, high-performance web applications using Next.js App Router, React 19, and Tailwind CSS. Integrating Sanity CMS and RESTful APIs for scalable, content-rich digital products.",
    highlights: ["Next.js & React", "Sanity CMS", "Performance Optimization", "REST APIs"],
  },
  {
    role: "Webflow & Frontend Specialist",
    company: "Agency & Startup Engagements",
    companyUrl: "#", // Replace with company website URL
    location: "Remote",
    period: "2023 - 2024",
    description:
      "Designed and developed bespoke visual websites using Webflow, Client-First styling, and custom JavaScript interactions with automated inquiry capture and Zapier webhooks.",
    highlights: ["Webflow CMS", "Client-First Style", "Custom JavaScript", "Responsive Design"],
  },
];

const education = [
  {
    degree: "Bachelor of Arts (B.A)",
    institution: "Dhaka Central University",
    institutionUrl: "https://dcu.ac.bd/", // Replace with university/institution website URL
    location: "Dhaka, Bangladesh",
    period: "2024 - Present",
    description:
      "Currently pursuing a Bachelor of Arts degree in Islamic Studies, with an academic focus on research, critical thinking, communication, Islamic history, culture, philosophy, and ethics.",
    highlights: ["Islamic Studies", "Arabic", "Islamic History", "Islamic Culture", "Islamic Philosophy", "Islamic Ethics", "Comparative Religion", "Islamic Law"],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Abu Abbas Degree College",
    institutionUrl: "https://abuabbascollege1985.edu.bd/",
    location: "Netrokona,Bangladesh",
    period: "2023",
    description:
      "Completed Higher Secondary Certificate with a focus on Science, developing a foundation in mathematics, science, and analytical thinking.",
    highlights: ["Science Group"],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const tabs = [
    { id: "certifications", label: "Certifications", count: certifications.length, icon: FaAward },
    { id: "experience", label: "Work Experience", count: experiences.length, icon: FaBriefcase },
    { id: "education", label: "Education", count: education.length, icon: FaGraduationCap },
    { id: "all", label: "View All", count: certifications.length + experiences.length + education.length, icon: FaLayerGroup },
  ];

  return (
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-duration="700"
      className="py-16 sm:py-20 lg:py-24 bg-gray-900/60"
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold mb-1">
            <FaCertificate className="text-xs" />
            <span>CREDENTIALS & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Certifications & Experience
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Verified credentials, continuous technical specialization, and practical client delivery experience.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm 
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/20 border border-amber-400/40 scale-105"
                    : "bg-gray-800/80 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/60"
                  }
                `}
              >
                <Icon className={isActive ? "text-white" : "text-amber-500"} />
                <span>{tab.label}</span>
                <span
                  className={`
                    px-2 py-0.5 rounded-full text-[11px] font-bold
                    ${isActive ? "bg-black/20 text-white" : "bg-gray-700/80 text-gray-400"}
                  `}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* CERTIFICATIONS VIEW */}
        {(activeTab === "certifications" || activeTab === "all") && (
          <div className="mb-14">
            {activeTab === "all" && (
              <div className="flex items-center gap-3 pb-3 mb-6 border-b border-gray-800">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-base">
                  <FaAward />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Verified Certifications
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {certifications.map((cert, index) => (
                <article
                  key={index}
                  className="
                    group relative flex flex-col justify-between 
                    p-6 sm:p-7 rounded-2xl 
                    bg-gradient-to-br from-gray-800/90 via-gray-800/70 to-gray-900 
                    border border-gray-700/60 hover:border-amber-500/50 
                    shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 
                    hover:-translate-y-1.5 transition-all duration-300
                  "
                >
                  {/* Subtle top ambient glow */}
                  <div className="absolute -top-3 right-6 h-6 w-16 rounded-full bg-amber-500/20 blur-lg group-hover:bg-amber-500/40 transition-colors pointer-events-none" />

                  <div>
                    {/* Top Row: Issuer & Verified Seal */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg group-hover:scale-110 transition-transform">
                          <FaAward />
                        </div>
                        <div>
                          {cert.issuerUrl ? (
                            <a
                              href={cert.issuerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 hover:underline transition-colors group/issuer"
                              title={`Visit ${cert.issuer}`}
                            >
                              <span>{cert.issuer}</span>
                              <FaArrowUpRightFromSquare className="text-[10px] opacity-75 group-hover/issuer:opacity-100 group-hover/issuer:translate-x-0.5 group-hover/issuer:-translate-y-0.5 transition-all" />
                            </a>
                          ) : (
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                              {cert.issuer}
                            </span>
                          )}
                          <span className="block text-[11px] text-gray-400">
                            Year: {cert.period}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        <FaCircleCheck className="text-[11px]" />
                        <span>Verified</span>
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5 mb-5">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills & Credential ID */}
                  <div className="pt-4 border-t border-gray-700/50 mt-auto flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700/60 group-hover:border-amber-500/30 group-hover:text-amber-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                      <span>Credential ID: <span className="font-mono text-gray-300">{cert.credentialId}</span></span>
                      {cert.certificateUrl ? (
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-amber-400 font-medium hover:text-amber-300 hover:underline transition-colors group/cert"
                          title="View Verified Certificate"
                        >
                          <span>Verified Certificate</span>
                          <FaArrowUpRightFromSquare className="text-[10px] opacity-80 group-hover/cert:opacity-100 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-all" />
                        </a>
                      ) : (
                        <span className="text-amber-400/80 font-medium">Verified Certificate</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* WORK EXPERIENCE VIEW */}
        {(activeTab === "experience" || activeTab === "all") && (
          <div className="mb-14">
            {activeTab === "all" && (
              <div className="flex items-center gap-3 pb-3 mb-6 border-b border-gray-800">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-base">
                  <FaBriefcase />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Professional Experience
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="
                    relative p-6 sm:p-7 rounded-2xl 
                    bg-gradient-to-b from-gray-800/90 to-gray-900 
                    border border-gray-700/60 hover:border-amber-500/40 
                    shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 
                    transition-all duration-300
                  "
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      <FaCalendarDays className="text-[11px]" />
                      {exp.period}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-400">
                      {exp.location}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h4>
                  {exp.companyUrl && exp.companyUrl !== "#" ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-amber-400 hover:text-amber-300 hover:underline font-semibold mb-3 inline-flex items-center gap-1.5 transition-colors group/company"
                    >
                      <span>{exp.company}</span>
                      <FaArrowUpRightFromSquare className="text-[10px] opacity-75 group-hover/company:opacity-100 group-hover/company:translate-x-0.5 group-hover/company:-translate-y-0.5 transition-all" />
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-amber-400 font-semibold mb-3">
                      {exp.company}
                    </p>
                  )}

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-gray-700/50">
                    {exp.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EDUCATION VIEW */}
        {(activeTab === "education" || activeTab === "all") && (
          <div>
            {activeTab === "all" && (
              <div className="flex items-center gap-3 pb-3 mb-6 border-b border-gray-800">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 text-base">
                  <FaGraduationCap />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Academic Education
                </h3>
              </div>
            )}

            <div className={education.length > 1 ? "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" : "max-w-2xl mx-auto"}>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="
                    flex flex-col justify-between
                    p-6 sm:p-7 rounded-2xl 
                    bg-gradient-to-b from-gray-800/90 to-gray-900 
                    border border-gray-700/60 hover:border-amber-500/40 
                    shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 
                    hover:-translate-y-1.5 transition-all duration-300
                  "
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        <FaCalendarDays className="text-[11px]" />
                        {edu.period}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-gray-400">
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    {edu.institutionUrl && edu.institutionUrl !== "#" ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-amber-400 hover:text-amber-300 hover:underline font-semibold mb-3 inline-flex items-center gap-1.5 transition-colors group/edu"
                      >
                        <span>{edu.institution}</span>
                        <FaArrowUpRightFromSquare className="text-[10px] opacity-75 group-hover/edu:opacity-100 group-hover/edu:translate-x-0.5 group-hover/edu:-translate-y-0.5 transition-all" />
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-amber-400 font-semibold mb-3">
                        {edu.institution}
                      </p>
                    )}

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {edu.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-gray-700/50 mt-auto">
                    {(Array.isArray(edu.highlights) ? edu.highlights : edu.highlights ? [edu.highlights] : []).map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Experience;
