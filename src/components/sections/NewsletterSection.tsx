"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32 gradient-soft relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 orb orb-pink animate-drift" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 orb orb-teal animate-drift" style={{ animationDelay: "-4s" }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionHeader
            title="Subscribe to our Newsletter"
            description="Get the latest updates on new features, apps, and parenting tips delivered to your inbox."
            className="mx-auto mb-10"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {submitted ? (
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Thanks for subscribing!
              </h3>
              <p className="text-gray-600">
                We'll keep you updated with the latest from KidZoo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white border-0 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-primary/30 shadow-card"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
