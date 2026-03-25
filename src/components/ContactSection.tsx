"use client"
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "+20 10 93 4343 06",
    href: "tel:+201093434306",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+20 10 93 4343 06",
    href: "https://wa.me/201093434306",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@neobone.com",
    href: "mailto:info@neobone.com",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Neobone",
    href: "https://www.facebook.com/profile.php?id=100077225387207",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "10th of Ramadan City, Egypt",
    href: "#",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Ready to discuss your next case? Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide ">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground underline md:no-underline sm:decoration-1">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
