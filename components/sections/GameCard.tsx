import type { Game } from "@/types";

export function GameCard({ game }: { game: Game }) {
  const badgeClass =
    game.badgeType === "green" ? "badge-green" :
    game.badgeType === "red"   ? "badge-red"   : "badge-gold";

  return (
    <article className="casino-card" itemScope itemType="https://schema.org/Game">
      {/* Thumb */}
      <div className={`h-44 flex items-center justify-center text-6xl bg-gradient-to-br ${game.bgClass}`} aria-hidden="true">
        {game.emoji}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-base md:text-lg font-bold mb-2 text-left" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }} itemProp="name">
          {game.name}
        </h3>
        <p className="text-sm leading-relaxed mb-4 text-left" style={{ color: "var(--text-muted)" }} itemProp="description">
          {game.description}
        </p>

        <ul className="space-y-1.5 mb-5">
          {game.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
              <span style={{ color: "#D4AF37", flexShrink: 0 }}>✦</span>
              {f}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            RTP: <span className="text-green-400 font-bold">{game.rtp}</span>
          </span>
          <span className={badgeClass}>{game.badge}</span>
        </div>
      </div>
    </article>
  );
}
