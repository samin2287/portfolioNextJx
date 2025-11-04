import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const Button = ({ children, className, href, onClick }) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "inline-flex items-center gap-5 bg-white text-black border border-gray-300 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-md md:text-lg font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-md hover:bg-[#FD6F00] hover:text-white transition-all duration-300  cursor-pointer shadow-sm group",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            "inline-flex items-center gap-5 bg-transparent text-gray-400 border border-gray-300 mt-6 sm:mt-8 md:mt-10 text-sm sm:text-md md:text-lg font-bold py-2.5 sm:py-3 px-4 sm:px-5 md:px-6 rounded-md hover:bg-[#FD6F00] hover:text-white transition-all duration-300 cursor-pointer  shadow-sm group",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
