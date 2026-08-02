import type { Metadata } from "next";
import { memo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Presenze. Read about user responsibilities, acceptable use, and service guidelines.",
};

const TermsContent = memo(function TermsContent() {
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
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Last updated: {currentDate}
        </p>
      </header>

      {/* Content */}
      <div className="space-y-12 text-slate-600 dark:text-slate-400">
        {/* Acceptance of Terms */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            Acceptance of Terms
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              By accessing or using Presenze (the &quot;Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.
            </p>
            <p className="text-base lg:text-lg">
              These terms apply to all users, including students, faculty, heads of departments (HODs), and institutional administrators.
            </p>
          </div>
        </section>

        {/* Early Access Status */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            Early Access Status
          </h2>
          <div className="space-y-6 leading-relaxed">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-500/20 dark:bg-amber-500/10 lg:p-6">
              <p className="font-semibold text-amber-900 dark:text-amber-300 mb-3 lg:text-lg">
                ⚠️ Important Notice
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-300 lg:text-base">
                Presenze is currently an early-access platform under active development. By using this platform, you acknowledge it is evolving and may not be feature-complete.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Features may be added, modified, or removed",
                "You may encounter bugs or unexpected behavior",
                "Service interruptions may occur during updates",
                "Your feedback helps shape the future of Presenze"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5 lg:p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 lg:h-7 lg:w-7">
                    <span className="text-xs font-semibold lg:text-sm">!</span>
                  </div>
                  <span className="text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            User Responsibilities
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              When using Presenze, you agree to:
            </p>
            <div className="space-y-3">
              {[
                "Provide accurate information during registration and keep your account details current",
                "Maintain the confidentiality of your login credentials and not share them with others",
                "Use Bluetooth proximity verification honestly and only mark attendance when physically present",
                "Respect the role-based permissions assigned to your account (student, faculty, HOD, admin)",
                "Report security vulnerabilities, bugs, or misuse to our support team",
                "Comply with your institution's policies regarding attendance and academic conduct"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5 lg:p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400 lg:h-7 lg:w-7">
                    <svg className="h-3 w-3 lg:h-4 lg:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Acceptable Use */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white mb-6 lg:text-3xl">
            Acceptable Use
          </h2>
          <div className="space-y-6 leading-relaxed">
            <p className="text-base lg:text-lg">
              You agree <strong className="text-slate-900 dark:text-white">not to</strong>:
            </p>
            <div className="space-y-3">
              {[
                "Attempt to circumvent Bluetooth proximity verification or spoof attendance records",
                "Access accounts, data, or features you are not authorized to view",
                "Interfere with the Platform's operation or attempt to gain unauthorized access to systems",
                "Use the Platform for any unlawful, fraudulent, or malicious purposes",
                "Reverse engineer, decompile, or attempt to extract source code from Presenze apps",
                "Harass, abuse, or harm other users or disrupt their use of the Platform",
                "Upload viruses, malware, or any harmful code to the Platform"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-500/20 dark:bg-red-500/10 lg:p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400 lg:h-7 lg:w-7">
                    <svg className="h-3 w-3 lg:h-4 lg:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-500/20 dark:bg-red-500/10 lg:p-6">
              <p className="text-sm font-semibold text-red-900 dark:text-red-300 lg:text-base">
                ⚠️ Violation of these terms may result in account suspension or termination at our discretion.
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
              If you have questions about these Terms of Service or need support, please contact us:
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
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/20 dark:bg-blue-500/10 lg:p-6">
              <p className="text-sm text-blue-900 dark:text-blue-300 lg:text-base">
                <strong>Thank you</strong> for being part of Presenze&apos;s early-access journey. Your feedback and cooperation help us build better campus infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Sections with Accordions */}
        <section className="space-y-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white lg:text-3xl">
            Additional Terms
          </h2>
          
          <div className="space-y-4">
            {[
              {
                title: "Intellectual Property",
                content: "Presenze and all related trademarks, logos, software, and content are the property of Presenze or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Platform for its intended educational and administrative purposes. You retain ownership of any data you submit to Presenze, but you grant us a license to use that data to operate and improve the Platform as described in our Privacy Policy."
              },
              {
                title: "Service Availability",
                content: "We strive to keep Presenze available and functional, but we do not guarantee uninterrupted access. The Platform may be unavailable due to scheduled maintenance and updates, technical issues, server outages, network connectivity issues, or security incidents requiring immediate attention. We will make reasonable efforts to notify users of planned downtime and restore service promptly."
              },
              {
                title: "Limitation of Liability",
                content: "Presenze is provided 'as is' during this early-access phase. To the fullest extent permitted by law, we make no warranties regarding the Platform's functionality, reliability, or suitability for any purpose. We are not liable for data loss, service interruptions, or errors in attendance records. Users and institutions should maintain backup attendance tracking methods during the early-access period."
              },
              {
                title: "Changes to These Terms",
                content: "As Presenze evolves, we may update these Terms of Service to reflect new features, legal requirements, or operational changes. Significant updates will be communicated via email or in-app notifications. Continued use of the Platform after changes indicates your acceptance of the updated terms."
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

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16 dark:bg-navy-700">
        <div className="container">
          <TermsContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
