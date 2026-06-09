"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AppIcon } from "@/components/shared/AppIcon";
import { placeholderApps } from "@/lib/apps-data";
import { getAssetPath } from "@/lib/asset-path";
import { ArrowRight, Search, MapPin, MessageCircle, Calendar, DollarSign, Users, Image as ImageIcon, Star, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Find Party Sites",
    description: "Enter the number of children, adults, and duration. Set your budget and location, then click 'Find Party Sites' to see matching venues.",
  },
  {
    icon: ImageIcon,
    title: "View Portfolios",
    description: "Click on 'View Portfolio' to see photos, pricing, minimum hours, capacity, and other details for each venue before booking.",
  },
  {
    icon: MessageCircle,
    title: "Message Vendors",
    description: "Send messages to one or multiple vendors simultaneously. Chat about availability, pricing, and specific requirements for your event.",
  },
  {
    icon: Calendar,
    title: "Book with Ease",
    description: "Select venues, enter date and time, add specific requirements in the message section, and click 'Done' to send your booking request.",
  },
  {
    icon: DollarSign,
    title: "Flexible Budgeting",
    description: "Set your budget range from $50 to $1000+. The app is free to use — booking fees may apply depending on the venue and vendor policies.",
  },
  {
    icon: MapPin,
    title: "Location-Based Search",
    description: "Find venues near you with adjustable distance. Change location anytime to explore venues in different areas.",
  },
];

const venueTypes = [
  "Birthday Parties",
  "Family Reunions",
  "Baby Showers",
  "Kids' Play Areas",
  "Community Centers",
  "Pizza Places",
  "Indoor Playgrounds",
  "Outdoor Parks",
];

export default function VenuesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#EEF2FF]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #4F46E5 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#6366F1]">
                    KidZoo Venues
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Find the Perfect
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#4F46E5]">Party Venue</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Planning a birthday bash, family reunion, or celebration? KidZoo Venues makes it easy to find and book the ideal location for your event.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <a
                      href="https://apps.apple.com/us/app/kidzoo-venues/id6554000842"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#6366F1] text-white rounded-xl hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
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
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#6366F1] hover:text-[#6366F1] transition-all duration-200"
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
                          src={getAssetPath("/images/screenshots/venues/find-party-sites.png")}
                          alt="KidZoo Venues - Find Party Sites"
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
                Book the Perfect Venue for Any Occasion
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Kidzoo Venue is an app for finding and booking the perfect party site! Whether you're planning a birthday bash, a family reunion, or any other celebration, Venue makes it easy to find a location that fits your budget and preferences.
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
        <section className="py-20 md:py-32 bg-[#EEF2FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Book a Venue"
              description="Powerful tools to help you discover, compare, and book the perfect party venue."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#6366F1]" />
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

        {/* Venue Types */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Event Types"
              title="Perfect for Every Celebration"
              description="From birthday parties to family reunions, find venues that match your occasion."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {venueTypes.map((type, index) => (
                <ScrollReveal key={type} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#EEF2FF] rounded-full text-[#6366F1] font-medium text-sm hover:bg-[#6366F1] hover:text-white transition-all duration-300 cursor-default">
                    {type}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#EEF2FF]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Venues makes finding party venues effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/venues/find-party-sites.png", alt: "Find Party Sites" },
                { src: "/images/screenshots/venues/party-options.png", alt: "Party Site Options" },
                { src: "/images/screenshots/venues/vendor-detail.png", alt: "Vendor Details" },
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
              description="Finding and booking your perfect venue is quick and easy."
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
                      className="text-5xl font-extrabold text-[#EEF2FF]"
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#EEF2FF] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center">
                    <Star className="w-7 h-7 text-[#6366F1]" />
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
                      className="text-[#6366F1] hover:underline font-medium"
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
        <section className="py-20 md:py-32 bg-[#6366F1]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ready to Find Your Venue?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join KidZoo Venues today and discover the perfect location for your next celebration.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#6366F1] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
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
              {placeholderApps.slice(0, 4).map((app, index) => (
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
