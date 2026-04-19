"use client"
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Recommend NeoBone for any subperiosteal implant. Better solution and amazing result in server atrophic jaw",
    author: "Dr. Peter Barakat",
    role: "Consultant of Maxillofacial Surgry",
  },
  {
    quote: "One of the best companies in Egyptian and middle east market keep it up with my best wishes",
    author: "Dr. Mohamed Adel Eloraby",
    role: "Prosthetic specialist & Head of marketing department at EG Medical",
  },
  {
    quote: "I had a pleasant experience with neo bone , they're very professional with really good technical support",
    author: "Ahmed Abo El Nasr",
    role: "Implant and prosthetic specialist",
  },
  {
    quote: "I dealt with Dr. Mohamed Issawi, and honestly, mashallah, they are outstanding doctors. May God grant them even more and more success.",
    author: "Dr. Mohamed Ashraf",
    role: "Implant and prosthetic specialist",
  }
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
            Trusted Everywhere
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 relative h-fit"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-md italic text-center">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-center text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-center text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
