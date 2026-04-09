import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  ...buildMetadata({
    title:       "Privacy Policy – ZC777 Game Guides Website Pakistan",
    description: "Read our Privacy Policy to understand how we collect, use, and protect your data while using our ZC777 Game information website in Pakistan.",
    keywords:    "ZC777 Privacy Policy, ZC777 data protection, ZC777 website privacy Pakistan",
    path:        "/privacy",
  }),
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ])) }}
      />

      <section className="page-hero" aria-labelledby="privacy-h1">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <h1 id="privacy-h1" className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
            Privacy Policy – ZC777 Game Information Website
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose-casino">

          <p style={{ color: "var(--text-muted)" }}>
            We are committed to maintaining transparency and ensuring that your personal data is handled responsibly, especially for users in Pakistan.
          </p>

          <h2>Who We Are</h2>
          <p>We are an independent informational platform that provides guides, updates, and tips related to ZC777 Game.</p>
          <ul>
            <li>We do not operate the game</li>
            <li>We do not handle financial transactions</li>
            <li>We do not require sensitive personal data for basic use</li>
          </ul>
          <p>Our website is designed to deliver safe, informative, and user-friendly content.</p>

          <h2>Information We Collect</h2>
          <p>We collect limited information to improve user experience and website performance.</p>

          <h3>1. Personal Information</h3>
          <p>We may collect personal data only if you voluntarily provide it, such as:</p>
          <ul>
            <li>Name (if submitted through contact forms)</li>
            <li>Email address</li>
          </ul>
          <p>We do not collect sensitive financial or payment information.</p>

          <h3>2. Non-Personal Information</h3>
          <p>We automatically collect general data, including:</p>
          <ul>
            <li>Device type</li>
            <li>Browser type</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
          </ul>
          <p>This information helps us understand how users interact with our content.</p>

          <h3>3. Cookies and Tracking Technologies</h3>
          <p>We use cookies to enhance your browsing experience. Cookies help us:</p>
          <ul>
            <li>Remember user preferences</li>
            <li>Improve site performance</li>
            <li>Analyze traffic</li>
          </ul>
          <p>You can disable cookies in your browser settings at any time.</p>

          <h2>How We Use Your Information</h2>
          <p>The information we collect is used for:</p>
          <ul>
            <li>Improving website content and performance</li>
            <li>Responding to user queries</li>
            <li>Enhancing user experience</li>
            <li>Monitoring website analytics</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information.</p>

          <h2>Third-Party Services</h2>
          <p>We may use third-party tools for analytics and performance tracking, such as website analytics tools and hosting services. These services may collect limited data according to their own privacy policies.</p>

          <h2>Data Security</h2>
          <p>We take reasonable steps to protect your data:</p>
          <ul>
            <li>Secure website environment</li>
            <li>Limited data collection</li>
            <li>No storage of sensitive financial information</li>
          </ul>
          <p><strong style={{ color: "#F0EAD6" }}>Trust Insight:</strong> While we follow best practices, no online platform can guarantee 100% security.</p>

          <h2>Links to External Websites</h2>
          <p>Our website may contain links to external websites related to ZC777 Game. We are not responsible for the privacy practices of those external sites. Users should review their policies separately.</p>

          <h2>Children&apos;s Privacy</h2>
          <p>Our content is not intended for individuals under the age of 18. We do not knowingly collect personal data from children.</p>

          <h2>Your Privacy Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Request access to your data</li>
            <li>Ask for correction or deletion</li>
            <li>Disable cookies</li>
            <li>Contact us regarding privacy concerns</li>
          </ul>

          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <ul>
            <li>Changes will be posted on this page</li>
            <li>Users are encouraged to review this page regularly</li>
          </ul>

          <h2>Compliance and Transparency</h2>
          <p>We aim to follow general data protection standards and maintain transparency in how information is handled. Our approach focuses on:</p>
          <ul>
            <li>Minimal data collection</li>
            <li>Clear communication</li>
            <li>User safety and trust</li>
          </ul>

          <h2>For Users in Pakistan</h2>
          <p>We specifically consider the needs of users in Pakistan:</p>
          <ul>
            <li>Data usage is minimal</li>
            <li>No unnecessary personal data is required</li>
            <li>Content is designed for safe access</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Your privacy is important to us, and we are committed to handling your data responsibly. This <strong style={{ color: "#F0EAD6" }}>ZC777 Privacy Policy</strong> ensures transparency and helps you understand how your information is used.
          </p>
          <p>By using our website, you agree to the terms outlined in this policy.</p>

        </div>
      </section>
    </>
  );
}
