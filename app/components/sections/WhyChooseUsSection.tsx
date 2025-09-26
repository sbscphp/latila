"use client";

import Skeleton from "react-loading-skeleton";
import FadeInLeft from "../animations/FadeInLeft";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import { useFetchData } from "@/app/hooks/useApis";
const leftFeatures = [
  {
    img: "/assets/images/FRAME7.png",
    title: "Expertise Across Regions",
    description:
      "Experience delivering successful transformations in North America, Africa, and beyond",
  },
  {
    img: "/assets/images/FRAME7.png",
    title: "Security at the Core",
    description:
      "Every solution is designed to meet strict compliance and regulatory standards.",
  },
  {
    img: "/assets/images/FRAME7.png",
    title: "Holistic Approach",
    description:
      "From strategy and governance to execution and post-migration support.",
  },
];

const rightFeatures = [
  {
    img: "/assets/images/FRAME7.png",
    title: "Adaptability",
    description:
      "Skilled in multiple delivery methodologies (Agile, Waterfall, Hybrid), tailored to client needs",
  },
  {
    img: "/assets/images/FRAME7.png",
    title: "Client-Centric Partnership",
    description:
      "We align technology with your business objectives, not the other way around.",
  },
];

const WhyChooseUsSection = () => {
  const { data: whyChooseUs, isLoading } = useFetchData(
    "why-choose-uses?populate=*"
  );

  console.log(whyChooseUs);
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Custom column ratios */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 lg:gap-10 items-start">
          {/* Left Column - Header Text */}
          <FadeInLeft delay={0.2}>
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                Why Choose Us
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Latila Consulting excels in delivering top-notch IT solutions,
                leveraging deep expertise to drive innovation and efficiency for
                businesses.
              </p>
            </div>
          </FadeInLeft>

          {/* Right Column */}
          <FadeInLeft delay={0.4}>
            <div className="relative flex flex-col lg:flex-row">
              {/* Left Features */}
              {isLoading ? (
                <div className="flex-1 space-y-6 md:space-y-8 lg:pr-8">
                  <Skeleton height={150} width={300} borderRadius={10} />
                  <Skeleton height={150} width={300} borderRadius={10} />
                  <Skeleton height={150} width={300} borderRadius={10} />
                </div>
              ) : (
                <StaggerContainer className="flex-1 space-y-6 md:space-y-8 lg:pr-8">
                  {whyChooseUs?.data?.map((feature: any) => (
                    <StaggerItem key={feature.title} direction="up">
                      <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-sm p-4 md:p-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 flex items-center justify-center">
                            <img
                              src={feature?.icon?.url}
                              alt={feature?.title}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900">
                            {feature?.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {feature?.desc}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}

              {/* Divider */}
              <div
                className="hidden lg:block w-2 rounded-full mx-4"
                style={{ backgroundColor: "#4EB2FF" }}
              ></div>

              {/* Horizontal divider on mobile */}
              <div
                className="lg:hidden my-6 h-1 w-full rounded-full"
                style={{ backgroundColor: "#4EB2FF" }}
              ></div>

              {/* Right Features */}
              <StaggerContainer className="flex-1 space-y-6 md:space-y-8 lg:pr-8">
                {rightFeatures.map((feature) => (
                  <StaggerItem key={feature.title} direction="up">
                    <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-sm p-4 md:p-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
