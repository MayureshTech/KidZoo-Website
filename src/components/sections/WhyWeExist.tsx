"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function WhyWeExist() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-6xl md:text-7xl lg:text-8xl font-extrabold gradient-text mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  <AnimatedCounter target={70} suffix="%" />
                </motion.div>
                <p className="text-xl text-gray-600 font-medium">
                  of parents say scheduling playdates is stressful
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-cream rounded-2xl p-6">
                  <div
                    className="text-3xl md:text-4xl font-bold text-pink-primary mb-1"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    <AnimatedCounter target={30} suffix="s" />
                  </div>
                  <p className="text-sm text-gray-600">to set a playdate</p>
                </div>
                <div className="bg-teal-light rounded-2xl p-6">
                  <div
                    className="text-3xl md:text-4xl font-bold text-teal-primary mb-1"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    <AnimatedCounter target={2} suffix="/3" />
                  </div>
                  <p className="text-sm text-gray-600">playdates with schoolmates</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Why We Built KidZoo
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are parents who have felt the frustration in the effort
                required to schedule playdates. We have seen our children feel
                lonely sometimes. We think children spend too much time in
                front of screens today — TVs, iPads, phones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                So we decided to use our MBA degrees and decades of business
                experience in the technology and finance sectors, to build a
                social and mobile one-stop platform to take the effort and
                frustration out of setting up play dates.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
