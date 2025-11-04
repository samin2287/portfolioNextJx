"use client";
import { useState } from "react";
import Container from "../Container";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "../constant"; // all projects এখানে থাকবে

const categories = ["all", "web", "app", "design", "branding"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter projects dynamically
  const allProjects = portfolioData.all; // সব projects
  const projects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio">
      <Container>
        <div className="py-16 px-4 md:px-12 bg-gray-900">
        <h2 className="text-6xl font-bold text-center mb-20 text-white">
          My Portfolio
        </h2>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 cursor-pointer rounded-md font-semibold text-sm md:text-base transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-500 hover:text-white hover:shadow-md"
              }`}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <PortfolioCard projects={projects} />
        </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
