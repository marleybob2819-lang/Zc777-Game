import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = buildMetadata({
  title:       "About ZC777 Game Guides – Pakistan",
  description: "About this ZC777 Game guide site for Pakistan: APK download help, Teen Patti tips, JazzCash deposits, and safety advice for players.",
  keywords:    "about ZC777 Game, ZC777 APK guides Pakistan, ZC777 Game information",
  path:        "/about",
});

const focusAreas = [
  {
    title: "APK & Install Help",
    desc: "Clear steps to download and install ZC777 Game on Android, plus PC emulator guidance when you need it.",
  },
  {
    title: "Payments Guides",
    desc: "Practical JazzCash and EasyPaisa deposit and withdrawal walkthroughs with common error fixes.",
  },
  {
    title: "Safer Play Tips",
    desc: "Bankroll habits, bonus tips, and responsible-play reminders for real-money card games.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }]) as Record<string, unknown>} />

      <section className="page-hero" aria-labelledby="about-h1">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 id="about-h1" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
            About ZC777 Game Guides
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            An independent information site helping Pakistani players understand ZC777 Game APK download, payments, and safer play.
          </p>
        </div>
      </section>

      <section className="py-10" aria-labelledby="story-heading">
        <div className="max-w-3xl mx-auto px-6">
          <h2 id="story-heading" className="text-3xl font-bold mt-2 mb-5" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
            Who We Are
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            This website publishes guides about <strong className="text-neutral-900">ZC777 Game</strong> for players in Pakistan. We explain how to install the Android APK, register an account, deposit and withdraw with JazzCash or EasyPaisa, and play popular card games more carefully.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            We are <strong className="text-neutral-900">not the game operator</strong> and we do not process player deposits or withdrawals. Download links may lead to third-party APK sources. Always verify the source, play only if you are 18+, and follow local laws.
          </p>
          <div className="border-l-2 pl-5 mt-6" style={{ borderColor: "#1a1a1a", background: "rgba(0,0,0,0.04)", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0" }}>
            <p className="m-0 text-sm" style={{ color: "var(--text-muted)" }}>
              <strong className="text-[#1a1a1a] block mb-1">Our goal</strong>
              Clear, up-to-date instructions so Pakistani players can install and use ZC777 Game with fewer mistakes and more caution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10" aria-labelledby="mission-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 id="mission-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
              What This Site Covers
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>{item.title}</h3>
                <p className="text-base leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 text-center" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>Need the install guide?</h2>
          <p className="max-w-md mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Start with the APK download guide, or browse all tips and payment articles on the blog.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/blog/download-zc777-apk" className="btn-primary text-base px-8 py-4">APK Download Guide</Link>
            <Link href="/blog" className="btn-outline text-base px-8 py-4">Read the Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
