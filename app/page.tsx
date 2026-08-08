import type { Metadata } from "next";
import Link from "next/link";
import nextDynamic from "next/dynamic";
import { buildMetadata, faqSchema, softwareApplicationSchema, websiteSchema, organizationSchema } from "@/lib/seo";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { APK_URL } from "@/lib/config";

const ScreenshotScroller = nextDynamic(
  () => import("@/components/ui/ScreenshotScroller"),
  {
    loading: () => (
      <div className="w-full min-h-[320px]" aria-hidden="true" />
    ),
  }
);

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = buildMetadata({
  title:       "Download ZC777 Game APK for Android - Pakistan",
  description: "Download the free ZC777 Game APK for Android in Pakistan. Play Teen Patti, Rummy & real money card games. Fast JazzCash and EasyPaisa withdrawals.",
  keywords:    "ZC777 Game APK, ZC777 APK download, ZC777 Game Pakistan, Teen Patti APK, Rummy Pakistan, JazzCash game, EasyPaisa withdrawal",
  path:        "/",
});

const homeFaqs = [
  { question: "What is ZC777 Game and how does it work?", answer: "ZC777 Game is Pakistan's most popular online card game platform combining Teen Patti and Rummy with modern gaming tech. Players win real money and withdraw via JazzCash or EasyPaisa." },
  { question: "How to download ZC777 Game APK?", answer: "Open your browser, search for ZC777 Game APK on a trusted website, click Download, allow Unknown Sources in Settings, and install from your Downloads folder." },
  { question: "What makes ZC777 Game different from other card games?", answer: "ZC777 offers 30+ games, instant JazzCash/EasyPaisa withdrawals, daily bonuses, referral earning, and a lightweight app running smoothly on all Android devices." },
  { question: "Is ZC777 Game safe and legal to use?", answer: "ZC777 uses SSL encryption and secure payment methods. Always download from official trusted sources only. Players are responsible for understanding local regulations." },
  { question: "Can users lose money while playing?", answer: "Yes. Like all real money games there is a risk of losing money. Always play responsibly, start with small bets, and never deposit more than you can afford to lose." },
  { question: "Is ZC777 Game available on iPhone (iOS)?", answer: "Currently ZC777 Game APK is available for Android devices only (Android 5.0+). iOS support is not available at this time." },
  { question: "What is the maximum withdrawal at a time?", answer: "With Bank Card you can withdraw up to PKR 20,000 per transaction. JazzCash and EasyPaisa withdrawals are processed within seconds." },
  { question: "How do referral rewards work?", answer: "Share your unique referral link with friends. When they download and start playing ZC777 Game, you automatically receive a commission." },
];

const multiplayer = ["Tiger Dragon","7 UP Down","Zoo Roulette","Crash","Car Roulette","Andar Bahar","Teenpatti 20-20","Best of Five"];
const skill       = ["Domino","Rummy","Teen Patti","Fishing Rush","10 Cards","Poker","Ludo","Black Jack"];
const slots       = ["Mines","Fruit Line","777 Bingo","Rattling GEMS","Video Poker","Wild Energy","WoW Slot","God of Fortune"];

const features = [
  { n:"1",  title:"Real Money Earning",      desc:"Earn real cash rewards just by playing games you love — Teen Patti, Poker, or Rummy. Earnings are transferred directly via local payment methods safely." },
  { n:"2",  title:"Easy Withdraw & Deposit", desc:"Withdraw or deposit money anytime using JazzCash or EasyPaisa in just a few steps. Secure and quick transactions with no delays." },
  { n:"3",  title:"Attractive Interface",    desc:"Bright, colorful, modern interface with background music, smooth animations, and a clear layout for an amazing gaming experience." },
  { n:"4",  title:"Popular Games",           desc:"Dragon vs Tiger, Poker, Slots, Rummy and many more in one app. Simple rules make it perfect for both beginners and experienced players." },
  { n:"5",  title:"Daily Bonus",             desc:"Get free login bonuses and chips every day. Special rewards on weekly and festival occasions help you keep playing without depositing." },
  { n:"6",  title:"Referral Earning",        desc:"Share your referral link and receive commission automatically when friends start playing. The more friends you invite, the more you earn." },
  { n:"7",  title:"Fast Performance",        desc:"Runs smoothly on almost every Android device, even older models. Lightweight design ensures faster loading and smooth gameplay." },
  { n:"8",  title:"Safe & Secure Platform",  desc:"Secure payment methods and data protection keep everything private. Trusted by thousands of players for its reliability." },
  { n:"9",  title:"Free to Play",            desc:"Free to download with no registration fees. Start playing immediately with free chips provided by the app." },
  { n:"10", title:"Support Options",         desc:"Get help through in-app support channels when you need account or payment assistance." },
];



const tips = [
  { t:"Start with Small Bets",     d:"Always start with a small investment to understand game rules and reduce losing risk. Increase only when confident." },
  { t:"Use Bonuses Wisely",        d:"Daily login bonuses, referral bonuses, and deposit rewards let you play more without spending your own money." },
  { t:"Play Popular Games",        d:"Focus on Dragon vs Tiger or Teen Patti Classic for higher winning chances and better earning opportunities." },
  { t:"Invite Friends",            d:"Use the referral link to invite friends and earn commission automatically every time they play." },
  { t:"Stay Active Daily",         d:"Log in regularly to collect daily rewards and spin bonuses — staying active improves your chances of winning." },
  { t:"Withdraw on Time",          d:"Transfer winnings as soon as possible through JazzCash or EasyPaisa to keep your money safe." },
	{ t:"Learn from Practice Mode",  d:"Try the free or demo mode before real money play to understand gameplay and develop strategies without risk." },
	{ t:"Keep Emotions in Control",  d:"Stay calm and make smart decisions during games to avoid unnecessary losses from frustration or greed." }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema() as Record<string, unknown>} />
      <JsonLd data={organizationSchema() as Record<string, unknown>} />
      <JsonLd data={softwareApplicationSchema() as Record<string, unknown>} />
      <JsonLd data={faqSchema(homeFaqs) as Record<string, unknown>} />

      {/* HERO */}
      <section className="page-hero" aria-labelledby="hero-h1">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-5 text-center">
          <h1 id="hero-h1" className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily:"var(--font-cinzel)", color:"#1a1a1a" }}>
            Download ZC777 Game APK for Android in Pakistan
          </h1>
          <p className="text-base md:text-lg max-w-xl" style={{ color:"var(--text-muted)" }}>
            Free APK for Teen Patti, Rummy &amp; real money card games. Deposit and withdraw with JazzCash &amp; EasyPaisa.
          </p>
          <a
            href={APK_URL}
            className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3"
            target="_blank"
            rel="sponsored noopener noreferrer"
            title="Download ZC777 Game APK for Android"
            aria-label="Download ZC777 Game APK for Android"
          >
            Download Free ZC777 APK
          </a>
          <p className="text-xs m-0 max-w-md" style={{ color: "var(--text-muted)" }}>
            18+ only. Play responsibly. Download opens an external APK source. Prefer our step-by-step install guide.
          </p>
        </div>
      </section>

      {/* DOWNLOAD INFO TABLE */}
      <section className="py-10" id="download" aria-labelledby="download-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="download-heading" className="text-2xl md:text-4xl font-bold text-center m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>ZC777 Game Download Info</h2><div className="gold-divider" /></div>
          <div className="overflow-hidden w-full" style={{ borderColor:"var(--border)" }}>
            <table className="w-full text-sm" role="table" aria-label="ZC777 Game app information">
              <thead>
                <tr style={{ background:"rgba(0,0,0,0.1)" }}>
                  <th className="px-6 py-4 text-center font-bold tracking-widest uppercase w-1/2" style={{ color:"#1a1a1a", fontFamily:"var(--font-cinzel)", fontSize:"0.8rem", borderBottom:"1px solid var(--border)" }}>Property</th>
                  <th className="px-6 py-4 text-center font-bold tracking-widest uppercase w-1/2" style={{ color:"#1a1a1a", fontFamily:"var(--font-cinzel)", fontSize:"0.8rem", borderBottom:"1px solid var(--border)" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["App Name",        "ZC777 Game"],
                  ["Developer",       "Antillephone"],
                  ["Category",        "Cards & Casino Games"],
                  ["File Size",       "49 MB"],
                  ["Latest Version",  "V1.230"],
                  ["Required OS",     "Android 5.0+"],
                  ["Last Updated",    "1st January 2026"],
                  ["Availability", "Android APK"],
                  ["Payments",       "JazzCash, EasyPaisa"],
                  ["Language",        "English"],
                  ["Price",           "Free to Download"],
                ].map(([k, v], i) => (
                  <tr key={k} style={{ background: "#ffffff" }}>
                    <td className="px-6 py-4 font-bold border-r text-center whitespace-nowrap" style={{ color:"#1a1a1a", borderColor:"var(--border)", fontFamily:"var(--font-cinzel)", fontSize:"0.85rem" }}>{k}</td>
                    <td className="px-6 py-4 text-center" style={{ color:"var(--text-muted)" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-10"  aria-labelledby="overview-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 id="overview-heading" className="text-3xl font-bold mt-2 mb-5" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>What is ZC777 Game?</h2>

              <p style={{ color:"var(--text-muted)" }}>ZC777 Game is Pakistan&apos;s most popular online card game platform that combines classic card games like <strong className="text-neutral-900">Teen Patti</strong> and <strong className="text-neutral-900">Rummy</strong> with modern gaming technology. When people search for &quot;ZC777 Game&quot;, they&apos;re looking for a trusted platform to play card games and earn real money — and ZC777 delivers exactly that.</p>
              <p style={{ color:"var(--text-muted)" }}>It has become the go-to platform for card game enthusiasts in Pakistan who want beautiful design, simple settings, classic themes, and easy gameplay. You can <a href="#payment" className="underline underline-offset-2" style={{ color:"#1a1a1a" }}>withdraw winnings or deposit money</a> anytime using <strong className="text-neutral-900">JazzCash</strong> and <strong className="text-neutral-900">EasyPaisa</strong>.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-2 mb-5" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Why is ZC777 Game So Popular?</h3>
              <ul className="space-y-3">
                {["Earn real money while having fun with simple, easy-to-understand rules","Beautiful, colorful design gives a real casino experience on your device","Easy deposit and withdraw via EasyPaisa and JazzCash without delays","30+ exciting games: Teen Patti, Dragon vs Tiger, Poker, Rummy, Slots","Daily bonuses and rewards help you earn coins and extra cash every day","Very safe and secure — protects personal details and money","Works smoothly even on low-storage and older Android devices"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base" style={{ color:"var(--text-muted)" }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color:"#1a1a1a" }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GAME SCREENSHOTS */}
      <section className="py-10"  aria-labelledby="game-screenshots-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 id="game-screenshots-heading" className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>ZC777 Game Screenshots</h2>
            <div className="gold-divider" />
          </div>
          <ScreenshotScroller />
        </div>
      </section>

      {/* HOW TO START */}
      <section className="py-10" aria-labelledby="start-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="start-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>How to Start with ZC777 Game?</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-4" style={{ color:"#333333" }}>
              Download the APK, install it on Android, register with your mobile number, then deposit via JazzCash or EasyPaisa to play.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-lg leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>
              <li>Download and install the free ZC777 Game APK.</li>
              <li>Register or log in with your phone number.</li>
              <li>Deposit chips, claim your bonus, and start playing.</li>
            </ol>
          </div>
        </div>
      </section>



      {/* FEATURES */}
      <section className="py-10" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="features-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Top Features of ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.n} className="flex gap-4">
                <span className="text-base font-bold flex-shrink-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>{f.n}.</span>
                <div><p className="font-bold text-sm mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>{f.title}</p><p className="text-base leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section className="py-10"  aria-labelledby="games-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="games-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Best Games to Play on ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{title:"1: Multiplayer Games",games:multiplayer},{title:"2: Skill-Based Games",games:skill},{title:"3: Slots",games:slots}].map((cat) => (
              <div key={cat.title}>
                <p className="text-lg md:text-xl font-bold mb-4 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>{cat.title}</p>
                <ul className="space-y-2">
                  {cat.games.map((g) => (<li key={g} className="flex items-center gap-2 text-base" style={{ color:"var(--text-muted)" }}><span style={{ color:"#1a1a1a" }}>•</span>{g}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS TABLES */}
      <section className="py-10" aria-labelledby="bonus-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="bonus-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Benefits for New Players by Joining ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-2">
              <p className="text-base font-bold mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>1: New Player Welcome Bonus</p>
              <p className="text-sm mb-4" style={{ color:"var(--text-muted)" }}>100% recharge bonus for all new users on their first deposit.</p>
              <div className="overflow-hidden" style={{ borderColor:"var(--border)" }}>
                <table className="w-full text-sm"><thead><tr style={{ background:"rgba(0,0,0,0.1)" }}><th className="px-3 py-2 text-left" style={{ color:"#1a1a1a" }}>Deposit (PKR)</th><th className="px-3 py-2 text-right" style={{ color:"#1a1a1a" }}>Bonus (PKR)</th></tr></thead>
                <tbody>{[["100","100"],["1,000","1,000"],["5,000","5,000"],["10,000","10,000"],["20,000","20,000"],["100,000","100,000"]].map(([d,b]) => (<tr key={d} className="border-t" style={{ borderColor:"var(--border)" }}><td className="px-3 py-2" style={{ color:"var(--text-muted)" }}>{d}</td><td className="px-3 py-2 text-right text-green-700 font-bold">{b}</td></tr>))}</tbody></table>
              </div>
            </div>
            <div className="p-2">
              <p className="text-base font-bold mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>2: Recharge Rebate</p>
              <p className="text-sm mb-4" style={{ color:"var(--text-muted)" }}>Recharge rebate bonuses for every player on deposit.</p>
              <div className="overflow-hidden" style={{ borderColor:"var(--border)" }}>
                <table className="w-full text-sm"><thead><tr style={{ background:"rgba(0,0,0,0.1)" }}><th className="px-3 py-2 text-left" style={{ color:"#1a1a1a" }}>Rebate</th><th className="px-3 py-2 text-center" style={{ color:"#1a1a1a" }}>Recharge</th><th className="px-3 py-2 text-right" style={{ color:"#1a1a1a" }}>Wager</th></tr></thead>
                <tbody>{[["5%","3,000 PKR","2x"],["10%","5,000","3x"],["15%","8,000","4x"],["20%","10,000","5x"],["25%","20,000","6x"],["30%","50,000","7x"]].map(([r,rc,w]) => (<tr key={r} className="border-t" style={{ borderColor:"var(--border)" }}><td className="px-3 py-2 text-green-700 font-bold">{r}</td><td className="px-3 py-2 text-center" style={{ color:"var(--text-muted)" }}>{rc}</td><td className="px-3 py-2 text-right" style={{ color:"var(--text-muted)" }}>{w}</td></tr>))}</tbody></table>
              </div>
            </div>
            <div className="p-2">
              <p className="text-base font-bold mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>3: VIP Level Rebate</p>
              <p className="text-sm mb-4" style={{ color:"var(--text-muted)" }}>Min 3,000 PKR deposit. Claimable every day.</p>
              <div className="overflow-hidden" style={{ borderColor:"var(--border)" }}>
                <table className="w-full text-sm"><thead><tr style={{ background:"rgba(0,0,0,0.1)" }}><th className="px-3 py-2 text-left" style={{ color:"#1a1a1a" }}>VIP Level</th><th className="px-3 py-2 text-right" style={{ color:"#1a1a1a" }}>Rebate</th></tr></thead>
                <tbody>{[["V1-V2","1%"],["V3-V4","2%"],["V5-V6","3%"],["V7-V8","4%"],["V9-V10","5%"],["V11-V12","6%"],["V13-V14","7%"],["V15-V16","8%"],["V17-V18","9%"],["V19-V20","10%"]].map(([v,r]) => (<tr key={v} className="border-t" style={{ borderColor:"var(--border)" }}><td className="px-3 py-2" style={{ color:"var(--text-muted)" }}>{v}</td><td className="px-3 py-2 text-right text-green-700 font-bold">{r}</td></tr>))}</tbody></table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD & INSTALL — slim hub linking to pillar guide */}
      <section className="py-10" id="download-steps" aria-labelledby="dl-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="dl-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Download &amp; Install ZC777 Game APK</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-4" style={{ color:"#333333" }}>
              Get the latest Android APK from a trusted source, allow install from unknown apps, then open the file from Downloads to install.
            </p>
            <p className="text-base m-0" style={{ color:"var(--text-muted)" }}>
              Full install walkthrough:{" "}
              <Link href="/blog/download-zc777-apk" className="underline underline-offset-2" style={{ color:"#1a1a1a" }}>Download ZC777 APK guide</Link>.
              {" "}Check{" "}
              <a href="#sysreq-heading" className="underline underline-offset-2" style={{ color:"#1a1a1a" }}>system requirements</a>
              {" "}before you install.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section className="py-10" aria-labelledby="sysreq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="sysreq-heading" className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>ZC777 System Requirements</h2><div className="gold-divider" /></div>
          <div className="overflow-hidden max-w-3xl mx-auto" style={{ borderColor:"var(--border)" }}>
            <table className="w-full text-sm" role="table"><thead><tr style={{ background:"rgba(0,0,0,0.1)" }}><th className="px-5 py-4 text-left" style={{ color:"#1a1a1a",fontFamily:"var(--font-cinzel)" }}>System</th><th className="px-5 py-4 text-center" style={{ color:"#1a1a1a",fontFamily:"var(--font-cinzel)" }}>Minimum</th><th className="px-5 py-4 text-center" style={{ color:"#1a1a1a",fontFamily:"var(--font-cinzel)" }}>Recommended</th></tr></thead>
            <tbody>{[["Operating System","Android 5.0","Android 8.0 or above"],["RAM","2GB or more","4GB or more"],["Storage Space","At least 500MB free","1GB free space"],["Processor","Quad-core 1.5GHz","Octa-core 2.0GHz"],["Internet","Stable 3G or WiFi","Fast & stable 4G or WiFi"]].map(([sys,min,rec],i) => (<tr key={sys} className="border-t" style={{ borderColor:"var(--border)",background:"#ffffff" }}><td className="px-5 py-3 font-bold" style={{ color:"#333333",fontFamily:"var(--font-cinzel)",fontSize:"0.8rem" }}>{sys}</td><td className="px-5 py-3 text-center" style={{ color:"var(--text-muted)" }}>{min}</td><td className="px-5 py-3 text-center text-green-700 font-bold">{rec}</td></tr>))}</tbody></table>
          </div>
        </div>
      </section>

      {/* REGISTER & LOGIN — slim hub */}
      <section className="py-10" id="register" aria-labelledby="register-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="register-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Register &amp; Login on ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-4" style={{ color:"#333333" }}>
              Create an account with your mobile number or email, verify OTP, then log in to play and claim bonuses.
            </p>
            <p className="text-base m-0" style={{ color:"var(--text-muted)" }}>
              After signup, claim a welcome bonus from new player benefits and fund your wallet in deposit &amp; withdraw.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOSIT & WITHDRAW — slim hub */}
      <section className="py-10" id="payment" aria-labelledby="payment-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="payment-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Deposit &amp; Withdraw with JazzCash / EasyPaisa</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-4" style={{ color:"#333333" }}>
              Use the in-app Wallet to deposit chips or withdraw winnings via JazzCash or EasyPaisa. Always double-check account details before confirming.
            </p>
            <p className="text-base m-0" style={{ color:"var(--text-muted)" }}>
              Limits, methods, and troubleshooting:{" "}
              <Link href="/blog/zc777-deposit-and-withdrawal" className="underline underline-offset-2" style={{ color:"#1a1a1a" }}>Deposit &amp; withdrawal guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS — slim hub */}
      <section className="py-10" id="tips" aria-labelledby="tips-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="tips-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Tips to Play Smarter on ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tips.slice(0, 4).map((tip,i) => (
              <div key={tip.t} className="flex gap-4">
                <span className="text-base font-bold flex-shrink-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>{i+1}.</span>
                <div><p className="font-bold text-base mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>{tip.t}</p><p className="text-base leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{tip.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S NEW */}
      <section className="py-10" aria-labelledby="whatsnew-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="whatsnew-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>What&apos;s New in the Latest Version of ZC777 Game?</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {["Improved graphics and smooth animations for a better visual experience.","Faster performance — app opens quickly and runs without lag.","Simplified menu and layout, especially easy for new users.","More games added including Dragon vs Tiger, Rummy, and others.","Withdrawal and deposit options now work faster and more smoothly.","Better security measures to protect your account and money.","New bonuses and referral rewards for more earning opportunities.","Old errors and app issues removed for a smooth gaming experience.","Improved background music and game sounds for more fun.","New VIP system with extra prizes and benefits."].map((item,i) => (
              <div key={i} className="flex items-start gap-3 py-2"><span className="text-green-700 flex-shrink-0 mt-0.5 font-bold">+</span><p className="text-base m-0" style={{ color:"var(--text-muted)" }}>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="py-10"  aria-labelledby="pros-cons-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="pros-cons-heading" className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Pros &amp; Cons of ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* PROS */}
            <div className="w-full">
              <p className="text-lg font-bold mb-6 pb-3 border-b flex items-center gap-2 m-0" style={{ fontFamily:"var(--font-cinzel)", color:"#2ECC71", borderColor:"rgba(46,204,113,0.25)" }}>
                Pros
              </p>
              <ul className="space-y-4">
                {[
                  ["Simple & Fun to Play",          "Easy rules make it enjoyable for beginners and experienced players alike."],
                  ["Earn Real Money",                "Win cash prizes with a small investment through skill-based card games."],
                  ["JazzCash & EasyPaisa Support",   "Fast, local payment methods make deposits and withdrawals hassle-free."],
                  ["30+ Games Available",            "Wide variety including Teen Patti, Dragon Tiger, Rummy, Slots and more."],
                  ["Instant Withdrawals",            "Transfer your winnings directly to your mobile wallet within minutes."],
                  ["Daily Bonuses & Rewards",        "Login bonuses, referral commissions and festival rewards every day."],
                  ["Lightweight App",                "Runs smoothly on older and low-storage Android devices."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-green-700 font-bold">+</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color:"var(--text-white)" }}>{title}</p>
                      <p className="text-sm mt-0.5" style={{ color:"var(--text-muted)" }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONS */}
            <div className="w-full">
              <p className="text-lg font-bold mb-6 pb-3 border-b flex items-center gap-2 m-0" style={{ fontFamily:"var(--font-cinzel)", color:"#E74C3C", borderColor:"rgba(231,76,60,0.25)" }}>
                Cons
              </p>
              <ul className="space-y-4">
                {[
                  ["Risk of Losing Money",           "Like all real-money games, there is always a risk of financial loss."],
                  ["Withdrawal Delays",              "Withdrawals can sometimes take longer during peak hours or verification."],
                  ["Can Be Addictive",               "Real money gameplay can become habit-forming — always play responsibly."],
                  ["Performance on Weak Phones",     "Older or low-RAM devices may experience occasional lag during gameplay."],
                  ["Not on Google Play Store",       "Requires manual APK installation; not available via official app stores."],
                  ["Internet Required",              "A stable internet connection is needed for uninterrupted gameplay."],
                  ["Learning Curve for New Games",   "Some game modes like Rummy require practice before becoming profitable."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 text-red-400 font-bold">-</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color:"var(--text-white)" }}>{title}</p>
                      <p className="text-sm mt-0.5" style={{ color:"var(--text-muted)" }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6"><h2 id="faq-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Frequently Asked Questions</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto"><FaqAccordion faqs={homeFaqs} /></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 text-center" >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#1a1a1a" }}>Conclusion</h2>
          <p className="max-w-3xl mx-auto mb-4" style={{ color:"var(--text-muted)" }}>ZC777 Game is one of the most popular online card games in Pakistan. It provides fun, entertainment, and a great chance to earn money if you play wisely. The deposit and withdrawal system through JazzCash or EasyPaisa is very convenient. Play responsibly, use smart strategies, and focus on skill rather than luck for the best experience.</p>
          <p className="max-w-3xl mx-auto m-0" style={{ color:"var(--text-muted)" }}>Learn more about our platform on the <Link href="/about" className="underline underline-offset-2" style={{ color:"#1a1a1a" }}>About Us</Link> page.</p>
        </div>
      </section>
    </>
  );
}
