import React from "react";
import Container from "./Container";
import Image from "next/image";
import { navItems } from "./constant";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  // Configurable email - replace with your actual email address
  const contactEmail = "zubayersamin210@gmail.com";

  return (
    <Container className="flex flex-col items-center justify-between py-1 gap-10">
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/mainlogo.png"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={`/${item.href}`}
            className="px-4 py-2 text-sm sm:text-base text-white font-semibold 
                 rounded-md transition-all duration-200 
                 hover:text-[#FD6F00] hover:bg-gray-700 cursor-pointer"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <SocialLink />
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 
                border-b border-gray-700 pt-2 pb-10 w-full"
      >
        {/* Email */}
        <a
          href={`mailto:${contactEmail}`}
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center hover:text-amber-500 transition-colors"
        >
          <MdOutlineEmail className="text-gray-400 text-lg sm:text-xl" />
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left leading-6">
            {contactEmail}
          </p>
        </a>

        {/* Call / WhatsApp */}
        <a
          href="https://wa.me/+8801640916341"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center hover:text-amber-500 transition-colors"
        >
          <MdOutlineCall className="text-gray-400 text-lg sm:text-xl" />
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left leading-6">
            +880 1640 916341
          </p>
        </a>
      </div>
      <p className="text-gray-400 text-center leading-6 pb-5">
        © {new Date().getFullYear()} Zubayer Mahmud Samin. All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;
