"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AppIcon } from "@/components/shared/AppIcon";
import { apps } from "@/lib/apps-data";
import { ArrowRight, Camera, Search, MessageCircle, Calendar, Heart, Shield, User, Star, Clock, Share2 } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

const features = [
  {
    icon: Search,
    title: "Search by Budget & Theme",
    description: "Choose your budget range and pick from themes like Newborns, Maternity, Family, Children, Headshots, Fall Foliage, Birthday Party, Outdoor, Cake Smash, and more.",
  },
  {
    icon: Camera,
    title: "View Portfolios",
    description: "See sample photos from each photographer before you book. Browse their portfolio to find a style that matches your vision.",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Select one or more photographers, fill in your session details like duration and location, and send your booking request directly through the app.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Photographers",
    description: "Track your booking and message photographers directly through the app. Ask questions, share details, and coordinate your session.",
  },
  {
    icon: User,
    title: "Custom Sessions",
    description: "Need something unique? Request a custom photo session with your specific requirements and let photographers tailor their approach.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose your preferred session duration — 30 minutes, 1 hour, 2 hours, or more. Schedule for a future date that works for you.",
  },
];

const themes = [
  "Newborns",
  "Maternity",
  "Family",
  "Children",
  "Headshots",
  "Fall Foliage",
  "Birthday Party",
  "Outdoor",
  "Cake Smash",
  "Custom Session",
];

export default function PhotosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#FAF5FF]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #D946EF 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#8B5CF6]">
                    KidZoo Photos
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Capture Every
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Precious Moment</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Find and book professional photographers for kids' parties and events. Search by budget, browse portfolios, and book talented photographers.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center px-6 py-3.5 bg-[#8B5CF6] text-white rounded-full font-semibold">
                      Coming Soon to App Stores
                    </span>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-200"
                    >
                      List Your Photography Services
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Phone Screenshot */}
              <ScrollReveal direction="right">
                <div className="flex justify-center">
                  <motion.div
                    className="relative animate-float"
                    style={{ perspective: "1000px" }}
                  >
                    <div className="phone-mockup relative" style={{ width: 280, height: 570 }}>
                      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                        <Image
                          src={getAssetPath("/images/screenshots/photos/themes.png")}
                          alt="KidZoo Photos - Select a Theme"
                          fill
                          className="object-cover"
                          sizes="280px"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What It Does */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Professional Photography Made Simple
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KidZoo Photos App is an easy way to find and book professional photographers for kids' parties and events. The app shows sample photos from each photographer, so you can see their style and quality before you book.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                When you're planning any special occasion, this app makes it super simple to book a talented photographer who specializes in capturing moments. Set your budget, choose a theme, and select your preferred session duration.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#FAF5FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Book with Confidence"
              description="KidZoo Photos makes finding and booking professional photographers effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF5FF] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#8B5CF6]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Themes */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Themes"
              title="Photography for Every Occasion"
              description="Browse photographers by theme to find the perfect match for your needs."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {themes.map((theme, index) => (
                <ScrollReveal key={theme} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#FAF5FF] rounded-full text-[#8B5CF6] font-medium text-sm hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 cursor-default">
                    {theme}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#FAF5FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Photos connects you with talented photographers."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/photos/registration.png", alt: "Parent Registration" },
                { src: "/images/screenshots/photos/themes.png", alt: "Select a Theme" },
                { src: "/images/screenshots/photos/cakes.png", alt: "Sample Portfolio" },
              ].map((screenshot, index) => (
                <ScrollReveal key={screenshot.alt} delay={index * 0.1}>
                  <div className="flex flex-col items-center">
                    <div className="phone-mockup relative" style={{ width: 260, height: 530 }}>
                      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                        <Image
                          src={getAssetPath(screenshot.src)}
                          alt={screenshot.alt}
                          fill
                          className="object-cover"
                          sizes="260px"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                      {screenshot.alt}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="How It Works"
              title="Simple Booking Process"
              description="Finding the perfect photographer takes just a few steps."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Set Your Preferences",
                  description: "Set your budget, choose a theme, and select your preferred session duration (30 minutes, 1 hour, 2 hours, etc.).",
                },
                {
                  step: "02",
                  title: "Browse & Select",
                  description: "View photographer profiles, check out their portfolio photos, and select the ones you want to contact.",
                },
                {
                  step: "03",
                  title: "Book & Connect",
                  description: "Enter date, location details, and special instructions. Send your request and chat with photographers directly.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#FAF5FF]"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {item.step}
                    </span>
                    <h3
                      className="text-xl font-bold text-gray-900 mt-4 mb-3"
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

        {/* Privacy & Trust */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#FAF5FF] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF5FF] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#8B5CF6]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Your Privacy Matters
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    KidZoo Photos keeps your personal information secure and won't share it with anyone. We don't take payment info through the app right now, but that feature is coming soon.
                  </p>
                  <p>
                    If you have any issues with a photographer, contact our customer support at{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#8B5CF6] hover:underline font-medium"
                    >
                      mayuresh@kidzooapp.com
                    </a>
                    .
                  </p>
                  <p>
                    You can delete your account by tapping the menu, selecting "Edit Profile," and tapping "Delete Account" at the bottom. Your account will be temporarily deactivated and permanently deleted after 30 days of inactivity.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#8B5CF6]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ready to Capture Memories?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join KidZoo Photos today and find the perfect photographer for your next special occasion.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#8B5CF6] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Contact Us to Learn More
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Related Apps */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Explore More"
              title="The KidZoo Ecosystem"
              description="Discover other apps designed to make parenting easier."
              className="mx-auto mb-12"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {apps.filter(app => app.id !== "photos").slice(0, 4).map((app, index) => (
                <ScrollReveal key={app.id} delay={index * 0.1}>
                  <Link href={app.slug} className="group block">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
                    >
                      <AppIcon
                        name={app.shortName}
                        color={app.color}
                        lightColor={app.lightColor}
                        logoPath={app.logoPath}
                        size="md"
                        className="mb-4"
                      />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {app.shortName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {app.description}
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
      </main>
      <Footer />
    </>
  );
}
