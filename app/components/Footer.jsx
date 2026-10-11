"use client";

import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = (e) => {
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
    <footer className="w-full border-t border-gray-800/80 bg-gray-950/80 py-6 sm:py-7">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        {/* Left: Brand Icon + Copyright */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="shrink-0 transition-transform duration-200 hover:scale-110"
          >
            <Image
              src="/mainlogo.png"
              alt="logo"
              width={24}
              height={24}
              className="object-contain w-5 h-5 sm:w-6 sm:h-6"
            />
          </Link>
          <p className="text-gray-400 font-mono tracking-tight text-center sm:text-left">
            © {new Date().getFullYear()} Zubayer Mahmud Samin. All rights reserved.
          </p>
        </div>

        {/* Right: Tagline + Contact Link */}
        <div className="flex items-center gap-4 sm:gap-6 font-mono">
          <span className="text-[#FD6F00] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
            CRAFTING DIGITAL EXPERIENCES
          </span>
          <Link
            href="/#contact"
            onClick={handleContactClick}
            className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
