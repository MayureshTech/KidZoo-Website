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
import { ArrowRight, MapPin, Search, Heart, Calendar, DollarSign, Users, Share2, Shield, Clock, Filter, Star, GraduationCap } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

const features = [
  {
    icon: Search,
    title: "Find Camps Near You",
    description: "See recommended camps on the home page based on your interests. Just scroll down to find camps that match your needs, all near your home location.",
  },
  {
    icon: Filter,
    title: "Smart Search Filters",
    description: "Filter by age range, grade, camp type (half day, full day, extended day), location, distance, price range, and activity type like swimming, music, sports, cooking, arts, and more.",
  },
  {
    icon: DollarSign,
    title: "Free & Paid Options",
    description: "The app is always free for parents. Most camps show pricing upfront, and you can easily find free camps that show up as free or $0.",
  },
  {
    icon: Heart,
    title: "Save Your Favorites",
    description: "Click on any camp you're interested in and tap the 'Save' icon next to the 'Last Day to Register' label. View saved camps anytime in Settings.",
  },
  {
    icon: Calendar,
    title: "Easy Registration",
    description: "Select camp, choose your child, program, and location. Pick specific weeks (like 15-19 Jul, 19-23 Aug). Cost auto-calculates. Click 'Continue' and 'Notify Camp' — no payment needed.",
  },
  {
    icon: Share2,
    title: "Share with Friends",
    description: "Tap 'Share Camp with Friend' at the bottom of any camp details page. Share via WhatsApp, Messages, or Email to help other parents find great camps.",
  },
];

const campTypes = [
  "Arts & Crafts",
  "Outdoor Nature",
  "Music",
  "Swimming",
  "Cooking",
  "Sports",
  "STEM",
  "Performing Arts",
  "Coding",
  "Half Day",
  "Full Day",
  "Extended Day",
];

export default function CampPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#F3E8FF]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #D946EF 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#8B5CF6]">
                    KidZoo Camp
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Find the Perfect
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#D946EF]">Summer Camp</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Find summer camps for kids aged 1-17. Arts & Crafts, Outdoor Nature, Music, Swimming, Cooking, Sports, STEM, and Performing Arts — all in one place.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <a
                      href="https://apps.apple.com/us/app/kidzoo-camp/id6499356358"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#8B5CF6] text-white rounded-xl hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-[10px] text-white/70 leading-none">Download on the</div>
                        <div className="text-sm font-semibold leading-tight">App Store</div>
                      </div>
                    </a>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-200"
                    >
                      List Your Camp
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
                          src={getAssetPath("/images/screenshots/camp/Home with Floating.png")}
                          alt="KidZoo Camp - Home Screen with Recommended Camps"
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
                Summer Plans Made Simple
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                When summer starts, parents often look for fun and educational activities for their children aged 1 to 17. KidZoo Camps provides all the information about summer camps near your home location.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                The app is always free for parents. You don't need to pay anything to use the app. Browse, filter, save, and register for camps with zero financial commitment upfront.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Find the Perfect Camp"
              description="Powerful tools to help you discover, compare, and register for camps that match your child's interests and your schedule."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center mb-6">
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

        {/* Camp Types */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Camp Types"
              title="Activities for Every Interest"
              description="From arts to STEM, find camps that spark your child's curiosity and creativity."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {campTypes.map((type, index) => (
                <ScrollReveal key={type} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#F3E8FF] rounded-full text-[#8B5CF6] font-medium text-sm hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 cursor-default">
                    {type}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Camp makes finding summer activities effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/camp/Home with Floating.png", alt: "Home Screen - Recommended Camps" },
                { src: "/images/screenshots/camp/Search Camps.png", alt: "Search Camps with Filters" },
                { src: "/images/screenshots/camp/Camp Details.jpg", alt: "Camp Details Page" },
                { src: "/images/screenshots/camp/Select specific coding subjects.png", alt: "Select Specific Subjects" },
                { src: "/images/screenshots/camp/Camp Registration 1_Empty.png", alt: "Camp Registration Flow" },
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
              title="Find & Register for Camps in 3 Simple Steps"
              description="From discovery to registration — it's never been easier to plan your child's summer."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Search & Filter",
                  description: "Click the search button and select age range, grade, camp type (half day, full day, extended day), location, distance, price range, and activity type. The list narrows to match your preferences.",
                },
                {
                  step: "02",
                  title: "Explore & Save",
                  description: "Click on a camp to view date, time, price, exact location, seat availability, and discounts. Tap the 'Save' icon to bookmark camps you're interested in.",
                },
                {
                  step: "03",
                  title: "Register with Confidence",
                  description: "Click 'Select Camp,' choose your child, program, and location. Select weeks, verify details, and click 'Notify Camp.' No payment needed — just interest notification. Withdraw anytime.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#F3E8FF]"
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

        {/* Privacy & Safety */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#F3E8FF] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F3E8FF] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#8B5CF6]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Your Data is Safe
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Your personal data is safe and stored on Google's servers in an encrypted format. We do not share your data with anyone.
                  </p>
                  <p>
                    You can delete your account by tapping the three horizontal lines at the top right corner, selecting 'Edit Profile,' and tapping 'Delete Account' at the bottom. Your account will be temporarily deactivated and permanently deleted after 30 days of inactivity.
                  </p>
                  <p>
                    To make a complaint against a specific camp or report inappropriate content, contact our support team at{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#8B5CF6] hover:underline font-medium"
                    >
                      mayuresh@kidzooapp.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* List Your Camp CTA */}
        <section className="py-20 md:py-32 bg-[#8B5CF6]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Run a Summer Camp?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                List your camp on KidZoo Camp and reach hundreds of parents looking for the perfect summer activities for their children.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#8B5CF6] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Contact Us to List Your Camp
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
              {apps.filter(app => app.id !== "camp").slice(0, 4).map((app, index) => (
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
