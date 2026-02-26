import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mynewfooterimage.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const subsidiaryLinks = [
    { name: "NextLynx.Ai Software", href: "/software" },
    { name: "NextLynx.Ai Marketing", href: "/marketing" },
    { name: "Tobidevs Academy", href: "/academy" },
    { name: "Talent Network", href: "/talent" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Intermediary", href: "/intermediary" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link to="/">
              <img src={logo} alt="NextLynx.AI" className="h-44 md:h-52" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              A premier software development firm driving digital transformation
              through AI-powered software, marketing, education, and talent
              solutions.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="X"
              >
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Subsidiaries Column */}
          <div>
            <h4 className="text-secondary font-heading font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Subsidiaries
            </h4>
            <ul className="space-y-3">
              {subsidiaryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-secondary font-heading font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Synced Column */}
          <div>
            <h4 className="text-secondary font-heading font-bold text-sm tracking-[0.15em] uppercase mb-5">
              Stay Synced
            </h4>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Get the latest on our software solutions, talent network, and
              ecosystem updates.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 min-w-0 bg-white/10 border border-white/10 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold text-xs tracking-wider px-5 py-2.5 rounded-r-lg transition-colors uppercase">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs tracking-[0.1em] uppercase">
            &copy; 2026 NextLynx AI Ecosystem. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 text-xs tracking-[0.1em] uppercase hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/40 text-xs tracking-[0.1em] uppercase hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/40 text-xs tracking-[0.1em] uppercase hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Blue Accent Line */}
      <div className="h-1 bg-secondary"></div>
    </footer>
  );
};

export default Footer;
