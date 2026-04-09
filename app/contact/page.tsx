import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { contactFaqs } from "@/lib/data";
import { Breadcrumb }   from "@/components/ui/Breadcrumb";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ContactForm }  from "@/components/sections/ContactForm";

export const dynamic = "force-static";
export const revalidate = 86400;
import { WHATSAPP_NUMBER } from "@/lib/config";

export const metadata: Metadata = {
  ...buildMetadata({
    title:       "Contact ZC777 Casino | 24/7 Support Pakistan | Live Chat, Email & WhatsApp",
    description: "Contact ZC777 Casino 24/7 via live chat, email, or WhatsApp. Get help with deposits, withdrawals, games & accounts. Urdu-speaking support available.",
    keywords:    "contact ZC777 casino, ZC777 customer support, casino help Pakistan, casino support Urdu, ZC777 live chat",
    path:        "/contact",
  }),
  robots: { index: false, follow: false },
};

const channels = [
  { emoji: "💬", title: "Live Chat",       desc: "Connect with a real support agent in under 2 minutes. Available 24/7.",        cta: "Start Live Chat",  href: "#",                        outline: false },
  { emoji: "📱", title: "WhatsApp Support",desc: "Message us for quick help with your account, deposits, or withdrawals.",        cta: "WhatsApp Us",       href: `https://wa.me/${WHATSAPP_NUMBER}`, outline: true  },
  { emoji: "📧", title: "Email Support",   desc: "For detailed queries, complaints, or account issues — email our team.",         cta: "Email Us Now",      href: "mailto:support@zc777casino.com", outline: true  },
];

const contactDetails = [
  { label: "📧 Email Addresses",  items: ["General: support@zc777casino.com", "Payments: payments@zc777casino.com", "Technical: tech@zc777casino.com", "Affiliates: affiliates@zc777casino.com"] },
  { label: "⏰ Support Hours",    items: ["Live Chat: 24/7, Every Day", "WhatsApp: 24/7, Every Day", "Email: Replied within 4 hours", "Pakistan Standard Time (PKT)"] },
  { label: "🌐 Social Media",     items: ["Facebook: /zc777casino", "Twitter/X: @zc777casino", "Instagram: @zc777casino", "YouTube: ZC777 Casino"] },
  { label: "🆘 Problem Gambling", items: ["BeGambleAware.org", "GamCare.org.uk", "National Problem Gambling Helpline"] },
];

const responseTimes = [
  { value: "<2 min", label: "Live Chat",    desc: "Average live chat response time."             },
  { value: "<5 min", label: "WhatsApp",     desc: "Typical WhatsApp reply time."                 },
  { value: "<4 hrs", label: "Email",        desc: "All email enquiries answered within 4 hours." },
  { value: "24/7",   label: "Always Open",  desc: "Support never closes — not on weekends."      },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(contactFaqs)) }} />

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="contact-h1">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
          <h1 id="contact-h1" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
            Contact ZC777 Casino
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Our support team is available <strong className="text-white">24 hours a day, 7 days a week</strong> to help Pakistani players with any question, issue, or feedback.
          </p>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section className="py-24" aria-labelledby="support-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">How to Reach Us</span>
            <h2 id="support-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              ZC777 Customer Support Channels
            </h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Choose the support method that works best for you. All channels support English and Urdu.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {channels.map((ch) => (
              <div key={ch.title} className="casino-card p-8 text-center flex flex-col">
                <div className="text-4xl mb-4">{ch.emoji}</div>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>{ch.title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>{ch.desc}</p>
                <a href={ch.href} className={ch.outline ? "btn-outline justify-center" : "btn-primary justify-center"} target={ch.href.startsWith("http") ? "_blank" : undefined} rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {ch.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Contact details grid */}
          <div className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
            {contactDetails.map((col) => (
              <div key={col.label}>
                <h5 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>{col.label}</h5>
                <ul className="space-y-1.5">
                  {col.items.map((item) => <li key={item} className="text-sm" style={{ color: "var(--text-muted)" }}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + FAQ */}
      <section className="py-24" style={{ background: "var(--bg-section)" }} aria-labelledby="form-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* FORM */}
            <div>
              <span className="section-label">Send a Message</span>
              <h2 id="form-heading" className="text-3xl font-bold mt-2 mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
                Get in Touch with ZC777
              </h2>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>
                Fill out the form below and our team will get back to you within 4 hours. For urgent help, use Live Chat.
              </p>
              <ContactForm />
            </div>

            {/* FAQ */}
            <div>
              <span className="section-label">Before You Contact Us</span>
              <h2 className="text-3xl font-bold mt-2 mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
                Common Support Questions
              </h2>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>
                Check here first — your answer might already be here.
              </p>
              <FaqAccordion faqs={contactFaqs} />

              <div className="mt-8 border-l-2 pl-5 py-3 rounded-r-lg" style={{ borderColor: "#D4AF37", background: "rgba(212,175,55,0.04)" }}>
                <strong className="block text-sm mb-1" style={{ color: "#D4AF37" }}>📖 Help Centre</strong>
                <p className="text-sm m-0" style={{ color: "var(--text-muted)" }}>Browse our full Help Centre for step-by-step guides on deposits, withdrawals, bonuses, and account management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSE TIMES */}
      <section className="py-24" aria-labelledby="response-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Our Promise</span>
            <h2 id="response-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
              ZC777 Support Response Time Guarantee
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimes.map((rt) => (
              <div key={rt.label} className="casino-card p-8 text-center">
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>{rt.value}</div>
                <h4 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#F0EAD6" }}>{rt.label}</h4>
                <p className="text-xs m-0" style={{ color: "var(--text-muted)" }}>{rt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
