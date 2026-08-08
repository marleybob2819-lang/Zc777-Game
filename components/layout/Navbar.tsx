"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/",                                  label: "Home"               },
  { href: "/blog/download-zc777-apk",           label: "Download"           },
  { href: "/blog/zc777-deposit-and-withdrawal", label: "Withdraw & Deposit" },
  { href: "/blog/zc777-game-for-pc",            label: "For PC"             },
  { href: "/blog",                              label: "Blog"               },
  { href: "/about",                             label: "About"              },
  { href: "/contact",                           label: "Contact"            },
];

/**
 * Hydration-safe navbar:
 * - No scroll-driven class changes (those caused server/client class mismatches)
 * - No pathname-based active underline (usePathname can differ during hydrate)
 * - Mobile drawer only toggles after user click (open starts false on server + client)
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b bg-white"
      style={{ borderColor: "var(--border)" }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className="h-[68px] flex items-center justify-between gap-6"
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="ZC777 Game Home">
            {/* Native img avoids next/image fetchPriority/srcSet hydration mismatches on React 18.3 + Next 13.5 */}
            <img
              src="/images/ZC777-GAME-APK.webp"
              alt="ZC777 Game Logo"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              decoding="async"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="relative px-3 py-2 text-sm font-semibold tracking-wide rounded-lg transition-colors duration-200 text-[#333333] hover:text-[#1a1a1a] hover:bg-black/[0.04]"
                  style={{ fontFamily: "var(--font-cinzel)", fontSize: "0.78rem" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center gap-[5px] min-w-[44px] min-h-[44px] p-2 ml-auto bg-transparent border-0 cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] rounded transition-transform duration-200 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] rounded transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1a1a1a] rounded transition-transform duration-200 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {open ? (
        <nav
          className="lg:hidden border-t px-6 py-4 flex flex-col gap-1 bg-white"
          style={{ borderColor: "var(--border)" }}
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3 border-b text-sm font-semibold text-[#333333] hover:text-[#1a1a1a]"
              style={{
                fontFamily: "var(--font-cinzel)",
                fontSize: "0.8rem",
                borderBottomColor: "var(--border)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
