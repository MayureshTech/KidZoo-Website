"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { PhoneMockup } from "@/components/shared/PhoneMockup";
import { Check } from "lucide-react";
import { getAssetPath } from "@/lib/asset-path";

const highlights = [
  "Set a playdate in 30 seconds",
  "See who's available right now",
  "Connect with school friends",
  "Add to your calendar",
  "Safe and secure for families",
];

export function PlaydatesSpotlight() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <ScrollReveal direction="left">
            <div className="flex justify-center lg:justify-start">
              <PhoneMockup
                src={getAssetPath("/images/screenshots/playdates/whos-available.png")}
                alt="KidZoo Playdates - See Who's Available"
                width={280}
                height={570}
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-6">
              <span className="text-sm font-medium tracking-widest uppercase text-pink-primary">
                Start Here
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Start with
                <br />
                <span className="gradient-text">Playdates</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our flagship app helps parents set up playdates for their
                children in just 30 seconds. No more back and forth messaging.
                No more "Are you free Tuesday?" texts.
              </p>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-teal-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
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

                <Link
                  href="/playdates"
                  className="inline-flex items-center px-6 py-3.5 border-2 border-gray-200 text-gray-900 rounded-xl hover:border-pink-primary hover:text-pink-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
