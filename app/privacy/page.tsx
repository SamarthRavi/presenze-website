import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Presenze collects, uses, and protects your data. Our privacy policy explains our commitment to user privacy and data security.",
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </header>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Introduction
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Presenze is an early-access mobile BLE attendance and campus ERP platform. We are committed to protecting your privacy and being transparent about how we collect, use, and protect your information. This Privacy Policy explains our data practices in clear, honest terms.
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  As Presenze is currently under active development, this policy may be updated before public release. We will notify users of any significant changes.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Information We Collect
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We collect only the information necessary to operate the Presenze platform:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li><strong className="text-slate-900 dark:text-white">Account Information:</strong> Name, email address, institutional role (student, faculty, HOD, admin), and authentication credentials.</li>
                  <li><strong className="text-slate-900 dark:text-white">Attendance Data:</strong> Bluetooth proximity verification records, session timestamps, classroom assignments, and attendance history.</li>
                  <li><strong className="text-slate-900 dark:text-white">Academic Information:</strong> Course enrollments, subject allocations, department assignments, timetable data, and section information.</li>
                  <li><strong className="text-slate-900 dark:text-white">Device Information:</strong> Bluetooth identifiers (for session verification), device type, and operating system version to ensure compatibility.</li>
                  <li><strong className="text-slate-900 dark:text-white">Usage Data:</strong> App interactions, feature usage patterns, and error logs to improve platform performance.</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  How We Use Information
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We use collected information to:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Verify attendance through Bluetooth Low Energy proximity detection</li>
                  <li>Manage user accounts and role-based access permissions</li>
                  <li>Generate attendance reports and analytics for administrators</li>
                  <li>Synchronize data between mobile apps and the Admin Portal</li>
                  <li>Send important notifications about sessions, timetables, and platform updates</li>
                  <li>Improve platform performance, security, and user experience</li>
                  <li>Provide customer support and respond to user inquiries</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We do not sell your personal information to third parties. We do not use your data for advertising purposes.
                </p>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Data Security
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We protect your data using industry-standard security practices:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Encrypted data transmission using HTTPS/TLS protocols</li>
                  <li>Secure authentication and session management</li>
                  <li>Role-based access controls to limit data exposure</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure cloud infrastructure with Supabase and modern backend practices</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  While we implement strong security measures, no system is completely secure. We continuously work to improve our security practices as the platform evolves.
                </p>
              </section>

              {/* Third-Party Services */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Third-Party Services
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Presenze uses the following third-party services to operate the platform:
                </p>
                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
                  <li><strong className="text-slate-900 dark:text-white">Supabase:</strong> Database and authentication infrastructure</li>
                  <li><strong className="text-slate-900 dark:text-white">Cloud Hosting Providers:</strong> For backend services and data storage</li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  These services have their own privacy policies and security practices. We carefully select partners that meet high standards for data protection.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Data Retention
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  We retain your data as long as your account is active and for a reasonable period afterward to comply with institutional record-keeping requirements. Attendance records are typically retained for the duration of your academic enrollment plus an additional period as required by your institution.
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  You may request deletion of your personal data by contacting us. We will honor such requests unless we are required to retain data for legal or legitimate operational reasons.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Children's Privacy
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Presenze is designed for use by educational institutions and their enrolled students, faculty, and administrators. We do not knowingly collect information from children under 13 without appropriate parental or institutional consent. If you believe we have collected such information inappropriately, please contact us immediately.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Changes to This Policy
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  As Presenze is under active development, we may update this Privacy Policy to reflect changes in our practices, platform features, or legal requirements. Significant changes will be communicated to users via email or in-app notifications. Continued use of Presenze after changes indicates acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                  Contact Information
                </h2>
                <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                  If you have questions about this Privacy Policy or how we handle your data, please contact us:
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
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
