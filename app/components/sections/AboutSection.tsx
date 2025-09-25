"use client";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        backgroundColor: "#00447D",
        backgroundImage: "url('/assets/images/about logo.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "25% 60%",
      }}
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Team Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/assets/images/mission.png"
                alt="Latila Consulting team collaboration"
                className="w-full max-w-lg h-auto object-cover"
              />
            </div>
          </div>
          {/* Right Content - Text */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              About Latila Consulting
            </h3>

            {/* Description */}
            <p className="text-lg text-white leading-relaxed opacity-90">
              Latila Consulting is a growing IT project management consulting
              firm committed to excellence. We take pride in our ability to
              identify and eliminate business bottlenecks, streamline workflows,
              and implement continuous improvement practices through technology.
              Our specialization lies in delivering high-quality solutions that
              enhance efficiency and add value for our clients.
            </p>
            {/* CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors"
                style={{ backgroundColor: "#A1EBFF", color: "#00447D" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#A1EBFF")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#A1EBFF")
                }
              >
                <span>More About Us</span>
                <img
                  src="/assets/images/arrow-up-right.png"
                  alt=""
                  style={{ width: "16px", height: "16px", marginLeft: "8px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
