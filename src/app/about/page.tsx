import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Heart, Users, Target, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Parent-First",
    description:
      "Every decision we make starts with parents in mind. We understand the challenges because we face them too.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe children thrive when they're connected. Building friendships is at the core of everything we do.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description:
      "Technology should make life easier, not harder. We obsess over making every interaction effortless.",
  },
  {
    icon: Award,
    title: "Trust",
    description:
      "Your family's data is sacred. We maintain the highest standards of privacy and security.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                About <span className="gradient-text">KidZoo</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We're parents building the tools we wish we had. Making family
                life easier, one app at a time.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Our Story
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are parents who have felt the frustration in the effort
                required to schedule playdates. We have seen our children feel
                lonely sometimes. We think children spend too much time in front
                of screens today — TVs, iPads, phones.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                So we decided to use our MBA degrees and decades of business
                experience in the technology and finance sectors, to build a
                social and mobile one-stop platform to take the effort and
                frustration out of setting up play dates.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, KidZoo has grown from a simple playdate app to a complete
                ecosystem of tools for modern parents. From playdates to events,
                camps to childcare, we're building the essential toolkit that
                every parent needs.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="What We Believe"
              description="The principles that guide every decision we make."
              className="mx-auto mb-16"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-card h-full">
                    <div className="w-14 h-14 rounded-2xl bg-pink-light flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-pink-primary" />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mission CTA */}
        <section className="py-20 md:py-32 gradient-hero">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Our Mission
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/90 leading-relaxed">
                No child should feel lonely while their parents are busy. We're
                building the essential toolkit for modern parents, so you can
                focus on what matters most — spending quality time with your
                children.
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
