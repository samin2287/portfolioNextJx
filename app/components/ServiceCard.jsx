import React from "react";

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-5 sm:p-6 md:p-8 lg:p-10 cursor-pointer rounded-2xl hover:scale-105 transition-transform duration-300 text-center">
      {Icon && (
        <Icon className="text-amber-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3" />
      )}

      <h2 className="text-amber-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-6 max-w-xs sm:max-w-sm md:max-w-md">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
