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
import { ArrowRight, Search, MapPin, Filter, GraduationCap, Clock, DollarSign, Shield, Share2, Calendar, Users, Music, Code, Palette, Bike } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Search by What Matters",
    description: "Search for activities based on what you and your child prefer — by subject, location, age, or grade. Apply filters like Subject, Age, Grade, Location, and Distance to get a perfect match.",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Narrow things down by your child's age group and grade. Want to check out activities in other cities? Just change the location in the search filter.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "If an activity is free, it'll say so right at the bottom of the screen. The app is free to use, and you don't need to pay anything upfront to register.",
  },
  {
    icon: Calendar,
    title: "Easy Registration",
    description: "Click 'Select Class,' choose your child's name, day, and time, then click 'Next' to verify. Click 'Notify Class' to send a request. Organizers will contact you via call or email.",
  },
  {
    icon: Clock,
    title: "Activity Details",
    description: "View all the information you need — activity schedule, time slots, cost, location, and other details. Once registered, activities appear on your Home page for easy access.",
  },
  {
    icon: Users,
    title: "Contact Organizers",
    description: "Find the organizer's contact details on the activity description page. Reach out directly for questions, feedback, or assistance with your registration.",
  },
];

const activityCategories = [
  "Sports",
  "Performing Arts",
  "Language Skills",
  "Theater & Drama",
  "Science",
  "Coding",
  "Math",
  "Music",
  "Outdoor Events",
  "Arts & Crafts",
];

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#E0F7FA]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#06B6D4]">
                    KidZoo Activities
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Find Awesome
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">Activities for Kids</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Your go-to app for finding activities for kids in your city. Sports, arts, coding, music, science, and more — search by what matters most to your family.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center px-6 py-3.5 bg-[#06B6D4] text-white rounded-full font-semibold">
                      Coming Soon to App Stores
                    </span>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#06B6D4] hover:text-[#06B6D4] transition-all duration-200"
                    >
                      List Your Activities
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
                          src="/images/screenshots/activities/Active play dates.png"
                          alt="KidZoo Activities - Home Screen"
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
                Discover What Your Child Loves
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KidZoo Activities covers a wide range of activities — sports, performing arts, language skills, theater, drama, science, coding, math, music, outdoor events, and more! You can find exactly what you're looking for by using the filters in the search options.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our app is designed with parents in mind, but anyone can use it. And don't worry — we take your privacy seriously and won't share your personal info with anyone.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#E0F7FA]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Find the Perfect Activity"
              description="Powerful tools to help you discover, compare, and register for activities that match your child's interests."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#E0F7FA] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#06B6D4]" />
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

        {/* Activity Categories */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Activity Types"
              title="Something for Every Interest"
              description="From sports to science, find activities that spark your child's curiosity and creativity."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {activityCategories.map((category, index) => (
                <ScrollReveal key={category} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#E0F7FA] rounded-full text-[#06B6D4] font-medium text-sm hover:bg-[#06B6D4] hover:text-white transition-all duration-300 cursor-default">
                    {category}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#E0F7FA]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Activities makes finding classes and programs effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/activities/Camp Details 16ClassDetails.png", alt: "Class Details Page" },
                { src: "/images/screenshots/activities/Select specific coding subjects (1).png", alt: "Select Specific Subjects" },
                { src: "/images/screenshots/activities/Camp Registration 1_Empty (1).png", alt: "Registration Flow" },
                { src: "/images/screenshots/activities/Camp Registration 1_Empty (2).png", alt: "Verify Registration Details" },
                { src: "/images/screenshots/activities/Active play dates.png", alt: "Home Screen" },
              ].map((screenshot, index) => (
                <ScrollReveal key={screenshot.alt} delay={index * 0.1}>
                  <div className="flex flex-col items-center">
                    <div className="phone-mockup relative" style={{ width: 260, height: 530 }}>
                      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                        <Image
                          src={screenshot.src}
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
              title="Register for Activities in 3 Simple Steps"
              description="From discovery to registration — it's never been easier to enroll your child in activities they'll love."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Search & Filter",
                  description: "Tap the three lines at the top right, select 'Search Activity,' and apply filters like Subject, Age, Grade, Location, and Distance to find the perfect match.",
                },
                {
                  step: "02",
                  title: "Explore Details",
                  description: "Click on an activity to see all details — schedule, time slots, cost, location, and discounts. Free activities are clearly marked at the bottom of the screen.",
                },
                {
                  step: "03",
                  title: "Register with Ease",
                  description: "Click 'Select Class,' choose your child's name, day, and time. Hit 'Next' to verify, then 'Notify Class.' No payment required upfront — withdraw anytime without financial commitment.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#E0F7FA]"
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#E0F7FA] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#E0F7FA] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#06B6D4]" />
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
                    We take your privacy seriously and won't share your personal info with anyone. Your data is stored securely and only used to help you find the best activities for your child.
                  </p>
                  <p>
                    You can delete your account by clicking on the three horizontal lines at the top left corner of the home screen and tapping on the "Delete Account" link. Your account will be temporarily deactivated, and you can still log in again if you change your mind. However, after 30 days of inactivity, your account will be permanently deleted.
                  </p>
                  <p>
                    Have any questions or need assistance? Just drop us a line at{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#06B6D4] hover:underline font-medium"
                    >
                      mayuresh@kidzooapp.com
                    </a>
                    . We're here to help!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* List Your Activity CTA */}
        <section className="py-20 md:py-32 bg-[#06B6D4]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Run an Activity Program?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                List your classes and programs on KidZoo Activities and reach hundreds of parents looking for enriching experiences for their children.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#06B6D4] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Contact Us to List Your Activity
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
