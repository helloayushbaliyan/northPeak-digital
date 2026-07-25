"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/constants/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/utils/animations";

export default function Pricing() {
  return (
    <Section id="pricing" variant="light" className="relative">
      <Container>
        <SectionHeading
          tagline="Pricing"
          title="Transparent, Predictable Investment"
          subtitle="No hidden fees. No endless retainers. Just high-impact deliverables that drive ROI."
          variant="light"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mt-12 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={staggerItem} className="h-full">
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
