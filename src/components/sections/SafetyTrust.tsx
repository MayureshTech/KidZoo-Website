"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Encrypted Data",
    description:
      "Your data is encrypted in storage and transmission, stored safely on Google's servers with best-in-class security.",
  },
  {
    icon: Lock,
    title: "No Data Selling",
    description:
      "KidZoo will not share or sell any of your information like your phone number, address, or birthdate with any third parties.",
  },
  {
    icon: Eye,
    title: "Controlled Sharing",
    description:
      "We only share your details with confirmed friends in the context of setting a playdate and making it seamless.",
  },
  {
    icon: FileCheck,
    title: "Privacy First",
    description:
      "The privacy of your personal information is a priority for KidZoo. We adhere to strict privacy policies.",
  },
];

export function SafetyTrust() {
  return (
    <section className="py-20 md:py-32 bg-teal-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Your Trust Matters"
          title="Safety & Privacy First"
          description="We understand that your child's safety is your top priority. Here's how we protect your family."
          className="mx-auto mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-card h-full">
                <div className="w-14 h-14 rounded-2xl bg-teal-light flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-teal-primary" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
