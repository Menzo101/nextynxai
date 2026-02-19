import { Link } from "react-router-dom";
import adeolaImage from "../assets/adeolaimage.jpg";
import myImage from "../assets/myimage.jpg";

const values = [
  {
    title: "Software Development",
    description:
      "NextLynx Software builds enterprise-grade digital products—from SaaS platforms to complex systems—for businesses ready to scale.",
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
    title: "Digital Marketing",
    description:
      "NextLynx Marketing helps brands grow through strategic paid media, SEO, content, and full-funnel campaign execution.",
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
    title: "Education & Talent",
    description:
      "Through Tobidevs Academy and our Talent Network, we train the next generation of developers and connect them with top opportunities.",
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
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
];

const milestones = [
  {
    year: "2025",
    title: "Foundation",
    description:
      "NextLynx was founded with a  goal: build great software for businesses that need to scale. We started as a small dev team taking on client projects.",
    tag: "NextLynx Software",
  },
  {
    year: "2026",
    title: "The Expansion",
    description:
      "We launched NextLynx Marketing to help our clients not just build products, but grow them. Tobidevs Academy followed to train developers in-house.",
    tag: "NextLynx Marketing",
  },
  {
    year: "2026",
    title: "The Ecosystem",
    description:
      "With the launch of our Talent Network, the full NextLynx ecosystem came together—four subsidiaries working as one to deliver end-to-end value.",
    tag: "Talent Network",
  },
];

const leaders = [
  {
    name: "Akano Oluwatobi",
    role: "Founder",
    initial: "A",
    image: myImage,
  },
  {
    name: "Joyce Adejumo",
    role: "Marketing Director",
    initial: "E",
    image: adeolaImage,
  },
  // {
  //   name: "Marcus Sterling",
  //   role: "COO",
  //   initial: "M",
  // },
  // {
  //   name: "Sarah Jenkins",
  //   role: "VP of Engineering",
  //   initial: "S",
  // },
];

const AboutUs = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div className="inline-block mb-8">
            <span className="text-secondary text-xs font-medium tracking-wider uppercase border border-secondary/40 rounded-full px-4 py-1.5">
              About NextLynx
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Scaling
            <br />
            <span className="text-secondary">Innovation</span>
            <br />
            Through AI.
          </h1>

          <p className="max-w-2xl mx-auto text-white/70 text-sm sm:text-base leading-relaxed mb-10">
            NextLynx is a software development company with four specialized
            subsidiaries. We build software, run marketing campaigns, train
            developers, and connect businesses with top talent—all under one
            roof.
          </p>

          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Explore Our Journey
            </Link>
            <div className="flex items-center gap-3">
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                {["N", "X", "L"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-primary flex items-center justify-center"
                  >
                    <span className="text-secondary text-xs font-bold">
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
              <span className="text-white/60 text-xs">
                Trusted by <span className="text-white font-medium">100+</span>{" "}
                clients worldwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-secondary/40 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-white font-semibold text-base mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              The Journey of Evolution
            </h2>
            <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
              From a small development team to a full ecosystem of four
              subsidiaries. Here&rsquo;s how NextLynx grew into what it is
              today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 transition-colors"
              >
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {m.year}
                </span>
                <h3 className="text-white font-semibold text-lg mt-2 mb-3">
                  {m.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-5">
                  {m.description}
                </p>
                <span className="inline-block bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium uppercase tracking-wider px-3 py-1 rounded">
                  {m.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Visionary Leadership
              </h2>
              <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
                The people behind NextLynx. Our leadership team brings together
                expertise in software engineering, marketing, education, and
                business operations.
              </p>
            </div>
            <Link
              to="/team"
              className="hidden sm:inline-flex items-center gap-2 text-secondary text-sm font-medium hover:gap-3 transition-all"
            >
              Meet The Full Board
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader) => (
              <div key={leader.name} className="group">
                <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl h-56 flex items-center justify-center mb-4 group-hover:border-secondary/40 transition-colors overflow-hidden relative">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-white/40 text-3xl font-bold">
                        {leader.initial}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary/60"></div>
                </div>
                <h3 className="text-white font-semibold text-sm">
                  {leader.name}
                </h3>
                <p className="text-white/50 text-sm mt-0.5">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to architect the{" "}
            <span className="text-secondary italic">next</span> era?
          </h2>
          <p className="max-w-xl mx-auto text-white/60 text-sm sm:text-base leading-relaxed mb-10">
            Whether you need software built, marketing scaled, developers
            trained, or talent hired—NextLynx has a subsidiary for that.
            Let&rsquo;s talk.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Partner With Us
            </Link>
            <Link
              to="/careers"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View Career Openings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
