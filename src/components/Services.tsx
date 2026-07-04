import { useState } from "react";
import { motion } from "motion/react";
import { Service } from "../types";
import LucideIcon from "./LucideIcon";
import { Search, Check } from "lucide-react";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="services" className="py-24 bg-luxury-bg-3 light-theme:bg-neutral-50 border-t border-white/5 light-theme:border-black/5 relative">
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
              Bespoke <span className="italic">Digital Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 light-theme:text-neutral-600 font-sans font-light">
              Crafting futuristic, elegant web experiences with customized code architecture and unmatched visual polish.
            </p>
          </div>

          {/* Luxury Live Search Bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-neutral-900/40 light-theme:bg-white/40 border border-white/5 light-theme:border-black/5 rounded-full text-[9px] tracking-[0.2em] uppercase font-semibold text-white light-theme:text-neutral-900 placeholder-neutral-500 focus:outline-none focus:border-white transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={12} />
          </div>
        </div>

        {/* Dynamic Service Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 rounded-2xl glass flex flex-col justify-between hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 text-primary-gold flex items-center justify-center border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <LucideIcon name={service.icon} size={20} />
                  </div>

                  {/* Service Title */}
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-xl text-white light-theme:text-neutral-900 group-hover:text-primary-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features list bullet points */}
                <div className="border-t border-white/5 light-theme:border-black/5 pt-6 mt-6 space-y-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-[10px] font-mono tracking-wider text-neutral-400 light-theme:text-neutral-600">
                      <Check size={10} className="text-primary-gold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-dashed border-white/10">
            <p className="text-sm text-neutral-400 font-mono tracking-widest uppercase">No matching services found</p>
          </div>
        )}
      </div>
    </section>
  );
}
