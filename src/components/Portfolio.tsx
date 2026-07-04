import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { ExternalLink, Layers } from "lucide-react";

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="portfolio" className="py-24 bg-neutral-950 light-theme:bg-white border-t border-white/5 light-theme:border-black/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            Bespoke Creations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            Featured <span className="italic">Demo Websites</span>
          </h2>
          <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light max-w-lg mx-auto">
            Interact with our premium live-ready templates. Fully customizable and optimized to serve your business immediately.
          </p>
        </div>

        {/* Filter Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-[9px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                activeCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-white text-black light-theme:bg-black light-theme:text-white shadow-md"
                  : "glass text-neutral-400 light-theme:text-neutral-600 hover:text-white light-theme:hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-2xl overflow-hidden glass flex flex-col justify-between hover:scale-[1.01] transition-all duration-300"
              >
                {/* Mockup Preview Visual */}
                <div className="relative aspect-video overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Accent Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-primary-gold border border-white/5">
                    {project.category}
                  </span>

                  {/* Blur Overlay & Link on hover */}
                  <div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href="#contact"
                      className="p-3 bg-white text-black rounded-full hover:bg-primary-gold hover:text-white transition-colors duration-200 shadow-lg"
                      title="Request This Layout"
                    >
                      <Layers size={18} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-900 border border-white/10 text-white rounded-full hover:border-primary-gold hover:text-primary-gold transition-colors duration-200 shadow-lg"
                      title="Launch Demo website"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Text Description */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-semibold text-lg text-white light-theme:text-neutral-900 group-hover:text-primary-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer Action line */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase">
                  <span>Responsive Template</span>
                  <a
                    href="#contact"
                    className="text-primary-gold hover:underline flex items-center space-x-1"
                  >
                    <span>Request Build</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
