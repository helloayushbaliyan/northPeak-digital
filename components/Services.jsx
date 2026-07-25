"use client";

import { motion } from "framer-motion";
import { services } from "@/constants/data";
import { staggerContainer, viewportOnce } from "@/utils/animations";
import Section from "./Section";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

/**
 * Services Section — Displays exactly 6 service cards in a responsive grid
 * with staggered reveal animations.
 */
export default function Services() {
  return (
    <Section id="services" variant="light" className="relative">
      {/* Subtle Background Pattern/Blob */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px]" />
      </div>

      <Container>
        <SectionHeading
          tagline="Our Expertise"
          title="Digital experiences that drive growth."
          subtitle="From concept to launch, we offer end-to-end digital services tailored for ambitious brands and scaling startups."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
