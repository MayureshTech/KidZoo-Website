"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AppIcon } from "@/components/shared/AppIcon";
import { apps } from "@/lib/apps-data";
import { ArrowRight } from "lucide-react";

export function AppsGridConceptB() {
  return (
    <section id="apps" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="For Every Parenting Need"
          title="The Complete Parenting Toolkit"
          description="One platform, nine powerful apps. Everything you need to make parenting easier and more joyful."
          className="mx-auto mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <ScrollReveal key={app.id} delay={index * 0.08}>
              <Link href={app.slug} className="group block">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full ${
                    !app.isPlaceholder ? "ring-2 ring-pink-primary/10" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <AppIcon
                      name={app.shortName}
                      color={app.color}
                      lightColor={app.lightColor}
                      size="lg"
                    />
                    {!app.isPlaceholder && (
                      <span className="px-3 py-1 bg-pink-light text-pink-primary text-xs font-semibold rounded-full">
                        Available Now
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {app.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {app.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-primary group-hover:gap-2 transition-all">
                    {app.isPlaceholder ? "Coming Soon" : "Learn More"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
