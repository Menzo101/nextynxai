import { Link } from "react-router-dom";

const courses = [
  {
    title: "AI-Powered Product Development",
    description:
      "Build smarter products faster. Learn to integrate AI tools, APIs, and automation into your development workflow for 10x productivity.",
    price: "$400",
    icon: (
      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Modern Fullstack Systems",
    description:
      "Build production-grade fullstack applications. Modern frameworks, scalable backends, real-time systems, and cloud deployment.",
    price: "$300",
    icon: (
      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Web3 & Smart Contracts",
    description:
      "Blockchain development from first principles. Smart contracts, DeFi protocols, and decentralized application architecture.",
    price: "$400",
    icon: (
      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const roadmapSteps = [
  {
    step: "01",
    title: "Fundamentals",
    description:
      "Core programming, data structures, algorithms, and computational thinking to build a rock-solid foundation.",
  },
  {
    step: "02",
    title: "The Deep Dive",
    description:
      "Specialize in your chosen track with intensive project-based modules and real-world problem solving.",
  },
  {
    step: "03",
    title: "AI-Powered Building",
    description:
      "Leverage AI tools to accelerate your development workflow. Build, deploy, and iterate on production-grade digital products at speed.",
  },
  {
    step: "04",
    title: "Job Placement",
    description:
      "Portfolio review, mock interviews, and direct connections to hiring partners in our Talent Network.",
  },
];

const testimonials = [
  {
    quote:
      "Tobidevs Academy completely changed my career trajectory. The curriculum is hands-on, the mentors are brilliant, and I landed a role at a top startup within 3 months of graduating.",
    name: "Sarah Jenkins",
    role: "AI Engineer",
  },
  {
    quote:
      "The community and career support set expectations that just deliver. It's not just coding—it's how to think, build, and ship like a professional.",
    name: "David Chen",
    role: "Fullstack Developer",
  },
  {
    quote:
      "I came for the code, stayed for the community. The bootcamp taught me to build real products and the mentorship helped me land my dream role at a Fortune 500 company.",
    name: "Monica Torres",
    role: "Software Engineer",
  },
];

const AccademyPage = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
              TobiDevs Academy — 100% Hands-On
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            TobiDevs Academy:
            <br />
            Build Products. <span className="text-secondary">Ship with AI.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
            At TobiDevs, we teach you to build and ship production-ready
            digital products. Leverage modern AI tools for maximum development
            speed, guided by industry veterans.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/get-started"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Start Your Journey
            </Link>
            <a
              href="#courses"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      {/* Specialized Learning Paths */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-secondary text-xs font-medium tracking-wider uppercase flex items-center gap-2 mb-4">
                <span className="w-6 h-px bg-secondary"></span>
                Our Courses
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Specialized Learning Paths
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-secondary hover:text-secondary transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-secondary/50 transition-colors group"
              >
                {/* Course Image Placeholder */}
                <div className="h-44 bg-gradient-to-br from-secondary/20 to-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-8 h-8 bg-secondary/30 rounded-lg flex items-center justify-center">
                      {course.icon}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-white font-semibold text-base mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <span className="text-secondary font-bold text-xl">
                    {course.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Job-Ready Roadmap */}
      <section className="py-20 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase mb-4 block">
              The TobiDevs Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The Job-Ready Roadmap
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapSteps.map((step) => (
              <div key={step.step} className="text-center">
                {/* Step Number */}
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/30 flex items-center justify-center mx-auto mb-5">
                  <span className="text-secondary font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Thousands */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
            Trusted by TobiDevs Graduates
          </h2>

          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 border-t border-white/10 pt-12">
            <div className="text-center">
              <p className="text-secondary text-xs font-medium tracking-wider uppercase mb-2">
                Working Sprints
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Real project sprints mirroring professional workflows
              </p>
            </div>
            <div className="text-center">
              <p className="text-white text-4xl font-bold">94%</p>
              <p className="text-gray-400 text-sm mt-1">Placement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-white text-4xl font-bold">500+</p>
              <p className="text-gray-400 text-sm mt-1">Graduates</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-First Mentorship */}
      <section className="py-20 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                TobiDevs Mentorship
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                Every TobiDevs student is paired with an AI-augmented
                mentorship system backed by experienced engineers. Get
                personalized feedback, code reviews on real production
                repositories, and career guidance tailored to your goals.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized AI-powered learning paths",
                  "1-on-1 mentorship with senior engineers",
                  "Code reviews on real production codebases",
                  "Career strategy and portfolio building",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side visual */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm sm:text-base">
                  TobiDevs mentorship platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Orange Background */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary rounded-2xl py-16 px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to join TobiDevs?
            </h2>
            <p className="max-w-xl mx-auto text-white/80 text-sm sm:text-base leading-relaxed mb-10">
              Limited seats available. The next TobiDevs cohort starts soon.
              Secure your spot and start shipping real products today.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/get-started"
                className="bg-white text-secondary hover:bg-white/90 font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Enroll Now
              </Link>
              <Link
                to="/contact"
                className="border border-white/60 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Talk to a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccademyPage;
