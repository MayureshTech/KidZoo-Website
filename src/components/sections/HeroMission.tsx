"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroMission() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F1A]">
      {/* Mesh gradient orbs — large, soft, premium feel */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-drift"
        style={{ background: "radial-gradient(circle, #E83E8C 0%, transparent 70%)" }}
      />
      <div 
        className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-drift"
        style={{ background: "radial-gradient(circle, #0D9488 0%, transparent 70%)", animationDelay: "-3s" }}
      />
      <div 
        className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] rounded-full opacity-10 blur-[140px] animate-drift"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", animationDelay: "-6s" }}
      />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Noise texture overlay for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="inline-block text-sm font-medium tracking-[0.3em] uppercase text-white/50 mb-8"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          The KidZoo Mission
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-8"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          No child should feel
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E83E8C] to-[#0D9488]">lonely</span> while you're busy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          We're building the essential toolkit for modern parents. Because
          parenting is hard enough — finding friends for your kids shouldn't be.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#apps"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Explore Our Apps
          </Link>
          <Link
            href="/playdates"
            className="inline-flex items-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            Download Playdates
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 font-medium tracking-wide">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
