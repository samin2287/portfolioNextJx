"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
