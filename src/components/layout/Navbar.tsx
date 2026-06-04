"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { apps } from "@/lib/apps-data";
import { getAssetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  darkHero?: boolean;
}

export function Navbar({ darkHero = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Help", href: "/help" },
    { label: "Contact", href: "/contact" },
  ];

  const isDark = darkHero && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? darkHero
              ? "bg-[#0B0F1A]/95 backdrop-blur-xl shadow-[0_2px_16px_rgba(0,0,0,0.3)]"
              : "bg-white/95 backdrop-blur-xl shadow-nav"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-sm">
                <Image
                  src={getAssetPath("/images/logos/kidzoo-main.png")}
                  alt="KidZoo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <span
                className={cn(
                  "text-xl font-bold hidden sm:block",
                  isDark ? "text-white" : "text-gray-900"
                )}
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                KidZoo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isDark
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : scrolled
                        ? "text-gray-600 hover:text-pink-primary hover:bg-pink-light/50"
                        : "text-gray-900 hover:text-pink-primary hover:bg-white/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Apps Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAppsDropdownOpen(!appsDropdownOpen)}
                  onMouseEnter={() => setAppsDropdownOpen(true)}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isDark
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : scrolled
                        ? "text-gray-600 hover:text-pink-primary hover:bg-pink-light/50"
                        : "text-gray-900 hover:text-pink-primary hover:bg-white/50"
                  )}
                >
                  Our Apps
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      appsDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {appsDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setAppsDropdownOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setAppsDropdownOpen(false)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-card-hover border border-gray-100 p-2 z-50"
                      >
                        <div className="grid gap-1">
                          {apps.map((app) => (
                            <Link
                              key={app.id}
                              href={app.slug}
                              onClick={() => setAppsDropdownOpen(false)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                              {app.logoPath ? (
                                <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-sm" style={{ boxShadow: `0 0 0 1px ${app.lightColor}` }}>
                                  <Image
                                    src={getAssetPath(app.logoPath)}
                                    alt={app.shortName}
                                    width={32}
                                    height={32}
                                    className="object-contain w-full h-full"
                                  />
                                </div>
                              ) : (
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                                  style={{
                                    background: `linear-gradient(135deg, ${app.color} 0%, ${app.lightColor} 200%)`,
                                  }}
                                >
                                  {app.shortName.charAt(0)}
                                </div>
                              )}
                              <span className="text-sm font-medium text-gray-900">
                                {app.shortName}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/playdates"
                className="inline-flex items-center px-6 py-2.5 bg-pink-primary text-white text-sm font-semibold rounded-full hover:bg-pink-dark transition-all duration-200 hover:-translate-y-0.5 shadow-button"
              >
                Download App
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
              )}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X
                  className={cn(
                    "w-6 h-6",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "w-6 h-6",
                    isDark ? "text-white" : "text-gray-900"
                  )}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-sm">
                      <Image
                  src={getAssetPath("/images/logos/kidzoo-main.png")}
                        alt="KidZoo"
                        width={32}
                        height={32}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <span
                      className="text-xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      KidZoo
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-5 h-5 text-gray-900" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-base font-medium text-gray-900 rounded-xl hover:bg-pink-light/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-400 mb-3 px-4">
                    Our Apps
                  </p>
                  <div className="flex flex-col gap-1">
                    {apps.map((app) => (
                      <Link
                        key={app.id}
                        href={app.slug}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        {app.logoPath ? (
                          <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0 shadow-sm" style={{ boxShadow: `0 0 0 1px ${app.lightColor}` }}>
                            <Image
                              src={getAssetPath(app.logoPath)}
                              alt={app.shortName}
                              width={32}
                              height={32}
                              className="object-contain w-full h-full"
                            />

                          </div>
                        ) : (
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${app.color} 0%, ${app.lightColor} 200%)`,
                            }}
                          >
                            {app.shortName.charAt(0)}
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-900">
                          {app.shortName}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href="/playdates"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3 bg-pink-primary text-white font-semibold rounded-full hover:bg-pink-dark transition-colors"
                  >
                    Download App
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
