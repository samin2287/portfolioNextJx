import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const PortfolioCard = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative bg-gray-800/80 border border-gray-700/60 hover:border-amber-500/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
        >
          {/* Top Image & Floating Badges */}
          <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-gray-950">
            <Link href={`/projects/${project.id}`} className="block w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </Link>

            {/* Category Badge */}
            <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md bg-gray-900/90 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow">
              {project.categoryLabel || project.category}
            </span>

            {/* Featured Badge */}
            {project.featured && (
              <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-md bg-amber-600 text-white backdrop-blur-md shadow-md">
                Featured
              </span>
            )}
          </div>

          {/* Card Body */}
          <div className="p-5 flex-1 flex flex-col">
            <Link
              href={`/projects/${project.id}`}
              className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-500 transition-colors line-clamp-1"
            >
              {project.title}
            </Link>

            <p className="text-gray-400 text-sm mt-2 line-clamp-2 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-700/50">
              {project.technologies?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded bg-gray-900/90 text-gray-300 border border-gray-700/70"
                >
                  {tech}
                </span>
              ))}
              {project.technologies && project.technologies.length > 4 && (
                <span className="text-xs px-2 py-0.5 rounded bg-gray-900/90 text-amber-400 border border-gray-700/70 font-medium">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Card Footer Actions */}
          <div className="px-5 pb-5 pt-3 border-t border-gray-700/40 flex items-center justify-between gap-3 bg-gray-900/50">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
            >
              <span>Case Study</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex items-center gap-2">
              {/* GitHub Button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                title="View Source Code"
                className="p-2 text-gray-400 hover:text-white bg-gray-900/90 hover:bg-gray-700 border border-gray-700/60 rounded-lg transition-colors"
              >
                <FaGithub className="text-sm" />
              </a>

              {/* Live Preview Button */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} Live Preview`}
                title="Live Preview"
                className="p-2 text-amber-400 hover:text-white bg-amber-500/10 hover:bg-amber-600 border border-amber-500/20 rounded-lg transition-all"
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioCard;
