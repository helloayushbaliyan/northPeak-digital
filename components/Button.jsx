"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Button — Premium CTA button with hover glow, scale, and optional arrow.
 *
 * @param {"primary" | "secondary" | "outline"} variant
 * @param {"md" | "lg"} size
 * @param {boolean} arrow — show animated arrow icon
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none";

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-accent text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:bg-accent-dark",
    secondary:
      "bg-dark text-white hover:bg-dark-lighter shadow-lg shadow-dark/20",
    outline:
      "border-2 border-border text-primary hover:border-accent hover:text-accent bg-transparent",
  };

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  const combinedClassName = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  // If href is provided, render as an anchor
  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
