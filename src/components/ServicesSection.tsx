"use client"
import { motion } from "framer-motion";
import serviceImplants from "@/public/assets/DSC_0747-removebg-preview.png";
import service3dprint from "@/public/assets/service-3dprint.jpg";
import servicePlanning from "@/public/assets/service-planning.jpg";
import serviceCustom from "@/public/assets/service-custom.jpg";
import Image from "next/image";

const services = [
  {
    title: "Service Name",
    description: "Patient-specific mandibular and maxillary implants engineered from CT/CBCT data for perfect anatomical fit.",
    image: servicePlanning,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "Service Name",
    description: "Accurate bone replicas for pre-surgical planning, allowing surgeons to rehearse complex procedures.",
    image: service3dprint,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "Service Name",
    description: "Advanced CAD/CAM workflows to design, simulate, and optimize surgical outcomes before the operating room.",
    image: serviceImplants,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  },
  {
    title: "Service Name",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    slider: [
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
      service3dprint,
    ]
  }
];

const ServicesSection = () => {
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
          {/* <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            What We Do
          </span> */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden transition-shadow duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
              }}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
