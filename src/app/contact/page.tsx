"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
                Get In <span className="gradient-text">Touch</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Have a question, feedback, or just want to say hello? We'd love
                to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <ScrollReveal direction="left">
                <div className="space-y-8">
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      Contact Information
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Reach out to us through any of the channels below. We aim
                      to respond to all inquiries within 24 hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-pink-light flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-pink-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Address
                        </h3>
                        <p className="text-gray-600">
                          88 Morgan Street, Suite 1105
                          <br />
                          Jersey City, NJ 07302
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-teal-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:mayuresh@kidzooapp.com"
                          className="text-gray-600 hover:text-pink-primary transition-colors"
                        >
                          mayuresh@kidzooapp.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-pink-light flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-pink-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:609-907-3659"
                          className="text-gray-600 hover:text-pink-primary transition-colors"
                        >
                          609-907-3659
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal direction="right">
                <div className="bg-cream rounded-3xl p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-teal-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3
                        className="text-xl font-bold text-gray-900 mb-2"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        Thanks for reaching out!
                      </h3>
                      <p className="text-gray-600">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({ ...formData, subject: e.target.value })
                          }
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20"
                          placeholder="What's this about?"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-primary focus:ring-2 focus:ring-pink-primary/20 resize-none"
                          placeholder="Tell us more..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-pink-primary text-white font-semibold rounded-full hover:bg-pink-dark transition-all duration-200 hover:-translate-y-0.5"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
