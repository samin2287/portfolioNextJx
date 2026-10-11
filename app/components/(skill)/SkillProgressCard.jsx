"use client";

import React from "react";

const SkillProgressCard = ({ icon, badge, title, subtitle, tags }) => {
  return (
    <div
      data-aos="fade-up"
      className="group relative flex flex-col justify-between rounded-2xl border border-gray-800/80 bg-[#121622]/80 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:bg-[#151928] hover:shadow-xl hover:shadow-black/60"
    >
      <div>
        {/* Top: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl sm:text-3xl text-[#FD6F00] transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-[10px] sm:text-xs font-semibold font-mono tracking-wider uppercase px-2 py-0.5 rounded text-amber-500 bg-amber-500/10 border border-amber-500/25">
            {badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-400 font-mono mt-0.5">
          {subtitle}
        </p>
      </div>

      {/* Bottom Tags */}
      <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-3 border-t border-gray-800/80">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-gray-400 bg-gray-900/90 px-2 py-0.5 rounded border border-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillProgressCard;
