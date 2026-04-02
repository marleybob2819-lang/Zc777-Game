// ── GAME ──────────────────────────────────────────────────
export interface Game {
  id:          string;
  name:        string;
  emoji:       string;
  description: string;
  rtp:         string;
  volatility:  string;
  badge:       string;
  badgeType:   "gold" | "green" | "red";
  features:    string[];
  bgClass:     string;
}

// ── BLOG POST ──────────────────────────────────────────────
export interface BlogPost {
  slug:        string;
  title:       string;
  excerpt:     string;
  category:    string;
  date:        string;
  dateISO:     string;
  readTime:    string;
  author:      string;
  authorTitle: string;
  emoji:       string;
  bgClass:     string;
  content?:         string;
  dateModifiedISO?: string;
  featureImage?: {
    src:     string;
    alt:     string;
    title:   string;
    caption: string;
  };
}

// ── FAQ ────────────────────────────────────────────────────
export interface FAQ {
  question: string;
  answer:   string;
}

// ── STAT ───────────────────────────────────────────────────
export interface Stat {
  value:  string;
  label:  string;
  suffix: string;
}

// ── TEAM MEMBER ────────────────────────────────────────────
export interface TeamMember {
  name:  string;
  role:  string;
  emoji: string;
  bio:   string;
}

// ── FEATURE ────────────────────────────────────────────────
export interface Feature {
  emoji:       string;
  title:       string;
  description: string;
}
