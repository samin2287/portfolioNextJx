"use client";
import { useState, useEffect } from "react";
import Container from "../Container";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "../constant";
import { client } from "../../../sanity/lib/client";
import { projectsQuery } from "../../../sanity/lib/queries";
import { urlForImage } from "../../../sanity/lib/image";

const categories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend / API" },
  { id: "frontend", label: "Frontend" },
  { id: "webflow", label: "Webflow" },
];

const formatProjects = (rawProjects) => {
  return rawProjects.map((p) => ({
    ...p,
    id: p.slug || p._id,
    image: p.image?.asset
      ? urlForImage(p.image)?.width(800).url()
      : typeof p.image === "string"
      ? p.image
      : "/webflow-project1.png",
    categoryLabel:
      p.categoryLabel ||
      (p.category === "fullstack"
        ? "Full Stack"
        : p.category === "backend"
        ? "Backend / API"
        : p.category === "frontend"
        ? "Frontend"
        : p.category === "webflow"
        ? "Webflow"
        : p.category),
  }));
};

const Portfolio = ({ initialProjects = [] }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [allProjects, setAllProjects] = useState(() => {
    if (Array.isArray(initialProjects) && initialProjects.length > 0) {
      return formatProjects(initialProjects);
    }
    return portfolioData.all;
  });

  useEffect(() => {
    if (initialProjects && initialProjects.length > 0) return;

    const fetchProjects = async () => {
      try {
        const sanityProjects = await client.fetch(projectsQuery);
        if (sanityProjects && sanityProjects.length > 0) {
          setAllProjects(formatProjects(sanityProjects));
        }
      } catch (err) {
        console.warn("Could not fetch Sanity projects on client, using fallback:", err);
      }
    };
    fetchProjects();
  }, [initialProjects]);

  const projects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900 border-t border-gray-800/80">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">
            Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-2">
            My Portfolio
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            A curated collection of full-stack web applications, scalable backend APIs, and modern responsive frontends.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-2.5 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? allProjects.length
                : allProjects.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 cursor-pointer rounded-full font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === cat.id
                      ? "bg-amber-700 text-white"
                      : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.length > 0 ? (
            <PortfolioCard projects={projects} />
          ) : (
            <div className="col-span-full py-16 text-center text-gray-400">
              <p className="text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
