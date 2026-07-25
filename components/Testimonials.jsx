"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/utils/animations";

export default function Testimonials() {
  return (
    <Section id="testimonials" variant="light" className="bg-[#F8FAFC]">
      <Container>
        <SectionHeading
          tagline="Client Success"
          title="Don't Just Take Our Word For It"
          subtitle="Hear from the founders and product leaders who trust NorthPeak to build their digital presence."
          variant="light"
        />

        {/* Mobile: Horizontal Snap Carousel | Desktop: Grid */}
        <motion.div
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 hide-scrollbar"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={staggerItem} className="h-full">
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
