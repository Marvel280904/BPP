import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import AchieveSection from "@/components/landing/AchieveSection";
import ChooseUsSection from "@/components/landing/ChooseUsSection";
import ProfileSection from "@/components/landing/ProfileSection";
import TestiSection from "@/components/landing/TestiSection";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AchieveSection />
      <ChooseUsSection />
      <ProfileSection />
      <TestiSection />
      <ContactSection />
    </main>
  );
}