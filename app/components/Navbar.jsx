"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import { navItems } from "./constant";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileNavigation from "./MobileNavigation";
import "aos/dist/aos.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname !== "/") {
        setActiveSection("");
        return;
      }

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (e, href) => {
    if (pathname !== "/") {
      e.preventDefault();
      router.push(`/${href}`);
      return;
    }

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

  const handleHireMe = (e) => {
    if (pathname !== "/") {
      e.preventDefault();
      router.push("/#contact");
      return;
    }

    e.preventDefault();
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/25 border-b border-gray-800/80"
          : "bg-gray-900/95"
      }`}
    >
      <Container
        className={`flex items-center justify-between px-2 sm:px-4 transition-all duration-300 ${
          isScrolled ? "py-1.5 sm:py-2" : "py-2.5 sm:py-3.5"
        }`}
      >
        <Link
          href="/"
          aria-label="Homepage"
          className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-18 lg:h-18 relative block cursor-pointer transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/mainlogo.png"
            alt="logo"
            width={50}
            height={50}
            className="object-contain w-full h-full"
          />
        </Link>

        <div className="hidden md:flex gap-2 lg:gap-2 items-center flex-1 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={`/${item.href}`}
              onClick={(e) => handleClick(e, item.href)}
              className={`block py-2 px-2 lg:px-4 text-md lg:text-md font-semibold transition-all duration-200 whitespace-nowrap ${
                activeSection === item.href
                  ? "text-amber-500 rounded-md bg-amber-500/15 border border-amber-500/30"
                  : "text-amber-600 hover:text-[#FD6F00] hover:rounded-md hover:bg-gray-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link
            href="/#contact"
            onClick={handleHireMe}
            className="bg-amber-600 px-3 lg:px-4 border-2 border-transparent transition-all duration-200 text-lg lg:text-md py-2 hover:border-2 hover:border-amber-600 hover:bg-gray-800 rounded-md cursor-pointer text-white font-semibold whitespace-nowrap"
          >
            Hire me
          </Link>
        </div>

        <div data-aos="zoom-in" className="md:hidden flex items-center">
          <MobileNavigation activeSection={activeSection} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
