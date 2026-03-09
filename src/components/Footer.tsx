const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold text-background">Neobone</span>
            <p className="text-sm mt-1 text-background/50">
              Precision prosthetics for maxillofacial surgery.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-background transition-colors">About</a>
            <a href="#services" className="hover:text-background transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-background transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-background/10 mt-8 pt-8 text-center text-xs text-background/40">
          © {new Date().getFullYear()} Neobone. All rights reserved. <br />
          By: <a className="underline text-white" href="https://moatasimashraf.com" target="_blank">Moatasim</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
