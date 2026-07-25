import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCard({
  name,
  company,
  role,
  quote,
  metric,
  rating,
}) {
  return (
    <div className="w-full h-full flex flex-col bg-white border border-gray-100 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:border-accent/20 group relative overflow-hidden flex-shrink-0 snap-center md:snap-align-none w-[85vw] md:w-auto">
      {/* Subtle glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-lg md:text-xl font-medium text-primary leading-relaxed mb-8">
        "{quote}"
      </blockquote>

      <div className="mt-auto">
        {/* Metric Highlight */}
        <div className="inline-block px-4 py-2 bg-accent/10 text-accent-dark font-semibold rounded-full text-sm mb-6 border border-accent/20">
          Result: {metric}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden relative flex-shrink-0">
            {/* Using a placeholder avatar since no image provided in data.js */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg">
              {name.charAt(0)}
            </div>
          </div>
          <div>
            <div className="font-bold text-primary">{name}</div>
            <div className="text-sm text-secondary">
              {role}, <span className="font-medium text-gray-900">{company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
