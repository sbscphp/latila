"use client";

import { useState } from "react";
import Link from "next/link";

type IService = {
  id: number;
  description: string;
  image: string;
  title: string;
};

const Service: React.FC<{
  service: IService;
}> = ({ service }) => {
  return (
    <div
      key={service.id}
      className="
                  bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer
                  card-component p-5 flex flex-col h-full
                  "
    >
      <img
        src={service.image}
        alt={service.title}
        className="
                    w-full object-cover
                    card-image rounded-[22px]
                    "
      />

      <div className="p-4">
        <h4 className="text-2xl font-semibold text-gray-900 text-left leading-tight">
          {service.title}
        </h4>
        {
          <p
            className="
                      text-gray-600 text-sm mt-2
                      desc
                      "
          >
            {service.description}
          </p>
        }
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services: IService[] = [
    {
      id: 0,
      title: "Cloud Advisory & Migration",
      image: "/assets/images/services1.png",
      description:
        "Strategy, readiness assessments, and migration across AWS, Azure, GCP, and hybrid environments.",
    },
    {
      id: 1,
      title: "Cybersecurity & Compliance",
      image: "/assets/images/services2.png",
      description:
        "Protecting data and operations with security frameworks mapped NDPR, GDPR, PCI-DSS, SOC2 and ISO 27001",
    },
    {
      id: 2,
      title: "Enterprise Application Modernization",
      image: "/assets/images/services3.png",
      description:
        "Enhancing legacy systems and enabling cloud-native applications.",
    },
    {
      id: 3,
      title: "IT Consulting & Project Management",
      image: "/assets/images/services4.png",
      description:
        "Expertise in Agile, Waterfall, and Hybrid methodologies to ",
    },
    {
      id: 4,
      title: "Management Services",
      image: "/assets/images/services5.png",
      description:
        "End-to-end managed IT services for continuous improvement and operational excellence.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);
  const handleToggle = (id: number) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-gray-50 py-16 lg:py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-6">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              What We Offer
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Latila Consulting excels in delivering top-notch IT solutions,
              leveraging deep expertise to drive innovation and efficiency for
              businesses.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
              style={{ backgroundColor: "#00447D" }}
            >
              <span>Contact Us</span>
              <img
                src="/assets/images/arrow.png"
                alt=""
                style={{ width: "16px", height: "16px", marginLeft: "8px" }}
              />
            </Link>

            {/* Third Service Card on the left – show ONLY here */}
            <div className="mt-14">
              <Service service={services[2]} />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            {/* First Row (0 and 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-start">
              {services.map((service) =>
                service.id === 2 ? null : (
                  <Service service={service} key={service.id} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;