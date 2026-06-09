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
import { ArrowRight, ShoppingBag, Search, MessageCircle, Tag, Heart, Shield, Share2, Filter, DollarSign, Users } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

const features = [
  {
    icon: ShoppingBag,
    title: "Create Listings Easily",
    description: "Tap the menu, select 'Create Listing,' fill in product details, add photos, set a price, choose age range and zip code, and submit. Sell clothes, toys, strollers, car seats, and more.",
  },
  {
    icon: Search,
    title: "Smart Search & Filters",
    description: "Find exactly what you need with filters for category, price range, product condition, and age range. Sort results by price, date, or distance.",
  },
  {
    icon: MessageCircle,
    title: "Message Sellers Directly",
    description: "Tap on any listing to see full details and use the 'Message' button to contact the seller directly. Keep all transaction communication in one place.",
  },
  {
    icon: Tag,
    title: "Send Offers",
    description: "Use the 'Send Offer' button to propose a price. If the seller agrees, arrange the purchase details. Negotiate confidently.",
  },
  {
    icon: Heart,
    title: "Save for Later",
    description: "Click the 'Save' button on any product to add it to your Saved Listings. View them anytime from the menu under 'Saved Listing.'",
  },
  {
    icon: Share2,
    title: "Share Listings",
    description: "Tap the share button on any product to send it via email, text, or social media. Help friends find great deals or spread the word.",
  },
];

const categories = [
  "Strollers",
  "Car Seats",
  "High Chairs",
  "Stuffed Animals",
  "Baby Health",
  "Diapers",
  "Feeding",
  "Nursery Furniture",
  "Toys",
  "Clothes",
];

export default function MarketPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#F0FDFA]">
          <div className="absolute top-20 right-20 w-96 h-96 orb orb-pink animate-drift" style={{ background: "radial-gradient(circle, #14B8A6 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="absolute bottom-20 left-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s", background: "radial-gradient(circle, #0D9488 0%, transparent 70%)", opacity: 0.1 }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="text-sm font-medium tracking-widest uppercase text-[#14B8A6]">
                    KidZoo Market
                  </span>
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Buy & Sell
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0D9488]">Baby Products</span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Your go-to marketplace for buying and selling baby products. Clear out your home or find affordable, high-quality items for your little one.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <span className="inline-flex items-center px-6 py-3.5 bg-[#14B8A6] text-white rounded-full font-semibold">
                      Coming Soon to App Stores
                    </span>
                    <Link
                      href="mailto:mayuresh@kidzooapp.com"
                      className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-full hover:border-[#14B8A6] hover:text-[#14B8A6] transition-all duration-200"
                    >
                      Sell Your Items
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
                          src={getAssetPath("/images/screenshots/market/categories.png")}
                          alt="KidZoo Market - Browse Categories"
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
                The Easiest Way to Buy & Sell Baby Items
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you want to clear out your home by selling unused or gently used baby items, or you're a parent searching for affordable, high-quality products for your little one, KidZoo Marketplace is here to help.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our app makes buying and selling baby products easy, safe, and convenient. The app is free to use, and you can list as many items as you want for sale.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32 bg-[#F0FDFA]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Features"
              title="Everything You Need to Buy & Sell"
              description="Powerful tools to help you find great deals and sell items effortlessly."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full hover:shadow-card-hover transition-shadow">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0FDFA] flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#14B8A6]" />
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

        {/* Categories */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Categories"
              title="Everything for Your Little One"
              description="Browse and list products across a wide range of baby categories."
              className="mx-auto mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <ScrollReveal key={category} delay={index * 0.05}>
                  <div className="px-6 py-3 bg-[#F0FDFA] rounded-full text-[#14B8A6] font-medium text-sm hover:bg-[#14B8A6] hover:text-white transition-all duration-300 cursor-default">
                    {category}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 md:py-32 bg-[#F0FDFA]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="See It In Action"
              description="Take a peek at how KidZoo Market makes buying and selling baby products simple."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/images/screenshots/market/categories.png", alt: "Browse Categories" },
                { src: "/images/screenshots/market/create-listing.jpg", alt: "Create a Listing" },
                { src: "/images/screenshots/market/send-offer.png", alt: "Send an Offer" },
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
              title="Simple as 1-2-3"
              description="Getting started with KidZoo Market takes just a few taps."
              className="mx-auto mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create a Listing",
                  description: "Tap the menu, select 'Create Listing,' fill in product details, add photos, set a price, choose the age range and zip code, and submit.",
                },
                {
                  step: "02",
                  title: "Browse & Search",
                  description: "Explore recommended products based on your selected categories, or use 'Search Listing' with filters to find exactly what you need.",
                },
                {
                  step: "03",
                  title: "Connect & Buy",
                  description: "Message the seller directly, send an offer, or save the listing for later. Arrange payment and pickup details with the seller.",
                },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.15}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
                    <span
                      className="text-5xl font-extrabold text-[#F0FDFA]"
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
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#F0FDFA] to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0FDFA] flex items-center justify-center">
                    <Shield className="w-7 h-7 text-[#14B8A6]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    Safety & Trust
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Your safety is our priority. We use advanced security measures to protect your information and encourage meeting in safe, public places. Always be cautious when sharing personal details or meeting someone for the first time.
                  </p>
                  <p>
                    KidZoo Market doesn't handle payments directly, so you'll need to agree on a payment method with the seller. Keep most of your transaction communication in the chat section for future reference.
                  </p>
                  <p>
                    If you notice anything suspicious, report it to our support team at{" "}
                    <a
                      href="mailto:mayuresh@kidzooapp.com"
                      className="text-[#14B8A6] hover:underline font-medium"
                    >
                      mayuresh@kidzooapp.com
                    </a>
                    . You can also block users directly from the chat section.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-[#14B8A6]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Ready to Start Buying & Selling?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 mb-10 max-w-xl mx-auto">
                Join KidZoo Market today and discover a community of parents buying and selling quality baby products.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-white text-[#14B8A6] font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
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
              {apps.filter(app => app.id !== "market").slice(0, 4).map((app, index) => (
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
