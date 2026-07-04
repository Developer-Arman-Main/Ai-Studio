import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Code, Search, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Code className="text-primary-gold" size={24} />,
      title: "100% Bespoke Code",
      description: "No bulky Elementor or sluggish WordPress builders. We write clean, optimized code for maximum control, security, and rendering speed."
    },
    {
      icon: <Sparkles className="text-primary-gold" size={24} />,
      title: "High-End Luxury Visuals",
      description: "Custom layouts with glassmorphic cards, smooth animations, elegant layouts, and visual hierarchy designed to command high-ticket trust."
    },
    {
      icon: <Zap className="text-primary-gold" size={24} />,
      title: "Extreme Speed Performance",
      description: "Engineered to achieve 95+ PageSpeed scores. Fast load times improve your user experience and lower customer bounce rates."
    },
    {
      icon: <Search className="text-primary-gold" size={24} />,
      title: "Built-in Search SEO ready",
      description: "Semantic tags, microdata, and clean schema structures configured from day one to index cleanly and rank quickly on Google searches."
    },
    {
      icon: <Shield className="text-primary-gold" size={24} />,
      title: "Secure & Resilient",
      description: "We secure all forms, hide sensitive API credentials server-side, and implement high-efficiency protection algorithms."
    },
    {
      icon: <Headphones className="text-primary-gold" size={24} />,
      title: "Dedicated Founder Support",
      description: "Work directly with Arman. No account managers, no translation loss. Enjoy premium, responsive, 1-on-1 support."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-luxury-bg-4 light-theme:bg-white border-t border-white/5 light-theme:border-black/5 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-radial-gradient from-white/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            The Aistudio Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            Why Discerning <span className="italic">Clients</span> Choose Us
          </h2>
          <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light max-w-lg mx-auto">
            We bridge the gap between jaw-dropping high-end design and absolute technical optimization.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="p-8 rounded-2xl glass flex flex-col justify-between hover:scale-[1.02] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shadow-md text-primary-gold">
                  {pt.icon}
                </div>
                <h3 className="font-serif font-semibold text-lg text-white light-theme:text-neutral-900 tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed">
                  {pt.description}
                </p>
              </div>

              {/* Decorative accent number */}
              <div className="text-right text-[10px] font-mono font-bold text-neutral-700/60 light-theme:text-neutral-300 mt-6 select-none">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
