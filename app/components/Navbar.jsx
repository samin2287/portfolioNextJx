"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import { navItems } from "./constant";
import Link from "next/link";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";

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
    <nav className="mt-5 relative z-50">
      <Container className="flex items-center justify-between py-1">
        <Image src="/main-logo.png" alt="logo" width={100} height={100} />

        <div className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block py-2 px-4 text-md text-amber-600 hover:text-[#FD6F00] hover:rounded-md hover:bg-gray-700 font-semibold transition-all duration-200 ${
                activeSection === item.href
                  ? "text-[#FD6F00] rounded-md bg-gray-300"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <button className="hidden md:block bg-amber-600 px-4 border-2 border-transparent transition-all duration-200 text-md py-2 hover:border-2 hover:border-amber-600 hover:bg-gray-800 rounded-md cursor-pointer text-white font-semibold">
          Hire me
        </button>

        <div className="md:hidden">
          <MobileNavigation activeSection={activeSection} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
