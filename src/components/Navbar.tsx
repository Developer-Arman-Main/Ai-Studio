import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Lock } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  openLoginModal: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode, openLoginModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Packages", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary-gold via-white to-primary-gold transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-neutral-950/80 light-theme:bg-white/80 backdrop-blur-md shadow-lg border-b border-white/5 light-theme:border-black/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 group focus:outline-none"
            onDoubleClick={() => {
              // Secret double click fallback for mobile/tablet presentation to access login
              openLoginModal();
            }}
          >
            <div className="flex flex-col">
              <span className="font-serif font-bold italic text-2xl sm:text-3xl tracking-tighter text-white light-theme:text-neutral-900 uppercase group-hover:text-primary-gold transition-colors duration-300">
                Aistudio
              </span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-neutral-500 uppercase -mt-0.5">
                by Arman
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-medium text-neutral-400 light-theme:text-neutral-600 hover:text-white light-theme:hover:text-neutral-900 transition-colors duration-200 uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Utilities & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-neutral-900 light-theme:border-neutral-200 hover:border-primary-gold hover:text-primary-gold transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Secret Login Trigger */}
            <button
              onClick={openLoginModal}
              className="p-2 rounded-full border border-neutral-800 hover:border-primary-gold hover:text-primary-gold transition-all duration-300"
              style={{ display: "none" }} /* completely hidden */
              aria-hidden="true"
            >
              <Lock size={18} />
            </button>

            {/* Premium CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2 border border-white/20 light-theme:border-black/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-black light-theme:hover:bg-black light-theme:hover:text-white transition-all duration-300 cursor-pointer text-white light-theme:text-neutral-900"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-4">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-neutral-800 light-theme:border-neutral-200 hover:border-primary-gold hover:text-primary-gold transition-all duration-300 text-white light-theme:text-neutral-900"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-neutral-800 light-theme:border-neutral-200 text-white light-theme:text-neutral-900 hover:border-primary-gold transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-neutral-950/98 light-theme:bg-white/98 backdrop-blur-lg z-30 lg:hidden flex flex-col justify-between p-8"
          >
            <nav className="flex flex-col space-y-6 pt-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-semibold text-neutral-300 light-theme:text-neutral-800 hover:text-primary-gold light-theme:hover:text-primary-gold transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 pb-12"
            >
              <div className="h-px bg-neutral-800 light-theme:bg-neutral-200" />
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  Ready to elevate?
                </span>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-primary-gold hover:bg-white text-neutral-950 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 shadow-lg"
                >
                  Book Your Discovery Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
