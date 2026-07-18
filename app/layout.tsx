import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://presenze.website"),
  title: {
    default: "Presenze - BLE Attendance for Modern Campuses",
    template: "%s | Presenze"
  },
  description:
    "Mobile-first attendance verification using Bluetooth Low Energy. Faculty start sessions, students scan, and records sync instantly to your Admin Portal. No classroom hardware required.",
  keywords: [
    "Presenze",
    "BLE attendance",
    "Bluetooth attendance system",
    "mobile attendance tracking",
    "campus ERP",
    "smart classroom attendance",
    "automated attendance app",
    "Supabase attendance",
    "Go backend attendance",
    "digital attendance solution",
    "contactless attendance",
    "mobile attendance management"
  ],
  authors: [{ name: "Presenze" }],
  creator: "Presenze",
  publisher: "Presenze",
  icons: {
    icon: [
      { url: "/brand/presenze-logo-mark-light.png", sizes: "any" },
    ],
    apple: "/brand/presenze-logo-mark-light.png",
    other: [
      {
        rel: "icon",
        url: "/brand/presenze-logo-mark-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: "/brand/presenze-logo-mark-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Presenze - BLE Attendance for Modern Campuses",
    description:
      "Faculty and HODs start sessions from Presenze Dashboard, student phones scan over BLE, and attendance appears instantly in the Admin Portal. No classroom hardware required.",
    url: "https://presenze.website",
    siteName: "Presenze",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/brand/presenze-main-logo-dark-hori.png",
        width: 1792,
        height: 1024,
        alt: "Presenze - Mobile BLE Attendance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Presenze - BLE Attendance for Modern Campuses",
    description:
      "Mobile BLE attendance, real-time Go and Supabase sync, and a web Admin Portal for campus ERP. No classroom hardware required.",
    images: ["/brand/presenze-main-logo-dark-hori.png"],
    creator: "@presenzehq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "", // Add Google Search Console verification code when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased selection:bg-primary-500/30 selection:text-primary-900 dark:selection:bg-primary-400/30 dark:selection:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
