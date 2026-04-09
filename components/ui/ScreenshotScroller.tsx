"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    file: "zc777-apk.webp",
    alt: "ZC777 Game APK download screen for Android – official app install page",
    title: "ZC777 APK Download",
    desc: "Official APK download page for Android",
  },
  {
    file: "zc777-app-install.webp",
    alt: "ZC777 Game app installation steps on Android – allow unknown sources guide",
    title: "App Installation Guide",
    desc: "Step-by-step install on any Android device",
  },
  {
    file: "zc777-app.webp",
    alt: "ZC777 Game app home screen showing Teen Patti, Rummy and slot game lobby",
    title: "ZC777 Game Home Screen",
    desc: "Full game lobby with 30+ card & slot games",
  },
  {
    file: "zc777-bonuses.webp",
    alt: "ZC777 Game daily bonus and referral rewards screen – free chips and cash offers",
    title: "Daily Bonuses & Rewards",
    desc: "Daily login bonuses, referral rewards & free chips",
  },
  {
    file: "zc777-games.webp",
    alt: "ZC777 Game category screen showing Dragon Tiger, Teen Patti, Rummy and Slots",
    title: "30+ Games Available",
    desc: "Multiplayer, skill & slot games in one app",
  },
  {
    file: "zc777-login-game.webp",
    alt: "ZC777 Game login screen with JazzCash and EasyPaisa account sign-in options",
    title: "Login & Account Access",
    desc: "Fast login via mobile number, JazzCash or EasyPaisa",
  },
  {
    file: "zc777-win.webp",
    alt: "ZC777 Game winning screen showing real cash prize withdrawal via JazzCash Pakistan",
    title: "Win Real Cash Prizes",
    desc: "Instant withdrawals to JazzCash & EasyPaisa",
  },
];

export function ScreenshotScroller() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const navigate = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((c) =>
        dir === "right"
          ? c === slides.length - 1 ? 0 : c + 1
          : c === 0 ? slides.length - 1 : c - 1
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
      {/* Carousel */}
      <div
        className="relative w-full select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Prev button */}
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={() => navigate("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--gold)",
            color: "var(--gold)",
            boxShadow: "0 0 14px rgba(212,175,55,0.25)",
          }}
        >
          &#8592;
        </button>

        {/* Image card with slide animation */}
        <div className="mx-12 overflow-hidden rounded-2xl casino-card" style={{ background: "var(--bg-card)" }}>
          <div style={slideStyle}>
            <Image
              src={`/images/${slide.file}`}
              alt={slide.alt}
              title={slide.title}
              width={600}
              height={400}
              className="w-full object-cover object-center block"
              style={{ borderBottom: "1px solid var(--border)" }}
              loading="lazy"
            />
            <div className="px-5 py-4 text-center" style={{ background: "var(--bg-mid)" }}>
              <p
                className="text-sm font-bold tracking-widest uppercase mb-1"
                style={{ color: "var(--gold)", fontFamily: "var(--font-cinzel)" }}
              >
                {slide.title}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {slide.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Next button */}
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={() => navigate("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--gold)",
            color: "var(--gold)",
            boxShadow: "0 0 14px rgba(212,175,55,0.25)",
          }}
        >
          &#8594;
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to screenshot ${i + 1}`}
            onClick={() => { if (!animating) setCurrent(i); }}
            className="flex items-center justify-center"
            style={{ width: "44px", height: "44px", background: "transparent", border: "none", cursor: "pointer" }}
          >
            <span
              className="rounded-full"
              style={{
                display: "block",
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? "var(--gold)" : "rgba(212,175,55,0.3)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-cinzel)" }}>
        {current + 1} / {slides.length}
      </p>
    </div>
  );
}
