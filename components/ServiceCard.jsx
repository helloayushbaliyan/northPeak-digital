"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/utils/animations";

/**
 * ServiceCard — Premium card component with hover lift, border glow,
 * and subtle gradient background.
 */
export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl p-8 bg-surface border border-border/50 hover:border-accent/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Border Gradient Overlay */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-border/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-accent/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-secondary leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
