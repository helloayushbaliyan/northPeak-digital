"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import Container from "./Container";
import Button from "./Button";
import { contactInfo } from "@/constants/data";
import { socialIconsMap } from "./SocialIcons";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <Section id="contact" variant="dark" className="relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to start your next project?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Whether you have a clear vision or just a rough idea, we'd love to hear about it. Let's build something extraordinary together.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xl text-white hover:text-accent transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
                  Phone
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-xl text-white hover:text-accent transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">
                  Location
                </div>
                <div className="text-xl text-white">{contactInfo.location}</div>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              {contactInfo.socials.map((social, index) => {
                const Icon = socialIconsMap[social.label];
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    {Icon ? <Icon className="w-6 h-6" /> : social.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#162032] p-8 md:p-12 rounded-3xl border border-border-dark relative overflow-hidden h-full">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-400 text-lg">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 relative z-10"
                    noValidate
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-[#1E293B] border ${
                          errors.name ? "border-red-500" : "border-border-dark"
                        } rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-[#1E293B] border ${
                          errors.email ? "border-red-500" : "border-border-dark"
                        } rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full bg-[#1E293B] border ${
                          errors.message ? "border-red-500" : "border-border-dark"
                        } rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full justify-center py-4 mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
