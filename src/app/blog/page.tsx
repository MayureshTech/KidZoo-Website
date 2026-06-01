import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionHeader } from "@/components/shared/SectionHeader";

const blogPosts = [
  {
    title: "Essential Apps For Parents",
    excerpt:
      "Discover the must-have apps that make parenting easier in the digital age.",
    date: "July 16, 2021",
    readTime: "1 min read",
    category: "Technology",
  },
  {
    title: "How To Plan Play Date Activities",
    excerpt:
      "Creative ideas and tips for planning engaging activities for your child's next playdate.",
    date: "July 16, 2021",
    readTime: "1 min read",
    category: "Activities",
  },
  {
    title: "Your Complete Guide To Play Dates",
    excerpt:
      "Everything you need to know about organizing successful playdates for your children.",
    date: "July 16, 2021",
    readTime: "1 min read",
    category: "Guide",
  },
];

export default function BlogPage() {
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
                KidZoo <span className="gradient-text">Blog</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Insights, tips, and stories for modern parents navigating the
                world of playdates and family life.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.title} delay={index * 0.1}>
                  <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer">
                    <div className="h-48 bg-gradient-to-br from-pink-light to-teal-light flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-300" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {post.category.charAt(0)}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3
                        className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-primary transition-colors"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
