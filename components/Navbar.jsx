"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/data";
import { menuSlideIn } from "@/utils/animations";
import Button from "./Button";

/**
 * Navbar — Sticky navigation with transparent→blur transition on scroll,
 * animated underline hovers, mobile slide-in drawer, and CTA.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll for background blur transition
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10 h-18 lg:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="NorthPeak Digital — Home"
        >
          <div className="relative w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
            <span className="text-white font-bold text-lg leading-none">N</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-primary hidden sm:block">
            NorthPeak
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                role="menuitem"
                className="relative px-4 py-2 text-sm font-medium text-secondary hover:text-primary transition-colors duration-200 group"
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#contact" size="md" arrow>
            Book a Call
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-primary" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-primary" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[min(85vw,360px)] bg-white z-50 shadow-2xl lg:hidden flex flex-col"
              variants={menuSlideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-18 border-b border-border/50">
                <span className="font-bold text-lg tracking-tight text-primary">
                  NorthPeak
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-primary" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-6 py-8" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-lg font-medium text-primary hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Drawer CTA */}
              <div className="px-6 pb-8">
                <Button
                  href="#contact"
                  size="lg"
                  arrow
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Call
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
