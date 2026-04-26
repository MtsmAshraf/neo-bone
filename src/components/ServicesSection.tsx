"use client"
import { motion, AnimatePresence } from "framer-motion";
import services1 from "@/public/assets/Gemini_Generated_Image_9xuj9t9xuj9t9xuj.png";
import services2 from "@/public/assets/bone haresting  guide.png";
import services3 from "@/public/assets/prothestic support .png";
import services4 from "@/public/assets/screws set and screws .png";
import services5 from "@/public/assets/untitled.png";
import services6 from "@/public/assets/quad zygoma guide .png";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "PSI",
    description: "Patient-specific mandibular and maxillary implants engineered from CT data for perfect anatomical fit.",
    image: services1,
    details: "engineered driven design following the equal stress and strain of the device., seprate MUA design for more prothestic options ., minimum and equal thickness for best tissue response ., highly polished outer surface , sandblasted with double acid etching inner surface,. equal and balanced distribution.",
    slider: [
      // services1,
      // services1,
      // services1,
      // services1,
      // services1,
    ]
  },
  {
    title: "Surgical Guides",
    description: "Accurate bone replicas for pre-surgical planning, allowing surgeons to rehearse complex procedures.",
    image: services2,
    details: "bone supported guides ., tissue supported guides ., sleeveless guides ., stckable guides , resection guides",
    slider: [
      // services2,
      // services2,
      // services2,
      // services2,
      // services2,
    ]
  },
  {
    title: "Prothestic Support",
    description: "Advanced CAD/CAM workflows to provied best result prothestic rehablitaion espesially for ALL on X cases.",
    image: services3,
    details: "hyprid zirconium over bar ., hyprid zirconium over toronto bridge.,hyprid 3d printed resin over titunium bar  ",
    slider: [
      // services3,
      // services3,
      // services3,
      // services3,
      // services3,
    ]
  },
  {
    title: "Bone Fixation Accessiors",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: services4,
    details: "bone mini screws ., bone emergency screws , bone reconstruction screws , bone micro screws, bone drills , transbuccal trockr , bone driver.",
    slider: [
      // services4,
      // services4,
      // services4,
      // services4,
      // services4,
    ]
  },
  {
    title: "Orthognathic",
    description: "Orthognathic and custom wafer design , simulation for accurate maxillary and mandibular movement.",
    image: services5,
    details: "Custom wafer design and printing., Custom made Osteotomy guides., Custom made fixation plates for accurate and favorable reposition.",
    slider: [
      // services5,
      // services5,
      // services5,
      // services5,
      // services5,
    ]
  },
  {
    title: "Zygoma Guides",
    description: "Especially made zygoma guide for accurate zygomatic placement without fear of biological tissues injury.",
    image: services6,
    details: "Metal 3d printed guide for Stable positioning., Custom made Lower level sleeve for accurate ridge entry., Custom made upper level sleeve for accurate zygomatic entery., Fixation screws for stable drilling., Implant placement through guide.",
    slider: [
      // services5,
      // services5,
      // services5,
      // services5,
      // services5,
    ]
  }
];

type Service = typeof services[0];

const ServiceModal = ({ service, onClose }: { service: Service; onClose: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-card border border-border rounded-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
          style={{ boxShadow: "var(--card-shadow-hover)" }}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground rounded-full p-2 transition"
          >
            <X size={18} />
          </button>

          {/* Image */}
          <div className="h-64 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {service.description}
            </p>
            <hr className="border-border mb-4" />
            
            <ul className="text-muted-foreground leading-relaxed list-disc list-inside space-y-1">
              {service.details.split(",").map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
            {
              (service.slider && service.slider.length > 0) && 
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {service.slider.map((img, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    <Image src={img} alt={`Detail ${idx + 1}`} className="w-full h-full object-cover" />
                  </li>
                ))}
              </ul>
            }
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
              style={{ boxShadow: "var(--card-shadow)" }}
              onClick={() => setSelectedService(service)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/90 group-hover:via-primary/40 transition-all duration-300" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 group-hover:text-white leading-relaxed transition duration-300 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default ServicesSection;