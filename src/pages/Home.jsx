import { Link } from "react-router-dom";

const subsidiaries = [
  {
    title: "NextLynx Software",
    description:
      "We build enterprise-grade, high-performance digital products. From SaaS platforms to complex systems—our AI-first approach means faster delivery and smarter solutions.",
    link: "/software",
    linkText: "Visit Company Hub",
    icon: (
      <svg
        className="w-5 h-5 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "NextLynx Marketing",
    description:
      "Data-first digital marketing. We harness AI to analyze markets, optimize campaigns, and maximize ROI for software companies and beyond.",
    link: "/marketing",
    linkText: "Visit Marketing Hub",
    icon: (
      <svg
        className="w-5 h-5 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: "Tobidevs Academy",
    description:
      "Accelerating developers globally. Training the next generation of tech professionals through AI-powered learning paths and hands-on projects.",
    link: "/academy",
    linkText: "Visit Academy Hub",
    icon: (
      <svg
        className="w-5 h-5 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Talent Network",
    description:
      "We connect skilled tech talent with the clients who need them—creating opportunities for both parties to grow and succeed together.",
    link: "/talent",
    linkText: "Visit Talent Hub",
    icon: (
      <svg
        className="w-5 h-5 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const Home = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
              Leading Software Development Company
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Intelligent Software &
            <br />
            <span className="text-secondary">Growth Ecosystem</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
            NextLynx.Ai is a premier software development firm driving digital
            transformation. We leverage advanced AI as a core engine across our
            four specialized subsidiaries to deliver unparalleled scale, speed,
            and intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#subsidiaries"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Our Subsidiaries
            </a>
          </div>

          {/* Play Button */}
          <div className="mt-14 flex justify-center">
            <button className="w-14 h-14 rounded-full border-2 border-secondary flex items-center justify-center hover:bg-secondary/10 transition-colors">
              <svg
                className="w-5 h-5 text-secondary ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Subsidiaries Overview Section */}
      <section id="subsidiaries" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="text-secondary text-xs font-medium tracking-wider uppercase flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-secondary"></span>
                Our Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                4 Specialized Subsidiaries, 1 Intelligent Core
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                NextLynx unifies four subsidiaries. We integrate proprietary AI
                models across our entire network to optimize development,
                marketing, education, and recruitment.
              </p>
            </div>

            {/* Right - Navigation Arrows */}
            <div className="flex justify-end items-end gap-3">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-colors">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-colors">
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
              </button>
            </div>
          </div>

          {/* Subsidiary Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {subsidiaries.map((sub) => (
              <div
                key={sub.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/50 transition-colors group"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-5">
                  {sub.icon}
                </div>

                <h3 className="text-white font-semibold text-base mb-3">
                  {sub.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                  {sub.description}
                </p>
                <Link
                  to={sub.link}
                  className="text-secondary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  {sub.linkText}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl py-16 px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to build the{" "}
              <span className="text-secondary italic">next</span> frontier?
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
              Whether you're looking for high-end software development,
              marketing scale, or elite talent—our ecosystem is your competitive
              advantage.
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

export default Home;
