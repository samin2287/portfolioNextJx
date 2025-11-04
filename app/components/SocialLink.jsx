"use client";
import React from "react";
import * as Icons from "react-icons/fa6";
import Link from "next/link";
import { socialLink } from "./constant";

const SocialLink = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLink.map(({ id, name, url, icon }) => {
        const Icon = Icons[icon];
        return (
          <Link
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="w-8 h-8 flex gap-4 mt-5 items-center justify-center rounded-full ring-1 ring-white text-white hover:text-[#FD6F00] hover:ring-[#FD6F00] transition-all duration-300">
            <Icon className="text-xl" />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLink;
