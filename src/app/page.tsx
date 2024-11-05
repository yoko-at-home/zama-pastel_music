import AboutSection from "@/components/AboutSection";
import AdmissionRequirements from "@/components/AdmissionRequirements";
import HeroSection from "@/components/HeroSection";
import LessonPricing from "@/components/LessonPricing";
import LessonSection from "@/components/LessonSection";
import { siteMetadata } from "@/data/siteMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: siteMetadata.title,
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <LessonSection />
      <AboutSection />
      <LessonPricing />
      <AdmissionRequirements />
      <div className="h-44 bg-whitish" />
    </div>
  );
}
