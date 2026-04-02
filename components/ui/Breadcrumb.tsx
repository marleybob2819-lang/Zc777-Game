import Link from "next/link";

interface Crumb { label: string; href?: string; }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap text-sm mb-6" style={{ color: "var(--text-muted)" }}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true" style={{ color: "var(--text-muted)" }}>›</span>}
          {item.href
            ? <Link href={item.href} className="hover:text-[#D4AF37] transition-colors">{item.label}</Link>
            : <span style={{ color: "#D4AF37" }} aria-current="page">{item.label}</span>
          }
        </span>
      ))}
    </nav>
  );
}
