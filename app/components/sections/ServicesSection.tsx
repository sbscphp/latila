"use client";

import Link from "next/link";
import { useFetchData } from "@/app/hooks/useApis";

const ServicesSection = () => {
  const { data: apiResponse, isLoading } = useFetchData("services?populate=*");

  console.log(apiResponse, "services from API");

  const services = apiResponse?.data || [];

  // Loading skeleton component
  const ServiceSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 rounded-xl mb-4"></div>
      <div className="bg-gray-300 h-6 rounded w-3/4"></div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 lg:py-20 overflow-x-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-x-hidden">
          {/* Left Content */}
          <div className="lg:col-span-4 min-w-0">
            <div className="space-y-6 min-w-0">
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
            </div>

            {/* Third service card on the left */}
            {isLoading ? (
              <div className="mt-12">
                <ServiceSkeleton />
              </div>
            ) : (
              services[2] && (
                <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-4 mt-18 min-w-0 card-component">
                  <div className="w-full overflow-hidden rounded-xl card-image">
                    <img
                      src={services[2]?.image?.url || "/placeholder.jpg"}
                      alt={services[2]?.title || "Service"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900">
                    {services[2]?.title || "N/A"}
                  </h3>
                  <p className="text-gray-600 text-sm desc">
                    {services[2]?.desc || "N/A"}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6 min-w-0">
            {/* First row: 2 cards (index 0 and 1) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
              {isLoading ? (
                <>
                  <ServiceSkeleton />
                  <ServiceSkeleton />
                </>
              ) : (
                services.slice(0, 2).map((service: any) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-4 min-w-0 card-component"
                  >
                    <div className="w-full overflow-hidden rounded-xl card-image">
                      <img
                        src={service?.image?.url || "/placeholder.jpg"}
                        alt={service?.title || "N/A"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900">
                      {service?.title || "N/A"}
                    </h3>
                    <p className="text-gray-600 text-sm desc">
                      {service?.desc  || "N/A"}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Second row: 2 cards (index 3 and 4) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
              {isLoading ? (
                <>
                  <ServiceSkeleton />
                  <ServiceSkeleton />
                </>
              ) : (
                services.slice(3, 5).map((service: any) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl shadow-md p-4 flex flex-col space-y-4 min-w-0 card-component"
                  >
                    <div className="w-full overflow-hidden rounded-xl card-image">
                      <img
                        src={service?.image?.url || "/placeholder.jpg"}
                        alt={service?.title || "Service"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-gray-900">
                      {service?.title || "N/A"}
                    </h3>
                    <p className="text-gray-600 text-sm desc">
                      {service?.desc || "N/A"}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;