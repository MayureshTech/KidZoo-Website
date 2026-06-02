"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "playdates",
    name: "KidZoo Playdates",
    tagline: "Play Dates, Made Easy",
    description: "Set up playdates for your children in 30 seconds. No more back and forth messaging.",
    bgColor: "#1a1a2e",
    accentColor: "#E83E8C",
    accentGlow: "rgba(232, 62, 140, 0.15)",
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
    bgColor: "#16213e",
    accentColor: "#D946EF",
    accentGlow: "rgba(217, 70, 239, 0.15)",
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
    bgColor: "#1e1b4b",
    accentColor: "#8B5CF6",
    accentGlow: "rgba(139, 92, 246, 0.15)",
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
    bgColor: "#0f172a",
    accentColor: "#06B6D4",
    accentGlow: "rgba(6, 182, 212, 0.15)",
    logo: "/images/logos/activities.png",
    screenshot: "/images/screenshots/activities/Active play dates.png",
    cta: "Learn More",
    link: "/activities",
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

  // Auto-advance
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
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const CtaButton = ({ slide }: { slide: typeof slides[0] }) => {
    const baseClasses = cn(
      "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base",
      "bg-white text-gray-900 hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
    );

    if (slide.isExternal) {
      return (
        <a
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          <Download className="w-5 h-5" />
          {slide.cta}
        </a>
      );
    }

    return (
      <Link href={slide.link} className={baseClasses}>
        {slide.cta}
        <ChevronRight className="w-5 h-5" />
      </Link>
    );
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`bg-${slide.id}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className="absolute inset-0"
          style={{ backgroundColor: slide.bgColor }}
        />
      </AnimatePresence>

      {/* Colored accent orbs for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          key={`orb1-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[120px] animate-drift"
          style={{ background: slide.accentGlow }}
        />
        <motion.div
          key={`orb2-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/3 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] animate-drift"
          style={{ background: slide.accentGlow, animationDelay: "-4s" }}
        />
        <motion.div
          key={`orb3-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: slide.accentGlow, opacity: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
              {/* App Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm flex items-center justify-center p-2 shadow-lg">
                  <Image
                    src={slide.logo}
                    alt={slide.name}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-sm font-medium tracking-[0.2em] uppercase text-white/70"
              >
                {slide.name}
              </motion.span>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {slide.tagline}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 text-white/80"
              >
                {slide.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <CtaButton slide={slide} />
              </motion.div>
            </div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -60, rotateY: -15 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 100 }}
              className="flex justify-center lg:justify-end"
              style={{ perspective: "1000px" }}
            >
              <div className="relative animate-float">
                <div className="phone-mockup relative" style={{ width: 300, height: 610 }}>
                  <div className="absolute inset-0 overflow-hidden rounded-[28px]">
                    <Image
                      src={slide.screenshot}
                      alt={`${slide.name} app screenshot`}
                      fill
                      className="object-cover"
                      sizes="300px"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/20 rounded-2xl rotate-12 backdrop-blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              index === currentIndex
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          className="h-full bg-white/60"
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "0%" : "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={`progress-${currentIndex}-${isPaused}`}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 font-medium tracking-wide">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronRight className="w-5 h-5 text-white/50 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
