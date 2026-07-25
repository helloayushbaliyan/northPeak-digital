// ============================================
// NorthPeak Digital — All Site Content
// ============================================
// Single source of truth for all copy, data,
// and configuration used across the site.

import {
  Globe,
  Palette,
  Search,
  ShoppingCart,
  Code2,
  TrendingUp,
  Zap,
  Users,
  Handshake,
  Star,
} from "lucide-react";

// --- Navigation ---
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// --- Hero ---
export const heroContent = {
  headline: "Build Digital Products That Customers Love.",
  subtext:
    "We help startups and growing brands design, build, and scale premium digital experiences — from first pixel to global launch.",
  ctaPrimary: "Start Your Project",
  ctaSecondary: "View Our Work",
  trustBadges: [
    "Trusted by 200+ startups",
    "98% client satisfaction",
    "Avg. 3-week delivery",
  ],
};

// --- Services ---
export const services = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Pixel-perfect, conversion-focused websites that tell your brand story and drive real business outcomes.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Strategic brand systems — from logo to guidelines — that make your company instantly recognizable and memorable.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Data-driven search optimization that puts your brand in front of the right audience at the right moment.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "High-converting online stores built for scale, with seamless checkout flows and inventory management.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Full-stack SaaS products and web apps engineered for performance, security, and delightful user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Multi-channel growth strategies that combine paid, organic, and product-led tactics to accelerate revenue.",
  },
];

// --- Why Choose Us ---
export const whyChooseUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We move fast without cutting corners. Most projects launch within 2–4 weeks, not months.",
  },
  {
    icon: Users,
    title: "Senior Designers",
    description:
      "Your project is led by designers and engineers with 10+ years of experience — never juniors or outsourced teams.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    description:
      "We don't disappear after launch. We stay on as your growth partner, iterating and scaling with you.",
  },
];

// --- Results / Stats ---
export const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 35, suffix: "+", label: "Industries" },
  { value: 12, suffix: "+", label: "Countries" },
];

// --- Testimonials ---
export const testimonials = [
  {
    name: "Sarah Chen",
    company: "Flowbase",
    role: "CEO & Co-founder",
    quote:
      "NorthPeak transformed our outdated SaaS product into something our users genuinely love. Signups increased 3× in the first month after launch.",
    metric: "3× signups",
    rating: 5,
  },
  {
    name: "Marcus Oyelaran",
    company: "Kinetic Labs",
    role: "Head of Product",
    quote:
      "Working with NorthPeak felt like having a world-class design team in-house. They understood our vision immediately and shipped faster than we expected.",
    metric: "Shipped 2 weeks early",
    rating: 5,
  },
  {
    name: "Emily Rosen",
    company: "GreenThread",
    role: "Founder",
    quote:
      "Our new brand identity and website positioned us as a premium player in a crowded market. Within 6 months, we closed our Series A.",
    metric: "Series A closed",
    rating: 5,
  },
];

// --- Pricing ---
export const pricingPlans = [
  {
    name: "Starter",
    price: "$2,499",
    period: "per project",
    description: "Perfect for early-stage startups and MVPs.",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO setup",
      "2 rounds of revisions",
      "1 month of support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$5,999",
    period: "per project",
    description: "For scaling businesses ready to level up their digital presence.",
    features: [
      "Custom multi-page website",
      "Brand identity package",
      "Advanced SEO & analytics",
      "E-commerce integration",
      "Priority support for 3 months",
    ],
    cta: "Start Growing",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "$12,999",
    period: "per project",
    description: "End-to-end digital transformation for ambitious teams.",
    features: [
      "Full SaaS / web application",
      "Complete brand overhaul",
      "Growth marketing strategy",
      "Dedicated project manager",
      "6 months of ongoing support",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

// --- Contact ---
export const contactInfo = {
  email: "hello@northpeakdigital.com",
  phone: "+1 (415) 555-0132",
  location: "San Francisco, CA",
  socials: [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
};

// --- Footer ---
export const footerLinks = {
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Web Design", href: "#services" },
    { label: "Branding", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "Development", href: "#services" },
  ],
};
