import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Lato } from "next/font/google";
import "@/styles/globals.css";
import { Navbar }        from "@/components/layout/Navbar";
import { Footer }        from "@/components/layout/Footer";
import { BackToTop }     from "@/components/ui/BackToTop";
import { buildMetadata, websiteSchema, organizationSchema } from "@/lib/seo";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title:       "ZC777 Game | Download APK & Play Real Money Games in Pakistan 2026",
  description: "ZC777 Game is Pakistan's premier online card game platform. Download APK and play Teen Patti, Rummy, Dragon vs Tiger. Win real cash via JazzCash & EasyPaisa.",
  keywords:    "ZC777 Game, ZC777 APK download, online card game Pakistan, Teen Patti Pakistan, real money game Pakistan",
  path:        "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${cinzel.variable} ${cinzelDecorative.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
