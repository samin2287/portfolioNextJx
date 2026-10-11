"use client";

import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "./constant";
import SocialLink from "./SocialLink";

const MobileNavigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (e, href) => {
    closeMenu();
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

  return (
    <>
      {/* Right-side Hamburger Button (Visible on all devices) */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle navigation drawer"
        className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-900/90 hover:bg-gray-800 text-gray-200 hover:text-[#FD6F00] border border-gray-800 hover:border-amber-500/50 shadow-md transition-all duration-200 cursor-pointer group shrink-0"
      >
        <HiOutlineMenuAlt3 className="text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-110" />
      </button>

      {/* Slide-out Sidebar Drawer Dialog */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 text-white"
        onClose={closeMenu}
      >
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />

        {/* Slide-out Panel container */}
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-10">
              <DialogPanel
                className="pointer-events-auto w-screen max-w-[320px] sm:max-w-[380px] transform transition-all duration-300 ease-out bg-[#0c1017]/95 backdrop-blur-xl border-l border-gray-800 shadow-2xl flex flex-col justify-between p-6 sm:p-7 overflow-y-auto"
              >
                {/* Drawer Header: Brand + Close Button */}
                <div className="flex items-center justify-between pb-5 border-b border-gray-800/80">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="relative w-8 h-8 shrink-0">
                      <Image
                        src="/mainlogo.png"
                        alt="logo"
                        width={32}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-white font-bold text-sm tracking-tight">
                        Zubayer
                      </span>
                      <span className="text-white font-bold text-sm tracking-tight">
                        Samin
                      </span>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close navigation drawer"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 hover:border-amber-500/50 transition-all duration-200 cursor-pointer"
                  >
                    <IoClose className="text-xl" />
                  </button>
                </div>

                {/* Drawer Body: Nav Items */}
                <div className="py-5 flex-1 flex flex-col justify-center">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-amber-500/80 mb-2 px-3">
                    Navigation
                  </span>

                  <nav className="flex flex-col gap-1">
                    {navItems.map((item, index) => {
                      const isActive = activeSection === item.href;
                      return (
                        <Link
                          key={item.title}
                          href={`/${item.href}`}
                          onClick={(e) => handleClick(e, item.href)}
                          className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 ${
                            isActive
                              ? "bg-amber-500/15 text-[#FD6F00] font-semibold"
                              : "text-gray-300 hover:text-white hover:bg-gray-900/60"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-gray-500 group-hover:text-amber-500/80 w-5">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{item.title}</span>
                          </div>
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              isActive
                                ? "bg-[#FD6F00] shadow-[0_0_8px_#FD6F00]"
                                : "opacity-0 group-hover:opacity-100 bg-gray-500"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Drawer Footer: CTA + Social Links */}
                <div className="pt-5 border-t border-gray-800/80 space-y-4">
                  <Link
                    href="/#contact"
                    onClick={(e) => handleClick(e, "#contact")}
                    className="w-full bg-[#FD6F00] hover:bg-[#e06200] text-white py-2.5 px-4 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-orange-500/25 active:scale-95"
                  >
                    <span>Hire Me / Get in Touch</span>
                    <FaArrowRight className="text-xs" />
                  </Link>

                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1.5">
                      Social Profiles
                    </span>
                    <SocialLink />
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
