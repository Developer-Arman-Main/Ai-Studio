import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, 5000); // auto-slide every 5 seconds
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, testimonials.length]);

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  // Sliding animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-luxury-bg-4 light-theme:bg-white border-t border-white/5 light-theme:border-black/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900">
            Endorsements from <span className="italic">India</span>
          </h2>
          <p className="text-xs text-neutral-400 light-theme:text-neutral-500 font-sans font-light">
            Real feedback from ambitious Indian founders, chefs, gym owners, and creative art directors.
          </p>
        </div>

        {/* Carousel Outer Frame */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full p-8 sm:p-12 rounded-3xl glass relative flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Quote Mark Decor */}
              <Quote className="absolute top-6 right-8 text-primary-gold/10 pointer-events-none" size={100} />

              {/* Avatar Placeholder with privacy warning (no client stock pics) */}
              <div className="relative w-24 h-24 rounded-full flex-shrink-0 border border-white/10 p-2 shadow-xl bg-neutral-900/80 flex flex-col items-center justify-center text-center">
                <span className="text-[8px] font-mono uppercase tracking-[0.1em] text-primary-gold font-bold leading-tight">No Image</span>
                <span className="text-[7px] font-sans text-neutral-500 uppercase tracking-wider mt-1 leading-normal">Privacy<br/>Protected</span>
              </div>

              {/* Testimonial Core Text */}
              <div className="space-y-4 flex-grow text-center md:text-left">
                {/* Gold Rating Stars */}
                <div className="flex justify-center md:justify-start space-x-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-primary-gold text-primary-gold" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-neutral-200 light-theme:text-neutral-700 font-sans font-light italic leading-relaxed">
                  "{currentTestimonial.content}"
                </p>

                {/* Identity Metadata */}
                <div>
                  <h3 className="font-serif font-semibold text-white light-theme:text-neutral-900 text-lg">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 light-theme:text-neutral-500">
                    {currentTestimonial.role}, <span className="text-primary-gold">{currentTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Navigation Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Slide Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex ? "bg-primary-gold w-6" : "bg-neutral-850 light-theme:bg-neutral-200 hover:bg-neutral-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Left/Right Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={slidePrev}
              className="p-2.5 rounded-full border border-neutral-800 light-theme:border-neutral-200 hover:border-primary-gold hover:text-primary-gold text-white light-theme:text-neutral-900 transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={slideNext}
              className="p-2.5 rounded-full border border-neutral-800 light-theme:border-neutral-200 hover:border-primary-gold hover:text-primary-gold text-white light-theme:text-neutral-900 transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
