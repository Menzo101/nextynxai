import { Link } from "react-router-dom";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    category: "AI & Software Development",
    title: "How AI Is Transforming Custom Software Development in 2026",
    excerpt:
      "Artificial intelligence is revolutionizing the software development lifecycle. From AI-powered code generation to intelligent testing, discover how NextLynx.AI leverages machine learning to deliver enterprise-grade digital products 10x faster.",
    author: "NextLynx.AI Team",
    date: "Feb 20, 2026",
    readTime: "7 min read",
    tags: ["AI Software Development", "Machine Learning", "Enterprise Solutions"],
    featured: true,
  },
  {
    id: 2,
    category: "Digital Marketing",
    title: "Data-Driven Digital Marketing Strategies That Actually Work",
    excerpt:
      "Stop guessing and start growing. Learn how NextLynx.AI Marketing uses AI-powered analytics, SEO optimization, and performance marketing to drive measurable ROI for software companies and startups.",
    author: "NextLynx.AI Marketing",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    tags: ["Digital Marketing", "SEO Strategy", "Growth Marketing"],
    featured: false,
  },
  {
    id: 3,
    category: "Developer Education",
    title: "Why AI-First Developer Training Is the Future of Tech Education",
    excerpt:
      "TobiDevs Academy is redefining how developers learn to code. Our AI-powered curriculum, hands-on projects, and mentorship programs prepare students for real-world software engineering careers.",
    author: "TobiDevs Academy",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    tags: ["Coding Bootcamp", "Developer Training", "Tech Education"],
    featured: false,
  },
  {
    id: 4,
    category: "Tech Talent & Recruitment",
    title: "The AI-Powered Approach to Hiring Top Software Engineers",
    excerpt:
      "Finding elite developers is harder than ever. NextLynx.AI Talent Network uses intelligent matching algorithms to connect companies with pre-vetted software engineers, reducing time-to-hire by 60%.",
    author: "NextLynx.AI Talent",
    date: "Feb 5, 2026",
    readTime: "6 min read",
    tags: ["Tech Recruitment", "Talent Acquisition", "Hiring Developers"],
    featured: false,
  },
  {
    id: 5,
    category: "AI & Software Development",
    title: "Building Scalable SaaS Platforms: Architecture Best Practices",
    excerpt:
      "From microservices to serverless, explore the architectural patterns NextLynx.AI Software uses to build high-performance, scalable SaaS platforms that handle millions of users.",
    author: "NextLynx.AI Software",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    tags: ["SaaS Development", "Software Architecture", "Cloud Computing"],
    featured: false,
  },
  {
    id: 6,
    category: "Industry Insights",
    title: "The Interconnected Business Model: How Subsidiaries Create Compounding Growth",
    excerpt:
      "NextLynx.AI's ecosystem of four specialized subsidiaries—software, marketing, education, and talent—creates a compounding advantage. Learn how cross-division synergy drives exponential business growth.",
    author: "NextLynx.AI Team",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    tags: ["Business Strategy", "Digital Transformation", "Tech Ecosystem"],
    featured: false,
  },
];

const categories = [
  "All",
  "AI & Software Development",
  "Digital Marketing",
  "Developer Education",
  "Tech Talent & Recruitment",
  "Industry Insights",
];

const NextLynxAiBlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
              NextLynx.AI Blog — Insights & Resources
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            AI-Powered Insights for{" "}
            <span className="text-secondary">Digital Growth</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
            Expert articles on AI software development, digital marketing
            strategies, developer education, and tech talent acquisition.
            Stay ahead with actionable insights from the NextLynx.AI ecosystem.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles on AI, software development, marketing..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 pl-12 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-secondary/40 transition-colors group">
              <div className="grid md:grid-cols-2">
                {/* Featured Image Placeholder */}
                <div className="h-64 md:h-auto bg-gradient-to-br from-secondary/20 to-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/15 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-secondary text-xs font-medium tracking-wider uppercase mb-3">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4 group-hover:text-secondary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-6">
                    <span>{featuredPost.author}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{featuredPost.date}</span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-secondary text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Read Full Article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === cat
                    ? "bg-secondary text-white"
                    : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/40 transition-colors group"
              >
                {/* Post Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-secondary/10 to-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-secondary/70 text-xs bg-secondary/10 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to="/contact"
                      className="text-secondary text-xs font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Why Read the NextLynx.AI Blog?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                The NextLynx.AI blog is your go-to resource for the latest in
                AI-powered software development, digital marketing automation,
                full-stack developer training, and tech recruitment strategies.
                Our team of software engineers, marketing strategists, and
                industry experts share proven frameworks, case studies, and
                actionable insights.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Whether you're a startup founder looking for custom software
                development, a business scaling digital marketing campaigns, a
                developer learning to code with AI, or a company hiring top tech
                talent—our blog delivers the knowledge you need to grow.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "AI Software Development Insights",
                  description:
                    "Deep dives into machine learning, SaaS architecture, API design, cloud computing, and AI-first development methodologies.",
                },
                {
                  title: "Digital Marketing & SEO Strategies",
                  description:
                    "Data-driven growth marketing, search engine optimization, content strategy, and performance advertising for tech companies.",
                },
                {
                  title: "Developer Career & Education",
                  description:
                    "Coding tutorials, career guides, bootcamp insights, and AI-powered learning strategies for aspiring software engineers.",
                },
                {
                  title: "Tech Hiring & Talent Trends",
                  description:
                    "Recruitment best practices, salary benchmarks, remote hiring strategies, and how AI is reshaping tech talent acquisition.",
                },
              ].map((topic) => (
                <div
                  key={topic.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-secondary/40 transition-colors"
                >
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl py-16 px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Never Miss an <span className="text-secondary">Insight</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Subscribe to the NextLynx.AI newsletter for weekly articles on AI
              software development, digital marketing strategies, developer
              education, and tech industry trends.
            </p>
            <div className="flex items-center justify-center gap-3 max-w-md mx-auto flex-wrap sm:flex-nowrap">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <button className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NextLynxAiBlogPage;
