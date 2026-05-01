
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
import stackableGuide from "@/public/assets/surgical-guides/stackable guide.png";
import hybridProthesis from "@/public/assets/prothestic-support/hybrid prothesis.png";
import emergencyFixationScrew from "@/public/assets/bone-fixation-accessiors/emergency fiaxrion screw.png";
import miniFixationScrew from "@/public/assets/bone-fixation-accessiors/standard fiaxrion screw.png";
import microFixationScrew from "@/public/assets/bone-fixation-accessiors/micro fiaxrion screw.png";
import reconstructionFixationScrew from "@/public/assets/bone-fixation-accessiors/Reconstruction screw.png";
import boneDrill from "@/public/assets/bone-fixation-accessiors/bone drill.png";
import fullBox from "@/public/assets/bone-fixation-accessiors/screws and drills box.png";
import quadZygomaGuide from "@/public/assets/zygoma-guides/quad zygoma guide .png";
import singleZygomaGuide from "@/public/assets/zygoma-guides/singel zygoma guide.png";

const products = [
  { 
    name: "Mandibular Subperiosteal Implant", 
    description: "A patient-specific implant framework that rests directly on the mandibular cortical bone, offering a reliable full-arch solution for patients with severe bone atrophy.", 
    image: mandibularSubperiostealImplant, 
    details: "", 
    category: "PSI" },
  { 
    name: "Regional maxillary subperiosteal Implant", 
    description: "A full-coverage maxillary subperiosteal implant system providing complete upper arch anchorage for patients with advanced maxillary bone loss.", 
    image: maxillaAllDevice, 
    details: "", 
    category: "PSI" },
  { 
    name: "Maxillary Subperiosteal Implant", 
    description: "A custom subperiosteal framework seated on the maxillary bone surface, designed to restore upper arch function without requiring bone augmentation.", 
    image: maxillarySubperiostealImplant, 
    details: "", 
    category: "PSI" },
  { 
    name: "Regional Mandibular Subperiosteal Implant", 
    description: "A zone-specific subperiosteal implant for patients with localized mandibular bone deficiency, providing targeted support without a full-arch framework.", 
    image: regionalMandibularSubperiostealImplant, 
    details: "", 
    category: "PSI" },
  { 
    name: "Harvesting Guide", 
    description: "A precision surgical guide that standardizes bone graft harvesting, ensuring consistent graft dimensions and protecting surrounding anatomical structures.", 
    image: harvestingGuide, 
    details: "", 
    category: "surgical-guides" },
  { 
    name: "Plateacuing & Slots Preparation Guide", 
    description: "A surgical guide that ensures precise bone surface flattening and slot preparation, critical steps for accurate subperiosteal implant seating.", 
    image: platouingAndSlotsPrepGuide, 
    details: "", 
    category: "surgical-guides" },
  { 
    name: "Stackable Guide", 
    description: "A surgical guide that ensures precise bone surface flattening and slot preparation, critical steps for accurate subperiosteal implant seating.", 
    image: stackableGuide, 
    details: "", 
    category: "surgical-guides" },
  { 
    name: "Hybrid Prosthesis", 
    description: "A screw-retained full-arch prosthesis combining the stability of implant anchorage with the aesthetic versatility of a removable-style superstructure.", 
    image: hybridProthesis, 
    details: "", 
    category: "prosthetic-support" },
  { 
    name: "Emergency Fixation Screws", 
    description: "A rapid-deployment titanium screw for urgent intraoperative stabilization of bone segments or implant frameworks when primary fixation is compromised.", 
    image: emergencyFixationScrew, 
    details: "", 
    category: "bone-fixation-accessories" },
  { 
    name: "Mini screws", 
    description: "A versatile titanium bone fixation screw for routine stabilization of implant frameworks, bone grafts, and osteotomy segments.", 
    image: miniFixationScrew, 
    details: "", 
    category: "bone-fixation-accessories" },
  { 
    name: "Micro screws", 
    description: "Gpr fixation , narrow diameter useful in small bone fixation. Variable lengths.", 
    image: microFixationScrew, 
    details: "", 
    category: "bone-fixation-accessories" },
  { 
    name: "Reconstruction screws", 
    description: "Large diameter screw used for rigid fixation of reconstruction plates. Rigid fixation. More bone engagement. Stable positioning.", 
    image: reconstructionFixationScrew, 
    details: "", 
    category: "bone-fixation-accessories" },
  { 
    name: "Bone Drill", 
    description: "A precision surgical drill engineered for controlled osteotomy and screw-hole preparation in oral and maxillofacial procedures.", 
    image: boneDrill, 
    details: "", 
    category: "bone-fixation-accessories" },
  { 
    name: "Screws and Drills Box", 
    description: "A comprehensive surgical kit containing a curated selection of fixation screws and matched drills, organized for efficient intraoperative access.", 
    image: fullBox, 
    details: "", 
    category: "bone-fixation-accessories" },
  { 
    name: "Quad Zygoma Guide", 
    description: "A patient-specific surgical guide for simultaneous four-implant zygomatic placement, enabling precise angulation and depth control across both zygomatic arches.", 
    image: quadZygomaGuide, 
    details: "", 
    category: "zygoma-guides" },
  { 
    name: "Single Zygoma Guide", 
    description: "A surgical guide for accurate unilateral zygomatic implant placement, used in combination with conventional implants for asymmetric bone deficiency cases.", 
    image: singleZygomaGuide, 
    details: "", 
    category: "zygoma-guides" },
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