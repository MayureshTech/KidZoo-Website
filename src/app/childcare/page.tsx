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
import { ArrowRight, Search, MessageCircle, Calendar, DollarSign, Shield, Bell, Users, Star, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Search for Jobs",
    description: "Tap the menu and select 'Search for Jobs' to see a list of available babysitting gigs. Browse through and apply directly within the app.",
  },
  {
    icon: Bell,
    title: "Track Applications",
    description: "Track all your applications effortlessly. See status updates like 'Confirmed,' 'Awaiting Response,' or 'Cancelled' in real time.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Parents",
    description: "Communicate directly with parents by clicking on the job posting and using the message icon. Ask questions or get more details.",
  },
  {
    icon: DollarSign,
    title: "Set Your Rate",
    description: "Set your hourly rate in your profile under 'Edit Profile.' Find jobs that match your pricing and availability right on the homepage.",
  },
  {
    icon: Calendar,
    title: "Manage Availability",
    description: "Update your availability in the 'Edit Availability' section. Parents will see when you're free for jobs, and you can reschedule easily.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All job postings are thoroughly reviewed. Your information is kept private until a job is confirmed. Contact details shared only after confirmation.",
  },
];

const jobTypes = [
  "One-time Babysitting",
  "Part-time Nanny",
  "Full-time Nanny",
  "Weekend Jobs",
  "Date Night Sitter",
  "After-school Care",
  "Emergency Help",
  "Recurring Request",
];

export default function ChildcarePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#ECFDF5]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #10B981 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #059669 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#10B981]">
                    KidZoo ChildCare
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Find Babysitting
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">Jobs Near You</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Browse available babysitting gigs, track your applications, and communicate directly with parents. Finding childcare jobs has never been easier.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center px-6 py-3.5 bg-[#10B981] text-white rounded-full font-semibold">
                      Coming Soon to App Stores
                    </span>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#10B981] hover:text-[#10B981] transition-all duration-200"
                    >
                      Post a Job
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
                          src={getAssetPath("/images/screenshots/childcare/home.png")}
                          alt="KidZoo ChildCare - Babysitter Options"
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
                The Easiest Way to Find Childcare Jobs
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Finding babysitting jobs in your area is super easy with the Kidzoo Sitters app. Just tap the menu and select "Search for Jobs" to browse available gigs and apply directly.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                You can also find babysitting requests that match your pricing and availability right on the homepage. If you see a job that fits, simply click "Respond" and choose "Confirm" to accept it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#ECFDF5]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Find Jobs"
              description="Powerful tools to help you discover, apply for, and manage babysitting jobs."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#10B981]" />
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

        {/* Job Types */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Job Types"
              title="Flexible Opportunities"
              description="From one-time babysitting to full-time nanny positions, find what works for you."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {jobTypes.map((type, index) => (
                <ScrollReveal key={type} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#ECFDF5] rounded-full text-[#10B981] font-medium text-sm hover:bg-[#10B981] hover:text-white transition-all duration-300 cursor-default">
                    {type}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#ECFDF5]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo ChildCare makes finding babysitting jobs simple."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/childcare/home.png", alt: "Babysitter Options" },
                { src: "/images/screenshots/childcare/pick-method.png", alt: "Pick What You Need" },
                { src: "/images/screenshots/childcare/registration.png", alt: "Registration Details" },
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
              title="Get Started in 3 Steps"
              description="Finding and booking babysitting jobs is effortless."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Set Your Profile",
                  description: "Set your hourly rate, add your experience, skills, and preferences in your profile. Update your availability so parents can see when you're free.",
                },
                {
                  step: "02",
                  title: "Browse & Apply",
                  description: "Search for jobs that match your pricing and availability. Click 'Respond' to apply, or 'Confirm' to accept. Track your status in real time.",
                },
                {
                  step: "03",
                  title: "Get Confirmed",
                  description: "Once a parent accepts your application, the status changes to 'Confirmed.' You can then message them directly and coordinate details.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#ECFDF5]"
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#ECFDF5] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#ECFDF5] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#10B981]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Your Safety & Privacy
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    KidZoo keeps your personal data very safe and secure. The data is encrypted in storage and transmission, and stored safely on Google's servers with best-in-class security.
                  </p>
                  <p>
                    KidZoo will not share or sell any of your information like your phone number, address, or zip code with any third parties. Your contact details are shared only with confirmed parent clients.
                  </p>
                  <p>
                    You can delete your account by tapping the menu, selecting 'Edit Profile,' and tapping 'Delete Account' at the bottom. Your account will be temporarily deactivated and permanently deleted after 30 days of inactivity.
                  </p>
                  <p>
                    For help, contact{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#10B981] hover:underline font-medium"
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
        <section className="py-20 md:py-32 bg-[#10B981]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ready to Start Babysitting?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join KidZoo ChildCare today and discover flexible babysitting opportunities that match your schedule and preferences.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#10B981] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
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
