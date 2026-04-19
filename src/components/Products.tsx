//     "use client"
//     import { motion, AnimatePresence } from "framer-motion";
//     import Image from "next/image";
//     import { useState } from "react";
//     import { X } from "lucide-react";
    
//     import mandibularSubperiostealImplant from "@/public/assets/psi/mandibular subperiosteal implant .JPG.png";
//     import maxillaAllDevice from "@/public/assets/psi/maxill a all device 2 .png";
//     import maxillarySubperiostealImplant from "@/public/assets/psi/maxillary subperiosteal implant.png";
//     import regionalMandibularSubperiostealImplant from "@/public/assets/psi/regional mandibular subperiosteal implant.png";
//     import harvestingGuide from "@/public/assets/surgical-guides/harvesting guide .png";
//     import platouingAndSlotsPrepGuide from "@/public/assets/surgical-guides/platouing and slots prep guide.png";
//     import hybridProthesis from "@/public/assets/prothestic-support/hybrid prothesis.png";
//     import emergencyFixationScrew from "@/public/assets/bone-fixation-accessiors/emergency fiaxrion screw.png";
//     import standardFixationScrew from "@/public/assets/bone-fixation-accessiors/standard fiaxrion screw.png";
//     import boneDrill from "@/public/assets/bone-fixation-accessiors/bone drill.png";
//     import fullBox from "@/public/assets/bone-fixation-accessiors/screws and drills box.png";
//     // import orthognatic from "@/public/assets/orthognatic/";
//     import quadZygomaGuide from "@/public/assets/zygoma-guides/quad zygoma guide .png";
//     import singleZygomaGuide from "@/public/assets/zygoma-guides/singel zygoma guide.png";
//     const products = [
//       {
//         name: "Mandibular Subperiosteal Implant",
//         description:
//           "A patient-specific implant framework that rests directly on the mandibular cortical bone, offering a reliable full-arch solution for patients with severe bone atrophy.",
//         image: mandibularSubperiostealImplant,
//         details:
//           "Engineered from medical-grade titanium using CBCT-based 3D planning, this implant is custom-contoured to the patient's mandibular anatomy for a passive, precise fit. Indicated for fully edentulous patients with insufficient bone volume for conventional endosseous implants. The framework distributes occlusal forces evenly across the bone surface, minimizing resorption risk. Designed for single-stage surgical placement with immediate prosthetic loading capability.",
//           category: "PSI"
//       },
//       {
//         name: "Maxilla All Device",
//         description:
//           "A full-coverage maxillary subperiosteal implant system providing complete upper arch anchorage for patients with advanced maxillary bone loss.",
//         image: maxillaAllDevice,
//         details:
//           "This comprehensive device spans the entire maxillary bone surface, offering multi-point support for fixed full-arch prostheses. Fabricated through a digital workflow integrating CBCT data and virtual surgical planning for an anatomically accurate framework. Suited for edentulous patients where sinus grafting or conventional implants are not viable. The design allows for secure attachment of hybrid or fixed prosthetic superstructures with long-term stability.",
//           category: "PSI"
//       },
//       {
//         name: "Maxillary Subperiosteal Implant",
//         description:
//           "A custom subperiosteal framework seated on the maxillary bone surface, designed to restore upper arch function without requiring bone augmentation.",
//         image: maxillarySubperiostealImplant,
//         details:
//           "Indicated for atrophic maxillae with inadequate height or width for endosseous implant placement. The implant is individually designed from high-resolution CBCT scans to ensure a passive, anatomically adapted fit. Manufactured from biocompatible titanium alloy, it provides stable prosthetic abutments for fixed or removable restorations. Eliminates the need for sinus lifts or bone grafts, significantly reducing overall treatment complexity and duration.",
//           category: "PSI"
//       },
//       {
//         name: "Regional Mandibular Subperiosteal Implant",
//         description:
//           "A zone-specific subperiosteal implant for patients with localized mandibular bone deficiency, providing targeted support without a full-arch framework.",
//         image: regionalMandibularSubperiostealImplant,
//         details:
//           "Designed for partially edentulous patients where bone loss is confined to a specific segment of the mandible. The regional framework is digitally planned and fabricated to seat passively over the affected area while preserving adjacent healthy structures. Offers a minimally invasive alternative to extensive grafting procedures. Compatible with both fixed bridge and overdenture prosthetic solutions, with load distribution optimized for the available bone volume.",
//           category: "PSI"
//       },
//       {
//         name: "Harvesting Guide",
//         description:
//           "A precision surgical guide that standardizes bone graft harvesting, ensuring consistent graft dimensions and protecting surrounding anatomical structures.",
//         image: harvestingGuide,
//         details:
//           "Patient-specific guide fabricated from biocompatible, autoclavable resin based on pre-operative CBCT imaging. Directs the surgeon to the optimal harvesting site with controlled cutting boundaries, reducing the risk of neurovascular injury. Minimizes operative time and donor site morbidity while maximizing graft yield. Compatible with standard piezoelectric and rotary harvesting instruments. Designed for use in ramus, symphysis, and calvarial donor sites.",
//           category: "surgical-guides"
//       },
//       {
//         name: "Plateauing & Slots Preparation Guide",
//         description:
//           "A surgical guide that ensures precise bone surface flattening and slot preparation, critical steps for accurate subperiosteal implant seating.",
//         image: platouingAndSlotsPrepGuide,
//         details:
//           "Designed to achieve reproducible plateau depths and slot positions that match the planned implant framework exactly. Fabricated from pre-operative imaging data, the guide adapts directly to the patient's bone contours for reliable intraoperative reference. Significantly reduces the risk of framework misfit and the need for intraoperative adjustments. Manufactured from sterilizable, surgical-grade resin compatible with standard preparation burs and chisels.",
//           category: "surgical-guides"
//       },
//       {
//         name: "Hybrid Prosthesis",
//         description:
//           "A screw-retained full-arch prosthesis combining the stability of implant anchorage with the aesthetic versatility of a removable-style superstructure.",
//         image: hybridProthesis,
//         details:
//           "The hybrid prosthesis features a milled titanium or zirconia bar framework supported by multiple implant abutments, overlaid with an acrylic or ceramic tooth-and-gingiva superstructure. Designed for patients rehabilitated with subperiosteal or endosseous implants requiring a complete arch restoration. Offers natural aesthetics, phonetic comfort, and functional bite force comparable to natural dentition. Retrievable for maintenance and repair without surgical intervention. Custom-designed and fabricated to each patient's occlusal scheme and smile design.",
//           category: "prosthetic-support"
//       },
//       {
//         name: "Emergency Fixation Screw",
//         description:
//           "A rapid-deployment titanium screw for urgent intraoperative stabilization of bone segments or implant frameworks when primary fixation is compromised.",
//         image: emergencyFixationScrew,
//         details:
//           "Engineered for situations requiring immediate, reliable fixation under challenging surgical conditions. Features a self-tapping thread design for fast insertion without pre-drilling in most cortical bone densities. Manufactured from Grade 5 biocompatible titanium alloy for strength and corrosion resistance. Available in multiple lengths to accommodate varying bone thickness. Compatible with standard screwdriver handles and torque-control devices.",
//           category: "bone-fixation-accessories"
//       },
//       {
//         name: "Standard Fixation Screw",
//         description:
//           "A versatile titanium bone fixation screw for routine stabilization of implant frameworks, bone grafts, and osteotomy segments.",
//         image: standardFixationScrew,
//         details:
//           "Designed for predictable, long-term fixation in elective oral and maxillofacial surgical procedures. The optimized thread geometry ensures maximum purchase in cortical and cancellous bone, minimizing micro-movement during healing. Manufactured from medical-grade titanium with a surface finish that promotes osseous contact. Available in a range of diameters and lengths to suit diverse anatomical sites. Fully compatible with the bone drill and screwdriver instruments in our surgical kit.",
//           category: "bone-fixation-accessories"
//       },
//       {
//         name: "Bone Drill",
//         description:
//           "A precision surgical drill engineered for controlled osteotomy and screw-hole preparation in oral and maxillofacial procedures.",
//         image: boneDrill,
//         details:
//           "Features a flute geometry optimized to minimize heat generation and bone necrosis during drilling, preserving bone viability at the fixation site. Manufactured from high-grade surgical steel with a surface treatment for extended durability and repeated sterilization cycles. Compatible with standard low-speed and high-torque surgical handpieces. Depth-marked shank allows for controlled penetration depth. Available in diameters matched to the standard and emergency fixation screw ranges.",
//           category: "bone-fixation-accessories"
//       },
//       {
//         name: "Screws and Drills Box",
//         description:
//           "A comprehensive surgical kit containing a curated selection of fixation screws and matched drills, organized for efficient intraoperative access.",
//         image: fullBox,
//         details:
//           "The complete kit includes emergency and standard fixation screws in multiple lengths and diameters, along with their corresponding bone drills and screwdriver tips, all housed in a color-coded, autoclavable cassette. Designed to streamline the surgical scrub workflow and eliminate the need for multiple separate trays. Each component is individually labeled for rapid identification under sterile conditions. The cassette is compatible with standard sterilization protocols including steam autoclave cycles.",
//           category: "bone-fixation-accessories"
//       },
//       {
//         name: "Quad Zygoma Guide",
//         description:
//           "A patient-specific surgical guide for simultaneous four-implant zygomatic placement, enabling precise angulation and depth control across both zygomatic arches.",
//         image: quadZygomaGuide,
//         details:
//           "Designed for severely atrophic maxillae where conventional implants are not feasible, this guide supports the placement of four zygomatic implants in a single surgical session. Planned using virtual surgical software integrating CBCT data to define optimal implant trajectories avoiding critical anatomical structures. Reduces chair time, minimizes freehand error, and improves implant parallelism for prosthetic accuracy. Fabricated from biocompatible, autoclavable surgical resin with palatal and mucosal seating surfaces for stable intraoperative positioning.",
//           category: "zygoma-guides"
//       },
//       {
//         name: "Single Zygoma Guide",
//         description:
//           "A surgical guide for accurate unilateral zygomatic implant placement, used in combination with conventional implants for asymmetric bone deficiency cases.",
//         image: singleZygomaGuide,
//         details:
//           "Indicated when bone loss is limited to one side of the maxilla, allowing a hybrid approach combining one zygomatic implant with standard endosseous fixtures. The guide is patient-specific, designed from CBCT imaging to precisely control implant angulation, entry point, and depth through the zygomatic bone. Eliminates the need for freehand trajectory estimation, reducing the risk of sinus perforation or orbital floor proximity. Manufactured from sterilizable resin with a stable mucosal fit for consistent intraoperative positioning.",
//           category: "zygoma-guides"
//       },
//     ];

//     type Product = typeof products[0];

//     const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
//     return (
//         <AnimatePresence>
//             <motion.div
//                 className="fixed inset-0 z-50 flex items-center justify-center p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//             >
//                 <motion.div
//                 className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//                 onClick={onClose}
//                 />
//                 <motion.div
//                 className="relative bg-card border border-border rounded-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
//                 style={{ boxShadow: "var(--card-shadow-hover)" }}
//                 initial={{ opacity: 0, scale: 0.92, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.92, y: 20 }}
//                 transition={{ duration: 0.3 }}
//                 >
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground rounded-full p-2 transition"
//                 >
//                     <X size={18} />
//                 </button>

//                 <div className="h-72 overflow-hidden">
//                     <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={800}
//                     height={400}
//                     className="w-full h-full object-cover"
//                     />
//                 </div>

//                 <div className="p-6">
//                     <h3 className="text-2xl font-bold  text-foreground mb-3">
//                     {product.name}
//                     </h3>
//                     <p className="text-muted-foreground leading-relaxed mb-4">
//                     {product.description}
//                     </p>
//                     <hr className="border-border mb-4" />
//                     <p className="text-muted-foreground leading-relaxed">
//                     {product.details}
//                     </p>
//                 </div>
//                 </motion.div>
//             </motion.div>
//         </AnimatePresence>
//     );
//     };

//     const ProductsSection = () => {
//     const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//     return (
//         <section id="products" className="section-padding bg-background">
//         <div className="container mx-auto px-4">
//             <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-2xl mx-auto text-center mb-16"
//             >
//             <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
//                 What We Offer
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground">
//                 Our Products
//             </h2>
//             </motion.div>
// <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//   {products.map((product, i) => (
//     <motion.li
//       key={i}
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: i * 0.1 }}
//       className="group bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all duration-300"
//       style={{ boxShadow: "var(--card-shadow)" }}
//       onClick={() => setSelectedProduct(product)}
//       onMouseEnter={(e) => {
//         (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
//       }}
//       onMouseLeave={(e) => {
//         (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
//       }}
//     >
//       {/* Image Container */}
//       <div className="relative h-56 overflow-hidden bg-muted">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={600}
//           height={400}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           loading="lazy"
//         />
//         {/* Hover CTA */}
//         <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <span className="flex items-center gap-2 bg-white text-primary text-sm font-semibold px-5 py-2.5 rounded-full translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
//             View Details
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="text-base font-semibold text-foreground font mb-1.5">
//           {product.name}
//         </h3>
//         <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
//           {product.description}
//         </p>
//       </div>
//     </motion.li>
//   ))}
// </ul>
//         </div>

//         {selectedProduct && (
//             <ProductModal
//             product={selectedProduct}
//             onClose={() => setSelectedProduct(null)}
//             />
//         )}
//         </section>
//     );
//     };

//     export default ProductsSection;
"use client"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

import mandibularSubperiostealImplant from "@/public/assets/psi/mandibular subperiosteal implant .JPG.png";
import maxillaAllDevice from "@/public/assets/psi/maxill a all device 2 .png";
import maxillarySubperiostealImplant from "@/public/assets/psi/maxillary subperiosteal implant.png";
import regionalMandibularSubperiostealImplant from "@/public/assets/psi/regional mandibular subperiosteal implant.png";
import harvestingGuide from "@/public/assets/surgical-guides/harvesting guide .png";
import platouingAndSlotsPrepGuide from "@/public/assets/surgical-guides/platouing and slots prep guide.png";
import hybridProthesis from "@/public/assets/prothestic-support/hybrid prothesis.png";
import emergencyFixationScrew from "@/public/assets/bone-fixation-accessiors/emergency fiaxrion screw.png";
import standardFixationScrew from "@/public/assets/bone-fixation-accessiors/standard fiaxrion screw.png";
import boneDrill from "@/public/assets/bone-fixation-accessiors/bone drill.png";
import fullBox from "@/public/assets/bone-fixation-accessiors/screws and drills box.png";
import quadZygomaGuide from "@/public/assets/zygoma-guides/quad zygoma guide .png";
import singleZygomaGuide from "@/public/assets/zygoma-guides/singel zygoma guide.png";

const products = [
  { name: "Mandibular Subperiosteal Implant", description: "A patient-specific implant framework that rests directly on the mandibular cortical bone, offering a reliable full-arch solution for patients with severe bone atrophy.", image: mandibularSubperiostealImplant, details: "Engineered from medical-grade titanium using CBCT-based 3D planning, this implant is custom-contoured to the patient's mandibular anatomy for a passive, precise fit. Indicated for fully edentulous patients with insufficient bone volume for conventional endosseous implants. The framework distributes occlusal forces evenly across the bone surface, minimizing resorption risk. Designed for single-stage surgical placement with immediate prosthetic loading capability.", category: "PSI" },
  { name: "Maxilla All Device", description: "A full-coverage maxillary subperiosteal implant system providing complete upper arch anchorage for patients with advanced maxillary bone loss.", image: maxillaAllDevice, details: "This comprehensive device spans the entire maxillary bone surface, offering multi-point support for fixed full-arch prostheses. Fabricated through a digital workflow integrating CBCT data and virtual surgical planning for an anatomically accurate framework. Suited for edentulous patients where sinus grafting or conventional implants are not viable. The design allows for secure attachment of hybrid or fixed prosthetic superstructures with long-term stability.", category: "PSI" },
  { name: "Maxillary Subperiosteal Implant", description: "A custom subperiosteal framework seated on the maxillary bone surface, designed to restore upper arch function without requiring bone augmentation.", image: maxillarySubperiostealImplant, details: "Indicated for atrophic maxillae with inadequate height or width for endosseous implant placement. The implant is individually designed from high-resolution CBCT scans to ensure a passive, anatomically adapted fit. Manufactured from biocompatible titanium alloy, it provides stable prosthetic abutments for fixed or removable restorations. Eliminates the need for sinus lifts or bone grafts, significantly reducing overall treatment complexity and duration.", category: "PSI" },
  { name: "Regional Mandibular Subperiosteal Implant", description: "A zone-specific subperiosteal implant for patients with localized mandibular bone deficiency, providing targeted support without a full-arch framework.", image: regionalMandibularSubperiostealImplant, details: "Designed for partially edentulous patients where bone loss is confined to a specific segment of the mandible. The regional framework is digitally planned and fabricated to seat passively over the affected area while preserving adjacent healthy structures. Offers a minimally invasive alternative to extensive grafting procedures. Compatible with both fixed bridge and overdenture prosthetic solutions, with load distribution optimized for the available bone volume.", category: "PSI" },
  { name: "Harvesting Guide", description: "A precision surgical guide that standardizes bone graft harvesting, ensuring consistent graft dimensions and protecting surrounding anatomical structures.", image: harvestingGuide, details: "Patient-specific guide fabricated from biocompatible, autoclavable resin based on pre-operative CBCT imaging. Directs the surgeon to the optimal harvesting site with controlled cutting boundaries, reducing the risk of neurovascular injury. Minimizes operative time and donor site morbidity while maximizing graft yield. Compatible with standard piezoelectric and rotary harvesting instruments. Designed for use in ramus, symphysis, and calvarial donor sites.", category: "surgical-guides" },
  { name: "Plateauing & Slots Preparation Guide", description: "A surgical guide that ensures precise bone surface flattening and slot preparation, critical steps for accurate subperiosteal implant seating.", image: platouingAndSlotsPrepGuide, details: "Designed to achieve reproducible plateau depths and slot positions that match the planned implant framework exactly. Fabricated from pre-operative imaging data, the guide adapts directly to the patient's bone contours for reliable intraoperative reference. Significantly reduces the risk of framework misfit and the need for intraoperative adjustments. Manufactured from sterilizable, surgical-grade resin compatible with standard preparation burs and chisels.", category: "surgical-guides" },
  { name: "Hybrid Prosthesis", description: "A screw-retained full-arch prosthesis combining the stability of implant anchorage with the aesthetic versatility of a removable-style superstructure.", image: hybridProthesis, details: "The hybrid prosthesis features a milled titanium or zirconia bar framework supported by multiple implant abutments, overlaid with an acrylic or ceramic tooth-and-gingiva superstructure. Designed for patients rehabilitated with subperiosteal or endosseous implants requiring a complete arch restoration. Offers natural aesthetics, phonetic comfort, and functional bite force comparable to natural dentition. Retrievable for maintenance and repair without surgical intervention. Custom-designed and fabricated to each patient's occlusal scheme and smile design.", category: "prosthetic-support" },
  { name: "Emergency Fixation Screw", description: "A rapid-deployment titanium screw for urgent intraoperative stabilization of bone segments or implant frameworks when primary fixation is compromised.", image: emergencyFixationScrew, details: "Engineered for situations requiring immediate, reliable fixation under challenging surgical conditions. Features a self-tapping thread design for fast insertion without pre-drilling in most cortical bone densities. Manufactured from Grade 5 biocompatible titanium alloy for strength and corrosion resistance. Available in multiple lengths to accommodate varying bone thickness. Compatible with standard screwdriver handles and torque-control devices.", category: "bone-fixation-accessories" },
  { name: "Standard Fixation Screw", description: "A versatile titanium bone fixation screw for routine stabilization of implant frameworks, bone grafts, and osteotomy segments.", image: standardFixationScrew, details: "Designed for predictable, long-term fixation in elective oral and maxillofacial surgical procedures. The optimized thread geometry ensures maximum purchase in cortical and cancellous bone, minimizing micro-movement during healing. Manufactured from medical-grade titanium with a surface finish that promotes osseous contact. Available in a range of diameters and lengths to suit diverse anatomical sites. Fully compatible with the bone drill and screwdriver instruments in our surgical kit.", category: "bone-fixation-accessories" },
  { name: "Bone Drill", description: "A precision surgical drill engineered for controlled osteotomy and screw-hole preparation in oral and maxillofacial procedures.", image: boneDrill, details: "Features a flute geometry optimized to minimize heat generation and bone necrosis during drilling, preserving bone viability at the fixation site. Manufactured from high-grade surgical steel with a surface treatment for extended durability and repeated sterilization cycles. Compatible with standard low-speed and high-torque surgical handpieces. Depth-marked shank allows for controlled penetration depth. Available in diameters matched to the standard and emergency fixation screw ranges.", category: "bone-fixation-accessories" },
  { name: "Screws and Drills Box", description: "A comprehensive surgical kit containing a curated selection of fixation screws and matched drills, organized for efficient intraoperative access.", image: fullBox, details: "The complete kit includes emergency and standard fixation screws in multiple lengths and diameters, along with their corresponding bone drills and screwdriver tips, all housed in a color-coded, autoclavable cassette. Designed to streamline the surgical scrub workflow and eliminate the need for multiple separate trays. Each component is individually labeled for rapid identification under sterile conditions. The cassette is compatible with standard sterilization protocols including steam autoclave cycles.", category: "bone-fixation-accessories" },
  { name: "Quad Zygoma Guide", description: "A patient-specific surgical guide for simultaneous four-implant zygomatic placement, enabling precise angulation and depth control across both zygomatic arches.", image: quadZygomaGuide, details: "Designed for severely atrophic maxillae where conventional implants are not feasible, this guide supports the placement of four zygomatic implants in a single surgical session. Planned using virtual surgical software integrating CBCT data to define optimal implant trajectories avoiding critical anatomical structures. Reduces chair time, minimizes freehand error, and improves implant parallelism for prosthetic accuracy. Fabricated from biocompatible, autoclavable surgical resin with palatal and mucosal seating surfaces for stable intraoperative positioning.", category: "zygoma-guides" },
  { name: "Single Zygoma Guide", description: "A surgical guide for accurate unilateral zygomatic implant placement, used in combination with conventional implants for asymmetric bone deficiency cases.", image: singleZygomaGuide, details: "Indicated when bone loss is limited to one side of the maxilla, allowing a hybrid approach combining one zygomatic implant with standard endosseous fixtures. The guide is patient-specific, designed from CBCT imaging to precisely control implant angulation, entry point, and depth through the zygomatic bone. Eliminates the need for freehand trajectory estimation, reducing the risk of sinus perforation or orbital floor proximity. Manufactured from sterilizable resin with a stable mucosal fit for consistent intraoperative positioning.", category: "zygoma-guides" },
];

const categoryLabels: Record<string, string> = {
  "PSI": "PSI",
  "surgical-guides": "Surgical Guides",
  "prosthetic-support": "Prosthetic Support",
  "bone-fixation-accessories": "Bone Fixation Accessories",
  "zygoma-guides": "Zygoma Guides",
};

const allCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

type Product = typeof products[0];

const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-card border border-border rounded-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
          style={{ boxShadow: "var(--card-shadow-hover)" }}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground rounded-full p-2 transition">
            <X size={18} />
          </button>
          <div className="h-72 overflow-hidden">
            <Image src={product.image} alt={product.name} width={800} height={400} className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
            <hr className="border-border mb-4" />
            <p className="text-muted-foreground leading-relaxed">{product.details}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat === "All" ? "All" : categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.li
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
              onClick={() => setSelectedProduct(product)}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 bg-white text-primary text-sm font-semibold px-5 py-2.5 rounded-full translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground font mb-1.5">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default ProductsSection;