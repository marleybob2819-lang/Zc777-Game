import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar }    from "@/components/layout/Navbar";
import { Footer }    from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { BASE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Download ZC777 Game APK for Android – Pakistan",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download free ZC777 Game APK for Android in Pakistan. Play Teen Patti, Rummy & real money games. Fast JazzCash & EasyPaisa withdrawals.",
  icons: {
    icon: "/images/zc777-game-Favicon.webp",
    shortcut: "/images/zc777-game-Favicon.webp",
    apple: "/images/zc777-game-Favicon.webp",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="bg-white text-[#1a1a1a]" suppressHydrationWarning>
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
