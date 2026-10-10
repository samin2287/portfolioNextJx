import React from "react";

const ServiceCard = ({ Icon, title, description, tags = [], className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`
        group relative flex flex-col items-center 
        bg-gradient-to-b from-gray-800 to-gray-900 
        p-6 sm:p-7 md:p-8 
        cursor-pointer rounded-2xl 
        border border-gray-700/60 hover:border-amber-500/40
        shadow-lg hover:shadow-xl hover:shadow-amber-500/10
        hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-300 ease-out 
        text-center w-full h-full
        ${className}
      `}
    >
      {/* Icon Wrapper */}
      {Icon && (
        <div
          className="
            mb-4 flex items-center justify-center 
            w-16 h-16 sm:w-20 sm:h-20 
            rounded-2xl bg-amber-500/10 
            border border-amber-500/20
            group-hover:bg-amber-500/20 group-hover:scale-110
            transition-all duration-300
          ">
          <Icon className="text-amber-500 text-3xl sm:text-4xl" />
        </div>
      )}

      {/* Title */}
      <h3
        className="
          text-amber-500 
          text-lg sm:text-xl md:text-2xl 
          font-semibold mb-2.5
          group-hover:text-amber-400
          transition-colors duration-300
        ">
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          text-gray-400 
          text-xs sm:text-sm md:text-base 
          leading-relaxed 
          mb-4 flex-grow
        ">
        {description}
      </p>

      {/* Tags / Skills pills */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 mt-auto border-t border-gray-700/40 w-full">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/60 group-hover:border-amber-500/30 group-hover:text-amber-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Glow Effect */}
      <div
        className="
          absolute inset-0 rounded-2xl 
          bg-amber-500/5 opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none
        "
      />
    </div>
  );
};

export default ServiceCard;
