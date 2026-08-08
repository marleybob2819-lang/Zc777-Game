import Link from "next/link";

const importantLinks = [
  { label: "About Us",       href: "/about"   },
  { label: "Contact Us",     href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer",     href: "/terms"   },
];

const importantPages = [
  { label: "Top ZC777 Games",      href: "/blog/top-zc777-games"               },
  { label: "ZC777 Game Tips",      href: "/blog/zc777-game-tips"               },
  { label: "Account Registration", href: "/blog/zc777-account-registration"    },
  { label: "Safety in Pakistan",   href: "/blog/zc777-game-safety-in-pakistan" },
  { label: "Latest Version 2026",  href: "/blog/zc777-latest-version-2026"     },
];

export function Footer() {
  return (
    <footer className="border-t" style={{ background: "#ffffff", borderColor: "var(--border)" }} role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="ZC777 Game Home">
              <img
                src="/images/ZC777-GAME-APK.webp"
                alt="ZC777 Game Logo"
                title="ZC777 Game"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                decoding="async"
              />
            </Link>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Independent ZC777 Game guides for Pakistan — APK install help, Teen Patti tips, and JazzCash &amp; EasyPaisa payment walkthroughs.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase mb-5 text-left m-0" style={{ color: "#1a1a1a", fontFamily: "var(--font-cinzel)" }}>Important Links</p>
            <ul className="space-y-2">
              {importantLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-base transition-colors duration-200 hover:text-[#1a1a1a]" style={{ color: "var(--text-muted)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase mb-5 text-left m-0" style={{ color: "#1a1a1a", fontFamily: "var(--font-cinzel)" }}>Important Pages</p>
            <ul className="space-y-2">
              {importantPages.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-base transition-colors duration-200 hover:text-[#1a1a1a]" style={{ color: "var(--text-muted)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-5">
          <p className="text-sm text-center" style={{ color: "var(--text-muted)" }}>
            © 2026 ZC777 Game Guides. For information only. 18+ · Play responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
