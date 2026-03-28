// "use client"
// import { motion } from "framer-motion";
// import serviceImplants from "@/public/assets/DSC_0747-removebg-preview.png";
// import service3dprint from "@/public/assets/service-3dprint.jpg";
// import servicePlanning from "@/public/assets/service-planning.jpg";
// import serviceCustom from "@/public/assets/service-custom.jpg";
// import Image from "next/image";

// const services = [
//   {
//     title: "Service Name",
//     description: "Patient-specific mandibular and maxillary implants engineered from CT/CBCT data for perfect anatomical fit.",
//     image: servicePlanning,
//     slider: [
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//     ]
//   },
//   {
//     title: "Service Name",
//     description: "Accurate bone replicas for pre-surgical planning, allowing surgeons to rehearse complex procedures.",
//     image: service3dprint,
//     slider: [
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//     ]
//   },
//   {
//     title: "Service Name",
//     description: "Advanced CAD/CAM workflows to design, simulate, and optimize surgical outcomes before the operating room.",
//     image: serviceImplants,
//     slider: [
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//     ]
//   },
//   {
//     title: "Service Name",
//     description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
//     image: serviceCustom,
//     slider: [
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//     ]
//   },
//   {
//     title: "Service Name",
//     description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
//     image: serviceCustom,
//     slider: [
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//       service3dprint,
//     ]
//   }
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding bg-muted/50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-2xl mx-auto text-center mb-16"
//         >
//           <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
//             What We Do
//           </span>
//           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
//             Our Services
//           </h2>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="h-fit group bg-card hover:bg-primary hover:w-full rounded-2xl border border-border overflow-hidden  transition duration-300"
//               style={{ boxShadow: "var(--card-shadow)" }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
//               }}
//             >
//               <div className="h-[300px] overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-lg transition group-hover:text-white font-semibold text-foreground mb-2 font-sans">{service.title}</h3>
//                 <p className="text-sm mb-2 transition group-hover:text-white text-muted-foreground leading-relaxed">{service.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

"use client"
import { motion, AnimatePresence } from "framer-motion";
import serviceImplants from "@/public/assets/DSC_0747-removebg-preview.png";
import service3dprint from "@/public/assets/service-3dprint.jpg";
import servicePlanning from "@/public/assets/service-planning.jpg";
import serviceCustom from "@/public/assets/service-custom.jpg";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "Service Name",
    description: "Patient-specific mandibular and maxillary implants engineered from CT/CBCT data for perfect anatomical fit.",
    image: servicePlanning,
    details: "Extended details about this service go here. You can add more information, features, materials used, turnaround time, etc.",
    slider: [service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint]
  },
  {
    title: "Service Name",
    description: "Accurate bone replicas for pre-surgical planning, allowing surgeons to rehearse complex procedures.",
    image: service3dprint,
    details: "Extended details about this service go here. You can add more information, features, materials used, turnaround time, etc.",
    slider: [service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint]
  },
  {
    title: "Service Name",
    description: "Advanced CAD/CAM workflows to design, simulate, and optimize surgical outcomes before the operating room.",
    image: servicePlanning,
    details: "Extended details about this service go here. You can add more information, features, materials used, turnaround time, etc.",
    slider: [service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint]
  },
  {
    title: "Service Name",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: service3dprint,
    details: "Extended details about this service go here. You can add more information, features, materials used, turnaround time, etc.",
    slider: [service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint]
  },
  {
    title: "Service Name",
    description: "Custom-designed facial bone prosthetics for trauma, oncology, and congenital reconstruction cases.",
    image: serviceCustom,
    details: "Extended details about this service go here. You can add more information, features, materials used, turnaround time, etc.",
    slider: [service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint, service3dprint]
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
            <h3 className="text-2xl font-bold font-display text-foreground mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {service.description}
            </p>
            <hr className="border-border mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              {service.details}
            </p>
            {
              (service.slider && service.slider.length > 0) && 
              <ul className="grid grid-cols-3 gap-4 mt-2">
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
                <h3 className="text-lg font-semibold font-sans text-white mb-1">
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