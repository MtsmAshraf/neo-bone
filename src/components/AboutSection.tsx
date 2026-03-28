"use client"
import { motion } from "framer-motion";
import { Workflow, Factory, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Medical-Grade Quality",
    description: "Every appliance we produce meets the highest medical standards — using certified, biocompatible materials that are safe, durable, and built to perform where it matters most.",
  },
  {
    icon: Workflow,
    title: "Complete in-house process",
    description: "From design to delivery, every step is handled under one roof — ensuring consistent quality, faster turnaround, and full control over every detail.",
  },
  {
    icon: Factory,
    title: "Specialized factory",
    description: "Our facility is purpose-built for oral and maxillofacial appliances, equipped with the latest technology and operated by specialists who understand the precision this field demands.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Design to manufacturing in every separate detail
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Bio-engineering company specialized in custom dental and cranio-facial appliances ( Design , milling , surgical support , prothesitic support ).
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-sans">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
