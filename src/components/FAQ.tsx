import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-luxury-bg-3 light-theme:bg-neutral-50 border-t border-white/5 light-theme:border-black/5 relative">
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            Answering Inquiries
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            Frequently Asked <span className="italic">Questions</span>
          </h2>
          <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light">
            Got queries? We have answers. If your query isn't listed, drop us a line below.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:text-primary-gold group cursor-pointer"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="text-primary-gold/40 group-hover:text-primary-gold transition-colors duration-200 flex-shrink-0" size={16} />
                    <span className="font-serif font-semibold text-sm sm:text-base text-white light-theme:text-neutral-900 group-hover:text-primary-gold transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-500 group-hover:text-primary-gold transition-colors duration-200 flex-shrink-0"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 light-theme:border-black/5 mt-0.5">
                        <p className="text-xs sm:text-sm text-neutral-400 light-theme:text-neutral-600 font-sans font-light leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
