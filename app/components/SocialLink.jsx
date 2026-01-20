"use client";
import React from "react";
import * as Icons from "react-icons/fa6";
import Link from "next/link";
import { socialLink } from "./constant";

const SocialLink = () => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mt-4">
      {socialLink.map(({ id, name, url, icon }) => {
        const Icon = Icons[icon];
        return (
          <Link
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="
              group relative 
              w-10 h-10 
              flex items-center justify-center 
              rounded-full 
              border border-white/20 
              bg-gray-900/60 
              text-white 
              hover:text-[#FD6F00] 
              hover:border-[#FD6F00] 
              hover:bg-[#FD6F00]/10
              hover:shadow-lg hover:shadow-[#FD6F00]/30
              transition-all duration-300
            ">
            <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />

            {/* Glow ring */}
            <span
              className="
                absolute inset-0 rounded-full 
                bg-[#FD6F00]/20 
                blur-md 
                opacity-0 
                group-hover:opacity-100 
                transition-opacity duration-300
              "
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLink;
