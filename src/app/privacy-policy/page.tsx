import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hippo Transfers and Adventures',
  description: 'Learn how Hippo Transfers and Adventures collects, uses, and protects your personal information. Read our comprehensive privacy policy for safari booking inquiries and contact communications.',
  openGraph: {
    title: 'Privacy Policy | Hippo Transfers and Adventures',
    description: 'Learn how Hippo Transfers and Adventures collects, uses, and protects your personal information.',
    type: 'website',
    url: 'https://hippotransfersandadventures.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-0 pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-gradient-to-b from-surface-container-low to-surface">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display-lg text-4xl md:text-5xl font-bold text-primary mb-4 md:mb-6">
            Privacy Policy
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant">
            Your trust is paramount to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="font-body text-sm text-on-surface-variant/70 mt-4 md:mt-6">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary prose-p:text-on-surface prose-a:text-secondary hover:prose-a:opacity-80">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              1. Introduction
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              Welcome to Hippo Transfers and Adventures (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information when you visit our website, contact us, or use our services.
            </p>
            <p className="text-on-surface leading-relaxed">
              By accessing and using our website, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy. If you do not agree with our policies and practices, please do not use our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              2. Information We Collect
            </h2>
            <p className="text-on-surface leading-relaxed mb-6">
              We collect information in several ways to provide you with the best possible service and safari experiences:
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              2.1 Information You Provide Directly
            </h3>
            <p className="text-on-surface leading-relaxed mb-4">
              When you interact with our website, we collect information you voluntarily provide, including:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Travel preferences and dates</li>
              <li>Number of travelers</li>
              <li>Safari package preferences</li>
              <li>Inquiry subject and message content</li>
            </ul>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              2.2 Information Collected Automatically
            </h3>
            <p className="text-on-surface leading-relaxed mb-4">
              When you visit our website, we automatically collect certain technical information:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </section>

          {/* Safari Booking & Inquiry Information */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              3. Safari Booking & Inquiry Information
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              When you submit an inquiry about our safari packages or excursions, we collect information necessary to respond to your inquiry and provide personalized recommendations:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Your name and contact details</li>
              <li>Preferred travel dates</li>
              <li>Number of travelers in your group</li>
              <li>Specific safari packages or excursions of interest</li>
              <li>Special requests or accessibility requirements</li>
              <li>Budget considerations</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              This information helps us tailor safari recommendations to your preferences and provide accurate quotations for your group.
            </p>
          </section>

          {/* WhatsApp Communication */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              4. WhatsApp Communication
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              We provide a WhatsApp Click-to-Chat feature for your convenience. When you use this service:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>You are directed to WhatsApp to initiate contact with our team</li>
              <li>Your WhatsApp messages are transmitted through WhatsApp servers</li>
              <li>We do not store your WhatsApp messages on our servers</li>
              <li>WhatsApp processes your messages according to their privacy policy</li>
              <li>We may retain information from WhatsApp conversations for customer service purposes</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              For more information about how WhatsApp handles your data, please review their privacy policy at www.whatsapp.com/legal.
            </p>
          </section>

          {/* Contact Forms & Email Communication */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              5. Contact Forms & Email Communication
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              When you submit our contact form:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Your information is transmitted securely to our email service provider (Resend)</li>
              <li>Resend processes the email according to their security standards</li>
              <li>Your information is forwarded to our team email address</li>
              <li>We retain your contact information to respond to your inquiry</li>
              <li>You may receive follow-up communications about your safari inquiry</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              We use industry-standard email transmission security. Your email address will only be used for responding to your inquiry and providing safari information.
            </p>
          </section>

          {/* Cookies & Analytics */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              6. Cookies & Analytics
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              Currently, we do not use cookies, tracking pixels, or analytics services on our website. Our website is designed to function without storing persistent data on your device.
            </p>
            <p className="text-on-surface leading-relaxed mb-4">
              However, third-party services we use (such as our email service provider) may implement their own security measures and cookies as part of their services. We do not control these services&apos; privacy practices.
            </p>
            <p className="text-on-surface leading-relaxed">
              If we implement analytics or tracking in the future, we will update this policy and provide appropriate opt-out options.
            </p>
          </section>

          {/* How Information Is Used */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              7. How Information Is Used
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>To respond to your safari inquiries and provide information about our packages</li>
              <li>To process your booking requests and provide confirmations</li>
              <li>To customize your experience and offer personalized recommendations</li>
              <li>To communicate with you about your safari arrangements</li>
              <li>To send you updates about special offers or new packages (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud and ensure website security</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              We will not use your information for purposes other than those listed above without your explicit consent.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              8. Third-Party Services
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              Our website uses the following third-party services that may process your information:
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              8.1 Email Service Provider (Resend)
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              We use Resend to transmit contact form submissions to our team. Your information is processed according to Resend&apos;s privacy and security standards. Resend does not use your information for marketing purposes.
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              8.2 Hosting Provider (Vercel)
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              Our website is hosted on Vercel. Your browsing data and website usage information may be processed by Vercel according to their privacy policy.
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              8.3 WhatsApp
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              When you click our WhatsApp link, you interact directly with Meta Platforms, Inc. (WhatsApp&apos;s parent company). WhatsApp messages and related metadata are governed by their privacy policy.
            </p>

            <p className="text-on-surface leading-relaxed">
              We encourage you to review the privacy policies of these third-party services to understand how they process your data.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              9. Data Retention
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Respond to your inquiry and complete your safari booking</li>
              <li>Provide customer support and address any concerns</li>
              <li>Comply with legal and financial obligations</li>
              <li>Maintain records for business purposes</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              Once your safari booking is complete and any follow-up support needs have been resolved, we will retain your information for up to 3 years for record-keeping purposes, unless required by law to keep it longer. You may request deletion of your information at any time (see Section 13 for details).
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              10. Data Security
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              We take data security seriously and implement reasonable measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Contact form submissions are transmitted using secure, encrypted connections (HTTPS)</li>
              <li>We use industry-standard security protocols for data transmission</li>
              <li>Our website is hosted on secure, professionally-managed servers</li>
              <li>We restrict access to personal information to authorized personnel only</li>
              <li>We implement firewalls and security monitoring</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              However, no transmission method over the internet is completely secure. While we strive to protect your information, we cannot guarantee absolute security. You acknowledge that you provide your information at your own risk.
            </p>
          </section>

          {/* International Visitors */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              11. International Visitors
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              Our website is hosted in the United States and may be accessed from many countries. By using our website, you consent to the collection and use of your information as described in this policy.
            </p>
            <p className="text-on-surface leading-relaxed mb-4">
              If you are a resident of the European Union, United Kingdom, or other jurisdictions with specific privacy laws:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Your data may be transferred to and processed in Kenya and the United States</li>
              <li>We implement appropriate safeguards for international data transfers</li>
              <li>You have rights regarding your personal data (see Section 13)</li>
              <li>You may contact us to exercise your rights under applicable laws</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              12. Children&apos;s Privacy
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
            </p>
            <p className="text-on-surface leading-relaxed">
              Parents or guardians who believe their child has provided information to our website should contact us immediately using the contact information provided in Section 15.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              13. Your Rights
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              13.1 Access
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              You have the right to request access to the personal information we hold about you.
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              13.2 Correction
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              You have the right to request correction of inaccurate or incomplete information.
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              13.3 Deletion
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              You have the right to request deletion of your personal information, subject to legal requirements.
            </p>

            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              13.4 Opt-Out
            </h3>
            <p className="text-on-surface leading-relaxed mb-6">
              You have the right to opt out of receiving marketing communications from us. You can do this by clicking the unsubscribe link in any email we send you.
            </p>

            <p className="text-on-surface leading-relaxed">
              To exercise any of these rights, please contact us using the information provided in Section 15.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              14. Changes to This Policy
            </h2>
            <p className="text-on-surface leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-on-surface space-y-2 mb-6 ml-2">
              <li>Posting the updated policy on our website</li>
              <li>Updating the &quot;Last Updated&quot; date at the top of this page</li>
              <li>Sending you an email notification of significant changes</li>
            </ul>
            <p className="text-on-surface leading-relaxed">
              Your continued use of our website after changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              15. Contact Information
            </h2>
            <p className="text-on-surface leading-relaxed mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-surface-container-low p-6 md:p-8 rounded-lg border border-surface-variant/50">
              <p className="text-on-surface font-semibold mb-2">Hippo Transfers and Adventures</p>
              <p className="text-on-surface mb-2">
                <span className="font-semibold">Address:</span> Kwarandu business square, Box 55, Kaloleni, Mombasa, Kenya
              </p>
              <p className="text-on-surface mb-2">
                <span className="font-semibold">Email:</span> <a href="mailto:hippotransfer@gmail.com" className="text-secondary hover:opacity-80">hippotransfer@gmail.com</a>
              </p>
              <p className="text-on-surface">
                <span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/254720899402" className="text-secondary hover:opacity-80">+254 720 899 402</a>
              </p>
            </div>
            <p className="text-on-surface leading-relaxed mt-6">
              We will respond to your privacy inquiries within 7-10 business days.
            </p>
          </section>

          {/* Closing */}
          <section className="mt-16 pt-12 border-t border-surface-variant/30">
            <p className="text-on-surface leading-relaxed text-sm text-on-surface-variant">
              Thank you for entrusting Hippo Transfers and Adventures with your safari dreams. Your privacy is important to us, and we are committed to handling your information responsibly and transparently. We look forward to creating an unforgettable safari experience for you.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
