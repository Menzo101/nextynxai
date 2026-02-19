import { useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "1,200+", label: "Vetted Specialists" },
  { value: "450+", label: "Elite Engineers" },
  { value: "98.2%", label: "Match Accuracy" },
  { value: "$45M+", label: "Value Delivered" },
];

const filters = [
  "Intermediary",
  "AI & Data Science",
  "Frontend",
  "Growth",
  "DevOps",
];

const profilesByCategory = {
  Intermediary: [
    {
      name: "Elena Vance",
      title: "Senior AI Engineer",
      badge: null,
      description:
        "Specializes in deep learning and neural architecture. 8 years building production ML systems for fintech and healthcare startups.",
      skills: ["Python", "TensorFlow", "MLOps"],
    },
    {
      name: "Marcus Thorne",
      title: "Full Stack Engineer",
      badge: "Top Rated",
      description:
        "Full stack engineer with a deep focus on AI integration. Expert at building generative AI pipelines and real-time inference systems.",
      skills: ["React", "Node", "AWS"],
    },
    {
      name: "Sarah Jenkins",
      title: "Growth Strategist",
      badge: "Featured",
      description:
        "Growth strategist turned engineer. Bridges the gap from idea to scale through automated growth loops and data-driven experimentation.",
      skills: ["Analytics", "Python", "SQL"],
    },
  ],
  "AI & Data Science": [
    {
      name: "Dr. Liam Chen",
      title: "Machine Learning Lead",
      badge: "Top Rated",
      description:
        "PhD in Computer Science with 10+ years in machine learning. Built recommendation engines serving millions of users at scale.",
      skills: ["PyTorch", "Scikit-learn", "Spark"],
    },
    {
      name: "Priya Sharma",
      title: "Data Scientist",
      badge: null,
      description:
        "Expert in statistical modeling and predictive analytics. Delivered data-driven solutions for e-commerce and logistics companies.",
      skills: ["R", "Python", "Tableau"],
    },
    {
      name: "James Okonkwo",
      title: "NLP Engineer",
      badge: "Featured",
      description:
        "Specializes in natural language processing and conversational AI. Built chatbots and language models for enterprise clients.",
      skills: ["Transformers", "spaCy", "LangChain"],
    },
  ],
  Frontend: [
    {
      name: "Amara Diallo",
      title: "Senior Frontend Engineer",
      badge: "Top Rated",
      description:
        "Pixel-perfect UI developer with 7 years of experience. Specializes in building performant, accessible web applications at scale.",
      skills: ["React", "TypeScript", "Tailwind"],
    },
    {
      name: "Kofi Mensah",
      title: "UI/UX Engineer",
      badge: null,
      description:
        "Design-minded frontend developer who bridges the gap between design and code. Expert in design systems and component libraries.",
      skills: ["Next.js", "Figma", "Storybook"],
    },
    {
      name: "Yuki Tanaka",
      title: "Frontend Architect",
      badge: "Featured",
      description:
        "Leads frontend architecture for complex SaaS platforms. Deep expertise in state management, performance optimization, and micro-frontends.",
      skills: ["Vue", "GraphQL", "Webpack"],
    },
  ],
  Growth: [
    {
      name: "Chioma Eze",
      title: "Growth Marketing Lead",
      badge: "Featured",
      description:
        "Full-funnel growth expert who has scaled multiple startups from zero to $10M ARR. Data-driven approach to user acquisition and retention.",
      skills: ["SEO", "Google Ads", "HubSpot"],
    },
    {
      name: "Daniel Osei",
      title: "Performance Marketer",
      badge: null,
      description:
        "Paid media specialist with $20M+ in managed ad spend. Expert at scaling campaigns across Meta, Google, and LinkedIn platforms.",
      skills: ["Meta Ads", "Analytics", "CRO"],
    },
    {
      name: "Fatima Al-Hassan",
      title: "Content Strategist",
      badge: "Top Rated",
      description:
        "Strategic content leader who builds organic growth engines. Has grown multiple brands to 500K+ monthly organic visitors.",
      skills: ["Content", "Email", "Branding"],
    },
  ],
  DevOps: [
    {
      name: "Tunde Adeyemi",
      title: "Senior DevOps Engineer",
      badge: "Top Rated",
      description:
        "Infrastructure expert with 9 years of experience. Specializes in building CI/CD pipelines and managing cloud-native architectures.",
      skills: ["AWS", "Terraform", "Docker"],
    },
    {
      name: "Nia Thompson",
      title: "Cloud Architect",
      badge: null,
      description:
        "Multi-cloud architect who designs resilient, scalable infrastructure. Certified in AWS, GCP, and Azure with enterprise-level experience.",
      skills: ["Kubernetes", "GCP", "Ansible"],
    },
    {
      name: "Victor Nwosu",
      title: "SRE Engineer",
      badge: "Featured",
      description:
        "Site reliability engineer focused on uptime and observability. Has maintained 99.99% uptime for high-traffic production systems.",
      skills: ["Prometheus", "Linux", "Jenkins"],
    },
  ],
};

const businessPerks = [
  "Dedicated talent team",
  "Real-time availability",
  "Fractional or full-time",
];

const talentPerks = [
  "Top tier pay rates",
  "Exclusive compute access",
  "Global network influence",
];

const Talent = () => {
  const [activeFilter, setActiveFilter] = useState("Intermediary");

  const profiles = profilesByCategory[activeFilter];

  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
              The World of Refined Intelligence
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            ACCELERATE
            <br />
            <span className="text-secondary italic">HUMAN CAPITAL</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
            Connect with the top 7% of AI architects, full stack engineers, and
            growth strategists—vetted by our proprietary neural verification
            engine.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Link
              to="/get-started"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
            >
              Hire Talent
            </Link>
            <Link
              to="/join"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
            >
              Join Network
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-white text-2xl sm:text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Talent Marketplace */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              ELITE TALENT{" "}
              <span className="text-secondary">MARKETPLACE</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Browse our real-time inventory of vetted specialists.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-medium transition-colors ${
                  activeFilter === filter
                    ? "bg-secondary text-white"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-secondary/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Profile Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/50 transition-colors group"
              >
                {/* Card Header */}
                <div className="relative h-48 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center">
                  {profile.badge && (
                    <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-medium uppercase tracking-wider px-2 py-1 rounded">
                      {profile.badge}
                    </span>
                  )}
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <p className="absolute bottom-4 left-0 right-0 text-center text-gray-400 text-xs">
                    {profile.title}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-base uppercase mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {profile.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white/5 border border-white/10 text-gray-300 text-xs uppercase tracking-wider font-medium px-3 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="w-full border border-secondary text-secondary hover:bg-secondary hover:text-white text-xs uppercase tracking-wider font-medium py-2.5 rounded-lg transition-colors">
                    View Portfolio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Paths, One Future */}
      <section className="py-20 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              TWO PATHS, <span className="text-secondary">ONE FUTURE</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              Whether you're building the next unicorn or you are the engine
              behind it, there's a path for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* For Businesses */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-secondary/40 transition-colors">
              <h3 className="text-white font-bold text-lg uppercase mb-3">
                For Businesses
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Deploy elite talent without the friction of traditional hiring.
                Our AI platform matches the specific technical talent you need,
                so you can staff any project with the perfect verified
                professional.
              </p>

              <ul className="space-y-3 mb-8">
                {businessPerks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="uppercase text-xs tracking-wider font-medium">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/get-started"
                className="block w-full bg-secondary hover:bg-secondary/90 text-white text-center font-medium py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
              >
                Build Your Team
              </Link>
            </div>

            {/* For Talent */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-secondary/40 transition-colors">
              <h3 className="text-white font-bold text-lg uppercase mb-3">
                For Talent
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Join an elite collective of builders and researchers. Get access
                to high-impact projects at the frontiers of AI, while earning
                top rates for your verified skill and reputation.
              </p>

              <ul className="space-y-3 mb-8">
                {talentPerks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="uppercase text-xs tracking-wider font-medium">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/join"
                className="block w-full border border-secondary text-secondary hover:bg-secondary hover:text-white text-center font-medium py-3 rounded-lg transition-colors text-sm uppercase tracking-wide"
              >
                Apply to Join
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talent;
