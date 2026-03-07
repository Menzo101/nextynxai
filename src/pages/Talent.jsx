import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Vetted Engineers" },
  { value: "97%", label: "Match Rate" },
  { value: "48h", label: "Avg. Time to Hire" },
  { value: "30+", label: "Countries" },
];

const businessPerks = [
  "AI-Verified Talent Profiles",
  "48-Hour Matching Guarantee",
  "Dedicated Account Manager",
  "Flexible Engagement Models",
];

const talentPerks = [
  "High-Impact AI & Software Projects",
  "Competitive Top-Tier Rates",
  "Skill Verification & Badges",
  "Global Remote Opportunities",
];

const Talent = () => {
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
