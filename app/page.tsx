import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Screenshots } from "@/components/sections/Screenshots";
import { DownloadSection } from "@/components/sections/Download";
import { Founder } from "@/components/sections/Founder";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <DownloadSection />
        <Founder />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
