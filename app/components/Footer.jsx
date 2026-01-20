import React from "react";
import Container from "./Container";
import Image from "next/image";
import { navItems } from "./constant";
import Link from "next/link";
import SocialLink from "./SocialLink";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Container className="flex flex-col items-center justify-between py-1 gap-10">
      <Image
        src="/mainlogo.png"
        alt="logo"
        width={50}
        height={50}
        className="cursor-pointer"
      />
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
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
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
          <MdOutlineEmail className="text-gray-400 text-lg sm:text-xl" />
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left leading-6">
            Mahmood.fazile7005@gmail.com
          </p>
        </div>

        {/* Call */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
          <MdOutlineCall className="text-gray-400 text-lg sm:text-xl" />
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left leading-6">
            +93 729 107 005
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-center leading-6 pb-5">
        Designed by @mahmood.fazile UI/UX designer
      </p>{" "}
    </Container>
  );
};

export default Footer;
