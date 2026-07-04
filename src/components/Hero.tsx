import { motion } from "motion/react";
import { ArrowUpRight, Monitor, Zap, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-luxury-bg-1 light-theme:bg-neutral-50">
      {/* Immersive Animated Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-radial-gradient from-primary-gold/15 to-transparent blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-radial-gradient from-white/10 to-transparent blur-3xl animate-pulse" style={{ animationDuration: "12s" }} />
      </div>

      {/* Decorative Luxury Lines & Grid Backdrop */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          {/* Accent Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass border border-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-gold" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-600">
              Premium Web Design Studio
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-5xl sm:text-6xl md:text-7xl text-white light-theme:text-neutral-900 tracking-tight leading-[1.05] text-reveal"
            >
              We build <span className="italic font-normal">Websites</span><br/>
              that build your <br/>
              <span className="font-bold">Brand.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-400/80 light-theme:text-neutral-600/80 max-w-xl mx-auto lg:mx-0 font-sans font-light leading-relaxed"
            >
              Luxury, modern, and high-performance bespoke digital design for small businesses, startups, creators, and local brands. Handcrafted by Arman.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-[10px] font-semibold tracking-widest text-neutral-950 uppercase bg-white hover:bg-primary-gold hover:text-white transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
            >
              <span>Elevate Your Brand</span>
              <ArrowUpRight size={14} />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-[10px] font-semibold tracking-widest text-white light-theme:text-neutral-900 uppercase glass hover:border-white/40 transition-all duration-300 flex items-center justify-center"
            >
              <span>Explore Creations</span>
            </a>
          </motion.div>

          {/* Trust Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-8 pt-4 text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]"
          >
            <div>
              <span className="block text-2xl font-serif font-light text-white light-theme:text-neutral-900">100%</span>
              Custom code
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div>
              <span className="block text-2xl font-serif font-light text-white light-theme:text-neutral-900">95+</span>
              Performance
            </div>
            <div className="w-px h-8 bg-neutral-800" />
            <div>
              <span className="block text-2xl font-serif font-light text-white light-theme:text-neutral-900">Top Tier</span>
              Luxury Vibe
            </div>
          </motion.div>
        </div>

        {/* Right: Immersive Bento Grid Preview from Editorial Design */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 mt-10 lg:mt-0 p-2 sm:p-4 rounded-3xl bg-neutral-900/10 light-theme:bg-neutral-500/5 relative z-10">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          {/* PORTFOLIO PREVIEW TILE */}
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-5 rounded-2xl flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="h-24 bg-neutral-900/50 rounded-xl border border-white/5 mb-4 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
              <span className="font-serif italic text-xs text-neutral-400 group-hover:scale-110 transition-transform duration-300">Aistudio.dev</span>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 light-theme:text-neutral-500 mb-1">Portfolio</h3>
              <p className="text-[9px] text-neutral-500 light-theme:text-neutral-400">Browse our high-end boutique designs.</p>
            </div>
          </motion.a>

          {/* PACKAGES TILE */}
          <motion.a
            href="#packages"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-5 rounded-2xl border-white/20 bg-white/5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 light-theme:text-neutral-500 mb-3">Packages</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-neutral-400 light-theme:text-neutral-500">Startup</span>
                <span className="font-serif">₹500+</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-neutral-400 light-theme:text-neutral-500">Standard</span>
                <span className="font-serif text-primary-gold">₹1200+</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-white light-theme:text-neutral-900">
                <span className="font-medium">Premium</span>
                <span className="font-serif font-bold">₹1800+</span>
              </div>
            </div>
            <span className="text-[8px] uppercase tracking-wider text-neutral-500 mt-2 block font-mono">Curated tiers</span>
          </motion.a>

          {/* SERVICES TILE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-5 rounded-2xl col-span-2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[10px] uppercase tracking-widest font-mono text-neutral-400 light-theme:text-neutral-500 mb-3">Bespoke Services</h3>
              <div className="grid grid-cols-3 gap-2 text-[9px] text-neutral-400 light-theme:text-neutral-600">
                <span>Landing Pages</span>
                <span>Boutique Sites</span>
                <span>Coaching Portals</span>
                <span>Gym & Fitness</span>
                <span>Restaurant hubs</span>
                <span>Sleek Portfolios</span>
                <span>SEO Built-in</span>
                <span>Personal Brand</span>
                <span>E-Commerce</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-serif text-white light-theme:text-neutral-900 italic">Built for conversion.</span>
              <a href="#services" className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white light-theme:text-neutral-900 hover:bg-white hover:text-black transition-all">→</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animated Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Discover More</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border border-neutral-700 rounded-full p-1 flex justify-center"
        >
          <div className="w-1.5 h-1.5 bg-primary-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
