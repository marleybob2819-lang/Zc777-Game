"use client";

import { useRef, useState } from "react";
import { homepageScreenshots as slides } from "@/lib/screenshots";

export default function ScreenshotScroller() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const touchStartX = useRef<number | null>(null);

  const navigate = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) =>
        dir === "right"
          ? c === slides.length - 1
            ? 0
            : c + 1
          : c === 0
            ? slides.length - 1
            : c - 1
      );
      setAnimating(false);
      setDirection(null);
    }, 300);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) navigate("right");
    else if (diff < -40) navigate("left");
    touchStartX.current = null;
  };

  const slide = slides[current];

  const slideStyle: React.CSSProperties = animating
    ? {
        transform: direction === "right" ? "translateX(-60px)" : "translateX(60px)",
        opacity: 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }
    : {
        transform: "translateX(0)",
        opacity: 1,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      };

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div
        className="relative w-full select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => navigate("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
          style={{
            background: "#ffffff",
            borderColor: "var(--gold)",
            color: "var(--gold)",
          }}
        >
          &#8592;
        </button>

        <div style={slideStyle}>
          <div className="mx-12 overflow-hidden">
            {/* Native img — avoids next/image srcSet/fetchPriority hydration mismatches */}
            <img
              src={`/images/${slide.file}`}
              alt={slide.alt}
              width={600}
              height={400}
              className="w-full object-cover object-center block"
              decoding="async"
              loading="lazy"
            />
            <div className="px-5 py-4 text-center">
              <p
                className="text-sm font-bold tracking-widest uppercase mb-1"
                style={{ color: "var(--gold)", fontFamily: "var(--font-cinzel)" }}
              >
                {slide.title}
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {slide.desc}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => navigate("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
          style={{
            background: "#ffffff",
            borderColor: "var(--gold)",
            color: "var(--gold)",
          }}
        >
          &#8594;
        </button>
      </div>

      <div className="flex items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to screenshot ${i + 1}`}
            onClick={() => {
              if (!animating) setCurrent(i);
            }}
            className="flex items-center justify-center"
            style={{
              width: "44px",
              height: "44px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              className="rounded-full"
              style={{
                display: "block",
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "var(--gold)" : "rgba(0,0,0,0.3)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>

      <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--font-cinzel)" }}>
        {current + 1} / {slides.length}
      </p>
    </div>
  );
}
