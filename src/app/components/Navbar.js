"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Hide navbar on scroll down
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

  // Close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#10131a]/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${hidden ? "navbar-hidden" : "navbar-visible"}`}
      style={{ height: "4.5rem" }}
    >
<div className="flex items-center justify-between h-full px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Logo: only on mobile */}
        <span className="block sm:hidden text-xl font-bold text-blue-600 dark:text-blue-400">Portfolio</span>
        {/* Hamburger */}
        <button
          className="flex sm:hidden flex-col justify-center items-center w-10 h-10 rounded focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        {/* Desktop Nav */}
        <ul className="hidden sm:flex flex-row justify-center items-center gap-4 sm:gap-10 md:gap-14 h-full w-full">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-item text-base sm:text-lg md:text-2xl font-semibold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Nav */}
            <ul
        className={`sm:hidden fixed top-[4.5rem] left-0 w-full bg-white dark:bg-[#10131a] shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 z-40
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none hidden"}
        `}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav-item text-lg font-semibold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;