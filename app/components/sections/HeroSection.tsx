"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tag */}
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#e6f2ff", color: "#344054" }}
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mr-2"
              style={{ backgroundColor: "#00447D", color: "#FFFFFF" }}>LATILA</span>
              Cloud mitigation and project management expert company
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "#1D2939" }}
          >
            Empowering growth through secure, smart and scalable technology
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            At Latila Consulting, we specialize in delivering cutting-edge IT
            solutions that drive business growth. From cloud migration to
            end-to-end project management, our team ensures your technology
            investments deliver measurable results.
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center text-white px-8 py-4 rounded-full  text-lg font-medium transition-colors"
              style={{ backgroundColor: "#00447D" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#003366")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#00447D")}
            >
              <span>Book a consultation</span>
             <img src="/assets/images/arrow.png" alt=""
              style={{ width: "16px", height: "16px", marginLeft: "8px"}}
              />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/images/consultation.png"
                alt="Professional team collaboration at Latila Consulting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
