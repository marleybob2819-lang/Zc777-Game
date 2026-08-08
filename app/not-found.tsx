import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found on ZC777 Game.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-[72px]">
      <div>
        <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#1a1a1a" }}>404</h1>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#333333" }}>Page Not Found</h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/blog" className="btn-outline">Read Blog</Link>
        </div>
      </div>
    </div>
  );
}
