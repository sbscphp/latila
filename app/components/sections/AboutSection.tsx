"use client";

import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 flex items-center justify-between">
          <h2
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: "#00447D" }}
          >
            ABOUT US
          </h2>
         <div className="flex space-x-0.5">
            <div className="w-6 h-2 rounded-lg" style={{ backgroundColor: "#00447D"}}></div>
            <div className="w-2 h-2 rounded-lg" style={{ backgroundColor: "#4EB2FF"}}></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
           <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Empowering Digital Transformation
            </h3>
            

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
                className="inline-flex items-center text-white px-6 py-3 rounded-full font-medium transition-colors"
                style={{ backgroundColor: "#00447D" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#003366")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#00447D")
                }
              >
                <span>More About Us</span>
               <img src="/assets/images/arrow.png" alt=""
              style={{ width: "16px", height: "16px", marginLeft: "8px"}}
              />
              </Link>
            </div>
          </div>

          {/* Right Content - Logo */}
<div className="flex justify-center lg:justify-end">
      <div className="bg-gray-100 rounded-2xl p-16 w-full max-w-lg">
        <div className="flex items-center justify-center">
          {/* Use actual logo image */}
          <img
            src="/assets/images/LATILA CONSULTING 2.png"
            alt="Latila Consulting Logo"
            className="w-80 h-32 object-contain"
          />
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
