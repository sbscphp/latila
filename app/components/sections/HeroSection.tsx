"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero images
  const heroImages = [
    "/assets/images/hero.png",
    "/assets/images/star hero.png",
    "/assets/images/circle hero.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
              style={{ color: "#1D2939" }}
            >
              Your Strategic Partner in{" "}
              <span style={{ color: "#00447D" }}>Cloud </span>
              <span style={{ color: "#1D2939" }}>&</span>
              <br />
              <span style={{ color: "#00447D" }}>IT Innovation</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#667085" }}
            >
              At Latila Consulting, we specialize in delivering cutting-edge IT
              solutions that drive business growth. From cloud migration to
              end-to-end project management, our team ensures your technology
              investments deliver measurable results.
            </p>

            {/* CTA Button */}
            <Link
              href="/#contact"
              scroll={true}
              className="inline-flex px-6 py-2 rounded-full transition-all duration-200 items-center space-x-2 w-fit"
              style={{ backgroundColor: "#00447D", color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#60A5FA";
                const span = e.currentTarget.querySelector(
                  "span"
                ) as HTMLElement;
                if (span) span.style.color = "#1e3a8a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00447D";
                const span = e.currentTarget.querySelector(
                  "span"
                ) as HTMLElement;
                if (span) span.style.color = "white";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.backgroundColor = "#93C5FD";
                const span = e.currentTarget.querySelector(
                  "span"
                ) as HTMLElement;
                if (span) span.style.color = "#1e3a8a";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.backgroundColor = "#60A5FA";
                const span = e.currentTarget.querySelector(
                  "span"
                ) as HTMLElement;
                if (span) span.style.color = "#1e3a8a";
              }}
            >
              <span style={{ color: "white" }}>Contact Us</span>
              <img
                src="/assets/images/arrow.png"
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
            </Link>
          </div>

          {/* Right Column - Rotating Hero Images */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main rotating image */}
              <img
                src={heroImages[currentImageIndex]}
                alt={`Hero image ${
                  currentImageIndex + 1
                } representing innovation and technology`}
                className="w-full max-w-lg h-auto object-contain transition-opacity duration-1000 ease-in-out"
                key={currentImageIndex} // Forces re-render for smooth transition
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
