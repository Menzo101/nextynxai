import { Link } from "react-router-dom";

const divisions = [
  {
    title: "Enterprise Product",
    description:
      "NextLynx Software builds high-performance digital products. From SaaS platforms to complex enterprise systems, we deliver scalable solutions powered by AI.",
  },
  {
    title: "Marketing Agency",
    description:
      "NextLynx Marketing drives growth through data-first digital strategies. We optimize campaigns, analyze markets, and maximize ROI with AI-powered insights.",
  },
  {
    title: "Developer Academy",
    description:
      "Tobidevs Academy accelerates developer careers globally. AI-powered learning paths and hands-on projects prepare the next generation of tech professionals.",
  },
  {
    title: "Talent Network",
    description:
      "Our AI-driven talent matching connects elite developers with the right opportunities. Fast, accurate, and built for the modern tech hiring landscape.",
  },
];

const capabilities = [
  {
    title: "Shared AI Infrastructure",
    description:
      "Proprietary AI models power every subsidiary, creating a unified intelligence layer across development, marketing, education, and recruitment.",
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Cross-Division Synergy",
    description:
      "Each subsidiary feeds data and insights into the others, creating a compounding advantage that standalone companies simply cannot match.",
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Unified Data Pipeline",
    description:
      "A single data backbone connects all subsidiaries, enabling real-time analytics, shared learnings, and coordinated decision-making at scale.",
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Scalable Operations",
    description:
      "Our interconnected model means scaling one division strengthens them all. Growth is compounding, not linear.",
    icon: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
];

const Intermidiaries = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Interconnected <span className="text-secondary">Subsidiaries</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-16">
            NextLynx.Ai operates as an interconnected ecosystem. Our four
            specialized subsidiaries share AI infrastructure, data pipelines,
            and strategic intelligence to deliver results no single company
            could achieve alone.
          </p>

          {/* Interconnection Diagram */}
          <div className="relative max-w-3xl mx-auto py-10">
            {/* Connection Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 320"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <line
                x1="300"
                y1="160"
                x2="100"
                y2="60"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="300"
                y1="160"
                x2="500"
                y2="60"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="300"
                y1="160"
                x2="100"
                y2="260"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="300"
                y1="160"
                x2="500"
                y2="260"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="100"
                y1="60"
                x2="500"
                y2="60"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.15"
              />
              <line
                x1="100"
                y1="260"
                x2="500"
                y2="260"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.15"
              />
              <line
                x1="100"
                y1="60"
                x2="100"
                y2="260"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.15"
              />
              <line
                x1="500"
                y1="60"
                x2="500"
                y2="260"
                stroke="#FA8112"
                strokeWidth="1"
                opacity="0.15"
              />
            </svg>

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>

            {/* Grid of 4 Nodes */}
            <div className="grid grid-cols-2 gap-y-24 gap-x-8 relative z-0">
              {/* Enterprise Product */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">
                  Enterprise Product
                </span>
              </div>

              {/* Marketing Agency */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">
                  Marketing Agency
                </span>
              </div>

              {/* Developer Academy */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">
                  Developer Academy
                </span>
              </div>

              {/* Talent Network */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">
                  Talent Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Augmenting Human Potential Section */}
      <section className="py-20 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-secondary"></span>
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Augmenting Human
              <br />
              Potential at Scale
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Every subsidiary is designed to amplify what humans do
              best—create, strategize, learn, and connect—while AI handles the
              heavy lifting behind the scenes.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 transition-colors"
              >
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {cap.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Deep Dive Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Division Deep Dive
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A closer look at each subsidiary and how they operate within the
              NextLynx.Ai ecosystem.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {divisions.map((div) => (
              <div
                key={div.title}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-secondary/40 transition-colors group"
              >
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-secondary transition-colors">
                  {div.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {div.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl py-16 px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Leverage the NextLynx.Ai Ecosystem
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
              Whether you need software built, marketing scaled, developers
              trained, or talent hired—our interconnected subsidiaries deliver
              results that compound across every division.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/contact"
                className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intermidiaries;
