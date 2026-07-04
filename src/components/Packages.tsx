import { motion } from "motion/react";
import { PricingPackage } from "../types";
import { Check, Flame } from "lucide-react";

interface PackagesProps {
  packages: PricingPackage[];
  onSelectPackage: (pkgName: string) => void;
}

export default function Packages({ packages, onSelectPackage }: PackagesProps) {
  return (
    <section id="packages" className="py-24 bg-luxury-bg-6 light-theme:bg-neutral-50 border-t border-white/5 light-theme:border-black/5 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            Clear Valuation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            Premium <span className="italic">Design Packages</span>
          </h2>
          <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light max-w-md mx-auto">
            Transparent, investment-driven tiers tailored to meet your brand objective perfectly.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl glass flex flex-col justify-between h-full hover:scale-[1.01] transition-all duration-300 ${
                pkg.isPopular
                  ? "border-primary-gold/60 shadow-xl glow-accent"
                  : ""
              }`}
            >
              {/* Popular Accent badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-mono font-bold uppercase px-4 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                  <Flame size={12} />
                  <span>Most Selected</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Package Tier details */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 light-theme:text-neutral-500 block">
                    {pkg.name} Tier
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-4xl sm:text-5xl font-serif font-light text-white light-theme:text-neutral-900">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">/ Project</span>
                  </div>
                  <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed pt-2">
                    {pkg.description}
                  </p>
                </div>

                <div className="h-px bg-white/5 light-theme:bg-black/5" />

                {/* Features Checklist */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                    What's Included
                  </span>
                  <ul className="space-y-3">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start space-x-2.5 text-xs text-neutral-300 light-theme:text-neutral-600 font-sans font-light leading-tight">
                        <Check size={14} className="text-primary-gold mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3.5 rounded-full text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    pkg.isPopular
                      ? "bg-white hover:bg-primary-gold text-black hover:text-white font-bold shadow-lg"
                      : "glass text-neutral-300 hover:text-white light-theme:text-neutral-700 light-theme:hover:text-black"
                  }`}
                >
                  Select {pkg.name} Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
