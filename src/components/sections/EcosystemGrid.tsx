"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AppIcon } from "@/components/shared/AppIcon";
import { apps } from "@/lib/apps-data";
import { ArrowRight } from "lucide-react";

export function EcosystemGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The KidZoo Ecosystem"
          title="More Than Just Playdates"
          description="A complete toolkit for modern parents. From playdates to parties, we've got you covered."
          className="mx-auto mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <ScrollReveal key={app.id} delay={index * 0.08}>
              <Link href={app.slug} className="group block h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
                  style={{
                    borderTopColor: app.color,
                    borderTopWidth: "3px",
                  }}
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <AppIcon
                        name={app.shortName}
                        color={app.color}
                        lightColor={app.lightColor}
                        size="md"
                      />
                      {!app.isPlaceholder && (
                        <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gray-100 text-gray-600">
                          Available
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-lg font-bold text-gray-900 mb-2"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {app.shortName}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {app.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{ color: app.color }}
                    >
                      {app.isPlaceholder ? "Coming Soon" : "Learn More"}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
