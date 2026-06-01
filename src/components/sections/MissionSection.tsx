"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function MissionSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            About
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are parents who have felt the frustration in the effort required
            to schedule playdates. We have seen our children feel lonely
            sometimes. We think children spend too much time in front of screens
            today — TVs, iPads, phones.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg text-gray-600 leading-relaxed">
            So we decided to use our MBA degrees and decades of business
            experience in the technology and finance sectors, to build a social
            and mobile one-stop platform to take the effort and frustration out
            of setting up play dates.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
