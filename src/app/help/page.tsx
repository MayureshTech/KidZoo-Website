"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqCategories = [
  {
    name: "Safety & Privacy",
    questions: [
      {
        q: "How does KidZoo keep my child's information safe?",
        a: "KidZoo keeps your personal data very safe and secure. The data is encrypted in storage and transmission, and stored safely on Google's servers with best-in-class security. KidZoo will not share or sell any of your information like your phone number, address, or birthdate with any third parties.",
      },
      {
        q: "Who can see my child's information?",
        a: "KidZoo will only share your phone number, playdate venue, first name, last name, profile photo, age, school, grade, food preferences, allergies, and address to your confirmed friends in the context of setting a playdate and making it seamless.",
      },
      {
        q: "Is there any risk in providing my details to KidZoo?",
        a: "There is no risk in providing your details to KidZoo. The privacy of your personal information, including all your details, is a priority for KidZoo, and they adhere to strict privacy policies to ensure your data is not shared or disclosed without proper authorization.",
      },
    ],
  },
  {
    name: "Getting Started",
    questions: [
      {
        q: "How do I register for KidZoo?",
        a: "Connect with Facebook login, and answer a few questions about your kid's age and interests. The registration process is quick and easy. KidZoo uses your information solely for the purposes of better user experience so you don't have to type in your details every time.",
      },
      {
        q: "Why does KidZoo ask for my address?",
        a: "KidZoo asks for your address so it can help you find playdates and play areas around you. KidZoo will securely store your address for future use in playdate arrangements.",
      },
      {
        q: "Is adding my child's school required?",
        a: "Adding a school is optional. We have seen that almost 2 out of 3 playdates are set up with schoolmates, so this makes it easier to find playdates. KidZoo allows you to add your school in the registration so that you can find other children from your child's school who also use KidZoo.",
      },
      {
        q: "Does KidZoo have age restrictions?",
        a: "No, KidZoo does not impose any age restrictions or limitations based on your birthdate. Yes, KidZoo utilizes your birthdate to recommend age-appropriate playdates for you and your child. This helps in ensuring that the playdates are enjoyable and suitable for everyone involved.",
      },
    ],
  },
  {
    name: "Using KidZoo",
    questions: [
      {
        q: "How do I set up a playdate?",
        a: "Setting a playdate is very easy. Just choose from your confirmed friends, the specific friend you want to have a playdate with. Then choose from the times that friend is available, or suggest a new day and time. Set up a location from your home, the friend's home, previous locations or a custom address. Add a message, and send the playdate request.",
      },
      {
        q: "How do I add friends on KidZoo?",
        a: "Adding friends is easy - you can click on 'Invite' button in the bottom navigation bar, and send invites to people in your phonebook. Yes, you can select multiple people at the same time. Also, you can click on 'Add Friends' button and search for friends who might already be on KidZoo app.",
      },
      {
        q: "How do I update my child's availability?",
        a: "At registration, you will be asked about the days and times when your child is available for a playdate, such as Thursdays 4-6 pm. If you want to change available time slots of your child then click on set availability button i.e second button on the bottom navigation bar of the Home screen.",
      },
      {
        q: "How do I edit my child's information?",
        a: "You can always update your personal information by clicking on the three straight lines at the top right corner of the Home screen. If you want to change your birthdate, age, school, grade or food preferences, choose 'Edit Child Details'. If you want to change parents details, click on 'Edit Parent Details.'",
      },
    ],
  },
  {
    name: "Features",
    questions: [
      {
        q: "What is 'See Who's Available'?",
        a: "For the times when your child says, 'I am bored!', KidZoo has 'See Who's Available' option. When you choose it, you can see the availability of all your friends, based on date and time. So you can see which friend is available today evening, and which friend tomorrow morning.",
      },
      {
        q: "Can I add playdates to my calendar?",
        a: "Yes, you can add a confirmed playdate to your own personal calendar, like Google Calendar, or Apple calendar, by clicking on the '+ Calendar' button.",
      },
      {
        q: "Can I set recurring playdates?",
        a: "Yes, you can set weekly recurring playdates, like Wednesday afternoon 4-5 pm with Zoey. This makes it easy to establish regular playtimes with your child's favorite friends.",
      },
      {
        q: "Can I add food allergies and preferences?",
        a: "Yes, KidZoo provides the feature of adding your child's food preferences and allergies, such as peanut allergies, while setting a playdate so it can be visible to your confirmed friends and your child will remain safe during a playdate.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span
          className={`text-lg font-semibold pr-8 transition-colors ${
            isOpen ? "text-pink-primary" : "text-gray-900 group-hover:text-pink-primary"
          }`}
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          {question}
        </span>
        <ChevronRight
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-90 text-pink-primary" : "text-gray-400"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpPage() {
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
                Help & <span className="gradient-text">FAQ</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about KidZoo Playdates and the
                KidZoo ecosystem.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category, categoryIndex) => (
              <ScrollReveal key={category.name} delay={categoryIndex * 0.1}>
                <div className="mb-12 last:mb-0">
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {category.name}
                  </h2>
                  <div className="bg-white">
                    {category.questions.map((faq) => (
                      <FAQItem
                        key={faq.q}
                        question={faq.q}
                        answer={faq.a}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 md:py-32 gradient-soft">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Still Have Questions?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 mb-8">
                Can't find what you're looking for? Reach out to our support
                team.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:mayuresh@kidzooapp.com"
                className="inline-flex items-center px-8 py-4 bg-pink-primary text-white font-semibold rounded-full hover:bg-pink-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Support
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
