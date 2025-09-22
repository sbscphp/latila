"use client";

import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <h2
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#00447D" }}
              >
                ABOUT US
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Empowering Digital Transformation
              </h3>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2018, Latila Consulting began as a small team of
              technology enthusiasts dedicated to helping businesses embrace
              digital transformation. Over the years, we have expanded our
              expertise to include cloud migration, IT ventures, and
              comprehensive project management.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center text-white px-6 py-3 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: "#00447D" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#003366")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#00447D")
                }
              >
                <span>More About Us</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-50 rounded-2xl p-12 w-full max-w-md">
              <div className="flex items-center justify-center space-x-4">
                {/* Logo Icon */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white shadow-md">
                  <img
                    src="/assets/images/rectangles.png"
                    alt="Latila Consulting Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Logo Text */}
                <div className="flex flex-col">
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "#00447D" }}
                  >
                    LATILA
                  </span>
                  <span className="text-lg" style={{ color: "#00447D" }}>
                    CONSULTING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
