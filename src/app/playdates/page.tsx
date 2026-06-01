"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AppIcon } from "@/components/shared/AppIcon";
import { placeholderApps } from "@/lib/apps-data";
import { motion } from "framer-motion";
import {
  UserPlus,
  CalendarDays,
  Clock,
  Shield,
  Bell,
  Users,
  Image,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: UserPlus,
    title: "Quick & Easy Registration",
    description:
      "Connect with Facebook login, and answer a few questions about your kid's age and interests. Your information is used solely for better user experience.",
  },
  {
    icon: Users,
    title: "Connect with People You Know",
    description:
      "Invite people you already know and trust — like the parents of kids from your child's class. Friend requests must be accepted before playdates can be set up.",
  },
  {
    icon: CalendarDays,
    title: "Schedule Easily",
    description:
      "Post a few times that work for a play date. KidZoo will show you profiles of other kids who are free around the same time. Set up a location from your home, the friend's home, or a custom address.",
  },
  {
    icon: Clock,
    title: "Set Availability",
    description:
      "Set your child's available time slots, such as Thursdays 4-6 pm. You can always update availability by clicking the set availability button on the bottom navigation bar.",
  },
  {
    icon: Bell,
    title: "Get Notified",
    description:
      "Receive notifications whenever a friend request is sent or received, a playdate request is received, confirmed, or cancelled. Send reminders to friends about upcoming playdates.",
  },
  {
    icon: Image,
    title: "Add to Calendar",
    description:
      "Add a confirmed playdate to your own personal calendar, like Google Calendar or Apple calendar, by clicking on the '+ Calendar' button.",
  },
];

const screenshots = [
  {
    src: "/images/screenshots/playdates/friend-request.png",
    alt: "Friend Request Alert",
  },
  {
    src: "/images/screenshots/playdates/child-profile.jpg",
    alt: "Child's Profile",
  },
  {
    src: "/images/screenshots/playdates/parent-profile.jpg",
    alt: "Edit Parent Profile",
  },
  {
    src: "/images/screenshots/playdates/whos-available.png",
    alt: "See Who Is Available",
  },
  {
    src: "/images/screenshots/playdates/friend-request-alt.png",
    alt: "Active Playdates",
  },
];

export default function PlaydatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-cream overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" />
        <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-sm font-medium tracking-widest uppercase text-pink-primary">
                  KidZoo Playdates
                </span>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Set a Playdate
                  <br />
                  <span className="gradient-text">in 30 Seconds</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  No more back and forth messaging. No more "Are you free
                  Tuesday?" texts. See your friends' availability and set a
                  playdate instantly.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-dark text-white rounded-xl hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l4.302 4.302-5.433 3.154-1.667-1.667 2.798-2.798zm-2.1-2.1l-2.8-2.798 1.668-1.667 5.432 3.154-4.3 4.3zm5.795-3.566L12.48 8.965l-7.95-4.605a.999.999 0 011.37-.342l10.384 6.003z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 leading-none">Download on</div>
                      <div className="text-sm font-semibold leading-tight">Google Playstore</div>
                    </div>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex justify-center">
                <PhoneMockup
                  src="/images/screenshots/playdates/friend-request.png"
                  alt="KidZoo Playdates App"
                  width={280}
                  height={570}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why Can't You Just Text?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              You can. It's just that with our busy lives, it's hard to easily
              find a time that works for everyone. So playdates end up being set
              weeks later, and kids don't have anyone to play with when they are
              bored.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              Also, with KidZoo, you don't need to call or text multiple people
              to find a playdate for your child. All their availability is right
              there. So you can save hours of back and forth messaging or
              multiple people messaging, and just set a playdate in 30 seconds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Features"
            title="Everything You Need"
            description="KidZoo Playdates is packed with features designed to make scheduling playdates effortless."
            className="mx-auto mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-card h-full">
                  <div className="w-14 h-14 rounded-2xl bg-pink-light flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-pink-primary" />
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

      {/* Screenshots Gallery */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="See It In Action"
            description="Take a peek at how KidZoo Playdates makes your life easier."
            className="mx-auto mb-16"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <ScrollReveal key={screenshot.alt} delay={index * 0.1}>
                <div className="flex justify-center">
                  <PhoneMockup
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={240}
                    height={490}
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4 font-medium">
                  {screenshot.alt}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Privacy */}
      <section className="py-20 md:py-32 gradient-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-light flex items-center justify-center">
                  <Shield className="w-7 h-7 text-teal-primary" />
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
                  KidZoo keeps your personal data very safe and secure. The data
                  is encrypted in storage and transmission, and stored safely on
                  Google's servers with best-in-class security.
                </p>
                <p>
                  KidZoo will not share or sell any of your information like your
                  phone number, address, zipcode, or birthdate with any third
                  parties. KidZoo will only share your phone number, playdate
                  venue, first name, last name, profile photo, age, school, grade,
                  food preferences, allergies, and address to your confirmed
                  friends in the context of setting a playdate.
                </p>
                <p>
                  The privacy of your personal information is a priority for
                  KidZoo, and they adhere to strict privacy policies to ensure
                  your data is not shared or disclosed without proper
                  authorization.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 md:py-32 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Ready to Make Playdates Easy?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
              Download KidZoo Playdates today and join thousands of parents who
              have already made playdate scheduling effortless.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 font-semibold"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l4.302 4.302-5.433 3.154-1.667-1.667 2.798-2.798zm-2.1-2.1l-2.8-2.798 1.668-1.667 5.432 3.154-4.3 4.3zm5.795-3.566L12.48 8.965l-7.95-4.605a.999.999 0 011.37-.342l10.384 6.003z" />
                </svg>
                Download on Google Play
              </Link>
            </div>
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
    </>
  );
}
