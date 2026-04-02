import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { team } from "@/lib/data";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title:       "About ZC777 Casino | Our Story, Mission & Team | Pakistan's Trusted Casino",
  description: "Learn about ZC777 Casino — Pakistan's most trusted online casino since 2019. Our story, mission, values, expert team, and commitment to responsible gaming.",
  keywords:    "about ZC777 casino, ZC777 history, trusted casino Pakistan, ZC777 mission, casino team Pakistan",
  path:        "/about",
});

const timeline = [
  { year: "2019 — Founding",    title: "ZC777 Casino is Launched",                       desc: "ZC777 goes live with 50 games and basic JazzCash integration. Within 3 months the platform reaches 10,000 registered players across Pakistan." },
  { year: "2020 — Expansion",   title: "Live Dealer Games & Mobile Optimisation",         desc: "We launch our Live Casino studio with real-time dealers and completely rebuild for mobile-first performance. Player base grows to 75,000." },
  { year: "2021 — Localisation",title: "Urdu Interface & Easypaisa Integration",          desc: "Full Urdu interface launched. Easypaisa and HBL banking added. ZC777 expands to Bangladesh and Sri Lanka, reaching 200,000 players." },
  { year: "2022 — Scale",       title: "500+ Games & Cryptocurrency Payments",            desc: "Game library expanded to 500+ titles. Bitcoin, Ethereum, and USDT accepted. ZC777 hits 350,000 registered players across South Asia." },
  { year: "2023 — Recognition", title: "Best Asian Casino Award",                         desc: "ZC777 receives the 'Best Online Casino — South Asia 2023' award from iGaming Asia. Player count surpasses 450,000." },
  { year: "2025 — Today",       title: "500,000+ Players & Continued Growth",             desc: "ZC777 now serves over 500,000 active players, with new games added weekly, a VIP programme, and plans to launch a dedicated mobile app." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])) }} />

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="about-h1">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 id="about-h1" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
            About ZC777 Casino
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Pakistan&apos;s most trusted online casino — built by players, for players. Discover our story, mission, and the team that makes it all happen.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24" aria-labelledby="story-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 id="story-heading" className="text-3xl font-bold mt-2 mb-5" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
                How ZC777 Casino Was Born
              </h2>
              <p style={{ color: "var(--text-muted)" }}>
                ZC777 Casino was founded in <strong className="text-white">2019</strong> by a group of passionate casino enthusiasts who saw a gap: Pakistani players lacked access to a <strong className="text-white">safe, fair, and locally-adapted online casino</strong>.
              </p>
              <p style={{ color: "var(--text-muted)" }}>
                Most international casinos didn&apos;t accept Pakistani payment methods, didn&apos;t offer Urdu support, and imposed withdrawal limits that made them impractical for local players. We set out to change that.
              </p>
              <p style={{ color: "var(--text-muted)" }}>
                Today, ZC777 is <strong className="text-white">Pakistan&apos;s #1 online casino platform</strong> — trusted by over 500,000 players across Pakistan, Bangladesh, Sri Lanka, and India — with 500+ games, instant local payments, and round-the-clock support in Urdu and English.
              </p>
              <div className="border-l-2 pl-5 mt-6" style={{ borderColor: "#D4AF37", background: "rgba(212,175,55,0.04)", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0" }}>
                <p className="m-0 text-sm italic" style={{ color: "var(--text-muted)" }}>
                  <strong className="text-[#D4AF37] block mb-1">🏆 Our Core Belief</strong>
                  &quot;Every player deserves a fair, fun, and safe gambling experience — regardless of where they live.&quot;
                </p>
              </div>
            </div>

            {/* Numbers grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2019", label: "Year Founded"       },
                { value: "500K+",label: "Registered Players" },
                { value: "500+", label: "Casino Games"       },
                { value: "120+", label: "Team Members"       },
              ].map((s) => (
                <div key={s.label} className="casino-card p-6 text-center">
                  <div className="text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>{s.value}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24" style={{ background: "var(--bg-section)" }} aria-labelledby="mission-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">What Drives Us</span>
            <h2 id="mission-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              Our Mission, Vision &amp; Core Values
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="casino-card p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>Our Mission</h3>
              <p className="text-sm leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>
                To provide Pakistani and South Asian players with a world-class online casino experience that is safe, fair, and fully localised — with familiar payment methods, Urdu language support, and culturally relevant games.
              </p>
            </div>
            <div className="casino-card p-8">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>Our Vision</h3>
              <p className="text-sm leading-relaxed m-0" style={{ color: "var(--text-muted)" }}>
                To become the most trusted and widely used online casino platform across South Asia by 2030 — setting the global standard for player safety, game quality, and responsible gambling practices.
              </p>
            </div>
            <div className="casino-card p-8">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>Our Values</h3>
              <ul className="space-y-2 text-sm m-0" style={{ color: "var(--text-muted)" }}>
                {["Integrity — Transparent odds, fair games, no hidden fees", "Security — Player data & funds always protected", "Responsibility — Promoting safe gambling at all times", "Innovation — Constantly improving our platform", "Community — Building a respectful player community"].map((v) => (
                  <li key={v} className="flex gap-2"><span style={{ color: "#D4AF37" }}>✦</span>{v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24" aria-labelledby="timeline-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Our Journey</span>
            <h2 id="timeline-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              ZC777 Casino — A Timeline of Growth
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-8 border-l-2" style={{ borderImage: "linear-gradient(180deg, #D4AF37, transparent) 1" }}>
              {timeline.map((item) => (
                <div key={item.year} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[2.45rem] top-1 w-3 h-3 rounded-full" style={{ background: "#D4AF37", boxShadow: "0 0 10px rgba(212,175,55,0.5)" }} />
                  <div className="text-xs font-bold tracking-widest mb-1" style={{ color: "#D4AF37" }}>{item.year}</div>
                  <h4 className="font-bold text-base mb-1" style={{ fontFamily: "var(--font-cinzel)", color: "#F0EAD6" }}>{item.title}</h4>
                  <p className="text-sm m-0" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24" style={{ background: "var(--bg-section)" }} aria-labelledby="team-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">The People Behind ZC777</span>
            <h2 id="team-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              Meet the ZC777 Leadership Team
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="casino-card p-7 text-center" itemScope itemType="https://schema.org/Person">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl border" style={{ background: "linear-gradient(135deg,rgba(212,175,55,0.1),rgba(139,0,0,0.1))", borderColor: "var(--border)" }}>
                  {member.emoji}
                </div>
                <h4 className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }} itemProp="name">{member.name}</h4>
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }} itemProp="jobTitle">{member.role}</div>
                <p className="text-xs leading-relaxed m-0" style={{ color: "var(--text-muted)" }} itemProp="description">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "var(--bg-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>Ready to Join ZC777?</h2>
          <p className="max-w-md mx-auto mb-8" style={{ color: "var(--text-muted)" }}>Join over 500,000 players across Pakistan. Sign up free and claim your welcome bonus today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#play-now" className="btn-primary text-base px-8 py-4">🎲 Create Free Account</a>
            <a href="/contact" className="btn-outline text-base px-8 py-4">Contact Our Team</a>
          </div>
        </div>
      </section>
    </>
  );
}
