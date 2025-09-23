"use client";

import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Cloud Advisory & Migration",
      image: "/assets/images/services1.png",
    },
    {
      title: "Cybersecurity & Compliance",
      image: "/assets/images/services2.png",
    },
    {
      title: "Enterprise Application Modernization",
      image: "/assets/images/services3.png",
    },
    {
      title: "IT Consulting & Project Management",
      image: "/assets/images/services4.png",
    },
    {
      title: "Management Services",
      image: "/assets/images/services5.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <h2
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: "#00447D" }}
          >
            SERVICES
          </h2>
                 <div className="flex space-x-0.5">
            <div className="w-6 h-2 rounded-lg" style={{ backgroundColor: "#00447D"}}></div>
            <div className="w-2 h-2 rounded-lg" style={{ backgroundColor: "#4EB2FF"}}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What we offer
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Latila Consulting excels in delivering top-notch IT solutions,
              leveraging deep expertise to drive innovation and efficiency for
              businesses.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                style={{ backgroundColor: "#00447D" }}
              >
                <span>Contact Us</span>
              <img src="/assets/images/arrow.png" alt=""
              style={{ width: "16px", height: "16px", marginLeft: "8px"}}
              />
              </Link>
            </div>

            {/* Third Service Card - Under Contact Button */}
            <div className="mt-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-gray-900 text-left leading-tight">
                    {services[2].title}
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="lg:col-span-8">
            {/* First Row - 2 large cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {services.slice(0, 2).map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-900 text-left leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 2 smaller cards (4th and 5th services) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.slice(3, 5).map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-900 text-left leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;