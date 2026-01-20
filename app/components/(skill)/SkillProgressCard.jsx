"use client";

import React, { useEffect, useState } from "react";

const SkillProgressCard = ({ icon, percentage, title }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < percentage) return prev + 1;
        clearInterval(timer);
        return percentage;
      });
    }, 15);
    return () => clearInterval(timer);
  }, [percentage]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-full flex flex-col items-center justify-start gap-2 py-6 text-center">
      {/* Circle */}
      <div className="relative w-24 h-24">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#333"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#f97316"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-3xl text-white">
          {icon}
        </div>
      </div>

      {/* Percentage */}
      <p className="text-orange-500 font-semibold text-base sm:text-lg">
        {progress}%
      </p>

      {/* Title */}
      <p className="text-gray-300 text-sm sm:text-lg">{title}</p>
    </div>
  );
};

export default SkillProgressCard;
