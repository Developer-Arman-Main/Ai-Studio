import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, Instagram, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ContactSubmission } from "../types";

interface ContactProps {
  selectedPackage: string;
  onNewSubmission: (submission: ContactSubmission) => void;
}

export default function Contact({ selectedPackage, onNewSubmission }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "Restaurant",
    selectedPackage: "Standard",
    message: "",
  });

  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  // Update selected package if it changes from Parent
  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, selectedPackage }));
    }
  }, [selectedPackage]);

  const businessTypes = [
    "Restaurant",
    "Gym / Fitness",
    "Salon / Spa",
    "Startup / Business",
    "Personal / Portfolio",
    "Creator / Freelancer",
    "Real Estate",
    "Coaching / Mentoring",
    "Other Local Business"
  ];

  const packages = ["Basic", "Standard", "Premium", "Bespoke / Consultation"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("ERROR");
      setErrorMessage("Please fill in all mandatory fields.");
      return;
    }

    setStatus("SUBMITTING");

    try {
      // 1. Submit to real Formspree endpoint as provided by user
      const response = await fetch("https://formspree.io/f/xgojrgzp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          selectedPackage: formData.selectedPackage,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Create dynamic submission object
        const newSub: ContactSubmission = {
          id: `sub-${Date.now()}`,
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          selectedPackage: formData.selectedPackage,
          message: formData.message,
          timestamp: new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        // 2. Persist in local storage state for hidden admin dashboard layouts!
        onNewSubmission(newSub);

        setStatus("SUCCESS");
        // Clear form
        setFormData({
          name: "",
          email: "",
          businessType: "Restaurant",
          selectedPackage: "Standard",
          message: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed. Please try again later.");
      }
    } catch (err: any) {
      console.error("Submission Error: ", err);
      setStatus("ERROR");
      setErrorMessage(err.message || "Something went wrong while sending your inquiry.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-luxury-bg-7 light-theme:bg-white border-t border-white/5 light-theme:border-black/5 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-radial-gradient from-primary-gold/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Inquiry Guidelines & Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 light-theme:text-neutral-500 block">
                Begin Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-white light-theme:text-neutral-900 leading-tight">
                Let's Build Your <span className="italic">Digital Legacy</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed">
                Fill out the secure design proposal form. Arman will review your business objectives personally and get back to you with a tailored action blueprint within 12 hours.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Instagram Card */}
              <a
                href="https://instagram.com/dev_arman19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-5 rounded-2xl glass hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-pink-500 flex items-center justify-center border border-white/5">
                  <Instagram size={20} />
                </div>
                <div>
                  <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                    Instagram Showcase
                  </span>
                  <span className="text-sm font-semibold text-white light-theme:text-neutral-900 group-hover:text-primary-gold transition-colors duration-200">
                    @dev_arman19
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:sainiiarmann19@gmail.com"
                className="flex items-center space-x-4 p-5 rounded-2xl glass hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-primary-gold flex items-center justify-center border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                    Send Direct Mail
                  </span>
                  <span className="text-sm font-semibold text-white light-theme:text-neutral-900 group-hover:text-primary-gold transition-colors duration-200">
                    sainiiarmann19@gmail.com
                  </span>
                </div>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[10px] font-mono uppercase text-primary-gold font-bold block mb-1">
                Zero spam promise
              </span>
              <p className="text-[11px] text-neutral-400 light-theme:text-neutral-500 font-sans font-light leading-relaxed">
                Your data is stored with absolute encryption. We use your details only to build and present your design draft. No marketing newsletters.
              </p>
            </div>
          </div>

          {/* Right Column: Formspree-ready Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass shadow-2xl relative">
              <h3 className="font-serif font-semibold text-xl sm:text-2xl text-white light-theme:text-neutral-900 mb-6">
                Design Inquiry Proposal
              </h3>

              {status === "SUCCESS" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif font-semibold text-xl text-white light-theme:text-neutral-900">
                    Inquiry Transmitted!
                  </h4>
                  <p className="text-xs text-neutral-400 light-theme:text-neutral-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for connecting. Arman has received your form and will analyze your business details. Expect a personal callback or design mockup link soon!
                  </p>
                  <button
                    onClick={() => setStatus("IDLE")}
                    className="mt-4 px-6 py-2.5 bg-white text-black text-[10px] font-semibold tracking-widest uppercase rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    Send Another Proposal
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 light-theme:text-neutral-500 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Arman Saini"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-950/40 light-theme:bg-neutral-50 border border-white/5 light-theme:border-black/5 rounded-xl text-xs text-white light-theme:text-neutral-900 placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 light-theme:text-neutral-500 block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. sainiiarmann19@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-950/40 light-theme:bg-neutral-50 border border-white/5 light-theme:border-black/5 rounded-xl text-xs text-white light-theme:text-neutral-900 placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Business Type Selector */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 light-theme:text-neutral-500 block">
                        Business Type
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-950/40 light-theme:bg-neutral-50 border border-white/5 light-theme:border-black/5 rounded-xl text-xs text-white light-theme:text-neutral-900 focus:outline-none focus:border-white transition-colors duration-200 cursor-pointer"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type} className="bg-neutral-950 text-white light-theme:bg-white light-theme:text-black">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Pricing Package Selector */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 light-theme:text-neutral-500 block">
                        Selected Package
                      </label>
                      <select
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-neutral-950/40 light-theme:bg-neutral-50 border border-white/5 light-theme:border-black/5 rounded-xl text-xs text-white light-theme:text-neutral-900 focus:outline-none focus:border-white transition-colors duration-200 cursor-pointer"
                      >
                        {packages.map((pkg) => (
                          <option key={pkg} value={pkg} className="bg-neutral-950 text-white light-theme:bg-white light-theme:text-black">
                            {pkg} Package
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 light-theme:text-neutral-500 block">
                      Tell Us About Your Goals & Ideas *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Specify your features request, page count, or branding suggestions here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-950/40 light-theme:bg-neutral-50 border border-white/5 light-theme:border-black/5 rounded-xl text-xs text-white light-theme:text-neutral-900 placeholder-neutral-600 focus:outline-none focus:border-white transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Status alert boxes */}
                  {status === "ERROR" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-start space-x-2 text-rose-400"
                    >
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                      <span className="text-[11px] font-medium leading-tight">{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "SUBMITTING"}
                    className="w-full py-4 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-white hover:bg-primary-gold text-black hover:text-white transition-all duration-300 shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {status === "SUBMITTING" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Transmitting Proposal...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Private Inquiry</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
