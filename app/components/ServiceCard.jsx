import React from "react";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div
      className="
        group relative flex flex-col items-center 
        bg-gradient-to-b from-gray-800 to-gray-900 
        p-5 sm:p-6 md:p-8 lg:p-10 
        cursor-pointer rounded-2xl 
        border border-gray-700/50
        shadow-lg hover:shadow-amber-500/20
        hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-300 ease-out 
        text-center
      ">
      {/* Icon Wrapper */}
      {Icon && (
        <div
          className="
            mb-4 flex items-center justify-center 
            w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 
            rounded-full bg-amber-500/10 
            group-hover:bg-amber-500/20 
            transition-colors duration-300
          ">
          <Icon className="text-amber-500 text-3xl sm:text-4xl md:text-5xl" />
        </div>
      )}

      {/* Title */}
      <h2
        className="
          text-amber-500 
          text-lg sm:text-xl md:text-2xl lg:text-3xl 
          font-semibold mb-2
          group-hover:text-amber-400
          transition-colors duration-300
        ">
        {title}
      </h2>

      {/* Description */}
      <p
        className="
          text-gray-400 
          text-xs sm:text-sm md:text-base 
          leading-relaxed 
          max-w-xs sm:max-w-sm md:max-w-md
        ">
        {description}
      </p>

      {/* Glow Effect */}
      <div
        className="
          absolute inset-0 rounded-2xl 
          bg-amber-500/5 opacity-0 
          group-hover:opacity-100 
          transition-opacity duration-300
        "
      />
    </div>
  );
};

export default ServiceCard;
