import type { Metadata } from "next";
import { memo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Presenze collects, uses, and protects your data. Our privacy policy explains our commitment to user privacy and data security.",
};

const PrivacyContent = memo(function PrivacyContent() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <article className="mx-auto max-w-4xl" style={{ willChange: 'auto' }}>
      {/* Header */}
      <header className="mb-12 text-center lg:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          <span className="mono-tag">Legal Document</span>
        </div>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Last updated: {currentDate}
        </p>
      </header>

      {/* Content */}
      <div className="space-y-12 text-slate-600 dark:text-slate-400">
        {/* Introduction */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            Introduction
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              Presenze is an early-access mobile BLE attendance and campus ERP platform. We are committed to protecting your privacy and being transparent about how we collect, use, and protect your information. This Privacy Policy explains our data practices in clear, honest terms.
            </p>
            <p className="text-base lg:text-lg">
              As Presenze is currently under active development, this policy may be updated before public release. We will notify users of any significant changes.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            Information We Collect
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              We collect only the information necessary to operate the Presenze platform:
            </p>
            <ul className="space-y-4 pl-0">
              {[
                {
                  title: "Account Information",
                  desc: "Name, email address, institutional role (student, faculty, HOD, admin), and authentication credentials."
                },
                {
                  title: "Attendance Data", 
                  desc: "Bluetooth proximity verification records, session timestamps, classroom assignments, and attendance history."
                },
                {
                  title: "Academic Information",
                  desc: "Course enrollments, subject allocations, department assignments, timetable data, and section information."
                },
                {
                  title: "Device Information",
                  desc: "Bluetooth identifiers (for session verification), device type, and operating system version to ensure compatibility."
                },
                {
                  title: "Usage Data",
                  desc: "App interactions, feature usage patterns, and error logs to improve platform performance."
                }
              ].map((item) => (
                <li key={item.title} className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5 lg:p-6">
                  <span className="font-semibold text-slate-900 dark:text-white text-base lg:text-lg">{item.title}</span>
                  <span className="text-sm lg:text-base">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How We Use Information */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            How We Use Information
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              We use collected information to:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Verify attendance through Bluetooth Low Energy proximity detection",
                "Manage user accounts and role-based access permissions", 
                "Generate attendance reports and analytics for administrators",
                "Synchronize data between mobile apps and the Admin Portal",
                "Send important notifications about sessions, timetables, and platform updates",
                "Improve platform performance, security, and user experience",
                "Provide customer support and respond to user inquiries"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5 lg:p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400 lg:h-7 lg:w-7">
                    <span className="text-xs font-semibold lg:text-sm">{i + 1}</span>
                  </div>
                  <span className="text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-500/20 dark:bg-green-500/10 lg:p-6">
              <p className="text-sm font-medium text-green-800 dark:text-green-300 lg:text-base">
                <strong>Privacy Promise:</strong> We do not sell your personal information to third parties. We do not use your data for advertising purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            Contact Information
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/2 lg:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                  <a 
                    href="mailto:hello@presenze.website" 
                    className="text-base font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 lg:text-lg"
                  >
                    hello@presenze.website
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/company/presenzehq" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 lg:text-lg"
                  >
                    linkedin.com/company/presenzehq
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections with Accordions */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white lg:text-3xl">
            Additional Information
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Data Security & Protection",
                content: "We protect your data using industry-standard security practices including encrypted data transmission using HTTPS/TLS protocols, secure authentication and session management, role-based access controls, regular security audits, and secure cloud infrastructure with Supabase and modern backend practices."
              },
              {
                title: "Third-Party Services",
                content: "Presenze uses Supabase for database and authentication infrastructure, and cloud hosting providers for backend services and data storage. These services have their own privacy policies and security practices. We carefully select partners that meet high standards for data protection."
              },
              {
                title: "Data Retention",
                content: "We retain your data as long as your account is active and for a reasonable period afterward to comply with institutional record-keeping requirements. Attendance records are typically retained for the duration of your academic enrollment plus an additional period as required by your institution."
              },
              {
                title: "Children's Privacy",
                content: "Presenze is designed for use by educational institutions and their enrolled students, faculty, and administrators. We do not knowingly collect information from children under 13 without appropriate parental or institutional consent."
              }
            ].map((item) => (
              <details key={item.title} className="group rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
                <summary className="cursor-pointer p-4 font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 lg:p-6 lg:text-lg">
                  {item.title}
                </summary>
                <div className="border-t border-slate-200 p-4 text-sm leading-relaxed dark:border-white/10 lg:p-6 lg:text-base">
                  {item.content}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16 dark:bg-navy-700">
        <div className="container">
          <PrivacyContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
