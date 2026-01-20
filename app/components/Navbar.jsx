"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import { navItems } from "./constant";
import Link from "next/link";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";
import "aos/dist/aos.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="mt-3 sm:mt-5 relative z-50 top-0 left-0 w-full bg-gray-900">
      <Container className="flex items-center justify-between py-2 sm:py-3 px-2 sm:px-4">
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 relative">
          <Image
            src="/mainlogo.png"
            alt="logo"
            width={50}
            height={50}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="hidden md:flex gap-2 lg:gap-2 items-center flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block py-2 px-2 lg:px-4 text-md lg:text-md text-amber-600 hover:text-[#FD6F00] hover:rounded-md hover:bg-gray-700 font-semibold transition-all duration-200 whitespace-nowrap ${
                activeSection === item.href
                  ? "text-[#FD6F00] rounded-md bg-gray-300"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <button
            onClick={() => (window.location.href = "#contact")}
            className="bg-amber-600 px-3 lg:px-4 border-2 border-transparent transition-all duration-200 text-lg lg:text-md py-2 hover:border-2 hover:border-amber-600 hover:bg-gray-800 rounded-md cursor-pointer text-white font-semibold whitespace-nowrap"
          >
            Hire me
          </button>
        </div>

        <div data-aos="zoom-in" className="md:hidden flex items-center">
          <MobileNavigation activeSection={activeSection} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
