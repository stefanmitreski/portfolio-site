"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#10131a]/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${hidden ? "navbar-hidden" : "navbar-visible"}`}
      style={{ height: "5.5rem" }}
    >
      <ul className="flex justify-center items-center gap-14 h-full">
        <li>
          <Link href="#about" className="nav-item text-xl md:text-2xl font-semibold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="#skills" className="nav-item text-xl md:text-2xl font-semibold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#work" className="nav-item text-xl md:text-2xl font-semibold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Work
          </Link>
        </li>
        <li>
          <Link href="#contact" className="nav-item text-xl md:text-2xl font-semibold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;