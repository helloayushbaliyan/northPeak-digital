"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { whyChooseUs } from "@/constants/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/utils/animations";

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" variant="dark">
      <Container>
        <SectionHeading
          tagline="Why NorthPeak"
          title="The Agency for Ambitious Brands"
          subtitle="We don't just build websites. We engineer scalable digital products that drive revenue and growth."
          variant="dark"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {whyChooseUs.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative bg-[#162032] border border-border-dark rounded-2xl p-8 transition-all duration-300 hover:border-accent hover:shadow-[0_8px_30px_rgb(20,184,166,0.15)] overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#1E293B] flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300 border border-border-dark group-hover:border-accent/30">
                    <Icon className="w-7 h-7 text-white group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
