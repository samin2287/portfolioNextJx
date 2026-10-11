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
      const scrollPosition = window.scrollY + 120;

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
          ? "bg-gray-950/90 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gray-800/80"
          : "bg-gray-950/95"
      }`}
    >
      <Container
        className={`flex items-center justify-between px-3 sm:px-6 transition-all duration-300 ${
          isScrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4"
        }`}
      >
        {/* Brand Logo & Name */}
        <Link
          href="/"
          aria-label="Homepage"
          className="flex items-center gap-3 shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
            <Image
              src="/mainlogo.png"
              alt="logo"
              width={40}
              height={40}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-white font-bold text-sm sm:text-base tracking-tight">
              Zubayer
            </span>
            <span className="text-white font-bold text-sm sm:text-base tracking-tight">
              Samin
            </span>
          </div>
        </Link>

        {/* Center Nav Items with Pill Active State */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1 px-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.title}
                href={`/${item.href}`}
                onClick={(e) => handleClick(e, item.href)}
                className={`px-3.5 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap rounded-full ${
                  isActive
                    ? "bg-[#FD6F00] text-white shadow-md shadow-orange-500/25"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/40"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button (Desktop - Circle removed as instructed) */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#contact"
            onClick={handleHireMe}
            className="bg-[#FD6F00] hover:bg-[#e06200] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-orange-500/25 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Navigation (Mobile / Tablet only) */}
        <div data-aos="zoom-in" className="lg:hidden flex items-center">
          <MobileNavigation activeSection={activeSection} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
