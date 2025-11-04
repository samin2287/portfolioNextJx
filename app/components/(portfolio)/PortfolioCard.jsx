import React from "react";
import CardSideBar from "./CardSideBar";

const PortfolioCard = ({ projects }) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300">
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 capitalize">
              {project.category}
            </p>
          </div>

          {/* Sidebar Overlay */}
          <CardSideBar
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      ))}
    </>
  );
};

export default PortfolioCard;
