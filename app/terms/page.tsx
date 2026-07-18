import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Presenze. Read about user responsibilities, acceptable use, and service guidelines.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <article className="mx-auto max-w-3xl">
            {/* Header */}
            <header className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                <span className="mono-tag">Legal</span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Acceptance of Terms */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Acceptance of Terms
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  By accessing or using Presenze (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  These terms apply to all users, including students, faculty, heads of departments (HODs), and institutional administrators.
                </p>
              </section>

              {/* Early Access Status */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Early Access Status
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Presenze is currently an early-access platform under active development. This means:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Features may be added, modified, or removed as we improve the platform</li>
                  <li>You may encounter bugs, performance issues, or unexpected behavior</li>
                  <li>Service interruptions may occur during updates and maintenance</li>
                  <li>Your feedback helps shape the future of Presenze</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  By using Presenze during this phase, you acknowledge that the platform is evolving and may not be feature-complete.
                </p>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  User Responsibilities
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  When using Presenze, you agree to:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Provide accurate information during registration and keep your account details current</li>
                  <li>Maintain the confidentiality of your login credentials and not share them with others</li>
                  <li>Use Bluetooth proximity verification honestly and only mark attendance when physically present</li>
                  <li>Respect the role-based permissions assigned to your account (student, faculty, HOD, admin)</li>
                  <li>Report security vulnerabilities, bugs, or misuse to our support team</li>
                  <li>Comply with your institution's policies regarding attendance and academic conduct</li>
                </ul>
              </section>

              {/* Acceptable Use */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Acceptable Use
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Attempt to circumvent Bluetooth proximity verification or spoof attendance records</li>
                  <li>Access accounts, data, or features you are not authorized to view</li>
                  <li>Interfere with the Platform's operation or attempt to gain unauthorized access to systems</li>
                  <li>Use the Platform for any unlawful, fraudulent, or malicious purposes</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code from Presenze apps</li>
                  <li>Harass, abuse, or harm other users or disrupt their use of the Platform</li>
                  <li>Upload viruses, malware, or any harmful code to the Platform</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Violation of these terms may result in account suspension or termination at our discretion.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Intellectual Property
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Presenze and all related trademarks, logos, software, and content are the property of Presenze or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Platform for its intended educational and administrative purposes.
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  You retain ownership of any data you submit to Presenze, but you grant us a license to use that data to operate and improve the Platform as described in our Privacy Policy.
                </p>
              </section>

              {/* Service Availability */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Service Availability
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We strive to keep Presenze available and functional, but we do not guarantee uninterrupted access. The Platform may be unavailable due to:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical issues, server outages, or infrastructure problems</li>
                  <li>Network connectivity issues beyond our control</li>
                  <li>Security incidents requiring immediate attention</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We will make reasonable efforts to notify users of planned downtime and restore service promptly in case of unexpected interruptions.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Limitation of Liability
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Presenze is provided "as is" during this early-access phase. To the fullest extent permitted by law:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>We make no warranties, express or implied, regarding the Platform's functionality, reliability, or suitability for any purpose</li>
                  <li>We are not liable for data loss, service interruptions, or errors in attendance records</li>
                  <li>We are not responsible for academic or administrative consequences resulting from Platform issues</li>
                  <li>Our total liability for any claim is limited to the amount you paid to use Presenze (if applicable)</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Users and institutions should maintain backup attendance tracking methods during the early-access period.
                </p>
              </section>

              {/* Changes to These Terms */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Changes to These Terms
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  As Presenze evolves, we may update these Terms of Service to reflect new features, legal requirements, or operational changes. Significant updates will be communicated via email or in-app notifications.
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Continued use of the Platform after changes indicates your acceptance of the updated terms. If you do not agree with the changes, please discontinue use of Presenze.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Contact Information
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  If you have questions about these Terms of Service or need support, please contact us:
                </p>
                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
                  <p className="text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Email:</strong>{" "}
                    <a href="mailto:hello@presenze.website" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      hello@presenze.website
                    </a>
                  </p>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/company/presenzehq" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      linkedin.com/company/presenzehq
                    </a>
                  </p>
                </div>
                <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Thank you for being part of Presenze's early-access journey. Your feedback and cooperation help us build better campus infrastructure.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
