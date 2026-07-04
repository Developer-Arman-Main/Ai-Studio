import { Service, Project, Testimonial, PricingPackage, FAQItem } from "./types";

export const initialServices: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "High-converting, visually arresting single-page experiences optimized for maximum conversions.",
    icon: "Layers",
    features: ["A/B Tested Layouts", "Incredible Speed", "Custom Micro-interactions", "Formspree & CRM Setup"]
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Premium multipage digital homes for startups, local businesses, and corporate brands.",
    icon: "Briefcase",
    features: ["Custom Corporate Design", "Interactivity Focused", "Service Modules", "Analytics Integration"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Minimalist, luxury showcases for creators, architects, photographers, and professionals.",
    icon: "User",
    features: ["Dynamic Project Grid", "Elegant Typography", "Immersive Smooth Scroll", "About & CV Pages"]
  },
  {
    id: "restaurant-websites",
    title: "Restaurant Websites",
    description: "Mouth-watering digital menus, table reservation layouts, and immersive branding.",
    icon: "Utensils",
    features: ["Interactive Menus", "Reservation Integration", "Vibrant Food Showcases", "Local SEO Optimization"]
  },
  {
    id: "gym-websites",
    title: "Gym & Fitness Websites",
    description: "Energetic, powerful layouts featuring trainers, schedules, membership tiers, and booking.",
    icon: "Dumbbell",
    features: ["Class Timetables", "Membership Tables", "Trainer Showcases", "Interactive Fat Calculator"]
  },
  {
    id: "salon-websites",
    title: "Salon & Spa Websites",
    description: "Serene, modern, aesthetically-pleasing templates with elegant scheduling portals.",
    icon: "Sparkles",
    features: ["Online Booking Forms", "Service Catalogues", "Staff Spotlights", "Aesthetic Mood Theme"]
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Revamping outdated websites into ultra-modern, lightning-fast luxury interfaces.",
    icon: "RefreshCw",
    features: ["Performance Lift", "Brand Reinforcement", "Improved UX/UI", "Seamless URL Redirects"]
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Flawless, multi-device experiences tailored perfectly for mobile, tablet, and desktop screens.",
    icon: "Monitor",
    features: ["Fluid Flex Grid", "Touch-friendly Layouts", "Device-Specific Tuning", "Ultra-light Asset Delivery"]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Continuous upkeep, immediate bug fixes, software updates, and active optimization.",
    icon: "ShieldCheck",
    features: ["Monthly Audits", "Instant Hotfixes", "Security Enforcements", "Hosting Supervision"]
  },
  {
    id: "speed-optimization",
    title: "Speed Optimization",
    description: "Pushing site performance to the limits, hitting 95+ scores on Google PageSpeed.",
    icon: "Zap",
    features: ["Next-gen Image Compression", "Code Minification", "Edge CDN Config", "Database Tuning"]
  },
  {
    id: "seo-ready",
    title: "SEO Ready Websites",
    description: "Pre-configured semantic structures, schema markup, and metadata for rapid search rankings.",
    icon: "Search",
    features: ["Structured Data Validation", "Semantic HTML5", "Keyword Optimization", "XML Sitemap & Robot Config"]
  }
];

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "The Spice Lounge",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://spice-lounge-demo.com",
    description: "A luxury dining website with fluid parallax sections, modern dynamic digital menu, and table reservation booking system."
  },
  {
    id: "proj-2",
    title: "Elevate Gym & Fitness",
    category: "Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://elevate-fitness-demo.com",
    description: "Dark, neon-accented, high-octane fitness club website featuring immersive class schedules and motivational coaches."
  },
  {
    id: "proj-3",
    title: "Nirvana Wellness Spa",
    category: "Salon",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://nirvana-spa-demo.com",
    description: "Minimalist luxury, soothing glassmorphic layout detailing beauty therapy treatments and instant spa appointments."
  },
  {
    id: "proj-4",
    title: "Aetheria Architecture",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://aetheria-arch-demo.com",
    description: "Ultra-premium minimalist grid design spotlighting award-winning luxury residential architectures and blueprint concepts."
  },
  {
    id: "proj-5",
    title: "Vertex Global Group",
    category: "Business",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://vertex-corp-demo.com",
    description: "Futuristic corporate site featuring transparent navigation, live stock widgets, and immersive interactive glass dashboard."
  },
  {
    id: "proj-6",
    title: "Helix SaaS Portal",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://helix-saas-demo.com",
    description: "Beautifully animated SaaS product presentation featuring sleek interactive analytics panels, micro-animations, and CTA hooks."
  },
  {
    id: "proj-7",
    title: "Prestige Heights Villa",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://prestige-heights-demo.com",
    description: "Luxury property search portal showcasing breathtaking high-definition video backgrounds, floorplan sliders, and glass filters."
  },
  {
    id: "proj-8",
    title: "Impact Performance",
    category: "Coaching",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://impact-coaching-demo.com",
    description: "Sleek, conversion-focused mentoring & coaching hub with integrated masterclass listings, newsletters, and scheduling hooks."
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Rajesh Kumar",
    role: "Founder & Executive Chef",
    company: "The Spice Lounge",
    content: "Aistudio transformed our restaurant's digital presence completely. Our online reservation requests skyrocketed by 60% within the first month. Arman's attention to details, typography, and beautiful layout animations exceeded all expectations.",
    rating: 5,
    avatar: ""
  },
  {
    id: "test-2",
    name: "Ananya Sharma",
    role: "Co-Owner & Head Coach",
    company: "Elevate Fitness Studio",
    content: "We wanted a website that felt premium, raw, and high-energy. Arman built exactly that. The class timetables look insanely clean, and the dark glassmorphic design captures our gym's atmosphere. Outstanding web development!",
    rating: 5,
    avatar: ""
  },
  {
    id: "test-3",
    name: "Vikram Malhotra",
    role: "Managing Director",
    company: "Malhotra & Associates",
    content: "We were looking for a luxury branding approach for our boutique consultancy, and Aistudio absolutely delivered. The site loads instantly, the glass cards are futuristic, and the communication has been top-tier from start to finish.",
    rating: 5,
    avatar: ""
  },
  {
    id: "test-4",
    name: "Priya Patel",
    role: "Art Director",
    company: "Nirvana Spa & Salon",
    content: "I'm extremely selective when it comes to visual aesthetic. Arman matched my standard with pure design craftsmanship. The serene colors, elegant floating animations, and absolute responsiveness across mobile are pristine.",
    rating: 5,
    avatar: ""
  }
];

export const initialPackages: PricingPackage[] = [
  {
    id: "pack-1",
    name: "Basic",
    price: "₹500",
    description: "Sleek single-page landing site for personal branding, freelancers, or quick product launches.",
    features: [
      "1 Dynamic Landing Page",
      "Full Custom UX Design",
      "Fully Responsive Layout",
      "Formspree Contact Form",
      "SEO Ready Metadata",
      "3 Days Free Support"
    ]
  },
  {
    id: "pack-2",
    name: "Standard",
    price: "₹1200",
    description: "Complete premium multipage website optimized for startups, salons, cafes, and local brands.",
    features: [
      "Up to 5 Fully Custom Pages",
      "Luxury Glassmorphic UI/UX",
      "Stunning Scroll Animations",
      "Contact Form & CMS Hook",
      "Google Maps Integration",
      "Speed Hitting 90+ Score",
      "15 Days Comprehensive Support"
    ],
    isPopular: true
  },
  {
    id: "pack-3",
    name: "Premium",
    price: "₹1800",
    description: "Ultimate digital experience with state-of-the-art animations for high-end agencies, gyms, or restaurants.",
    features: [
      "Up to 10 Tailored Pages",
      "Immersive Micro-interactions",
      "Custom Interactive Features",
      "Advanced SEO Optimization",
      "CMS Setup & Database Link",
      "Google PageSpeed 95+ Score",
      "30 Days Luxury Support & Updates"
    ]
  }
];

export const initialFAQs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to design and launch my website?",
    answer: "Typically, a Basic landing page is delivered in 3-5 days. Standard business sites take 1-2 weeks, while complex Premium solutions can take up to 3 weeks depending on the level of interactive features and page count."
  },
  {
    id: "faq-2",
    question: "Do you configure hosting and domains?",
    answer: "Yes, we handle the entire launch process. We assist you in selecting and setting up your custom domain and deploy your website to secure, global CDN platforms like Netlify, Vercel, or Hostinger so it loads instantly everywhere."
  },
  {
    id: "faq-3",
    question: "Will I be able to edit the website content myself later?",
    answer: "Absolutely. We build standard content modules or connect lightweight, secure content managers so you can update text, add portfolio items, and change images effortlessly without writing code."
  },
  {
    id: "faq-4",
    question: "What is your website design process?",
    answer: "Our proven 5-step workflow includes: 1. Deep Discovery (understanding your objectives), 2. High-Fidelity UI Prototype Design, 3. Clean, Optimized Development, 4. Comprehensive SEO and Speed Quality Checks, and finally 5. Flawless Launch and Handover."
  },
  {
    id: "faq-5",
    question: "What if I need custom integrations like booking portals or menus?",
    answer: "We specialize in custom integrations. We can link table reservations (e.g., OpenTable), appointment calendars (e.g., Calendly), custom restaurant digital menus, contact form APIs (e.g., Formspree), and dynamic member areas smoothly."
  }
];
