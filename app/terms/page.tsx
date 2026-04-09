import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  ...buildMetadata({
    title:       "Terms & Conditions – ZC777 Game Guides Website Pakistan",
    description: "Read the Terms & Conditions of our ZC777 Game information website. Learn about usage rules, limitations, user responsibilities, and legal guidelines.",
    keywords:    "ZC777 Terms and Conditions, ZC777 website terms, ZC777 usage policy Pakistan",
    path:        "/terms",
  }),
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms & Conditions", url: "/terms" },
        ])) }}
      />

      <section className="page-hero" aria-labelledby="terms-h1">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
          <h1 id="terms-h1" className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-cinzel)", color: "#D4AF37" }}>
            Terms &amp; Conditions – ZC777 Game Information Website
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Welcome to our website. By accessing and using this platform, you agree to follow these Terms &amp; Conditions. Please read this page carefully before using our content or services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose-casino">

          <h2>Acceptance of Terms</h2>
          <p>By using our website, you confirm that:</p>
          <ul>
            <li>You agree to follow all terms listed on this page</li>
            <li>You are responsible for your actions while using the website</li>
            <li>You will use the content only for informational purposes</li>
          </ul>
          <p>If you do not agree with any part of these terms, you should not use this website.</p>

          <h2>About Our Website</h2>
          <p>This website is an independent informational platform that provides:</p>
          <ul>
            <li>Guides related to ZC777 Game</li>
            <li>Download and installation tutorials</li>
            <li>Gameplay tips and strategies</li>
            <li>Safety and legal awareness content</li>
          </ul>
          <p>We are not affiliated with the official ZC777 Game developers and do not operate the game or manage transactions.</p>

          <h2>Use of Content</h2>
          <p>All content published on this website is for informational and educational purposes only.</p>

          <h3>Allowed Use</h3>
          <ul>
            <li>Reading and learning from the content</li>
            <li>Sharing content with proper credit</li>
            <li>Using information for personal guidance</li>
          </ul>

          <h3>Restricted Use</h3>
          <ul>
            <li>Copying or reproducing content without permission</li>
            <li>Using content for misleading or illegal purposes</li>
            <li>Republishing content without attribution</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul>
            <li>Provide accurate information when required</li>
            <li>Avoid misuse of the website</li>
            <li>Follow applicable laws in your region</li>
            <li>Respect intellectual property rights</li>
          </ul>
          <p>Users are responsible for how they interpret and use the information provided.</p>

          <h2>Disclaimer of Liability</h2>
          <p>We aim to provide accurate and updated information, but:</p>
          <ul>
            <li>We do not guarantee completeness or accuracy</li>
            <li>We are not responsible for any losses or damages</li>
            <li>Users act at their own risk</li>
          </ul>
          <p><strong style={{ color: "#F0EAD6" }}>Important:</strong> Decisions related to gameplay, transactions, or downloads are the user&apos;s responsibility.</p>

          <h2>Third-Party Links</h2>
          <p>Our website may include links to external websites for additional information.</p>
          <ul>
            <li>We do not control third-party websites</li>
            <li>We are not responsible for their content or policies</li>
            <li>Users should review their terms separately</li>
          </ul>

          <h2>Intellectual Property Rights</h2>
          <p>All content on this website, including text and design, is protected by intellectual property laws.</p>
          <ul>
            <li>Unauthorized use is strictly prohibited</li>
            <li>Content cannot be copied without permission</li>
          </ul>

          <h2>Prohibited Activities</h2>
          <p>Users must not:</p>
          <ul>
            <li>Attempt to harm or disrupt the website</li>
            <li>Use the platform for illegal activities</li>
            <li>Share false or misleading information</li>
            <li>Attempt unauthorized access to systems</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>We are not liable for:</p>
          <ul>
            <li>Financial losses</li>
            <li>Technical issues or downtime</li>
            <li>Errors or omissions in content</li>
            <li>Actions taken based on our information</li>
          </ul>

          <h2>Changes to Terms &amp; Conditions</h2>
          <p>We may update these <strong style={{ color: "#F0EAD6" }}>ZC777 Terms and Conditions</strong> at any time.</p>
          <ul>
            <li>Updates will be posted on this page</li>
            <li>Continued use of the website means acceptance of changes</li>
          </ul>

          <h2>Compliance with Local Laws</h2>
          <p>Users in Pakistan should:</p>
          <ul>
            <li>Follow local regulations regarding online platforms</li>
            <li>Use the website responsibly</li>
            <li>Ensure compliance with applicable laws</li>
          </ul>
          <p>We do not provide legal advice, and users should seek professional guidance if needed.</p>

          <h2>Responsible Usage</h2>
          <p>We encourage all users to:</p>
          <ul>
            <li>Use the platform responsibly</li>
            <li>Avoid excessive or risky behavior</li>
            <li>Protect their personal information</li>
          </ul>

          <h2>Termination of Access</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Restrict access to users who violate terms</li>
            <li>Remove content if necessary</li>
            <li>Take action against misuse</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            These Terms &amp; Conditions ensure that our website remains a safe, transparent, and reliable resource for users. By following these guidelines, you contribute to a better and more secure experience for everyone.
          </p>

        </div>
      </section>
    </>
  );
}
