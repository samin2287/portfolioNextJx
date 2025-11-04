import React from "react";
import Container from "./Container";
import { navItems } from "./constant";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-b hidden md:block">
      <Container className="flex items-center justify-between py-1">

        <Image
        src="/main-logo.png"
        alt="logo"
        width={50}
        height={50}
        />
        <div className="flex">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-2 px-4 text-sm text-white hover:text-[#FD6F00] hover:rounded-md hover:bg-gray-100 font-semibold transition-all duration-100">
              {item.title}
            </Link>
          ))}
          
        </div>
        <button className="bg-amber-600 px-3 py-1 rounded-md cursor-pointer text-white font-semibold">Hire me</button>
       
      </Container>
    </div>
  );
};

export default Navbar;