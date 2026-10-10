"use client";

import React, { useEffect, useState, useRef } from "react";

const SkillProgressCard = ({ icon, percentage, title }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    if (typeof IntersectionObserver === "undefined") {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const stepTime = Math.max(12, Math.floor(1000 / (percentage || 1)));

    const timer = setInterval(() => {
      current += 1;
      if (current >= percentage) {
        setProgress(percentage);
        clearInterval(timer);
      } else {
        setProgress(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, percentage]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={cardRef}
      className="w-full flex flex-col items-center justify-start gap-2 py-6 text-center">
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
