import AboutSection from "../components/AboutSection";
import CasesSection from "../components/CasesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import "./globals.css";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
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
