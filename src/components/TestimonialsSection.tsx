"use client"
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Neobone's custom implants have transformed the outcomes we achieve in complex mandibular reconstruction cases. The precision is unmatched.",
    author: "Dr. Ahmed Al-Rashid",
    role: "Maxillofacial Surgeon",
  },
  {
    quote: "The 3D surgical planning service saved us hours in the OR and gave our patient a significantly better result. Truly a game-changer.",
    author: "Dr. Sarah Mitchell",
    role: "Head of Reconstructive Surgery",
  },
  {
    quote: "Working with Neobone feels like having an engineering team dedicated to our patients. Their attention to anatomical detail is remarkable.",
    author: "Dr. Carlos Mendes",
    role: "Craniofacial Specialist",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Trusted by Surgeons Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 relative"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-sm italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
