    "use client"
    import { motion, AnimatePresence } from "framer-motion";
    import Image, { StaticImageData } from "next/image";
    import { useState } from "react";
    import { X } from "lucide-react";

    const products = [
    {
        name: "Product Name",
        description: "Short description of the product goes here.",
        image: "/assets/service-3dprint.jpg",
        details: "Extended details about this product. Materials, dimensions, use cases, certifications, etc.",
    },
    {
        name: "Product Name",
        description: "Short description of the product goes here.",
        image: "/assets/service-3dprint.jpg",
        details: "Extended details about this product. Materials, dimensions, use cases, certifications, etc.",
    },
    {
        name: "Product Name",
        description: "Short description of the product goes here.",
        image: "/assets/service-3dprint.jpg",
        details: "Extended details about this product. Materials, dimensions, use cases, certifications, etc.",
    },
    {
        name: "Product Name",
        description: "Short description of the product goes here.",
        image: "/assets/service-3dprint.jpg",
        details: "Extended details about this product. Materials, dimensions, use cases, certifications, etc.",
    },
    {
        name: "Product Name",
        description: "Short description of the product goes here.",
        image: "/assets/service-3dprint.jpg",
        details: "Extended details about this product. Materials, dimensions, use cases, certifications, etc.",
    },
    {
        name: "Product Name",
        description: "Short description of the product goes here.",
        image: "/assets/service-3dprint.jpg",
        details: "Extended details about this product. Materials, dimensions, use cases, certifications, etc.",
    },
    ];

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
                <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
                />
                <motion.div
                className="relative bg-card border border-border rounded-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
                style={{ boxShadow: "var(--card-shadow-hover)" }}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.3 }}
                >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground rounded-full p-2 transition"
                >
                    <X size={18} />
                </button>

                <div className="h-72 overflow-hidden">
                    <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6">
                    <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                    {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                    </p>
                    <hr className="border-border mb-4" />
                    <p className="text-muted-foreground leading-relaxed">
                    {product.details}
                    </p>
                </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
    };

    const ProductsSection = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our Products
            </h2>
            </motion.div>
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product, i) => (
    <motion.li
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all duration-300"
      style={{ boxShadow: "var(--card-shadow)" }}
      onClick={() => setSelectedProduct(product)}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)";
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover CTA */}
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center gap-2 bg-white text-primary text-sm font-semibold px-5 py-2.5 rounded-full translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-foreground font-sans mb-1.5">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.li>
  ))}
</ul>
        </div>

        {selectedProduct && (
            <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            />
        )}
        </section>
    );
    };

    export default ProductsSection;