import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted,
  badge,
}) {
  return (
    <div
      className={`relative h-full flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 group ${
        highlighted
          ? "bg-dark text-white border-2 border-accent shadow-2xl shadow-accent/20 md:-mt-4 md:-mb-4"
          : "bg-white text-primary border border-gray-100 shadow-lg hover:shadow-xl hover:border-gray-300"
      }`}
    >
      {/* Popular Badge */}
      {badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-dark font-bold text-sm tracking-wide py-1.5 px-4 rounded-full uppercase">
          {badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? "text-white" : "text-primary"}`}>
          {name}
        </h3>
        <p className={`text-sm mb-6 ${highlighted ? "text-gray-400" : "text-secondary"}`}>
          {description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className={`text-5xl font-black tracking-tighter ${highlighted ? "text-white" : "text-primary"}`}>
            {price}
          </span>
          <span className={`text-sm font-medium ${highlighted ? "text-gray-400" : "text-secondary"}`}>
            {period}
          </span>
        </div>
      </div>

      {/* Features List */}
      <ul className="flex-1 space-y-4 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-accent" : "text-accent-dark"
              }`}
            />
            <span className={highlighted ? "text-gray-300" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button
        variant={highlighted ? "primary" : "outline"}
        className="w-full justify-center group-hover:scale-[1.02] transition-transform"
      >
        {cta}
      </Button>
    </div>
  );
}
