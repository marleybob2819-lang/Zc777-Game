"use client";
import { useState } from "react";
import { SUPPORT_EMAIL } from "@/lib/config";

type FormState = "idle" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name    = (data.get("name")    as string) ?? "";
    const email   = (data.get("email")   as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    if (!name || !email || !message) {
      setState("error");
      return;
    }

    const subject = encodeURIComponent(
      `[ZC777] ${(data.get("subject") as string) || "General Enquiry"} — from ${name}`
    );
    const phone    = (data.get("phone")    as string) ?? "";
    const username = (data.get("username") as string) ?? "";
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nUsername: ${username || "N/A"}\n\n${message}`
    );

    window.open(`mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setState("success");
    form.reset();
    setTimeout(() => setState("idle"), 6000);
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input type="text" id="cf-name" name="name" required autoComplete="name"
            placeholder="Your full name"
            className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
            style={{ background: "var(--bg-mid)", borderColor: "var(--border)", color: "var(--text-white)" }}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input type="email" id="cf-email" name="email" required autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border focus:border-[#D4AF37] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
            style={{ background: "var(--bg-mid)", borderColor: "var(--border)", color: "var(--text-white)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          WhatsApp / Phone
        </label>
        <input type="tel" id="cf-phone" name="phone" autoComplete="tel"
          placeholder="+92 300 0000000"
          className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border focus:border-[#D4AF37]"
          style={{ background: "var(--bg-mid)", borderColor: "var(--border)", color: "var(--text-white)" }}
        />
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          Subject <span className="text-red-400">*</span>
        </label>
        <select id="cf-subject" name="subject" required
          className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border focus:border-[#D4AF37] cursor-pointer"
          style={{ background: "var(--bg-mid)", borderColor: "var(--border)", color: "var(--text-muted)" }}
        >
          <option value="" disabled>Select a subject...</option>
          <option value="account">Account &amp; Registration</option>
          <option value="deposit">Deposit Issue</option>
          <option value="withdrawal">Withdrawal Issue</option>
          <option value="game">Game Problem / Bug</option>
          <option value="bonus">Bonus &amp; Promotions</option>
          <option value="rg">Responsible Gambling</option>
          <option value="affiliate">Affiliate Programme</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-username" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          ZC777 Username (if registered)
        </label>
        <input type="text" id="cf-username" name="username"
          placeholder="Your ZC777 username"
          className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border focus:border-[#D4AF37]"
          style={{ background: "var(--bg-mid)", borderColor: "var(--border)", color: "var(--text-white)" }}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)" }}>
          Your Message <span className="text-red-400">*</span>
        </label>
        <textarea id="cf-message" name="message" required rows={5}
          placeholder="Please describe your question or issue in detail..."
          className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 border focus:border-[#D4AF37] resize-y min-h-[140px]"
          style={{ background: "var(--bg-mid)", borderColor: "var(--border)", color: "var(--text-white)", fontFamily: "inherit" }}
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm" style={{ color: "var(--text-muted)" }}>
        <input type="checkbox" required className="mt-0.5 flex-shrink-0 accent-[#D4AF37]" />
        I confirm I am 18 years or older and agree to ZC777&apos;s{" "}
        <a href="/privacy" className="text-[#D4AF37] hover:text-[#F5D76E]">Privacy Policy</a> and{" "}
        <a href="/terms" className="text-[#D4AF37] hover:text-[#F5D76E]">Terms &amp; Conditions</a>.
      </label>

      {state === "error" && (
        <p className="text-sm text-red-400 bg-red-900/20 border border-red-800/40 rounded-lg px-4 py-3">
          ⚠️ Please fill in all required fields before submitting.
        </p>
      )}

      {state === "success" && (
        <p className="text-sm text-green-400 bg-green-900/20 border border-green-800/40 rounded-lg px-4 py-3">
          ✓ Your email client has opened — please send the pre-filled message. We reply within 4 hours.
        </p>
      )}

      <button
        type="submit"
        className={`btn-primary w-full justify-center text-base py-4 ${state === "success" ? "opacity-60 pointer-events-none" : ""}`}
      >
        {state === "success" ? "✓ Email Client Opened!" : "📤 Send Message"}
      </button>
    </form>
  );
}
