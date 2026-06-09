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
import { ArrowRight, MapPin, Calendar, Search, Bell, Heart, Share2, Shield, Clock, Filter, Star, Users } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

const features = [
  {
    icon: MapPin,
    title: "Find Events Near You",
    description: "The map feature helps find events happening near your location. See all upcoming events on the home page or use search filters from the settings page.",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Apply filters like your children's age, location, date and time, distance, and event type (movie in the park, mommy and me activity, etc.) to narrow down results.",
  },
  {
    icon: Heart,
    title: "Save Your Favorites",
    description: "Tap on the event you're interested in and move the 'Are you interested?' toggle from No to Yes. Saved events appear in your 'My Events' section.",
  },
  {
    icon: Bell,
    title: "Never Miss an Event",
    description: "The app sends you notifications as reminders for every event you save or register for. You'll also get updates about any changes to events.",
  },
  {
    icon: Calendar,
    title: "All Event Types",
    description: "Sports, arts, educational activities, music, school events, swap & sale, parenting workshops, community runs, movie shows, cultural festivals, and more.",
  },
  {
    icon: Share2,
    title: "Share with Friends",
    description: "Sharing events with friends is easy through the app's built-in sharing options. Spread the word about great activities happening near you.",
  },
];

const eventCategories = [
  "Sports & Fitness",
  "Arts & Crafts",
  "Educational",
  "Music & Dance",
  "School Events",
  "Swap & Sale",
  "Parenting Workshops",
  "Community Runs",
  "Movie Shows",
  "Cultural Festivals",
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#FAE8FD]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #D946EF 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#D946EF]">
                    KidZoo Events
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Find Family Events
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#8B5CF6]">Near You</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Discover all the family events happening near you so that you and your children can go and have fun every weekend with different activities.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <a
                      href="https://apps.apple.com/us/app/kidzoo-events/id6478120509"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#D946EF] text-white rounded-xl hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
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
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#D946EF] hover:text-[#D946EF] transition-all duration-200"
                    >
                      Host Your Own Event
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
                          src={getAssetPath("/images/screenshots/events/Events HomeUpcoming.png")}
                          alt="KidZoo Events - Home Screen with Upcoming Events"
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
                Never Ask "What Should We Do This Weekend?" Again
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KidZoo Events is designed to provide a comprehensive list of events so that you no longer need to ask anyone for recommendations on where to go or where to send your kids. You can find a diverse range of events all in one place.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Search for events according to your preferences, location, cost, time, and date. The map feature also helps find events happening near your location. Most events are free to attend!
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#FAE8FD]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Find the Perfect Event"
              description="Powerful tools to help you discover, save, and attend events that match your family's interests."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAE8FD] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#D946EF]" />
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

        {/* Event Categories */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Event Types"
              title="Something for Every Family"
              description="From sports to cultural festivals, find events that match your child's interests and age."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {eventCategories.map((category, index) => (
                <ScrollReveal key={category} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#FAE8FD] rounded-full text-[#D946EF] font-medium text-sm hover:bg-[#D946EF] hover:text-white transition-all duration-300 cursor-default">
                    {category}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#FAE8FD]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Events makes finding family activities effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/events/Events HomeUpcoming.png", alt: "Home Screen - Upcoming Events" },
                { src: "/images/screenshots/events/Search.png", alt: "Search Events with Filters" },
                { src: "/images/screenshots/events/Event Details.png", alt: "Event Details Page" },
                { src: "/images/screenshots/events/NEW categories.png", alt: "Event Categories" },
                { src: "/images/screenshots/events/Select specific performing arts_2.png", alt: "Specific Event Types" },
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
              title="Find Events in 3 Simple Steps"
              description="From discovery to attendance — it's never been easier to plan your family's weekend."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Search & Filter",
                  description: "Use the search bar or apply filters like age, location, date, distance, and event type to find events that match your family's needs.",
                },
                {
                  step: "02",
                  title: "Save & Register",
                  description: "Tap on an event you're interested in and toggle 'Are you interested?' to Yes. View event details like time, location, age group, and planned activities.",
                },
                {
                  step: "03",
                  title: "Attend & Enjoy",
                  description: "Receive notifications as reminders. See who else is attending. Share the event with friends. Show up and have fun with your family!",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#FAE8FD]"
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#FAE8FD] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAE8FD] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#D946EF]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Your Safety Matters
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Your personal information is protected with advanced security measures. You can enable notifications to receive updates about new events.
                  </p>
                  <p>
                    Contact details for event organizers are provided on the event page, and you will receive notifications about any changes to events you have saved or registered for.
                  </p>
                  <p>
                    You can delete your account by tapping the three horizontal lines at the top right corner, selecting 'Edit Profile,' and tapping 'Delete Account' at the bottom. Your account will be temporarily deactivated and permanently deleted after 30 days of inactivity.
                  </p>
                  <p>
                    Encounter inappropriate content or behavior? Report it to{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#D946EF] hover:underline font-medium"
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

        {/* Host Your Own Event CTA */}
        <section className="py-20 md:py-32 bg-[#D946EF]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Want to Host Your Own Event?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Create and host your own family-friendly events. Reach hundreds of parents in your community looking for activities like yours.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#D946EF] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Contact Us to Host
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
