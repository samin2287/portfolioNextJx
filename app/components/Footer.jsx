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
        src="/main-logo.png"
        alt="logo"
        width={100}
        height={100}
        className="cursor-pointer"
      />
      <div className="flex">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="block py-2 cursor-pointer px-4 text-sm text-white hover:text-[#FD6F00] hover:rounded-md hover:bg-gray-100 font-semibold transition-all duration-100"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <SocialLink />
      <div className="flex items-center justify-between gap-10  border-b  border-gray-700 pt-2 pb-10 w-full flex-wrap">
        <div className="flex gap-4 justify-center items-center ">
          <MdOutlineEmail className="text-gray-400" />
          <p className="text-gray-400 text-center leading-6 ">
            Mahmood.fazile7005@gmail.com{" "}
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center ">
          <MdOutlineCall className="text-gray-400" />
          <p className="text-gray-400 text-center leading-6 ">
            +93 729 107 005{" "}
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
