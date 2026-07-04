import { motion } from "motion/react";
import { Search, PenTool, Code, Zap, Rocket } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      icon: <Search className="text-primary-gold" size={20} />,
      title: "1. Strategy & Discovery",
      description: "We deep-dive into your niche, analyze competitor gaps, define your ideal customer profile, and outline a tailored roadmap."
    },
    {
      icon: <PenTool className="text-primary-gold" size={20} />,
      title: "2. Luxury UX/UI Prototyping",
      description: "We craft high-fidelity luxury layout concepts focusing on custom typography, high-impact imagery, and intuitive user flows."
    },
    {
      icon: <Code className="text-primary-gold" size={20} />,
      title: "3. Bespoke Coding",
      description: "We code your site page-by-page from scratch using ultra-modern frameworks. Zero template bloat, clean and reliable."
    },
    {
      icon: <Zap className="text-primary-gold" size={20} />,
      title: "4. Optimization Audits",
      description: "We compress all assets, configure SEO structure, test form APIs, and tune page load speeds to reach top-tier scores."
    },
    {
      icon: <Rocket className="text-primary-gold" size={20} />,
      title: "5. Production Launch",
      description: "We map your custom domain, establish CDN edge hosting, and hand over a pristine system with immediate live support."
    }
  ];

  return (
    <section id="process" className="py-24 bg-luxury-bg-3 light-theme:bg-neutral-50 border-t border-white/5 light-theme:border-black/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            Our Proven <span className="italic">5-Step Process</span>
          </h2>
          <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light max-w-lg mx-auto">
            Transparent, meticulous, and collaborative steps designed to deliver flawless results on schedule.
          </p>
        </div>

        {/* Process Roadmap Graphics (Horizontal on LG, vertical on MD/SM) */}
        <div className="relative mt-12">
          {/* Central connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 light-theme:bg-neutral-200 hidden lg:block -translate-y-1/2" />
          <div className="absolute top-0 bottom-0 left-6 w-px bg-white/5 light-theme:bg-neutral-200 lg:hidden" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex lg:flex-col items-start space-x-6 lg:space-x-0 group"
              >
                {/* Node circle */}
                <div className="relative lg:mx-auto mb-6 lg:mb-8 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neutral-950 light-theme:bg-white border border-white/10 light-theme:border-neutral-200 flex items-center justify-center group-hover:border-primary-gold transition-colors duration-300 shadow-md">
                    {step.icon}
                  </div>
                  {/* Step index badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary-gold rounded-full flex items-center justify-center text-[9px] font-bold text-neutral-950 font-mono">
                    {idx + 1}
                  </div>
                </div>

                {/* Text Block */}
                <div className="space-y-2 lg:text-center">
                  <h3 className="font-serif font-semibold text-lg text-white light-theme:text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
