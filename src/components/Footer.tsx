import { Instagram, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-white/5 relative">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Upper Footer section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif italic text-xl tracking-[0.1em] text-white uppercase block">
                Aistudio
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-sans font-light max-w-sm leading-relaxed">
              We build luxury, ultra-modern websites that build your brand. Handcrafted codes tailored beautifully for your market position.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-primary-gold transition-colors duration-200">
                  About Arman
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-gold transition-colors duration-200">
                  Services List
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary-gold transition-colors duration-200">
                  Demo Showcase
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-primary-gold transition-colors duration-200">
                  Investment Tiers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white font-semibold">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2">
                <Instagram size={12} className="text-neutral-500" />
                <a
                  href="https://instagram.com/dev_arman19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-gold transition-colors duration-200"
                >
                  @dev_arman19
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={12} className="text-neutral-500" />
                <a href="mailto:sainiiarmann19@gmail.com" className="hover:text-primary-gold transition-colors duration-200">
                  sainiiarmann19@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Back to Top action */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-center">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full glass hover:text-primary-gold transition-all duration-300 shadow-md group cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Lower Footer section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
          <span>
            © {new Date().getFullYear()} Aistudio. All rights reserved.
          </span>
          <span className="text-neutral-500">
            Handcrafted with ✦ by <span className="text-neutral-400">Arman</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
