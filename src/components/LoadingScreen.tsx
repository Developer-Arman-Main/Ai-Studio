import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5s total loading time
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 400); // Small buffer for exit animation
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-neutral-950 z-50 flex flex-col justify-center items-center px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="max-w-md w-full text-center space-y-6">
            {/* Elegant Logo Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <span className="font-serif italic text-4xl text-primary-gold tracking-widest block">A</span>
            </motion.div>

            {/* Title & Tagline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif font-light text-4xl text-white tracking-widest uppercase"
              >
                Aistudio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[10px] text-primary-gold tracking-[0.25em] uppercase font-mono"
              >
                We build Websites that build your Brand
              </motion.p>
            </div>

            {/* Sleek Progress Line */}
            <div className="w-full h-[2px] bg-neutral-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-gold/50 via-primary-gold to-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Lower indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest"
            >
              Initializing Luxury Experience {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
