"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import { navItems } from "./constant";
import SocialLink from "./SocialLink";

const MobileNavigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div onClick={toggleMenu} className="md:hidden cursor-pointer">
        <div className="flex gap-2">
          <div className="text-3xl text-white">
            <IoMenu />
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 md:hidden text-white"
        onClose={closeMenu}
      >
        <div className="fixed inset-0 bg-black/90 flex items-start justify-center p-4 overflow-y-auto w-screen z-10">
          <DialogPanel className="absolute top-10 m-5 w-full max-w-md rounded-xl p-6 backdrop-blur-2xl bg-black/20 border border-white/20 transition-all duration-200 ease-out">
            <div className="flex justify-between items-center mb-5">
              <DialogTitle className="text-white font-semibold text-xl">
                Navigation Menu
              </DialogTitle>
              <button
                onClick={closeMenu}
                className="p-1 bg-gray-900 rounded-md hover:bg-gray-700 border border-white/20 transition"
              >
                <IoClose className="text-2xl text-gray-200 hover:text-green-500 transition-all duration-100" />
              </button>
            </div>

            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`flex items-center gap-2 relative group py-3 px-4 text-sm text-white font-semibold hover:text-green-400 transition-all duration-100 ${
                    activeSection === item.href ? "text-green-400" : ""
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 bg-gray-900 rounded-full border-2 inline-flex ${
                      activeSection === item.href
                        ? "border-green-500"
                        : "border-gray-400 group-hover:border-green-500"
                    }`}
                  />
                  {item.title}
                  <span
                    className={`absolute w-full h-px left-0 -bottom-1 ml-4 duration-200 ${
                      activeSection === item.href
                        ? "bg-green-500"
                        : "bg-white/20 group-hover:bg-green-500"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <SocialLink />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
