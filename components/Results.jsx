"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Container from "./Container";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/constants/data";
import { staggerContainer, staggerItem, viewportOnce } from "@/utils/animations";

export default function Results() {
  return (
    <Section id="results" variant="light" className="relative overflow-hidden">
      {/* Decorative subtle background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-accent/5 rounded-full blur-[100px] transform -rotate-12" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-blue-500/5 rounded-full blur-[100px] transform rotate-12" />
      </div>

      <Container className="relative z-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-10 md:p-16 lg:p-20">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-3 md:mb-4 tracking-tighter group-hover:text-accent transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-semibold text-secondary uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
