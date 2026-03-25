import AboutSection from "../components/AboutSection";
import CasesSection from "../components/CasesSection";
import ComingSoon from "../components/ComingSoon";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import "./globals.css";
export default function Home() {
  return (
    <main className="min-h-screen bg-background relative h-screen overflow-hidden">
      <Navbar />
      <ComingSoon />
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
