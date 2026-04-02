import type { Feature } from "@/types";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="casino-card p-7">
      <div className="text-4xl mb-4" aria-hidden="true">{feature.emoji}</div>
      <h3 className="text-sm md:text-base font-bold mb-2 text-left" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>{feature.title}</h3>
      <p className="text-sm leading-relaxed m-0 text-left" style={{ color: "var(--text-muted)" }}>{feature.description}</p>
    </div>
  );
}
