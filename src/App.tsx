import { useState, useEffect } from "react";
import {
  initialServices,
  initialProjects,
  initialTestimonials,
  initialPackages,
  initialFAQs
} from "./data";
import { Service, Project, Testimonial, PricingPackage, ContactSubmission, FAQItem } from "./types";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessTimeline from "./components/ProcessTimeline";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

// Helper for dynamic local storage loading
const loadState = <T,>(key: string, defaultValue: T): T => {
  const saved = localStorage.getItem(key);
  if (saved) {
    try {
      return JSON.parse(saved) as T;
    } catch (e) {
      console.error(`Failed to parse localStorage key "${key}":`, e);
    }
  }
  return defaultValue;
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Stateful Data Lists loaded from localStorage or defaults
  const [services, setServices] = useState<Service[]>(() =>
    loadState<Service[]>("aistudio_services", initialServices)
  );
  const [projects, setProjects] = useState<Project[]>(() =>
    loadState<Project[]>("aistudio_projects", initialProjects)
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() =>
    loadState<Testimonial[]>("aistudio_testimonials", initialTestimonials)
  );
  const [packages, setPackages] = useState<PricingPackage[]>(() =>
    loadState<PricingPackage[]>("aistudio_packages", initialPackages)
  );
  const [faqs] = useState<FAQItem[]>(() =>
    loadState<FAQItem[]>("aistudio_faqs", initialFAQs)
  );
  const [submissions, setSubmissions] = useState<ContactSubmission[]>(() =>
    loadState<ContactSubmission[]>("aistudio_submissions", [])
  );

  // Selection link between packages and contact form
  const [selectedPackage, setSelectedPackage] = useState("Standard");

  // Sync stateful lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("aistudio_services", JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem("aistudio_projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("aistudio_testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem("aistudio_packages", JSON.stringify(packages));
  }, [packages]);

  useEffect(() => {
    localStorage.setItem("aistudio_submissions", JSON.stringify(submissions));
  }, [submissions]);

  // Dark/Light Theme Manager
  useEffect(() => {
    const root = window.document.body;
    if (darkMode) {
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
    }
  }, [darkMode]);

  // Listen for the secret key command: Ctrl + Alt + A (using Capture phase for absolute global reliability)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && (e.key === "a" || e.key === "A" || e.code === "KeyA")) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  const handleSelectPackage = (pkgName: string) => {
    setSelectedPackage(pkgName);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewSubmission = (sub: ContactSubmission) => {
    setSubmissions((prev) => [sub, ...prev]);
  };

  return (
    <>
      {/* Dynamic Smooth Custom Cursor (Ignored on touch interfaces) */}
      <CustomCursor />

      {/* Futuristic Introduction Loading Splash Screen */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen">
          {/* Main Layout Navbar Header */}
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
            openLoginModal={() => setIsAdminOpen(true)}
          />

          <main>
            {/* Visual Sections */}
            <Hero />
            <About />
            <Services services={services} />
            <WhyChooseUs />
            <ProcessTimeline />
            <Portfolio projects={projects} />
            <Packages packages={packages} onSelectPackage={handleSelectPackage} />
            <Testimonials testimonials={testimonials} />
            <FAQ faqs={faqs} />
            <Contact selectedPackage={selectedPackage} onNewSubmission={handleNewSubmission} />
          </main>

          {/* Fully Connected Footer quick links & scroll top */}
          <Footer />

          {/* Hidden Admin Dashboard Modal (Activated via Ctrl + Shift + A or Logo double click fallback) */}
          <AdminPanel
            isOpen={isAdminOpen}
            onClose={() => setIsAdminOpen(false)}
            projects={projects}
            setProjects={setProjects}
            testimonials={testimonials}
            setTestimonials={setTestimonials}
            packages={packages}
            setPackages={setPackages}
            services={services}
            setServices={setServices}
            submissions={submissions}
          />
        </div>
      )}
    </>
  );
}
