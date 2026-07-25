"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/utils/animations";

/**
 * SectionHeading — Animated heading with tagline, title, and subtitle.
 * Used at the top of every content section for visual consistency.
 *
 * @param {"left" | "center"} align
 * @param {"light" | "dark"} variant
 */
export default function SectionHeading({
  tagline,
  title,
  subtitle,
  align = "center",
  variant = "light",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`max-w-2xl mb-14 lg:mb-20 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {tagline && (
        <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
          {tagline}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          variant === "dark" ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            variant === "dark" ? "text-gray-400" : "text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
