"use client";

import Link from "next/link";
import { useFetchData } from "@/app/hooks/useApis";

const ServicesSection = () => {
  const { data: apiResponse } = useFetchData("services?populate=*");

  console.log(apiResponse, "services from API");

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
            {/* <div className="mt-14">
              <Service service={services[2]} />
            </div> */}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">
            {/* First Row (0 and 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-start">
              <div className="flex flex-col">
                <img
                  src={apiResponse?.data?.[0]?.image?.url || "N/A"}
                  alt={apiResponse?.data?.[0]?.title || "Service"}
                />
                <p className="font-semibold text-3xl">
                  {apiResponse?.data?.[0]?.title || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
