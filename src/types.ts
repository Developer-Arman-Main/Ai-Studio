export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  demoUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  businessType: string;
  selectedPackage: string;
  message: string;
  timestamp: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
