"use client";

import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Cloud Advisory & Migration",
      image: (
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src="/assets/images/Frame 7.png"
            alt="Cloud Advisory & Migration"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Cybersecurity & Compliance",
      image: (
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src="/assets/images/Frame 7 (1).png"
            alt="Cybersecurity & Compliance"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Enterprise Application Modernization",
      image: (
        <div className="w-full h-48 rounded-xl overflow-hidden">
          <img
            src="/assets/images/Frame 7 (2).png"
            alt="Enterprise Application Modernization"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "IT Consulting & Project Management",
      image: (
        <div
          className="w-full h-48 rounded-xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #e6f2ff 0%, #cce6ff 100%)",
          }}
        >
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#00447D" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <p className="font-medium" style={{ color: "#00447D" }}>
              Management
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Management Services",
      image: (
        <div
          className="w-full h-48 rounded-xl flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #e6f2ff 0%, #cce6ff 100%)",
          }}
        >
          <div className="text-center">
            <div
              className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: "#00447D" }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="font-medium" style={{ color: "#00447D" }}>
              Services
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="space-y-4">
              <h2
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#00447D" }}
              >
                SERVICES
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                What we offer
              </h3>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Latila Consulting excels in delivering top-notch IT solutions,
              leveraging deep expertise to drive innovation and efficiency for
              businesses.
            </p>

            {/* CTA Button */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center text-white px-6 py-3 rounded-lg font-medium transition-colors"
                style={{ backgroundColor: "#00447D" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#003366")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#00447D")
                }
              >
                <span>Contact Us</span>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {service.image}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 text-center">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
