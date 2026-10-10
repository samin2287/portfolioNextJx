"use client";

import React, { useState } from "react";
import { FaTwitter, FaLinkedinIn, FaLink, FaCheck } from "react-icons/fa";

export default function BlogShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://samin.dev/blog/${slug}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is blocked
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(`Check out "${title}" by @samin:`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Share:</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy link to article"
          title="Copy link"
          className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-amber-400 border border-gray-700 transition-all duration-200 cursor-pointer shadow-sm">
          {copied ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaLink className="w-3.5 h-3.5" />}
          {copied && (
            <span className="absolute -top-8 px-2 py-0.5 text-[11px] font-medium bg-emerald-500 text-gray-950 rounded shadow-md whitespace-nowrap animate-fade-in">
              Copied!
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={shareOnTwitter}
          aria-label="Share on X (Twitter)"
          title="Share on X"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-sky-400 border border-gray-700 transition-all duration-200 cursor-pointer shadow-sm">
          <FaTwitter className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={shareOnLinkedIn}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-blue-400 border border-gray-700 transition-all duration-200 cursor-pointer shadow-sm">
          <FaLinkedinIn className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
