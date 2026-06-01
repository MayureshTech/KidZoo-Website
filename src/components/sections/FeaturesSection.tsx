"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Clock, Users, CalendarDays, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Set a Playdate in 30 Seconds",
    description:
      "No more back and forth messaging. See your friends' availability and set a playdate instantly.",
    image: "/images/screenshots/playdates/whos-available.png",
    imageAlt: "See Who's Available screen",
    reverse: false,
  },
  {
    icon: Users,
    title: "Connect with School Friends",
    description:
      "Find other children from your child's school who also use KidZoo. Almost 2 out of 3 playdates are set up with schoolmates.",
    image: "/images/screenshots/playdates/child-profile.jpg",
    imageAlt: "Child's Profile screen",
    reverse: true,
  },
  {
    icon: CalendarDays,
    title: "See Who's Available",
    description:
      "When your child says 'I'm bored!', check who's available today evening or tomorrow morning. No more guessing.",
    image: "/images/screenshots/playdates/parent-profile.jpg",
    imageAlt: "Parent Profile screen",
    reverse: false,
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Your data is encrypted in storage and transmission, stored safely on Google's servers. We never sell your information.",
    image: null,
    imageAlt: null,
    reverse: true,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Parents Love KidZoo"
          description="Everything you need to keep your children socially active, without the hassle."
          className="mx-auto mb-16 md:mb-24"
        />

        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                feature.reverse ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <ScrollReveal
                direction={feature.reverse ? "right" : "left"}
                className={feature.reverse ? "lg:order-2" : ""}
              >
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-light flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-pink-primary" />
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Image */}
              {feature.image && (
                <ScrollReveal
                  direction={feature.reverse ? "left" : "right"}
                  className={feature.reverse ? "lg:order-1" : ""}
                >
                  <div className="flex justify-center">
                    <PhoneMockup
                      src={feature.image}
                      alt={feature.imageAlt || feature.title}
                      width={260}
                      height={530}
                    />
                  </div>
                </ScrollReveal>
              )}
              {!feature.image && (
                <ScrollReveal
                  direction={feature.reverse ? "left" : "right"}
                  className={feature.reverse ? "lg:order-1" : ""}
                >
                  <div className="flex justify-center">
                    <div className="w-64 h-64 rounded-3xl gradient-soft flex items-center justify-center">
                      <Shield className="w-24 h-24 text-teal-primary opacity-40" />
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
