"use client";

import Link from "next/link";
import { useState } from "react";
// import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const pathname = usePathname();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#why-choose-us", label: "Why Choose Us" },
    // { href: "/#blog", label: "Blog" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div
                className="rounded-lg flex items-center justify-center bg-white"
                style={{ width: "143px", height: "54px" }}
              >
                <img
                  src="/assets/images/content.png"
                  alt="Latila Consulting Logo"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll={true}
                // className={`${
                //   pathname === link.href.split("#")[0] // highlight Home page
                //     ? "text-blue-600 font-semibold"
                //     : "text-gray-700 hover:font-medium"
                // }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/#contact"
              scroll={true}
              className="text-white px-6 py-2 rounded-full transition-colors flex items-center space-x-2"
              style={{ backgroundColor: "#00447D" }}
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
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={true}
                  onClick={() => setIsMenuOpen(false)} // close menu after click
                  // className={`${
                  //   pathname === link.href.split("#")[0]
                  //     ? "text-blue-600 font-semibold"
                  //     : "text-gray-700 hover:font-medium"
                  // }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                scroll={true}
                className="text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2 w-fit"
                style={{ backgroundColor: "#00447D" }}
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
