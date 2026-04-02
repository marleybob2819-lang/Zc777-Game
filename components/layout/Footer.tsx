import Link from "next/link";

const importantLinks = [
  { label: "About Us",       href: "/blog/zc777-game-about-us" },
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
    <footer className="border-t" style={{ background: "#06060A", borderColor: "var(--border)" }} role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="ZC777 Game Home">
              <img
                src="/images/ZC777-GAME-APK.webp"
                alt="ZC777 Game Logo"
                title="ZC777 Game"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              ZC777 is Pakistan&apos;s premier online card game platform. Play Teen Patti, Rummy, Dragon Tiger and earn real cash via JazzCash &amp; EasyPaisa.
            </p>
          </div>
          {/* Important Links */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase mb-5 text-left m-0" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel)" }}>Important Links</p>
            <ul className="space-y-2">
              {importantLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm transition-colors duration-200 hover:text-[#D4AF37]" style={{ color: "var(--text-muted)" }}>→ {label}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Important Pages */}
          <div>
            <p className="text-xs font-bold tracking-[0.12em] uppercase mb-5 text-left m-0" style={{ color: "#D4AF37", fontFamily: "var(--font-cinzel)" }}>Important Pages</p>
            <ul className="space-y-2">
              {importantPages.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm transition-colors duration-200 hover:text-[#D4AF37]" style={{ color: "var(--text-muted)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom */}
        <div className="py-5">
          <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
            © 2026 ZC777 Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
