import { Link } from "react-router-dom";

const stats = [
  { label: "Node ID", value: "LX.1141.008" },
  { label: "Ecosystem Integrity", value: "91.3%" },
  { label: "Uptime", value: "1,241,832" },
];

const Error = () => {
  return (
    <div className="bg-primary min-h-screen relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,129,18,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,129,18,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Radial glow behind 404 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-end gap-6">
          {["Neural Network", "Quantum API", "Sentinel Status"].map((item) => (
            <span
              key={item}
              className="text-white/30 text-xs font-medium uppercase tracking-widest hidden sm:block"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 flex flex-col items-center text-center">
        {/* 404 Large Text */}
        <div className="relative mb-8">
          <h1
            className="text-[150px] sm:text-[200px] lg:text-[260px] font-bold leading-none select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(250, 129, 18, 0.6)",
              textShadow: "0 0 80px rgba(250, 129, 18, 0.15)",
            }}
          >
            404
          </h1>
          {/* Inner filled text for depth */}
          <h1
            className="absolute inset-0 text-[150px] sm:text-[200px] lg:text-[260px] font-bold leading-none select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px rgba(250, 129, 18, 0.25)",
            }}
          >
            404
          </h1>
        </div>

        {/* Message Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-10 py-8 max-w-xl w-full backdrop-blur-sm mb-10 -mt-16 relative z-10">
          <h2 className="text-white text-base sm:text-lg font-bold uppercase tracking-wider mb-2">
            This Sector of the Ecosystem is{" "}
            <span className="text-secondary italic">Offline.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            The Lynx has ventured into uncharted data territory. Our diagnostic
            sensors indicate a complete spatial rupture in this node.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return to Core Hub
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:border-white/60 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Contact System Support
            </Link>
          </div>
        </div>

        {/* Lynx Illustration Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-14 max-w-[200px]">
          <div className="w-full aspect-square bg-gradient-to-b from-secondary/10 to-transparent rounded-lg flex items-center justify-center">
            <svg
              className="w-20 h-20 text-secondary/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16 flex-wrap">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-secondary text-xs font-medium uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-white/60 text-sm font-medium">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Error;
