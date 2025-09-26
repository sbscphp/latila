"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);

  const handleContactClick = () => {
    setIsContactActive(!isContactActive);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className=" rounded-lg flex items-center justify-center bg-white"
              style={{ width: "143px", height: "54px"}}>
                <img
                  src="/assets/images/content.png"
                  alt="Latila Consulting Logo"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:font-medium"
              style={{ color: "rgb(55 65 81)" }}
              onMouseEnter={(e) => (e.target.style.color = "#00447D")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:font-medium"
              style={{ color: "rgb(55 65 81)" }}
              onMouseEnter={(e) => (e.target.style.color = "#00447D")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:font-medium"
              style={{ color: "rgb(55 65 81)" }}
              onMouseEnter={(e) => (e.target.style.color = "#00447D")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
            >
              Services
            </Link>
            <Link
              href="/why-choose-us"
              className="text-gray-700 hover:font-medium"
              style={{ color: "rgb(55 65 81)" }}
              onMouseEnter={(e) => (e.target.style.color = "#00447D")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
            >
              Why Choose Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:font-medium"
              style={{ color: "rgb(55 65 81)" }}
              onMouseEnter={(e) => (e.target.style.color = "#00447D")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full transition-colors flex items-center space-x-2"
              style={{ 
                backgroundColor: isContactActive ? "#A1EBFF" : "#00447D",
                color: isContactActive ? "#00447D" : "white"
              }}
              onMouseEnter={(e) => {
                if (!isContactActive) {
                  e.target.style.backgroundColor = "#A1EBFF";
                  e.target.style.color = "#00447D";
                }
              }}
              onMouseLeave={(e) => {
                if (!isContactActive) {
                  e.target.style.backgroundColor = "#00447D";
                  e.target.style.color = "white";
                }
              }}
              onClick={handleContactClick}
            >
              <span>Contact Us</span>
              <img 
                src="/assets/images/arrow.png" 
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
              onMouseEnter={(e) => (e.target.style.color = "#00447D")}
              onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:font-medium"
                style={{ color: "rgb(55 65 81)" }}
                onMouseEnter={(e) => (e.target.style.color = "#00447D")}
                onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:font-medium"
                style={{ color: "rgb(55 65 81)" }}
                onMouseEnter={(e) => (e.target.style.color = "#00447D")}
                onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:font-medium"
                style={{ color: "rgb(55 65 81)" }}
                onMouseEnter={(e) => (e.target.style.color = "#00447D")}
                onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
              >
                Services
              </Link>
              <Link
                href="/why-choose-us"
                className="text-gray-700 hover:font-medium"
                style={{ color: "rgb(55 65 81)" }}
                onMouseEnter={(e) => (e.target.style.color = "#00447D")}
                onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
              >
                Why Choose Us
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:font-medium"
                style={{ color: "rgb(55 65 81)" }}
                onMouseEnter={(e) => (e.target.style.color = "#00447D")}
                onMouseLeave={(e) => (e.target.style.color = "rgb(55 65 81)")}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 rounded-lg transition-colors flex items-center space-x-2 w-fit"
                style={{ 
                  backgroundColor: isContactActive ? "#A1EBFF" : "#00447D",
                  // color: isContactActive ? "#00447D" : "white"
                }}
                onMouseEnter={(e) => {
                  if (!isContactActive) {
                    e.target.style.backgroundColor = "#A1EBFF";
                    // e.target.style.color = "#00447D";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isContactActive) {
                    e.target.style.backgroundColor = "#00447D";
                    // e.target.style.color = "white";
                  }
                }}
                onClick={handleContactClick}
              >
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;