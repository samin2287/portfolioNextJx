import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "../../components/Container";
import { portfolioData } from "../../components/constant";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaLayerGroup,
  FaClock,
  FaUserCheck,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";

async function getProject(id) {
  const local = portfolioData.all.find(
    (p) => p.id === id || p.slug === id || String(p.numericId) === id
  );
  if (local) return local;

  try {
    const sanityProject = await client.fetch(
      groq`*[_type == "project" && (slug.current == $id || _id == $id)][0]`,
      { id }
    );
    if (sanityProject) {
      const rawCaseStudy = sanityProject.caseStudy || {};

      let keyFeaturesList = [];
      if (Array.isArray(sanityProject.keyFeatures)) {
        keyFeaturesList = sanityProject.keyFeatures;
      } else if (typeof sanityProject.keyFeatures === "string") {
        keyFeaturesList = sanityProject.keyFeatures
          .split("\n")
          .map((s) => s.trim().replace(/^[-*•]\s*/, ""))
          .filter(Boolean);
      } else if (rawCaseStudy.keyFeatures) {
        keyFeaturesList = rawCaseStudy.keyFeatures;
      }

      let challengesList = [];
      if (Array.isArray(sanityProject.challenges) && sanityProject.challenges.length > 0) {
        challengesList = sanityProject.challenges;
      } else if (rawCaseStudy.challenges) {
        challengesList = rawCaseStudy.challenges;
      } else {
        if (sanityProject.challenge1Problem) {
          challengesList.push({
            problem: sanityProject.challenge1Problem,
            solution: sanityProject.challenge1Solution || "",
          });
        }
        if (sanityProject.challenge2Problem) {
          challengesList.push({
            problem: sanityProject.challenge2Problem,
            solution: sanityProject.challenge2Solution || "",
          });
        }
      }

      let metricsList = [];
      if (Array.isArray(sanityProject.metrics) && sanityProject.metrics.length > 0) {
        metricsList = sanityProject.metrics;
      } else if (rawCaseStudy.metrics) {
        metricsList = rawCaseStudy.metrics;
      } else {
        if (sanityProject.metric1Label && sanityProject.metric1Value) {
          metricsList.push({
            label: sanityProject.metric1Label,
            value: sanityProject.metric1Value,
          });
        }
        if (sanityProject.metric2Label && sanityProject.metric2Value) {
          metricsList.push({
            label: sanityProject.metric2Label,
            value: sanityProject.metric2Value,
          });
        }
        if (sanityProject.metric3Label && sanityProject.metric3Value) {
          metricsList.push({
            label: sanityProject.metric3Label,
            value: sanityProject.metric3Value,
          });
        }
      }

      const caseStudy = {
        role: sanityProject.role || rawCaseStudy.role || "Lead Developer",
        duration: sanityProject.duration || rawCaseStudy.duration || "Completed",
        overview: sanityProject.overview || rawCaseStudy.overview || sanityProject.description,
        keyFeatures: keyFeaturesList,
        techStack: {
          frontend: sanityProject.frontendTech || rawCaseStudy.techStack?.frontend || [],
          backend: sanityProject.backendTech || rawCaseStudy.techStack?.backend || [],
          database: sanityProject.databaseTech || rawCaseStudy.techStack?.database || [],
          tools: sanityProject.toolsTech || rawCaseStudy.techStack?.tools || [],
        },
        challenges: challengesList,
        metrics: metricsList,
      };

      return {
        ...sanityProject,
        id: sanityProject.slug?.current || sanityProject._id,
        image: sanityProject.image?.asset
          ? urlForImage(sanityProject.image)?.url()
          : typeof sanityProject.image === "string"
          ? sanityProject.image
          : "/webflow-project1.png",
        categoryLabel:
          sanityProject.categoryLabel ||
          (sanityProject.category === "fullstack"
            ? "Full Stack"
            : sanityProject.category === "backend"
            ? "Backend / API"
            : sanityProject.category === "frontend"
            ? "Frontend"
            : sanityProject.category === "webflow"
            ? "Webflow"
            : sanityProject.category),
        caseStudy,
      };
    }
  } catch (err) {
    console.warn("Could not fetch project from Sanity:", err);
  }

  return null;
}

export function generateStaticParams() {
  return portfolioData.all.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;
  const otherProjects = portfolioData.all
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 sm:py-16">
      <Container>
        {/* Top Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 bg-gray-800/80 hover:bg-gray-800 border border-gray-700/60 px-4 py-2 rounded-lg transition-all"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-md bg-amber-600/20 text-amber-400 border border-amber-500/30">
              {project.categoryLabel || project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-xs font-bold rounded-md bg-amber-600 text-white shadow">
                Featured Project
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
            {project.description}
          </p>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold transition-all shadow-lg shadow-amber-600/30"
            >
              <FaExternalLinkAlt className="text-sm" />
              <span>Live Preview</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 hover:text-white font-semibold transition-all"
            >
              <FaGithub className="text-lg" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>

        {/* Showcase Image Banner */}
        <div className="my-10 relative w-full h-[320px] sm:h-[460px] md:h-[560px] rounded-2xl overflow-hidden border border-gray-700/80 shadow-2xl bg-gray-950">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-3 text-amber-500 mb-2">
              <FaUserCheck className="text-lg" />
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Role
              </span>
            </div>
            <p className="font-bold text-white text-sm sm:text-base">
              {caseStudy?.role || "Lead Developer"}
            </p>
          </div>

          <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-3 text-amber-500 mb-2">
              <FaClock className="text-lg" />
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Timeline
              </span>
            </div>
            <p className="font-bold text-white text-sm sm:text-base">
              {caseStudy?.duration || "Completed"}
            </p>
          </div>

          <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-3 text-amber-500 mb-2">
              <FaLayerGroup className="text-lg" />
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Category
              </span>
            </div>
            <p className="font-bold text-white text-sm sm:text-base">
              {project.categoryLabel || project.category || "Project"}
            </p>
          </div>

          <div className="bg-gray-800/60 border border-gray-700/60 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <FaCheckCircle className="text-lg" />
              <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                Status
              </span>
            </div>
            <p className="font-bold text-emerald-400 text-sm sm:text-base">
              Live & Deployed
            </p>
          </div>
        </div>

        {/* Highlight Metrics (if available) */}
        {caseStudy?.metrics && caseStudy.metrics.length > 0 && (
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-gray-800/80 via-gray-850 to-gray-800/80 border border-amber-500/20">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Project Performance & Impact
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-amber-500 pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Case Study Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <section className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-7 bg-amber-500 rounded-full inline-block" />
                Project Overview
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {caseStudy?.overview || project.description}
              </p>
            </section>

            {/* Key Features */}
            {caseStudy?.keyFeatures && caseStudy.keyFeatures.length > 0 && (
              <section className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-7 bg-amber-500 rounded-full inline-block" />
                  Key Features & Capabilities
                </h2>
                <ul className="space-y-4">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-gray-300 text-base leading-relaxed"
                    >
                      <FaCheckCircle className="text-amber-500 mt-1 shrink-0 text-lg" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Engineering Challenges & Solutions */}
            {caseStudy?.challenges && caseStudy.challenges.length > 0 && (
              <section className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-7 bg-amber-500 rounded-full inline-block" />
                  Technical Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {caseStudy.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-gray-900/80 border border-gray-700/60"
                    >
                      <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base mb-2">
                        <FaLightbulb className="shrink-0" />
                        <span>Challenge: {item.problem}</span>
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-6 border-l-2 border-amber-500/40 mt-3">
                        <strong className="text-white">Solution: </strong>
                        {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Tech Stack & Meta Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Breakdown Card */}
            <div className="bg-gray-800/60 border border-gray-700/60 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2.5">
                <FaTools className="text-amber-500" />
                <span>Technologies Used</span>
              </h3>

              {caseStudy?.techStack ? (
                <div className="space-y-5">
                  {Object.entries(caseStudy.techStack).map(([category, list]) => (
                    <div key={category}>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-2 capitalize">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {list.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-gray-900 text-amber-300 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-md bg-gray-900 text-amber-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Links Card */}
            <div className="bg-gray-800/60 border border-gray-700/60 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-all shadow"
                >
                  <span className="flex items-center gap-2">
                    <FaExternalLinkAlt className="text-xs" />
                    Visit Live Application
                  </span>
                  <span>→</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-gray-900 hover:bg-gray-700 border border-gray-700 text-gray-200 hover:text-white font-medium text-sm transition-all"
                >
                  <span className="flex items-center gap-2">
                    <FaGithub className="text-base" />
                    Browse GitHub Repo
                  </span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-amber-600/20 to-gray-800/60 border border-amber-500/30 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-bold text-white mb-2">
                Have a project in mind?
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Let&apos;s build something high-performing, scalable, and visually engaging.
              </p>
              <Link
                href="/#contact"
                className="inline-block w-full py-2.5 px-4 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all shadow"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* More Projects Section */}
        {otherProjects.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">
                Explore More Projects
              </h3>
              <Link
                href="/#portfolio"
                className="text-amber-500 hover:text-amber-400 font-semibold text-sm flex items-center gap-1"
              >
                <span>View All</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.id}`}
                  className="group bg-gray-800/60 border border-gray-700/60 hover:border-amber-500/50 rounded-xl overflow-hidden transition-all p-4 flex flex-col justify-between"
                >
                  <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3 bg-gray-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-amber-400 font-medium">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-500 transition-colors line-clamp-1 mt-1">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
