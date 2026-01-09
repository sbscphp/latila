"use client";

import Link from "next/link";
// import { useFetchData } from "@/app/hooks/useApis";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  serviceOne,
  serviceTwo,
  serviceThree,
  serviceFour,
  serviceFive,
} from "@/public/assets/assets";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: {
    url: string;
  };
}

// Static fallback data matching the design
const STATIC_FALLBACK_SERVICES: ServiceItem[] = [
  {
    id: "static-1",
    title: "Cloud Advisory & Migration",
    desc: "Expert guidance and seamless migration to cloud platforms, ensuring scalability, security, and cost optimization for your business infrastructure.",
    image: {
      url: serviceOne.src,
    },
  },
  {
    id: "static-2",
    title: "Cybersecurity & Compliance",
    desc: "Comprehensive security solutions and compliance frameworks to protect your digital assets and meet regulatory requirements.",
    image: {
      url: serviceTwo.src,
    },
  },
  {
    id: "static-3",
    title: "Enterprise Application Modernization",
    desc: "Transform legacy systems into modern, agile applications that drive innovation and enhance business performance.",
    image: {
      url: serviceThree.src,
    },
  },
  {
    id: "static-4",
    title: "IT Consulting & Project Management",
    desc: "Strategic IT consulting and expert project management to ensure successful delivery of complex technology initiatives.",
    image: {
      url: serviceFour.src,
    },
  },
  {
    id: "static-5",
    title: "Management Services",
    desc: "End-to-end IT management services to optimize operations, reduce costs, and ensure continuous improvement of your technology landscape.",
    image: {
      url: serviceFive.src,
    },
  },
];

// Service Card Component
const ServiceCard = ({ service }: { service: ServiceItem }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-4 min-w-0 card-component cursor-pointer">
    <div className="w-full overflow-hidden rounded-xl card-image">
      <Image
        src={service?.image?.url || "/placeholder.jpg"}
        alt={service?.title || "Service"}
        className="w-full h-full object-cover"
        width={500}
        height={500}
      />
    </div>
    <h3 className=" text-lg text-gray-800 ">{service?.title || "N/A"}</h3>
    <p className="text-gray-600 text-sm desc">{service?.desc || "N/A"}</p>
  </div>
);

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceItem[]>(
    STATIC_FALLBACK_SERVICES
  );

  // const { data: apiResponse } = useFetchData("services1?populate=*");

  useEffect(() => {
    setServices(STATIC_FALLBACK_SERVICES);
  }, []);

  return (
    <section
      className="bg-gray-50 py-16 lg:py-20 overflow-x-hidden"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-x-hidden  py-4">
          {/* Left Content */}
          <div className="lg:col-span-4 min-w-0  flex flex-col justify-between">
            <div className="space-y-6 min-w-0 ">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                What We Offer
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Latila Consulting excels in delivering top-notch IT solutions,
                leveraging deep expertise to drive innovation and efficiency for
                businesses.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                style={{ backgroundColor: "#00447D" }}
              >
                <span>Contact Us</span>
                <Image
                  src="/assets/images/arrow.png"
                  alt=""
                  style={{ marginLeft: "8px" }}
                  width={16}
                  height={16}
                />
              </Link>
            </div>

            {/* Third service card on the left */}
            {services[2] && (
              <div className="">
                <ServiceCard service={services[2]} />
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6 min-w-0">
            {/* First row: 2 cards (index 0 and 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
              {services.slice(0, 2).map((service: ServiceItem) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            {/* Second row: 2 cards (index 3 and 4) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
              {services.slice(3, 5).map((service: ServiceItem) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
