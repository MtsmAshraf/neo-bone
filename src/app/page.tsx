import AboutSection from "../components/AboutSection";
import CasesSection from "../components/CasesSection";
import ComingSoon from "../components/ComingSoon";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import UpButton from "../components/UpButton";
import "./globals.css";
export default function Home() {
  const newLocal = "min-h-screen bg-background";
  return (
    // <main className="min-h-screen bg-background relative h-screen overflow-hidden">
    <main className={newLocal}>
      <Navbar />
      <ComingSoon />
      <UpButton />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CasesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
