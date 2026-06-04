"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAssetPath } from "@/lib/asset-path";

const slides = [
  {
    id: "playdates",
    name: "KidZoo Playdates",
    tagline: "Play Dates, Made Easy",
    description: "Set up playdates for your children in 30 seconds. No more back and forth messaging.",
    bgColor: "#FDF8F5",
    accentColor: "#E83E8C",
    accentLight: "#FDE8F2",
    logo: "/images/logos/playdates.png",
    screenshot: "/images/screenshots/playdates/friend-request.png",
    cta: "Download Now",
    link: "https://play.google.com/store/apps/details?id=com.kidzoo.kidzoo&pcampaignid=web_share",
    isExternal: true,
  },
  {
    id: "events",
    name: "KidZoo Events",
    tagline: "Discover Family Events",
    description: "Find all the family events happening near you. Sports, arts, festivals, and more.",
    bgColor: "#FAE8FD",
    accentColor: "#D946EF",
    accentLight: "#FAE8FD",
    logo: "/images/logos/events.svg",
    screenshot: "/images/screenshots/events/Events HomeUpcoming.png",
    cta: "Learn More",
    link: "/events",
    isExternal: false,
  },
  {
    id: "camp",
    name: "KidZoo Camp",
    tagline: "Find Summer Camps",
    description: "Arts, sports, STEM, swimming, and more. Find the perfect camp for kids aged 1-17.",
    bgColor: "#F3E8FF",
    accentColor: "#8B5CF6",
    accentLight: "#F3E8FF",
    logo: "/images/logos/camp.png",
    screenshot: "/images/screenshots/camp/Home with Floating.png",
    cta: "Learn More",
    link: "/camp",
    isExternal: false,
  },
  {
    id: "activities",
    name: "KidZoo Activities",
    tagline: "Awesome Activities",
    description: "Sports, coding, music, science, and more. Find what your child loves.",
    bgColor: "#E0F7FA",
    accentColor: "#06B6D4",
    accentLight: "#E0F7FA",
    logo: "/images/logos/activities.png",
    screenshot: "/images/screenshots/activities/Active play dates.png",
    cta: "Learn More",
    link: "/activities",
    isExternal: false,
  },
  {
    id: "market",
    name: "KidZoo Market",
    tagline: "Buy & Sell Baby Products",
    description: "Your go-to marketplace for buying and selling baby products. Clothes, toys, strollers, and more.",
    bgColor: "#F0FDFA",
    accentColor: "#14B8A6",
    accentLight: "#CCFBF1",
    logo: "/images/logos/market.png",
    screenshot: "/images/screenshots/market/categories.png",
    cta: "Learn More",
    link: "/market",
    isExternal: false,
  },
  {
    id: "photos",
    name: "KidZoo Photos",
    tagline: "Capture Every Moment",
    description: "Find and book professional photographers for kids' parties and events. Search by budget and theme.",
    bgColor: "#FAF5FF",
    accentColor: "#8B5CF6",
    accentLight: "#EDE9FE",
    logo: "/images/logos/photos.png",
    screenshot: "/images/screenshots/photos/themes.png",
    cta: "Learn More",
    link: "/photos",
    isExternal: false,
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const slide = slides[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const CtaButton = ({ slide }: { slide: typeof slides[0] }) => {
    const buttonClasses = cn(
      "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg",
      slide.id === "playdates"
        ? "bg-gray-900 text-white hover:bg-gray-800"
        : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
    );

    if (slide.isExternal) {
      return (
        <a href={slide.link} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
          <Download className="w-5 h-5" />
          {slide.cta}
        </a>
      );
    }
    return (
      <Link href={slide.link} className={buttonClasses}>
        {slide.cta}
        <ChevronRight className="w-5 h-5" />
      </Link>
    );
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
          style={{ backgroundColor: slide.bgColor }}
        />
      </AnimatePresence>

      {/* Soft colored orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-40"
          style={{ background: slide.accentColor }}
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-[5%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-30"
          style={{ background: slide.accentColor }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Text */}
            <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
              {/* App Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-card flex items-center justify-center p-2">
                  <Image src={getAssetPath(slide.logo)} alt={slide.name} width={48} height={48} className="object-contain w-full h-full" />
                </div>

              </motion.div>

              {/* Tagline */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ color: slide.accentColor }}
              >
                {slide.name}
              </motion.span>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-gray-900"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {slide.tagline}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center lg:justify-start"
              >
                <CtaButton slide={slide} />
              </motion.div>
            </div>

            {/* Right: Phone */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              style={{ perspective: "1000px" }}
            >
              <div className="relative">
                <div className="phone-mockup animate-float" style={{ width: 280, height: 570 }}>
                  <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                    <Image
                      src={getAssetPath(slide.screenshot)}
                      alt={`${slide.name} app`}
                      fill
                      className="object-cover"
                      sizes="280px"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative shape */}
                <div
                  className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-50"
                  style={{ background: slide.accentLight }}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:shadow-card-hover transition-all hover:-translate-y-0.5 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center hover:shadow-card-hover transition-all hover:-translate-y-0.5 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((s, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentIndex
                    ? "w-8 h-2.5"
                    : "w-2.5 h-2.5 hover:opacity-70"
                )}
                style={{
                  backgroundColor: index === currentIndex ? s.accentColor : "#CBD5E1",
                }}
              />
            ))}
          </div>

          {/* Progress */}
          <div className="hidden sm:block w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: slide.accentColor }}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{ duration: 6, ease: "linear" }}
              key={`progress-${currentIndex}-${isPaused}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
