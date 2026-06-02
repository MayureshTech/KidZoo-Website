"use client";

import Link from "next/link";
import { AppIcon } from "@/components/shared/AppIcon";
import { apps } from "@/lib/apps-data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import Image from "next/image";

function AppMarqueeRow({ 
  direction = "left", 
  speed = 30,
  appSubset 
}: { 
  direction?: "left" | "right"; 
  speed?: number;
  appSubset: typeof apps;
}) {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  return (
    <div className="relative overflow-hidden py-4 group">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <div 
        className={`flex gap-6 ${animationClass}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First set */}
        {appSubset.map((app) => (
          <Link 
            key={`${app.id}-a`} 
            href={app.slug}
            className="flex-shrink-0 group/card"
          >
            <div className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 min-w-[280px]">
              <AppIcon
                name={app.shortName}
                color={app.color}
                lightColor={app.lightColor}
                logoPath={app.logoPath}
                size="sm"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm truncate" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  {app.name}
                </h4>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {app.description}
                </p>
              </div>
              {!app.isPlaceholder && (
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" title="Available" />
              )}
            </div>
          </Link>
        ))}
        
        {/* Duplicate for seamless loop */}
        {appSubset.map((app) => (
          <Link 
            key={`${app.id}-b`} 
            href={app.slug}
            className="flex-shrink-0 group/card"
          >
            <div className="flex items-center gap-4 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 min-w-[280px]">
              <AppIcon
                name={app.shortName}
                color={app.color}
                lightColor={app.lightColor}
                logoPath={app.logoPath}
                size="sm"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm truncate" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  {app.name}
                </h4>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {app.description}
                </p>
              </div>
              {!app.isPlaceholder && (
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" title="Available" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function EcosystemCarousel() {
  // Split apps into two rows for visual variety
  const row1 = apps.slice(0, 5); // First 5 apps
  const row2 = apps.slice(4).concat(apps.slice(0, 4)); // Last 5 + first 4 (overlap for continuity)

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <SectionHeader
            eyebrow="The KidZoo Ecosystem"
            title="More Than Just Playdates"
            description="A complete toolkit for modern parents. From playdates to parties, we've got you covered."
            className="mx-auto text-center"
          />
        </ScrollReveal>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        <AppMarqueeRow direction="left" speed={35} appSubset={row1} />
        <AppMarqueeRow direction="right" speed={40} appSubset={row2} />
      </div>

      {/* Static grid fallback for mobile (optional - shows on very small screens) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:hidden">
          {apps.map((app) => (
            <Link key={app.id} href={app.slug} className="group">
              <div className="flex flex-col items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-card-hover transition-all text-center">
                <AppIcon
                  name={app.shortName}
                  color={app.color}
                  lightColor={app.lightColor}
                  logoPath={app.logoPath}
                  size="sm"
                />
                <span className="text-sm font-bold text-gray-900">{app.shortName}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
