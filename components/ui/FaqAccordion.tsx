"use client";
import { useState } from "react";
import type { FAQ } from "@/types";

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden border"
          style={{ borderColor: "var(--border)" }}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-sm font-semibold transition-colors duration-200 ${
              open === i ? "text-[#D4AF37]" : "text-[#F0EAD6] hover:text-[#D4AF37]"
            }`}
            style={{ background: open === i ? "rgba(212,175,55,0.06)" : "var(--bg-card)", fontFamily: "var(--font-cinzel)" }}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span itemProp="name">{faq.question}</span>
            <span
              className="text-[#D4AF37] text-xl flex-shrink-0 transition-transform duration-200"
              aria-hidden="true"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "500px" : "0" }}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="px-6 py-5 text-sm leading-relaxed" style={{ background: "var(--bg-section)", color: "var(--text-muted)" }} itemProp="text">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
