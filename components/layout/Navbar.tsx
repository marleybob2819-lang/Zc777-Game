"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/",                                  label: "Home"               },
  { href: "/blog/download-zc777-apk",           label: "Download"           },
  { href: "/blog/zc777-deposit-and-withdrawal", label: "Withdraw & Deposit" },
  { href: "/blog/zc777-game-for-pc",            label: "For PC"             },
  { href: "/blog",                              label: "Blog"               },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b ${
        scrolled ? "bg-[rgba(10,10,15,0.99)] shadow-xl" : "bg-[rgba(10,10,15,0.97)]"
      }`}
      style={{ transition: "background 0.3s ease, box-shadow 0.3s ease", borderColor: "var(--border)" }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="h-[68px] flex items-center justify-between gap-6" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="ZC777 Game Home">
            <Image
              src="/images/ZC777-GAME-APK.webp"
              alt="ZC777 Game Logo"
              title="ZC777 Game"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>
          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-3 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                      active ? "text-[#D4AF37]" : "text-[#F0EAD6] hover:text-[#D4AF37] hover:bg-[rgba(212,175,55,0.06)]"
                    }`}
                    style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.78rem" }}
                  >
                    {active && <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full" style={{ background: "#D4AF37" }} />}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-1 cursor-pointer ml-auto"
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-[#D4AF37] rounded transition-transform duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#D4AF37] rounded transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#D4AF37] rounded transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      {open && (
        <nav
          className="lg:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{ background: "rgba(10,10,15,0.98)", borderColor: "var(--border)" }}
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`py-3 border-b text-sm font-semibold transition-colors duration-200 ${
                  active ? "text-[#D4AF37] border-l-2 border-[#D4AF37] pl-3" : "text-[#F0EAD6] hover:text-[#D4AF37] pl-0"
                }`}
                style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.8rem", borderBottomColor: "var(--border)" }}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/blog/download-zc777-apk" onClick={() => setOpen(false)} className="btn-primary justify-center mt-3 text-sm">
            Download Now
          </Link>
        </nav>
      )}
    </header>
  );
}
