"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AppIcon } from "@/components/shared/AppIcon";
import { apps } from "@/lib/apps-data";
import type { AppData } from "@/lib/apps-data";
import { ArrowRight } from "lucide-react";

interface AppPageTemplateProps {
  app: AppData;
}

export function AppPageTemplate({ app }: AppPageTemplateProps) {
  const otherApps = apps.filter((a) => a.id !== app.id).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${app.color} 0%, ${app.lightColor} 200%)`,
        }}
      >
        <div className="absolute inset-0 bg-white/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="flex justify-center mb-8">
                <AppIcon
                  name={app.shortName}
                  color={app.color}
                  lightColor={app.lightColor}
                  logoPath={app.logoPath}
                  size="lg"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
                {app.isPlaceholder ? "Coming Soon" : "Available Now"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {app.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                {app.description}
              </p>
            </ScrollReveal>

            {!app.isPlaceholder && app.downloadLink && (
              <ScrollReveal delay={0.4}>
                <Link
                  href={app.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l4.302 4.302-5.433 3.154-1.667-1.667 2.798-2.798zm-2.1-2.1l-2.8-2.798 1.668-1.667 5.432 3.154-4.3 4.3zm5.795-3.566L12.48 8.965l-7.95-4.605a.999.999 0 011.37-.342l10.384 6.003z" />
                  </svg>
                  Download on Google Play
                </Link>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Teaser Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {app.isPlaceholder ? "Coming Soon" : "About"}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {app.longDescription}
            </p>
          </ScrollReveal>

          {app.isPlaceholder && (
            <ScrollReveal delay={0.2}>
              <div className="bg-cream rounded-2xl p-8 md:p-12">
                <p className="text-gray-600 mb-6">
                  We're working hard to bring you {app.name}. Sign up to be
                  notified when it launches.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Placeholder
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-pink-primary text-white font-semibold rounded-full hover:bg-pink-dark transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Related Apps */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Explore Other KidZoo Apps
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherApps.map((otherApp, index) => (
              <ScrollReveal key={otherApp.id} delay={index * 0.1}>
                <Link href={otherApp.slug} className="group block">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                  >
                    <AppIcon
                      name={otherApp.shortName}
                      color={otherApp.color}
                      lightColor={otherApp.lightColor}
                      logoPath={otherApp.logoPath}
                      size="md"
                      className="mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {otherApp.shortName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {otherApp.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-primary group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
