"use client";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold shadow-lg transition-all duration-300 ${visible ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}`}
      style={{ background: "#D4AF37", color: "#0A0A0F", fontFamily: "var(--font-cinzel)" }}
    >
      ↑
    </button>
  );
}
