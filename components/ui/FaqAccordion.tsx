import type { FAQ } from "@/types";

/** Server-friendly FAQ — no client JS, no hydration boundary. */
export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-1">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="border-b group"
          style={{ borderColor: "var(--border)" }}
        >
          <summary
            className="w-full text-left py-5 flex items-center justify-between gap-4 text-base font-semibold cursor-pointer list-none text-[#333333] hover:text-[#1a1a1a] [&::-webkit-details-marker]:hidden"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            <span>{faq.question}</span>
            <span
              className="text-[#1a1a1a] text-xl flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="pb-5 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
