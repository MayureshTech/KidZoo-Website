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
import { ArrowRight, Search, MapPin, MessageCircle, Calendar, DollarSign, Star, Cake, Heart, Shield, Clock, Image as ImageIcon } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Search by Budget & Theme",
    description: "Set your budget range ($100-$300+) and choose themes like Princess, Superhero, Mickey Mouse, or Jungle. Pick flavors like chocolate or vanilla.",
  },
  {
    icon: ImageIcon,
    title: "View Cake Portfolios",
    description: "Browse photos of cakes from each bakery. See exactly what you're getting before you order — from designs to decorations.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Bakeries",
    description: "Message cake shops directly through the app. Ask questions, check on your order, or discuss custom designs.",
  },
  {
    icon: Calendar,
    title: "Schedule Orders",
    description: "Set your event date and delivery time during the order process. Schedule orders for future dates to plan ahead.",
  },
  {
    icon: MapPin,
    title: "Find Nearby Bakeries",
    description: "Use the map feature to see all local cake shops. Easily find convenient locations for pickup or delivery.",
  },
  {
    icon: Cake,
    title: "Custom Orders",
    description: "Need something unique? Order custom cakes with specific instructions. Enter delivery address and special requirements.",
  },
];

const cakeThemes = [
  "Princess",
  "Superhero",
  "Mickey Mouse",
  "Jungle",
  "Unicorn",
  "Frozen",
  "Cars",
  "Baby Shower",
  "Birthday",
  "Custom Design",
];

export default function CakesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#FFF7ED]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #EA580C 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#F97316]">
                    KidZoo Cakes
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Order Custom Cakes
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">For Every Celebration</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Find and order custom cakes, cupcakes, and treats from talented local bakers. Browse designs, customize flavors, and make every celebration sweeter.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center px-6 py-3.5 bg-[#F97316] text-white rounded-full font-semibold">
                      Coming Soon to App Stores
                    </span>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200"
                    >
                      List Your Bakery
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
                          src={getAssetPath("/images/screenshots/cakes/bakery-options.png")}
                          alt="KidZoo Cakes - Bakery Options"
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
                The Sweetest Way to Order Cakes
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KidZoo Cake App is an easy way to find and order cakes for kids' parties from local bakeries. You can search for cakes by choosing your budget, theme, and flavor. The app shows pictures of different cakes from each shop, so you can see what you're getting before you buy.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                When you're planning a birthday or any celebration, this app makes it super simple to order a yummy and nicely designed cake. Select one or more shops, fill in your order details, and send your request directly.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#FFF7ED]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Order Cakes"
              description="Powerful tools to help you discover, customize, and order the perfect cake."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#F97316]" />
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

        {/* Cake Themes */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Themes"
              title="Cakes for Every Occasion"
              description="Browse bakeries by theme to find the perfect design for your celebration."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {cakeThemes.map((theme, index) => (
                <ScrollReveal key={theme} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#FFF7ED] rounded-full text-[#F97316] font-medium text-sm hover:bg-[#F97316] hover:text-white transition-all duration-300 cursor-default">
                    {theme}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#FFF7ED]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Cakes makes ordering custom cakes effortless."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/cakes/gallery.jpg", alt: "Cake Gallery" },
                { src: "/images/screenshots/cakes/bakery-options.png", alt: "Bakery Options" },
                { src: "/images/screenshots/cakes/my-orders.png", alt: "My Cake Orders" },
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
              title="Order in 3 Simple Steps"
              description="Finding and ordering the perfect cake takes just a few taps."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Set Your Preferences",
                  description: "Set your budget, choose a theme (Princess, Superhero, Mickey Mouse, etc.), and pick a flavor. See a list of matching bakeries.",
                },
                {
                  step: "02",
                  title: "Browse & Select",
                  description: "Check out bakery profiles, look at photos of their cakes, and select one or more shops you want to contact.",
                },
                {
                  step: "03",
                  title: "Order & Track",
                  description: "Enter date, delivery address, and special instructions. Choose delivery or pickup. Track your order and chat with the shop.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#FFF7ED]"
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#FFF7ED] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#F97316]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Privacy & Support
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    KidZoo Cake keeps your personal info secure and won't share it with anyone. We don't take payment info through the app right now, but that feature is coming soon.
                  </p>
                  <p>
                    The messaging feature includes "Clear Chat" to delete conversation history, "Block" to stop communication, and "Report" to flag issues. Access these by tapping the three dots in any message window.
                  </p>
                  <p>
                    You can delete your account by tapping the menu, selecting "Edit Profile," and tapping "Delete Account" at the bottom. Your account will be temporarily deactivated and permanently deleted after 30 days of inactivity.
                  </p>
                  <p>
                    For customer support, contact{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#F97316] hover:underline font-medium"
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
        <section className="py-20 md:py-32 bg-[#F97316]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ready to Order Your Cake?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join KidZoo Cakes today and discover talented local bakers who can create the perfect cake for your celebration.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#F97316] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
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
              {apps.filter(app => app.id !== "cakes").slice(0, 4).map((app, index) => (
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
