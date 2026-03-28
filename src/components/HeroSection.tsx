"use client"
import { motion } from "framer-motion";
import heroBg from "@/public/assets/hero-bg.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container flex flex-col items-center justify-center text-center mx-auto px-4 relative z-10 rounded-lg p-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-md font-semibold tracking-widest uppercase text-primary mb-4">
              Oral and maxillofacial appliances
            </span>
          </motion.div>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl md:text-9xl font-display text-foreground leading-tight mb-6"
          >
            Neo Bone
          </motion.h1> */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            src={"./assets/logo.png"}
            alt="Neobone Logo"
            className="inline-block mr-2 my-2 h-20 w-auto object-contain"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-8"
          >
            Advanced Implant Solutions, Graftless Techniques
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex justify-center flex-wrap gap-4"
          >
            <a
              href="#services"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-muted transition-colors bg-white"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
