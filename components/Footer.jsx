"use client";

import { contactInfo, footerLinks } from "@/constants/data";
import Container from "./Container";
import { ArrowUp } from "lucide-react";
import { socialIconsMap } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-border-dark relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tight text-white inline-block mb-6">
              NorthPeak<span className="text-accent">.</span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              We help startups and growing brands design, build, and scale premium digital experiences.
            </p>
            <div className="flex gap-4">
              {contactInfo.socials.map((social, index) => {
                const Icon = socialIconsMap[social.label];
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-gray-400 hover:text-accent hover:bg-accent/10 transition-colors"
                    aria-label={social.label}
                  >
                    {Icon ? <Icon className="w-5 h-5" /> : <span className="text-sm font-medium">{social.label.charAt(0)}</span>}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              <a href="https://digitalheroesco.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Built for Digital Heroes Training Task
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-[#1E293B] flex items-center justify-center group-hover:bg-accent group-hover:text-dark transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </Container>
    </footer>
  );
}
