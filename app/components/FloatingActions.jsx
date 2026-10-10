"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa6";

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi Zubayer, I would like to discuss a project."
  );
  const whatsappUrl = `https://wa.me/8801640916341?text=${whatsappMessage}`;

  return (
    <>
      {/* Left Side: WhatsApp Floating Button */}
      <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_8px_25px_rgba(16,185,129,0.45)] border border-emerald-300/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Subtle radar ripple / ping */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping -z-10 pointer-events-none" />

          {/* WhatsApp Icon */}
          <FaWhatsapp className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110" />

          {/* Floating Tooltip */}
          <span className="pointer-events-none absolute -top-10 left-0 sm:left-1/2 sm:-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900/95 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap border border-emerald-500/30">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Right Side: Scroll to Top Floating Button */}
      <div
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gray-900/90 hover:bg-amber-500 text-amber-400 hover:text-gray-950 border border-amber-500/40 hover:border-amber-400 shadow-[0_8px_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Arrow Up Icon with subtle hover slide */}
          <FaArrowUp className="text-lg sm:text-xl transition-transform duration-300 group-hover:-translate-y-1" />

          {/* Floating Tooltip */}
          <span className="pointer-events-none absolute -top-10 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900/95 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap border border-amber-500/30">
            Back to Top
          </span>
        </button>
      </div>
    </>
  );
};

export default FloatingActions;
