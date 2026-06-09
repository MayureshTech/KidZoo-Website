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
import { getAssetPath } from "@/lib/asset-path";
import { ArrowRight, Search, MapPin, MessageCircle, Calendar, DollarSign, Users, Star, PartyPopper, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Find Party Sites",
    description: "Enter the number of children, adults, and duration. Set your budget and location, then click 'Find Party Sites' to see matching venues.",
  },
  {
    icon: PartyPopper,
    title: "Party Packages",
    description: "Discover complete party packages that include food, beverages, decorations, and cake. Everything you need in one booking.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Vendors",
    description: "Send messages to one or multiple vendors simultaneously. Discuss availability, pricing, and specific requirements for your celebration.",
  },
  {
    icon: Calendar,
    title: "Book with Ease",
    description: "Select venues, enter date and time, add specific requirements, and click 'Done' to send your booking request to vendors.",
  },
  {
    icon: DollarSign,
    title: "Flexible Budgeting",
    description: "Set your budget range and find venues that match. The app is free to use — booking fees may apply depending on vendor policies.",
  },
  {
    icon: MapPin,
    title: "Location-Based Search",
    description: "Find party venues near you with adjustable distance. Change location anytime to explore venues in different areas.",
  },
];

const partyTypes = [
  "Birthday Parties",
  "Family Reunions",
  "Baby Showers",
  "Kids' Play Areas",
  "Community Centers",
  "Indoor Playgrounds",
  "Outdoor Parks",
  "Themed Celebrations",
];

export default function PartiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#FDF2F8]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #DB2777 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#EC4899]">
                    KidZoo Parties
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Plan the Perfect
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#DB2777]">Party Celebration</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Planning a birthday bash, family reunion, or celebration? KidZoo Parties makes it easy to find and book the ideal venue for your special event.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center px-6 py-3.5 bg-[#EC4899] text-white rounded-full font-semibold">
                      Coming Soon to App Stores
                    </span>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#EC4899] hover:text-[#EC4899] transition-all duration-200"
                    >
                      List Your Venue
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
                          src={getAssetPath("/images/screenshots/parties/party-sites.png")}
                          alt="KidZoo Parties - Find Party Sites"
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
                Book the Perfect Venue for Any Celebration
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KidZoo Parties is an app for finding and booking the perfect party site! Whether you're planning a birthday bash, a family reunion, or any other celebration, Parties makes it easy to find a location that fits your budget and preferences.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Enter the number of children, adults, and duration, then set your budget and location. Click "Find Party Sites" to generate a list of venues that match your needs perfectly.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#FDF2F8]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Plan a Party"
              description="Powerful tools to help you discover, compare, and book the perfect party venue."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#FDF2F8] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#EC4899]" />
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

        {/* Party Types */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Event Types"
              title="Perfect for Every Celebration"
              description="From birthday parties to family reunions, find venues that match your occasion."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {partyTypes.map((type, index) => (
                <ScrollReveal key={type} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#FDF2F8] rounded-full text-[#EC4899] font-medium text-sm hover:bg-[#EC4899] hover:text-white transition-all duration-300 cursor-default">
                    {type}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#FDF2F8]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Parties makes finding party venues effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/parties/party-sites.png", alt: "Find Party Sites" },
                { src: "/images/screenshots/parties/bakery-options.png", alt: "Party Options" },
                { src: "/images/screenshots/parties/home.png", alt: "Home Screen" },
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
              title="Book in 3 Simple Steps"
              description="Finding and booking your perfect party venue is quick and easy."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Enter Your Details",
                  description: "Enter the number of children, adults, and duration. Set your budget and preferred location, then click 'Find Party Sites.'",
                },
                {
                  step: "02",
                  title: "Browse & Select",
                  description: "Browse the list of matching venues. View portfolios with photos, pricing, and details. Select one or more options and click 'Next.'",
                },
                {
                  step: "03",
                  title: "Confirm & Book",
                  description: "Enter date, time, and specific requirements. Click 'Done' to send your message to vendors. A confirmation popup will confirm successful delivery.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#FDF2F8]"
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

        {/* Privacy & Support */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#FDF2F8] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FDF2F8] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#EC4899]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Support & Policies
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The app is free to use, but booking fees may apply depending on the venue and vendor policies. You can update or cancel a booking by contacting the vendor directly through the app.
                  </p>
                  <p>
                    Discounts may be available from vendors and will be displayed in their listings. Availability information is provided by vendors once you inquire in the message section.
                  </p>
                  <p>
                    You can delete your account by tapping the menu, selecting 'Edit Profile,' and tapping 'Delete Account' at the bottom. Your account will be temporarily deactivated and permanently deleted after 30 days of inactivity.
                  </p>
                  <p>
                    For customer support, contact{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#EC4899] hover:underline font-medium"
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

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#EC4899]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ready to Plan Your Party?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join KidZoo Parties today and discover the perfect venue for your next celebration.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#EC4899] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
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
              {apps.filter(app => app.id !== "parties").slice(0, 4).map((app, index) => (
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
