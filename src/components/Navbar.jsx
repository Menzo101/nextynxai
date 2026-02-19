import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mynewfooterimage.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Subsidiaries", href: "/intermediary" },
    { name: "Marketing", href: "/marketing" },
    { name: "Academy", href: "/academy" },
    { name: "Talent", href: "/talent" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="NextLynx.AI" className="h-44 md:h-48 lg:h-52" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block text-gray-300 hover:text-white transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/client-portal"
              className="block text-secondary hover:text-secondary/80 transition-colors text-sm pt-3 border-t border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Portal
            </Link>
            <Link
              to="/contact"
              className="block bg-secondary hover:bg-secondary/90 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors text-center mt-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
