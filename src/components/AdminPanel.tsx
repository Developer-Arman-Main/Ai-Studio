import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Lock,
  Eye,
  Settings,
  Plus,
  Trash2,
  Edit,
  LogOut,
  FolderKanban,
  MessageSquareQuote,
  Layers,
  Sparkles,
  DollarSign,
  AlertCircle,
  Clock,
  Briefcase
} from "lucide-react";
import { Project, Testimonial, PricingPackage, Service, ContactSubmission } from "../types";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  packages: PricingPackage[];
  setPackages: React.Dispatch<React.SetStateAction<PricingPackage[]>>;
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
  submissions: ContactSubmission[];
}

export default function AdminPanel({
  isOpen,
  onClose,
  projects,
  setProjects,
  testimonials,
  setTestimonials,
  packages,
  setPackages,
  services,
  setServices,
  submissions
}: AdminPanelProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"submissions" | "portfolio" | "testimonials" | "packages" | "services">("submissions");

  // State managers for Editing items
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [editingPackage, setEditingPackage] = useState<PricingPackage | null>(null);
  const [editingService, setEditingService] = useState<Service | null>(null);

  // Form states for creating/editing Projects
  const [projectForm, setProjectForm] = useState<Omit<Project, "id">>({
    title: "",
    category: "Restaurant",
    image: "",
    demoUrl: "",
    description: ""
  });

  // Form states for creating/editing Testimonials
  const [testimonialForm, setTestimonialForm] = useState<Omit<Testimonial, "id">>({
    name: "",
    role: "",
    company: "",
    content: "",
    rating: 5,
    avatar: ""
  });

  useEffect(() => {
    if (isOpen) {
      const sessionAuth = localStorage.getItem("aistudio_admin_logged");
      setIsLoggedIn(sessionAuth === "true");
      // Reset inputs & errors for a clean experience
      setLoginError("");
      setUsername("");
      setPassword("");
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === "arman" && password === "Arman@1905") {
      setIsLoggedIn(true);
      setLoginError("");
      localStorage.setItem("aistudio_admin_logged", "true");
    } else {
      setLoginError("Invalid credentials. Please verify your private access parameters.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("aistudio_admin_logged");
  };

  // Portfolio Card Management
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editingProject.id ? { ...editingProject, ...projectForm } : p))
      );
      setEditingProject(null);
    } else {
      const newProj: Project = {
        id: `proj-${Date.now()}`,
        ...projectForm
      };
      setProjects((prev) => [newProj, ...prev]);
    }
    // Clear project form
    setProjectForm({
      title: "",
      category: "Restaurant",
      image: "",
      demoUrl: "",
      description: ""
    });
  };

  const handleRemoveProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleStartEditProject = (proj: Project) => {
    setEditingProject(proj);
    setProjectForm({
      title: proj.title,
      category: proj.category,
      image: proj.image,
      demoUrl: proj.demoUrl,
      description: proj.description
    });
  };

  // Testimonial Management
  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonial) {
      setTestimonials((prev) =>
        prev.map((t) => (t.id === editingTestimonial.id ? { ...editingTestimonial, ...testimonialForm } : t))
      );
      setEditingTestimonial(null);
    } else {
      const newTest: Testimonial = {
        id: `test-${Date.now()}`,
        ...testimonialForm
      };
      setTestimonials((prev) => [newTest, ...prev]);
    }
    setTestimonialForm({
      name: "",
      role: "",
      company: "",
      content: "",
      rating: 5,
      avatar: ""
    });
  };

  const handleRemoveTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const handleStartEditTestimonial = (test: Testimonial) => {
    setEditingTestimonial(test);
    setTestimonialForm({
      name: test.name,
      role: test.role,
      company: test.company,
      content: test.content,
      rating: test.rating,
      avatar: test.avatar
    });
  };

  // Pricing Package Text Editing
  const handleSavePackageText = (pkg: PricingPackage, updatedFields: Partial<PricingPackage>) => {
    setPackages((prev) =>
      prev.map((p) => (p.id === pkg.id ? { ...p, ...updatedFields } : p))
    );
  };

  // Services description editing
  const handleSaveService = (service: Service, updatedFields: Partial<Service>) => {
    setServices((prev) =>
      prev.map((s) => (s.id === service.id ? { ...s, ...updatedFields } : s))
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-xl">
      <div className="w-full max-w-6xl h-[85vh] bg-[#120822]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col glow-accent">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0b0416]/60">
          <div className="flex items-center space-x-2">
            <Lock className="text-primary-gold" size={16} />
            <span className="font-display font-bold text-xs uppercase tracking-widest text-white">
              Private Admin Environment
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Region */}
        <div className="flex-grow overflow-hidden flex">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="w-full max-w-md mx-auto flex flex-col justify-center items-center p-6 space-y-6">
              <div className="w-12 h-12 rounded-full border border-primary-gold/20 flex items-center justify-center bg-primary-gold/5 text-primary-gold">
                <Lock size={20} />
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-display font-extrabold text-lg text-white">Admin Credentials Needed</h3>
                <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                  Authentication protocol active
                </p>
              </div>

              <form onSubmit={handleLogin} className="w-full space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-950 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-primary-gold"
                    placeholder="Enter username"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-neutral-950 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-primary-gold"
                    placeholder="••••••••"
                  />
                </div>

                {loginError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] rounded-xl flex items-center space-x-2">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-primary-gold hover:bg-white text-neutral-950 text-xs font-semibold tracking-widest uppercase rounded-full transition-colors duration-200"
                >
                  Verify Signature
                </button>
              </form>
            </div>
          ) : (
            /* Admin Dashboard Panel Container */
            <div className="w-full flex h-full">
              {/* Vertical Side Tabs Panel */}
              <div className="w-64 border-r border-white/5 bg-neutral-950/40 p-4 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase px-3 block mb-4">
                    Workspace Navigation
                  </span>

                  {/* Tab Submissions */}
                  <button
                    onClick={() => setActiveTab("submissions")}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-200 ${
                      activeTab === "submissions"
                        ? "bg-primary-gold/10 text-primary-gold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <FolderKanban size={14} />
                    <span>Submissions & Proposals</span>
                  </button>

                  {/* Tab Portfolio */}
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-200 ${
                      activeTab === "portfolio"
                        ? "bg-primary-gold/10 text-primary-gold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Briefcase size={14} />
                    <span>Edit Demo Projects</span>
                  </button>

                  {/* Tab Testimonials */}
                  <button
                    onClick={() => setActiveTab("testimonials")}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-200 ${
                      activeTab === "testimonials"
                        ? "bg-primary-gold/10 text-primary-gold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <MessageSquareQuote size={14} />
                    <span>Edit Testimonials</span>
                  </button>

                  {/* Tab Packages */}
                  <button
                    onClick={() => setActiveTab("packages")}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-200 ${
                      activeTab === "packages"
                        ? "bg-primary-gold/10 text-primary-gold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <DollarSign size={14} />
                    <span>Pricing Packages</span>
                  </button>

                  {/* Tab Services */}
                  <button
                    onClick={() => setActiveTab("services")}
                    className={`w-full flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-200 ${
                      activeTab === "services"
                        ? "bg-primary-gold/10 text-primary-gold"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Layers size={14} />
                    <span>Service Settings</span>
                  </button>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-mono uppercase tracking-widest text-rose-400 hover:bg-rose-500/10 border border-rose-500/10 transition-colors duration-200"
                >
                  <LogOut size={14} />
                  <span>Exit Session</span>
                </button>
              </div>

              {/* Central Tab Content Pane */}
              <div className="flex-grow p-6 overflow-y-auto flex flex-col space-y-6">
                
                {/* Analytics Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Card 1 */}
                  <div className="p-4 rounded-2xl bg-neutral-950/40 border border-white/5 glass flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-gold/10 text-primary-gold flex items-center justify-center border border-primary-gold/20">
                      <MessageSquareQuote size={18} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400">Total Proposals</span>
                      <span className="text-xl font-serif font-light text-white leading-none">{submissions.length}</span>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="p-4 rounded-2xl bg-neutral-950/40 border border-white/5 glass flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400">Portfolio Cards</span>
                      <span className="text-xl font-serif font-light text-white leading-none">{projects.length}</span>
                    </div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="p-4 rounded-2xl bg-neutral-950/40 border border-white/5 glass flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400">Testimonials</span>
                      <span className="text-xl font-serif font-light text-white leading-none">{testimonials.length}</span>
                    </div>
                  </div>
                  
                  {/* Card 4 */}
                  <div className="p-4 rounded-2xl bg-neutral-950/40 border border-white/5 glass flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                      <Layers size={18} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono uppercase tracking-wider text-neutral-400">Services Active</span>
                      <span className="text-xl font-serif font-light text-white leading-none">{services.length}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  {activeTab === "submissions" && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white">Contact & Package Inquiries Layout</h3>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                        Total entries logged: {submissions.length}
                      </p>
                    </div>

                    {submissions.length > 0 ? (
                      <div className="space-y-4">
                        {submissions.map((sub) => (
                          <div key={sub.id} className="p-5 rounded-2xl bg-neutral-950/60 border border-white/5 space-y-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-bold text-sm text-white">{sub.name}</h4>
                                <span className="text-[10px] font-mono text-neutral-400">{sub.email}</span>
                              </div>
                              <span className="text-[10px] font-mono text-primary-gold bg-primary-gold/5 px-2.5 py-1 rounded-full border border-primary-gold/10">
                                {sub.selectedPackage} Package
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-neutral-400 bg-neutral-900/40 p-3 rounded-xl">
                              <div>BUSINESS TYPE: <span className="text-white">{sub.businessType}</span></div>
                              <div className="text-right">RECEIVED: <span className="text-white">{sub.timestamp}</span></div>
                            </div>
                            <div className="text-xs text-neutral-300 font-light italic bg-neutral-900/20 p-3 rounded-xl leading-relaxed">
                              "{sub.message}"
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-12 text-center border border-dashed border-white/5 rounded-2xl">
                        <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">
                          No live form proposals logged yet.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "portfolio" && (
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white">Edit Portfolio Projects</h3>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                        Manage stock website mockups, categories and links
                      </p>
                    </div>

                    {/* Upsert Form */}
                    <form onSubmit={handleSaveProject} className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary-gold font-bold block">
                        {editingProject ? "Modify Selected Project" : "Register New Portfolio Card"}
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Project Name</label>
                          <input
                            type="text"
                            required
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Category</label>
                          <input
                            type="text"
                            required
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Stock Image URL</label>
                          <input
                            type="text"
                            required
                            value={projectForm.image}
                            onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Demo Live Link</label>
                          <input
                            type="text"
                            required
                            value={projectForm.demoUrl}
                            onChange={(e) => setProjectForm({ ...projectForm, demoUrl: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Brief layout description</label>
                        <textarea
                          required
                          rows={2}
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white resize-none"
                        />
                      </div>

                      <div className="flex space-x-2">
                        <button type="submit" className="px-5 py-2.5 bg-primary-gold text-neutral-950 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg">
                          {editingProject ? "Apply Updates" : "Create Card"}
                        </button>
                        {editingProject && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingProject(null);
                              setProjectForm({ title: "", category: "Restaurant", image: "", demoUrl: "", description: "" });
                            }}
                            className="px-5 py-2.5 bg-neutral-800 text-white text-[10px] font-mono uppercase tracking-widest rounded-lg"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>

                    {/* Current projects listings */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block">Current Portfolio Deck</span>
                      {projects.map((proj) => (
                        <div key={proj.id} className="p-4 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src={proj.image} className="w-12 h-12 object-cover rounded-lg" referrerPolicy="no-referrer" />
                            <div>
                              <h4 className="text-xs font-bold text-white">{proj.title}</h4>
                              <span className="text-[9px] font-mono uppercase text-primary-gold">{proj.category}</span>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleStartEditProject(proj)}
                              className="p-2 bg-neutral-900 rounded-lg hover:text-primary-gold transition-colors duration-200"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              onClick={() => handleRemoveProject(proj.id)}
                              className="p-2 bg-neutral-900 rounded-lg hover:text-rose-400 transition-colors duration-200"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "testimonials" && (
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white">Edit Testimonials</h3>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                        Manage Indian client reviews and ratings
                      </p>
                    </div>

                    {/* Testimonial Upsert Form */}
                    <form onSubmit={handleSaveTestimonial} className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary-gold font-bold block">
                        {editingTestimonial ? "Edit Testimonial Profile" : "Register New Testimonial"}
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Name</label>
                          <input
                            type="text"
                            required
                            value={testimonialForm.name}
                            onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Role</label>
                          <input
                            type="text"
                            required
                            value={testimonialForm.role}
                            onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Company</label>
                          <input
                            type="text"
                            required
                            value={testimonialForm.company}
                            onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Avatar URL</label>
                          <input
                            type="text"
                            required
                            value={testimonialForm.avatar}
                            onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                            className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Testimonial Content</label>
                        <textarea
                          required
                          rows={3}
                          value={testimonialForm.content}
                          onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                          className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white resize-none"
                        />
                      </div>

                      <div className="flex space-x-2">
                        <button type="submit" className="px-5 py-2.5 bg-primary-gold text-neutral-950 text-[10px] font-mono uppercase font-bold tracking-widest rounded-lg">
                          {editingTestimonial ? "Apply Updates" : "Create Review"}
                        </button>
                        {editingTestimonial && (
                          <button
                            type="button"
                            onClick={() => {
                              setEditingTestimonial(null);
                              setTestimonialForm({ name: "", role: "", company: "", content: "", rating: 5, avatar: "" });
                            }}
                            className="px-5 py-2.5 bg-neutral-800 text-white text-[10px] font-mono uppercase tracking-widest rounded-lg"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </form>

                    {/* Current Testimonials list */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block">Logged Endorsements</span>
                      {testimonials.map((test) => (
                        <div key={test.id} className="p-4 rounded-xl bg-neutral-950 border border-white/5 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-[7px] font-mono uppercase text-center text-primary-gold leading-none px-1">
                              No<br/>Img
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-white">{test.name}</h4>
                              <span className="text-[9px] font-mono uppercase text-neutral-400">{test.role}, {test.company}</span>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleStartEditTestimonial(test)}
                              className="p-2 bg-neutral-900 rounded-lg hover:text-primary-gold transition-colors duration-200"
                            >
                              <Edit size={14} />
                            </button>
                            <button
                              onClick={() => handleRemoveTestimonial(test.id)}
                              className="p-2 bg-neutral-900 rounded-lg hover:text-rose-400 transition-colors duration-200"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "packages" && (
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white">Edit Package Text & Investment Tiers</h3>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                        Modify package name, description, and price value
                      </p>
                    </div>

                    <div className="space-y-4">
                      {packages.map((pkg) => (
                        <div key={pkg.id} className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-primary-gold font-bold block">
                            {pkg.name} Tier Configuration
                          </span>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Tier Price</label>
                              <input
                                type="text"
                                value={pkg.price}
                                onChange={(e) => handleSavePackageText(pkg, { price: e.target.value })}
                                className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[9px] font-mono uppercase tracking-widest text-neutral-400">Tier Description</label>
                              <input
                                type="text"
                                value={pkg.description}
                                onChange={(e) => handleSavePackageText(pkg, { description: e.target.value })}
                                className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "services" && (
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-white">Service Settings</h3>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
                        Modify capabilities titles and descriptive briefs
                      </p>
                    </div>

                    <div className="space-y-4">
                      {services.map((ser) => (
                        <div key={ser.id} className="p-5 rounded-2xl bg-neutral-950/40 border border-white/5 space-y-4">
                          <div className="space-y-1">
                            <label className="text-[9px] font-mono uppercase tracking-widest text-primary-gold font-bold">
                              {ser.title}
                            </label>
                            <input
                              type="text"
                              value={ser.description}
                              onChange={(e) => handleSaveService(ser, { description: e.target.value })}
                              className="w-full px-3 py-2 bg-neutral-900 rounded-lg text-xs border border-white/5 focus:outline-none text-white"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Tab Services End */}
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
