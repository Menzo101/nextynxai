import { Link } from "react-router-dom";

const heroStats = [
  { value: "+42.8%", label: "Avg. Revenue Lift" },
  { value: "8x", label: "ROAS Delivered" },
  { value: "96%", label: "Client Retention" },
];

const services = [
  "SEO & Content",
  "Paid Media",
  "Social Media",
  "Email Marketing",
  "Branding",
];

const clientResults = [
  {
    value: "+400%",
    label: "Revenue Growth",
    description:
      "We help businesses grow revenue through strategic digital marketing. On average, our clients see a 400% increase within the first 90 days.",
  },
  {
    value: "12.5x",
    label: "Return on Ad Spend",
    description:
      "From paid search to social ads, we manage your campaigns end-to-end and consistently deliver industry-leading returns on every dollar spent.",
  },
  {
    value: "99.8%",
    label: "Reporting Accuracy",
    description:
      "Transparent, detailed reporting you can trust. We give you full visibility into campaign performance so you always know where your budget goes.",
  },
];

const strategyItems = [
  {
    title: "Full-Funnel Campaign Strategy",
    description:
      "We plan and execute campaigns across every stage of the customer journey—from awareness to conversion and retention.",
  },
  {
    title: "Paid Media Management",
    description:
      "Google Ads, Meta, LinkedIn, TikTok—we manage your paid channels and optimize spend to get the best results for your budget.",
  },
  {
    title: "Content & Creative Production",
    description:
      "Our in-house creative team produces high-converting ad creatives, landing pages, and content tailored to your brand.",
  },
  {
    title: "Performance Tracking & Reporting",
    description:
      "Weekly and monthly reports with clear metrics. We track what matters and adjust strategy based on real performance data.",
  },
];

const edgeFeatures = [
  {
    title: "Dedicated Account Team",
    description:
      "Every client gets a dedicated strategist, creative lead, and media buyer—so you always have a team that knows your business inside out.",
  },
  {
    title: "Cross-Channel Execution",
    description:
      "We run coordinated campaigns across paid, organic, email, and social—ensuring your brand message is consistent everywhere your audience is.",
  },
  {
    title: "Transparent Results",
    description:
      "No vanity metrics. We report on revenue, leads, and real business outcomes—giving you clear visibility into what's working and what's next.",
  },
];

const Marketing = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
                  NextLynx.AI Marketing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                THE FUTURE
                <br />
                OF GROWTH
                <br />
                IS <span className="text-secondary italic">AUTONOMOUS</span>
              </h1>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                NextLynx.AI Marketing is the growth arm of the NextLynx.AI
                ecosystem. We help businesses scale through strategic digital
                marketing—from paid media and SEO to content, branding, and
                everything in between.
              </p>

              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  to="/contact"
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
                >
                  Contact Us
                </Link>
                <span className="text-gray-400 text-sm">
                  Trusted by{" "}
                  <span className="text-white font-semibold">A2I+</span> global
                  brands
                </span>
              </div>
            </div>

            {/* Right - ROI Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-semibold text-sm">
                  $2.6M Revenue Generated for Clients
                </p>
                <span className="text-secondary text-xs font-medium">Live</span>
              </div>

              {/* Bar Chart Visualization */}
              <div className="flex items-end gap-2 h-32 mb-4">
                {[40, 55, 70, 50, 80, 65, 90, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{
                      height: `${h}%`,
                      backgroundColor:
                        i >= 7 ? "#FA8112" : "rgba(250, 129, 18, 0.3)",
                    }}
                  ></div>
                ))}
              </div>

              <div className="flex items-center justify-between text-gray-500 text-xs">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
              </div>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 max-w-xl">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bar */}
      <section className="border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-4">
            Our Services
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap">
            {services.map((name) => (
              <span
                key={name}
                className="text-white/60 hover:text-secondary text-sm font-semibold tracking-wider uppercase transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientResults.map((result) => (
              <div
                key={result.label}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 transition-colors"
              >
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  {result.label}
                </p>
                <p className="text-white text-4xl font-bold mb-3">
                  {result.value}
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Services */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                What We Do
              </h3>
              <div className="space-y-4">
                {strategyItems.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-secondary/30 transition-colors"
                  >
                    <p className="text-white text-sm font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Projected Growth Curve */}
            <div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-white font-semibold text-sm mb-1">
                  Projected Growth Curve
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Average client growth trajectory over 12 months
                </p>

                {/* Simplified Growth Chart */}
                <div className="relative h-40">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 160"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="growthGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#FA8112"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#FA8112"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,140 C50,130 100,120 150,100 C200,80 250,40 300,25 C350,10 380,5 400,2"
                      fill="none"
                      stroke="#FA8112"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,140 C50,130 100,120 150,100 C200,80 250,40 300,25 C350,10 380,5 400,2 L400,160 L0,160 Z"
                      fill="url(#growthGrad)"
                    />
                  </svg>
                </div>
              </div>

              {/* Speed & Coverage Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                    <svg
                      className="w-4 h-4 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-secondary font-semibold text-sm">
                    Fast Execution
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Campaigns live in days, not months
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                    <svg
                      className="w-4 h-4 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-secondary font-semibold text-sm">
                    End-to-End
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Strategy, creative, and media—all handled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NextLynx Marketing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
                Why{" "}
                <span className="text-secondary">NextLynx.AI Marketing</span>
              </h2>

              <div className="space-y-8">
                {edgeFeatures.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-4">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-secondary text-sm font-medium mt-8 hover:gap-3 transition-all"
              >
                Get in touch
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

            {/* Right - Stat Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center min-h-[300px]">
              <p className="text-secondary text-5xl font-bold mb-2">+68%</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Avg. Client Growth per Quarter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            READY TO
            <br />
            <span className="text-secondary italic">OUTPACE</span> THE MARKET?
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
            Let NextLynx.AI Marketing handle your growth. Reach out and
            we&rsquo;ll show you exactly how we can scale your business.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/pricing"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketing;
