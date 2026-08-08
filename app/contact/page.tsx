import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactFaqs } from "@/lib/data";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { Breadcrumb }   from "@/components/ui/Breadcrumb";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ContactForm }  from "@/components/sections/ContactForm";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  ...buildMetadata({
    title:       "Contact ZC777 Game Support – Pakistan Help",
    description: "Contact ZC777 Game support in Pakistan via the contact form, WhatsApp, or email. Get help with APK, deposits, withdrawals, and account issues.",
    keywords:    "contact ZC777 Game, ZC777 support Pakistan, ZC777 WhatsApp, ZC777 customer help",
    path:        "/contact",
  }),
};

const whatsappDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
const whatsappConfigured = Boolean(whatsappDigits) && !/^920{6,}$/.test(whatsappDigits);

const channels = [
  { title: "Contact Form",    desc: "Send a detailed message and our team will reply within 4 hours.",               cta: "Open Contact Form", href: "#form-heading", outline: false },
  ...(whatsappConfigured
    ? [{ title: "WhatsApp Support", desc: "Message us for quick help with your account, deposits, or withdrawals.", cta: "WhatsApp Us", href: `https://wa.me/${whatsappDigits}`, outline: true }]
    : []),
  { title: "Email Support",   desc: "For detailed queries, complaints, or account issues — email our team.",         cta: "Email Us Now",      href: "mailto:support@zc777casino.com", outline: true  },
];

const contactDetails = [
  { label: "Email Addresses",  items: ["General: support@zc777casino.com", "Payments: payments@zc777casino.com", "Technical: tech@zc777casino.com", "Affiliates: affiliates@zc777casino.com"] },
  { label: "Support Hours",    items: ["Contact form: reply within 4 hours", "WhatsApp: when agents are online", "Email: Replied within 4 hours", "Pakistan Standard Time (PKT)"] },
  { label: "Social Media",     items: ["Facebook: /zc777casino", "Twitter/X: @zc777casino", "Instagram: @zc777casino", "YouTube: ZC777 Casino"] },
  { label: "Problem Gambling", items: ["BeGambleAware.org", "GamCare.org.uk", "National Problem Gambling Helpline"] },
];

const responseTimes = [
  { value: "<4 hrs", label: "Contact Form", desc: "Form messages answered within 4 hours."           },
  { value: "<5 min", label: "WhatsApp",      desc: "Typical WhatsApp reply time when available."     },
  { value: "<4 hrs", label: "Email",         desc: "All email enquiries answered within 4 hours."    },
  { value: "24/7",   label: "Help Guides",   desc: "Self-serve guides in our blog are always open."  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]) as Record<string, unknown>} />
      <JsonLd data={faqSchema(contactFaqs) as Record<string, unknown>} />

      {/* PAGE HERO */}
      <section className="page-hero" aria-labelledby="contact-h1">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
          <h1 id="contact-h1" className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
            Contact ZC777 Game Support
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Get help with ZC777 APK, deposits, withdrawals, and account issues — support available 24/7 for Pakistani players.
          </p>
        </div>
      </section>

      {/* SUPPORT CHANNELS */}
      <section className="py-10" aria-labelledby="support-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 id="support-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
              ZC777 Customer Support Channels
            </h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Choose the support method that works best for you. All channels support English and Urdu.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {channels.map((ch) => (
              <div key={ch.title} className="text-center flex flex-col">
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>{ch.title}</h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-muted)" }}>{ch.desc}</p>
                <a href={ch.href} className={ch.outline ? "btn-outline justify-center" : "btn-primary justify-center"} target={ch.href.startsWith("http") ? "_blank" : undefined} rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {ch.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Contact details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((col) => (
              <div key={col.label}>
                <h5 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>{col.label}</h5>
                <ul className="space-y-1.5">
                  {col.items.map((item) => <li key={item} className="text-sm" style={{ color: "var(--text-muted)" }}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + FAQ */}
      <section className="py-10"  aria-labelledby="form-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* FORM */}
            <div>
              <h2 id="form-heading" className="text-3xl font-bold mt-2 mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
                Get in Touch with ZC777
              </h2>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>
                Fill out the form below and our team will get back to you within 4 hours. For faster help, use WhatsApp or email.
              </p>
              <ContactForm />
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mt-2 mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
                Common Support Questions
              </h2>
              <p className="mb-8" style={{ color: "var(--text-muted)" }}>
                Check here first — your answer might already be here.
              </p>
              <FaqAccordion faqs={contactFaqs} />

              <div className="mt-8 border-l-2 pl-5 py-3 rounded-r-lg" style={{ borderColor: "#1a1a1a", background: "rgba(0,0,0,0.04)" }}>
                <strong className="block text-sm mb-1" style={{ color: "#1a1a1a" }}>Help Centre</strong>
                <p className="text-base m-0" style={{ color: "var(--text-muted)" }}>
                  Browse our{" "}
                  <Link href="/blog" className="underline underline-offset-2" style={{ color: "#1a1a1a" }}>blog guides</Link>
                  {" "}for step-by-step help on deposits, withdrawals, bonuses, and account setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSE TIMES */}
      <section className="py-10" aria-labelledby="response-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 id="response-heading" className="text-3xl font-bold" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>
              ZC777 Support Response Time Guarantee
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimes.map((rt) => (
              <div key={rt.label} className="text-center">
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>{rt.value}</div>
                <h4 className="font-bold text-sm mb-2" style={{ fontFamily: "var(--font-cinzel)", color: "#333333" }}>{rt.label}</h4>
                <p className="text-sm m-0" style={{ color: "var(--text-muted)" }}>{rt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
