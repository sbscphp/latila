"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeInLeft from "../animations/FadeInLeft";
import FadeInRight from "../animations/FadeInRight";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24" id="/">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <FadeInLeft delay={0.2}>
            <div>
              {/* Main Headline */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
                style={{ color: "#1D2939" }}
              >
                Your Strategic Partner in{" "}
                <span style={{ color: "#00447D" }}>Cloud &</span>
                <br />
                <span style={{ color: "#00447D" }}>IT Innovation</span>
              </h1>

              {/* Description */}
              <p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "#667085" }}
              >
                At Latila Consulting, we specialize in delivering cutting-edge
                IT solutions that drive business growth. From cloud migration to
                end-to-end project management, our team ensures your technology
                investments deliver measurable results.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
                  style={{ backgroundColor: "#00447D" }}
                >
                  <span>Contact Us</span>
                  <img
                    src="/assets/images/arrow.png"
                    alt=""
                    style={{ width: "16px", height: "16px", marginLeft: "8px" }}
                  />
                </Link>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Column - 3D Cube Graphic */}
          <FadeInRight delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <motion.img
                  src="/assets/images/hero.png"
                  alt="3D Cube representing innovation and technology"
                  className="w-full max-w-lg h-auto object-contain"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;