import AboutSection from "../components/AboutSection";
// import CasesSection from "../components/CasesSection";
import ComingSoon from "../components/ComingSoon";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ProductsSection from "../components/Products";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import UpButton from "../components/UpButton";
import WhatsAppButton from "../components/WhatsAppButton";
import "./globals.css";
export default function Home() {
  const newLocal = "min-h-screen bg-background";
  return (
    // <main className="min-h-screen bg-background relative h-screen overflow-hidden">
    <main className={newLocal}>
      <Navbar />
      <Loader />
      <ComingSoon />
      <UpButton />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      {/* <CasesSection /> */}
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton
        phoneNumber="201093434306"
        message=""
      />
      <Footer />
    </main>
  );
}
