import { motion } from "motion/react";
import { Mail, Instagram, ArrowUpRight, Award, Flame, Star, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-luxury-bg-2 light-theme:bg-white relative overflow-hidden border-t border-white/5 light-theme:border-black/5">
      {/* Decorative Radial Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            The Mind Behind Aistudio
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            About the <span className="italic">Founder</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Founder Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Golden Glow border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-white/10 via-white/5 to-transparent opacity-30 group-hover:opacity-50 blur transition duration-1000" />

              <div className="relative rounded-2xl overflow-hidden bg-[#1c1435]/60 border border-white/5 max-w-[340px] shadow-2xl glass">
                {/* Premium Monogram Logo representing Aistudio and Founder Arman */}
                <div className="relative aspect-[3/4] bg-[#130b25]/60 flex flex-col justify-end p-6">
                  <img
                    src="../assets/images/aistudio_logo_colorful_1783194363826.jpg"
                    alt="Arman - Founder & Architect of Aistudio"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130b25] via-[#130b25]/40 to-transparent" />

                  <div className="relative z-10 space-y-1">
                     <span className="text-[9px] font-mono uppercase text-primary-gold tracking-[0.2em] font-bold">Founder / Architect</span>
                    <h3 className="font-serif font-bold text-2xl text-white">Arman</h3>
                    <p className="text-xs text-neutral-400">Pioneering luxury web designs that transform businesses into household brands.</p>
                  </div>
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#150e2d]/90 border border-white/10 p-4 rounded-xl shadow-lg flex items-center space-x-2 glass">
                <div className="w-2 h-2 rounded-full bg-primary-gold" />
                <span className="text-[9px] font-mono tracking-widest text-white uppercase font-bold">100% Handcrafted</span>
              </div>
            </div>
          </div>

          {/* Right Side: Philosophy & Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif font-light text-2xl md:text-3xl text-white light-theme:text-neutral-900 leading-tight">
                Hi, I'm <span className="font-bold italic text-primary-gold">Arman.</span> We build websites that build your brand.
              </h3>
              <p className="text-neutral-400 light-theme:text-neutral-600 font-sans font-light leading-relaxed text-sm sm:text-base">
                At Aistudio, we believe your website should be your hardest-working employee. It shouldn't just exist—it must captivate, convince, and convert. We discard cheap templates and generic structures in favor of luxury, modern bespoke code tailored to your specific market.
              </p>
              <p className="text-neutral-400 light-theme:text-neutral-600 font-sans font-light leading-relaxed text-sm sm:text-base">
                Whether you run a high-end restaurant, a boutique salon, a premier fitness gym, a coaching practice, or a fast-paced tech startup, we sculpt custom-tailored digital spaces designed to turn random visitors into loyal advocates.
              </p>
            </div>

            {/* Micro Grid benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 text-primary-gold mt-1">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-white light-theme:text-neutral-900 text-sm">Luxury Standards</h4>
                  <p className="text-xs text-neutral-400 light-theme:text-neutral-500 mt-1 font-sans">Aesthetic perfection tailored exclusively for premium target audiences.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl glass flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 text-primary-gold mt-1">
                  <Flame size={16} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-white light-theme:text-neutral-900 text-sm">Conversion-Focused</h4>
                  <p className="text-xs text-neutral-400 light-theme:text-neutral-500 mt-1 font-sans">Engineered to drive inquiries, bookings, and customer acquisitions.</p>
                </div>
              </div>
            </div>

            {/* Social Connection Channels */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://instagram.com/dev_arman19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 light-theme:border-black/10 hover:border-primary-gold hover:text-primary-gold transition-all duration-300 text-sm font-medium"
              >
                <Instagram size={16} className="text-pink-500" />
                <span>@dev_arman19</span>
                <ArrowUpRight size={14} className="opacity-40" />
              </a>

              <a
                href="mailto:sainiiarmann19@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 light-theme:border-black/10 hover:border-primary-gold hover:text-primary-gold transition-all duration-300 text-sm font-medium"
              >
                <Mail size={16} className="text-primary-gold" />
                <span>sainiiarmann19@gmail.com</span>
                <ArrowUpRight size={14} className="opacity-40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
