import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, faqSchema, breadcrumbSchema, softwareApplicationSchema } from "@/lib/seo";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ScreenshotScroller } from "@/components/ui/ScreenshotScroller";
import { APK_URL } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title:       "ZC777 Game APK – Play & Win Real Cash in Pakistan",
  description: "Download ZC777 Game APK for Android. Play Teen Patti, Rummy & 30+ games. Win real money with fast JazzCash & EasyPaisa withdrawals. Safe & legal.",
  keywords:    "ZC777 Game, ZC777 APK download, online card game Pakistan, Teen Patti Pakistan, real money game Pakistan, JazzCash game, EasyPaisa game",
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

const multiplayer = ["Tiger Dragon 🔥","7 UP Down 🔥","Zoo Roulette 🔥","Crash","Car Roulette","Andar Bahar","Teenpatti 20-20","Best of Five"];
const skill       = ["Domino 🔥","Rummy 🔥","Teen Patti","Fishing Rush","10 Cards","Poker","Ludo","Black Jack"];
const slots       = ["Mines 🔥","Fruit Line","777 Bingo","Rattling GEMS","Video Poker","Wild Energy","WoW Slot","God of Fortune"];

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
  { n:"10", title:"24/7 Support",            desc:"Fast customer support available anytime via live chat, WhatsApp, or the in-app support system." },
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
      {/* HERO */}
      <section className="page-hero" aria-labelledby="hero-h1">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
          <span className="section-label">Pakistan&apos;s #1 Card Game</span>
          <h1 id="hero-h1" className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily:"var(--font-cinzel)", color:"#D4AF37" }}>
            ZC777 Game APK – Play &amp; Win Real Cash in Pakistan
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color:"var(--text-muted)" }}>
            Play Teen Patti, Rummy &amp; 30+ games. Win real money with fast <strong className="text-white">JazzCash</strong> &amp; <strong className="text-white">EasyPaisa</strong> withdrawals. Safe &amp; free to download.
          </p>
          <a
            href={APK_URL}
            className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-4"
            download
            aria-label="Download ZC777 Game APK"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-9 8h10" />
            </svg>
            DOWNLOAD NOW
          </a>
          {/* Stats */}
          <div className="casino-card p-6 grid grid-cols-3 gap-6 text-center w-full max-w-xl shadow-lg">
            {[{v:"4.8",l:"⭐ Rating"},{v:"500K+",l:"Downloads"},{v:"30+",l:"Games"}].map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <div className="text-3xl font-extrabold mb-1" style={{ fontFamily:"var(--font-cinzel)", color:"#D4AF37" }}>{s.v}</div>
                <div className="text-xs mt-1" style={{ color:"var(--text-muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO H2 TAGLINE */}
      <section className="py-5 text-center border-y" style={{ background: "rgba(212,175,55,0.05)", borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl md:text-3xl font-bold text-center" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>ZC777 Game – Pakistan&apos;s #1 Card Game App</h2>
          <p className="text-sm mt-1 text-center" style={{ color: "var(--text-muted)" }}>Download the APK and play Teen Patti, Rummy, Dragon vs Tiger. Win real cash via JazzCash &amp; EasyPaisa.</p>
        </div>
      </section>

      {/* DOWNLOAD INFO TABLE */}
      <section className="py-20" id="download" aria-labelledby="download-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">App Information</span><p className="text-2xl md:text-4xl font-bold text-center m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Download Info Table</p><div className="gold-divider" /></div>
          <div className="rounded-2xl overflow-hidden border w-full" style={{ borderColor:"var(--border)" }}>
            <table className="w-full text-sm" role="table" aria-label="ZC777 Game app information">
              <thead>
                <tr style={{ background:"rgba(212,175,55,0.1)" }}>
                  <th className="px-6 py-4 text-center font-bold tracking-widest uppercase w-1/2" style={{ color:"#D4AF37", fontFamily:"var(--font-cinzel)", fontSize:"0.8rem", borderBottom:"1px solid var(--border)" }}>Property</th>
                  <th className="px-6 py-4 text-center font-bold tracking-widest uppercase w-1/2" style={{ color:"#D4AF37", fontFamily:"var(--font-cinzel)", fontSize:"0.8rem", borderBottom:"1px solid var(--border)" }}>Details</th>
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
                  ["Total Downloads", "500,000+"],
                  ["Total Reviews",   "200,000+"],
                  ["Language",        "English & Urdu"],
                  ["Price",           "Free to Download"],
                ].map(([k, v], i) => (
                  <tr key={k} style={{ background: i%2===0?"var(--bg-card)":"var(--bg-mid)" }}>
                    <td className="px-6 py-4 font-bold border-r text-center whitespace-nowrap" style={{ color:"#D4AF37", borderColor:"var(--border)", fontFamily:"var(--font-cinzel)", fontSize:"0.85rem" }}>{k}</td>
                    <td className="px-6 py-4 text-center" style={{ color:"var(--text-muted)" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="overview-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Overview</span>
              <h2 id="overview-heading" className="text-3xl font-bold mt-2 mb-5" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>What is ZC777 Game?</h2>

              <p style={{ color:"var(--text-muted)" }}>ZC777 Game is Pakistan&apos;s most popular online card game platform that combines classic card games like <strong className="text-white">Teen Patti</strong> and <strong className="text-white">Rummy</strong> with modern gaming technology. When people search for &quot;ZC777 Game&quot;, they&apos;re looking for a trusted platform to play card games and earn real money — and ZC777 delivers exactly that.</p>
              <p style={{ color:"var(--text-muted)" }}>It has become the go-to platform for card game enthusiasts in Pakistan who want beautiful design, simple settings, classic themes, and easy gameplay. You can <Link href="/blog/zc777-deposit-and-withdrawal" className="underline underline-offset-2" style={{ color:"#D4AF37" }}>withdraw winnings or deposit money</Link> anytime using <strong className="text-white">JazzCash</strong> and <strong className="text-white">EasyPaisa</strong>.</p>
              <div className="mt-6 border-l-2 pl-5 py-3 rounded-r-xl" style={{ borderColor:"#D4AF37",background:"rgba(212,175,55,0.04)" }}>
                <p className="m-0 text-sm italic" style={{ color:"var(--text-muted)" }}><strong className="text-[#D4AF37] block mb-1">This app is divided into:</strong>Card games, Slots, Poker, and many other sections — making it easy to find games you want to play.</p>
              </div>
            </div>
            <div>
              <span className="section-label">Popularity</span>
              <h3 className="text-2xl font-bold mt-2 mb-5" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Why is ZC777 Game So Popular?</h3>
              <ul className="space-y-3">
                {["Earn real money while having fun with simple, easy-to-understand rules","Beautiful, colorful design gives a real casino experience on your device","Easy deposit and withdraw via EasyPaisa and JazzCash without delays","30+ exciting games: Teen Patti, Dragon vs Tiger, Poker, Rummy, Slots","Daily bonuses and rewards help you earn coins and extra cash every day","Very safe and secure — protects personal details and money","Works smoothly even on low-storage and older Android devices"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color:"var(--text-muted)" }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color:"#D4AF37" }}>✦</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GAME SCREENSHOTS */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="game-screenshots-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Screenshots</span>
            <p className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Game Screenshots</p>
            <div className="gold-divider" />
          </div>
          <ScreenshotScroller />
        </div>
      </section>

      {/* HOW TO START */}
      <section className="py-20" aria-labelledby="start-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Getting Started</span><h2 id="start-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>How to Start with ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-0">
              {[{n:"01",t:"Download the APK",d:"Open the official ZC777 Game website and download the APK file to your Android device."},{n:"02",t:"Allow Unknown Sources",d:"Click on the downloaded APK file to start installation. Allow Unknown Sources in Settings to proceed."},{n:"03",t:"Install the App",d:"Complete the installation. Once done, the ZC777 Game icon will appear on your home screen."},{n:"04",t:"Register or Play as Guest",d:"Open the app and log in with your mobile number or play as a guest to explore first."},{n:"05",t:"Claim Welcome Bonus",d:"Once logged in, you receive free chips or welcome bonuses to start playing right away."},{n:"06",t:"Choose a Game & Play",d:"Browse 30+ games, choose your table, and start enjoying real money gameplay!"}].map((step) => (
                <li key={step.n} className="flex gap-5 py-5 border-b last:border-0" style={{ borderColor:"var(--border)" }}>
                  <span className="text-3xl font-bold flex-shrink-0 w-12 leading-none mt-1" style={{ fontFamily:"var(--font-cinzel)",color:"rgba(212,175,55,0.25)" }}>{step.n}</span>
                  <div><p className="font-bold text-base mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#F0EAD6" }}>{step.t}</p><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{step.d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>



      {/* FEATURES */}
      <section className="py-20" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Why Choose ZC777</span><h2 id="features-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Top Features of ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.n} className="casino-card p-6 flex gap-4">
                <span className="text-sm font-bold flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37",borderColor:"var(--border)",background:"rgba(212,175,55,0.08)" }}>{f.n}</span>
                <div><p className="font-bold text-sm mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>{f.title}</p><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="games-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Game Library</span><h2 id="games-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Best Games to Play on ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{title:"1: Multiplayer Games",emoji:"🎮",games:multiplayer,color:"from-[#1a0a2e] to-[#2d1b69]"},{title:"2: Skill-Based Games",emoji:"🧠",games:skill,color:"from-[#0a1a0a] to-[#1a4a1a]"},{title:"3: Slots",emoji:"🎰",games:slots,color:"from-[#1a0a0a] to-[#4a0e0e]"}].map((cat) => (
              <div key={cat.title} className="casino-card overflow-hidden">
                <div className={`h-28 flex items-center justify-center gap-3 bg-gradient-to-br ${cat.color}`}>
                  <span className="text-4xl">{cat.emoji}</span>
                  <p className="text-sm font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>{cat.title}</p>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {cat.games.map((g) => (<li key={g} className="flex items-center gap-2 text-sm" style={{ color:"var(--text-muted)" }}><span style={{ color:"#D4AF37" }}>▸</span>{g}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS TABLES */}
      <section className="py-20" aria-labelledby="bonus-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">New Player Benefits</span><h2 id="bonus-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Benefits for New Players by Joining ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="casino-card p-6">
              <p className="text-base font-bold mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>1: New Player Welcome Bonus</p>
              <p className="text-xs mb-4" style={{ color:"var(--text-muted)" }}>100% recharge bonus for all new users on their first deposit.</p>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor:"var(--border)" }}>
                <table className="w-full text-xs"><thead><tr style={{ background:"rgba(212,175,55,0.1)" }}><th className="px-3 py-2 text-left" style={{ color:"#D4AF37" }}>Deposit (PKR)</th><th className="px-3 py-2 text-right" style={{ color:"#D4AF37" }}>Bonus (PKR)</th></tr></thead>
                <tbody>{[["100","100"],["1,000","1,000"],["5,000","5,000"],["10,000","10,000"],["20,000","20,000"],["100,000","100,000"]].map(([d,b]) => (<tr key={d} className="border-t" style={{ borderColor:"var(--border)" }}><td className="px-3 py-2" style={{ color:"var(--text-muted)" }}>{d}</td><td className="px-3 py-2 text-right text-green-400 font-bold">{b}</td></tr>))}</tbody></table>
              </div>
            </div>
            <div className="casino-card p-6">
              <p className="text-base font-bold mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>2: Recharge Rebate</p>
              <p className="text-xs mb-4" style={{ color:"var(--text-muted)" }}>Recharge rebate bonuses for every player on deposit.</p>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor:"var(--border)" }}>
                <table className="w-full text-xs"><thead><tr style={{ background:"rgba(212,175,55,0.1)" }}><th className="px-3 py-2 text-left" style={{ color:"#D4AF37" }}>Rebate</th><th className="px-3 py-2 text-center" style={{ color:"#D4AF37" }}>Recharge</th><th className="px-3 py-2 text-right" style={{ color:"#D4AF37" }}>Wager</th></tr></thead>
                <tbody>{[["5%","3,000 PKR","2x"],["10%","5,000","3x"],["15%","8,000","4x"],["20%","10,000","5x"],["25%","20,000","6x"],["30%","50,000","7x"]].map(([r,rc,w]) => (<tr key={r} className="border-t" style={{ borderColor:"var(--border)" }}><td className="px-3 py-2 text-green-400 font-bold">{r}</td><td className="px-3 py-2 text-center" style={{ color:"var(--text-muted)" }}>{rc}</td><td className="px-3 py-2 text-right" style={{ color:"var(--text-muted)" }}>{w}</td></tr>))}</tbody></table>
              </div>
            </div>
            <div className="casino-card p-6">
              <p className="text-base font-bold mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>3: VIP Level Rebate</p>
              <p className="text-xs mb-4" style={{ color:"var(--text-muted)" }}>Min 3,000 PKR deposit. Claimable every day.</p>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor:"var(--border)" }}>
                <table className="w-full text-xs"><thead><tr style={{ background:"rgba(212,175,55,0.1)" }}><th className="px-3 py-2 text-left" style={{ color:"#D4AF37" }}>VIP Level</th><th className="px-3 py-2 text-right" style={{ color:"#D4AF37" }}>Rebate</th></tr></thead>
                <tbody>{[["V1–V2","1%"],["V3–V4","2%"],["V5–V6","3%"],["V7–V8","4%"],["V9–V10","5%"],["V11–V12","6%"],["V13–V14","7%"],["V15–V16","8%"],["V17–V18","9%"],["V19–V20","10%"]].map(([v,r]) => (<tr key={v} className="border-t" style={{ borderColor:"var(--border)" }}><td className="px-3 py-2" style={{ color:"var(--text-muted)" }}>{v}</td><td className="px-3 py-2 text-right text-green-400 font-bold">{r}</td></tr>))}</tbody></table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD & INSTALL STEPS */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} id="download-steps" aria-labelledby="dl-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Installation Guide</span><h2 id="dl-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Download ZC777 Game APK Latest Version For Android</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-xl font-bold mb-6 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>📥 Download Steps</p>
              <ol className="space-y-4">{["Open the browser on your Android device and click on the search bar.","Type the latest version of ZC777 Game and visit a trusted website.","On the trusted website, click on the Download button.","Wait a few seconds for the download to complete.","The file will be saved in the Downloads folder of your device."].map((s,i) => (<li key={i} className="flex gap-4"><span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border" style={{ background:"rgba(212,175,55,0.1)",borderColor:"var(--border)",color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>{i+1}</span><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{s}</p></li>))}</ol>
            </div>
            <div>
              <p className="text-xl font-bold mb-6 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>⚙️ Installation Guide</p>
              <ol className="space-y-4">{["Grant permission to install unknown sources on your device.","Open Settings → Security and enable Install Unknown Apps.","Open File Manager and go to the Downloads folder.","Click on the downloaded APK file — installation will start.","Wait until the installation completes successfully.","Once complete, the app icon will show on your device.","Click it to launch the app and start playing!"].map((s,i) => (<li key={i} className="flex gap-4"><span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border" style={{ background:"rgba(212,175,55,0.1)",borderColor:"var(--border)",color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>{i+1}</span><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{s}</p></li>))}</ol>
            </div>
          </div>
                    <div className="text-center mt-12">
            <a
              href={APK_URL}
              className="btn-primary inline-flex items-center gap-3 text-base px-14 py-5 rounded-2xl font-bold tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, #A07C10, #D4AF37, #F5D76E, #D4AF37)",
                boxShadow: "0 0 25px rgba(212,175,55,0.6), 0 0 50px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.15)",
                color: "#0A0A0F",
                fontSize: "1rem",
                letterSpacing: "0.15em",
              }}
              download
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
              Download Now
            </a>
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section className="py-20" aria-labelledby="sysreq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Compatibility</span><p className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>System Requirements</p><div className="gold-divider" /></div>
          <div className="rounded-2xl overflow-hidden border max-w-3xl mx-auto" style={{ borderColor:"var(--border)" }}>
            <table className="w-full text-sm" role="table"><thead><tr style={{ background:"rgba(212,175,55,0.1)" }}><th className="px-5 py-4 text-left" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>System</th><th className="px-5 py-4 text-center" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>Minimum</th><th className="px-5 py-4 text-center" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>Recommended</th></tr></thead>
            <tbody>{[["Operating System","Android 4.1","Android 8.0 or above"],["RAM","2GB or more","4GB or more"],["Storage Space","At least 500MB free","1GB free space"],["Processor","Quad-core 1.5GHz","Octa-core 2.0GHz"],["Internet","Stable 3G or WiFi","Fast & stable 4G or WiFi"]].map(([sys,min,rec],i) => (<tr key={sys} className="border-t" style={{ borderColor:"var(--border)",background:i%2===0?"var(--bg-card)":"var(--bg-mid)" }}><td className="px-5 py-3 font-bold" style={{ color:"#F0EAD6",fontFamily:"var(--font-cinzel)",fontSize:"0.8rem" }}>{sys}</td><td className="px-5 py-3 text-center" style={{ color:"var(--text-muted)" }}>{min}</td><td className="px-5 py-3 text-center text-green-400 font-bold">{rec}</td></tr>))}</tbody></table>
          </div>
        </div>
      </section>

      {/* REGISTER & LOGIN */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="register-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Account Setup</span><h2 id="register-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>How to Register &amp; Login on ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="casino-card p-7"><h3 className="text-lg font-bold mb-5" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>1: Register Method</h3><ol className="space-y-3">{["Open the ZC777 Game app on your device.","Tap on the Register or Sign Up option.","Enter your valid mobile number or email address.","Set a strong password for your account.","Enter the OTP received on your phone or email.","Your account will be created successfully."].map((s,i) => (<li key={i} className="flex gap-3 text-sm" style={{ color:"var(--text-muted)" }}><span className="flex-shrink-0 font-bold" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>{i+1}.</span>{s}</li>))}</ol></div>
            <div className="casino-card p-7"><h3 className="text-lg font-bold mb-5" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>2: Login Method</h3><ol className="space-y-3">{["Open the ZC777 Game app on your device.","Tap the Login button on the homescreen.","Enter your registered mobile number/email and password.","Make sure all entered details are correct.","Tap on Sign In or Login to proceed.","Use Forgot Password if you forget your password.","Once logged in, start playing games immediately."].map((s,i) => (<li key={i} className="flex gap-3 text-sm" style={{ color:"var(--text-muted)" }}><span className="flex-shrink-0 font-bold" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>{i+1}.</span>{s}</li>))}</ol></div>
          </div>
        </div>
      </section>

      {/* DEPOSIT & WITHDRAW */}
      <section className="py-20" aria-labelledby="payment-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Payments</span><h2 id="payment-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Ways to Deposit &amp; Withdraw Money in ZC777 Game</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{emoji:"📱",title:"1: JazzCash",desc:"Most trusted mobile banking service. Deposit quickly and withdraw winnings to your JazzCash wallet within seconds. Fast, safe transactions every time."},{emoji:"💳",title:"2: EasyPaisa",desc:"Secure and widely used payment method. Add funds to your game account and transfer winnings to your EasyPaisa wallet in just a few easy steps."},{emoji:"🏦",title:"3: Bank Card",desc:"Send winnings directly to your bank account. Withdraw up to PKR 20,000 maximum per transaction. Ideal for larger payouts securely."}].map((m) => (
              <div key={m.title} className="casino-card p-7 text-center"><div className="text-5xl mb-4">{m.emoji}</div><p className="font-bold text-base mb-3 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>{m.title}</p><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{m.desc}</p></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="casino-card p-7"><p className="text-lg font-bold mb-5 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>💰 How to Deposit Money</p><ol className="space-y-3">{["Open the ZC777 Game app and log in.","Tap on the Wallet option on the homescreen.","In the Wallet section, tap on Deposit.","Choose your preferred payment method.","Enter the amount you want to deposit.","Tap Confirm and wait for the transaction to complete.","Balance will appear in your game wallet instantly."].map((s,i) => (<li key={i} className="flex gap-3 text-sm" style={{ color:"var(--text-muted)" }}><span className="flex-shrink-0 font-bold" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>{i+1}.</span>{s}</li>))}</ol></div>
            <div className="casino-card p-7"><p className="text-lg font-bold mb-5 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>💸 How to Withdraw Money</p><ol className="space-y-3">{["Open the ZC777 Game app and log in.","Tap on the Wallet option on the main screen.","In the Wallet section, tap on Withdrawal.","Choose your payment method (JazzCash, EasyPaisa, or Bank Card).","Enter the amount you want to withdraw.","Enter required details like your account number.","Double-check all details and tap Confirm.","Money will appear in your selected payment method."].map((s,i) => (<li key={i} className="flex gap-3 text-sm" style={{ color:"var(--text-muted)" }}><span className="flex-shrink-0 font-bold" style={{ color:"#D4AF37",fontFamily:"var(--font-cinzel)" }}>{i+1}.</span>{s}</li>))}</ol></div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="tips-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Expert Advice</span><h2 id="tips-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Tips &amp; Tricks to Earn Maximum on ZC777 Game</h2><div className="gold-divider" /><p className="text-sm mt-4 max-w-xl mx-auto" style={{ color:"var(--text-muted)" }}>For a deeper look, read our full <Link href="/blog/zc777-game-tips" className="underline underline-offset-2" style={{ color:"#D4AF37" }}>ZC777 Game Tips guide</Link> with 10 expert strategies.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tips.map((tip,i) => (
              <div key={tip.t} className="casino-card p-5 flex gap-4">
                <span className="text-xl font-bold flex-shrink-0" style={{ fontFamily:"var(--font-cinzel)",color:"rgba(212,175,55,0.35)" }}>{String(i+1).padStart(2,"0")}</span>
                <div><p className="font-bold text-sm mb-1 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#F0EAD6" }}>{tip.t}</p><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{tip.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S NEW */}
      <section className="py-20" aria-labelledby="whatsnew-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Latest Update</span><h2 id="whatsnew-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>What&apos;s New in the Latest Version of ZC777 Game?</h2><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {["Improved graphics and smooth animations for a better visual experience.","Faster performance — app opens quickly and runs without lag.","Simplified menu and layout, especially easy for new users.","More games added including Dragon vs Tiger, Rummy, and others.","Withdrawal and deposit options now work faster and more smoothly.","Better security measures to protect your account and money.","New bonuses and referral rewards for more earning opportunities.","Old errors and app issues removed for a smooth gaming experience.","Improved background music and game sounds for more fun.","New VIP system with extra prizes and benefits."].map((item,i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border" style={{ background:"var(--bg-card)",borderColor:"var(--border)" }}><span className="text-green-400 flex-shrink-0 mt-0.5">✓</span><p className="text-sm m-0" style={{ color:"var(--text-muted)" }}>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="proscons-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Honest Review</span><p className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Pros &amp; Cons of Using ZC777 Game</p><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* PROS */}
            <div className="casino-card p-8 w-full">
              <p className="text-lg font-bold mb-6 pb-3 border-b flex items-center gap-2 m-0" style={{ fontFamily:"var(--font-cinzel)", color:"#2ECC71", borderColor:"rgba(46,204,113,0.25)" }}>
                ✅ Pros
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
                    <span className="mt-1 flex-shrink-0 text-green-400 font-bold">✦</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color:"var(--text-white)" }}>{title}</p>
                      <p className="text-xs mt-0.5" style={{ color:"var(--text-muted)" }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONS */}
            <div className="casino-card p-8 w-full">
              <p className="text-lg font-bold mb-6 pb-3 border-b flex items-center gap-2 m-0" style={{ fontFamily:"var(--font-cinzel)", color:"#E74C3C", borderColor:"rgba(231,76,60,0.25)" }}>
                ❌ Cons
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
                    <span className="mt-1 flex-shrink-0 text-red-400 font-bold">✦</span>
                    <div>
                      <p className="text-sm font-semibold" style={{ color:"var(--text-white)" }}>{title}</p>
                      <p className="text-xs mt-0.5" style={{ color:"var(--text-muted)" }}>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-16" aria-labelledby="safety-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="casino-card p-8 max-w-3xl mx-auto">
            <h2 id="safety-heading" className="text-xl font-bold mb-4" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>🔒 About the Safety &amp; Security of ZC777 Game</h2>
            <p className="text-sm leading-relaxed" style={{ color:"var(--text-muted)" }}>ZC777 Game uses <strong className="text-white">data encryption</strong> and <strong className="text-white">SSL certificates</strong> to protect your information. It supports local payment options like JazzCash and EasyPaisa. However, this app is not officially on the Google Play Store — always download from official trusted sources. Avoid sharing sensitive personal information or banking details with anyone.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20" style={{ background:"var(--bg-section)" }} aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Support</span><p className="text-3xl font-bold m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>How to Contact ZC777 Game</p><div className="gold-divider" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[{emoji:"💬",title:"Live Chat",desc:"Talk directly to support inside the app. The fastest way to get help — responds in real time without leaving the app."},{emoji:"📱",title:"WhatsApp",desc:"Contact support via WhatsApp using the number in the app. Send your problem and receive instructions or solutions conveniently."},{emoji:"❓",title:"FAQs Section",desc:"Check the FAQs section before contacting support. Covers registration, deposits, withdrawals, bonuses, and game rules."}].map((c) => (
              <div key={c.title} className="casino-card p-7 text-center"><div className="text-5xl mb-4">{c.emoji}</div><p className="font-bold text-base mb-3 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>{c.title}</p><p className="text-sm leading-relaxed m-0" style={{ color:"var(--text-muted)" }}>{c.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12"><span className="section-label">Common Questions</span><h2 id="faq-heading" className="text-3xl font-bold" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Frequently Asked Questions</h2><div className="gold-divider" /></div>
          <div className="max-w-3xl mx-auto"><FaqAccordion faqs={homeFaqs} /></div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center" style={{ background:"var(--bg-section)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-3xl font-bold mb-4 m-0" style={{ fontFamily:"var(--font-cinzel)",color:"#D4AF37" }}>Conclusion</p>
          <p className="max-w-3xl mx-auto mb-4" style={{ color:"var(--text-muted)" }}>ZC777 Game is one of the most popular online card games in Pakistan. It provides fun, entertainment, and a great chance to earn money if you play wisely. The deposit and withdrawal system through JazzCash or EasyPaisa is very convenient. Play responsibly, use smart strategies, and focus on skill rather than luck for the best experience.</p>
          {/* Download button removed as requested */}
        </div>
      </section>
    </>
  );
}
