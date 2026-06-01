"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { ChevronDown } from "lucide-react";

export function HeroPlaydates() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 orb orb-pink animate-drift" />
      <div className="absolute bottom-20 right-10 w-80 h-80 orb orb-teal animate-drift" style={{ animationDelay: "-4s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-16 lg:pt-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-sm font-medium tracking-widest uppercase text-pink-primary"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Playdate App | KidZoo
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-gray-900"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Play dates,
              <br />
              <span className="gradient-text">Made Easy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              KidZoo is a social platform that takes the effort and awkwardness
              out of playdates. Set up playdates for your children in 30
              seconds, not 30 texts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
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

              <div className="relative inline-flex items-center gap-3 px-6 py-3.5 bg-gray-200 text-gray-500 rounded-xl cursor-not-allowed">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.87-.92.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 leading-none">Download on</div>
                  <div className="text-sm font-semibold leading-tight">Appstore</div>
                </div>
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gray-400 text-white text-[10px] font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="flex justify-center lg:justify-end"
            style={{ perspective: "1000px" }}
          >
            <div className="relative">
              <PhoneMockup
                src="/images/screenshots/playdates/friend-request.png"
                alt="KidZoo Playdates App - Friend Request Screen"
                width={280}
                height={570}
              />
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-pink-light rounded-2xl rotate-12 opacity-60" />
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-teal-light rounded-full opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium tracking-wide">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
