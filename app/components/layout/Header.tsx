"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useFetchData } from "@/app/hooks/useApis";
import Skeleton from "react-loading-skeleton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const { data: logo, isPending } = useFetchData("logo-lights?populate=*");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set active section based on pathname and hash
  useEffect(() => {
    if (pathname === "/about") {
      setActiveSection("about");
      return;
    }

    if (pathname === "/") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("home");
      }
    }
  }, [pathname]);

  // Handle hash changes (when clicking anchor links)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home", section: "home" },
    { href: "/#about", label: "About Us", section: "about" },
    { href: "/#services", label: "Services", section: "services" },
    { href: "/#why-choose-us", label: "Why Choose Us", section: "why-choose-us" },
  ];

  const isLinkActive = (section: string) => {
    return activeSection === section;
  };

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div
                className="rounded-lg flex items-center justify-center bg-white"
                style={{ width: "143px", height: "54px" }}
              >
                {!isMounted || isPending ? (
                  <Skeleton height={54} width={143} />
                ) : (
                  logo?.data?.[0]?.href?.[0]?.url && (
                    <Image
                      src={logo?.data?.[0]?.href?.[0]?.url}
                      alt={logo?.data?.[0]?.href?.[0]?.alt || "Latila Consulting Logo"}
                      width={143}
                      height={54}
                    />
                  )
                )}
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
                onClick={() => handleLinkClick(link.section)}
                className={`transition-all duration-200 hover:text-[#00447D] ${
                  isLinkActive(link.section)
                    ? "text-[#00447D] font-semibold"
                    : "text-gray-700"
                }`}
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
              onClick={() => handleLinkClick("contact")}
              className="px-6 py-2 rounded-full transition-all duration-200 flex items-center space-x-2"
              style={{ backgroundColor: "#00447D", color: "white" }}
            >
              <span style={{ color: "white" }}>Contact Us</span>
              <Image
                src="/assets/images/arrow.png"
                alt="arrow icon"
                width={16}
                height={16}
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
                  onClick={() => handleLinkClick(link.section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isLinkActive(link.section)
                      ? "bg-[#00447D] text-white"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                scroll={true}
                onClick={() => handleLinkClick("contact")}
                className="px-6 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 w-fit"
                style={{ backgroundColor: "#00447D", color: "white" }}
              >
                <span style={{ color: "white" }}>Contact Us</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;