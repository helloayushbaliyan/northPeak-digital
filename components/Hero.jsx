"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/constants/data";
import Button from "./Button";
import Container from "./Container";
import { CheckCircle2, BarChart3, Activity, PieChart } from "lucide-react";
import { fadeUp, fadeRight, staggerContainer, staggerItem } from "@/utils/animations";

export default function Hero() {
  // Stagger for headline words
  const titleWords = heroContent.headline.split(" ");

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent-light/30 blur-[100px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-purple-100/30 blur-[80px] animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column - Content */}
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="mb-6 flex flex-wrap gap-2">
              <motion.span variants={fadeRight} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-semibold text-secondary uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-accent animate-[pulse-glow_2s_ease-in-out_infinite]" />
                Award-Winning Agency
              </motion.span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
              {titleWords.map((word, idx) => (
                <motion.span key={idx} variants={staggerItem} className="inline-block mr-3 lg:mr-4">
                  {word.includes("Love") ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">{word}</span> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-secondary mb-10 leading-relaxed max-w-xl">
              {heroContent.subtext}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="#contact" variant="primary" size="lg" arrow>
                {heroContent.ctaPrimary}
              </Button>
              <Button href="#services" variant="outline" size="lg">
                {heroContent.ctaSecondary}
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-border/60">
              {heroContent.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visuals */}
          <div className="relative h-[500px] lg:h-[600px] hidden md:block w-full">
            {/* Abstract floating dashboard elements */}

            {/* Main Center Card */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/50"
              style={{ animation: "float 6s ease-in-out infinite" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="h-4 w-24 bg-surface rounded-md" />
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-accent" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-3/4 rounded-full" />
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-1/2 rounded-full" />
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <div className="h-full bg-purple-400 w-5/6 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Top Right Card */}
            <motion.div
              className="absolute top-[10%] right-[5%] w-[220px] bg-dark p-5 rounded-2xl shadow-2xl border border-dark-lighter"
              style={{ animation: "float 7s ease-in-out 1s infinite" }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="h-3 w-16 bg-white/20 rounded-md mb-2" />
                  <div className="h-2 w-12 bg-white/10 rounded-md" />
                </div>
              </div>
              <div className="text-white font-semibold text-xl">+124%</div>
            </motion.div>

            {/* Bottom Left Card */}
            <motion.div
              className="absolute bottom-[15%] left-[0%] w-[240px] bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/60"
              style={{ animation: "float 8s ease-in-out 2s infinite" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                  <PieChart className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">Conversion</div>
                  <div className="text-2xl font-bold text-primary mb-2">4.8%</div>
                  <div className="text-xs text-accent font-medium flex items-center gap-1">
                    ↑ 1.2% this week
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}
