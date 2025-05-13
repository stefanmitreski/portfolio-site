"use client";
import { useEffect, useState, useRef } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [right, setRight] = useState(16); // px from right
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartRight = useRef(16);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Mouse/touch move handler
  useEffect(() => {
    const handleMove = (e) => {
      if (!dragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = dragStartX.current - clientX;
      const buttonWidth = window.innerWidth < 640 ? 56 : 64;
      let newRight = dragStartRight.current + delta;
      newRight = Math.max(
        8,
        Math.min(newRight, window.innerWidth - buttonWidth)
      );
      setRight(newRight);
    };
    const stopDrag = () => setDragging(false);

    if (dragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchend", stopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [dragging]);

  const startDrag = (e) => {
    setDragging(true);
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    dragStartRight.current = right;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{ right: right, bottom: 24, touchAction: "none" }}
      className={`fixed z-50 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-cyan-900 text-white rounded-full p-3 sm:p-4 shadow-2xl border-4 border-white/80 dark:border-blue-900 hover:scale-110 hover:shadow-blue-400/40 focus-visible:ring-4 focus-visible:ring-blue-300 transition-all duration-300 cursor-pointer group
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-blue-300 dark:bg-blue-800 opacity-30 blur-lg pointer-events-none group-hover:opacity-60 transition"></span>
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="mx-auto sm:w-8 sm:h-8 w-5 h-5 relative z-10 drop-shadow-lg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 19V5M5 12l7-7 7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
