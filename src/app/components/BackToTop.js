"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
<button
  onClick={scrollToTop}
  aria-label="Back to top"
  className={`fixed bottom-8 right-8 z-50 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#10131a] dark:to-[#23283b] text-gray-900 dark:text-white rounded-full p-6 shadow-2xl border-2 border-white/70 hover:scale-110 hover:shadow-blue-400/40 focus-visible:ring-4 focus-visible:ring-blue-300 transition-all duration-300 ${
    visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  }`}
>
  {/* Up Arrow SVG */}
  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" className="mx-auto" viewBox="0 0 24 24">
    <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>
  );
}