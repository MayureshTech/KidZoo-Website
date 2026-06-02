"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stats = [
  {
    value: "30s",
    label: "To set up a playdate",
    sub: "No back-and-forth texting required",
  },
  {
    value: "2 in 3",
    label: "Playdates with schoolmates",
    sub: "The most natural connections for kids",
  },
  {
    value: "100%",
    label: "Free for families",
    sub: "No subscription, no hidden fees",
  },
];

export function MissionSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Story */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <span
                className="text-sm font-semibold tracking-widest uppercase text-pink-primary"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Why We Built This
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                We&apos;re parents too.<br />
                We felt the frustration.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have seen our children feel lonely sometimes. We think children
                spend too much time in front of screens today — TVs, iPads, phones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                So we used our decades of experience in technology and finance to build
                a one-stop platform that takes the effort and frustration out of
                setting up play dates.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — Stats */}
          <div className="flex flex-col gap-5">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.12}>
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-100/60 border border-gray-100 hover:border-pink-primary/20 hover:bg-pink-light/20 transition-all duration-300">
                  <div
                    className="text-4xl font-extrabold text-pink-primary shrink-0 leading-none"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {stat.value}
                  </div>
                  <div>
                    <div
                      className="text-base font-semibold text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500">{stat.sub}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
