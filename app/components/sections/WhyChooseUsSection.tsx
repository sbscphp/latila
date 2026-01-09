"use client";

import FadeInLeft from "../animations/FadeInLeft";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
// import { useFetchData } from "@/app/hooks/useApis";
import { useEffect, useState } from "react";
import Image from "next/image";
import { diamondIcon } from "@/public/assets/assets";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

// Static fallback data matching the design
const STATIC_FALLBACK_FEATURES: FeatureItem[] = [
  {
    title: "Expertise Across Regions",
    description:
      "Experience delivering successful transformations in North America, Africa, and beyond",
    icon: diamondIcon.src, // Placeholder - will be replaced by API data
  },
  {
    title: "Adaptability",
    description:
      "Skilled in multiple delivery methodologies (Agile, Waterfall, Hybrid), tailored to client needs",
    icon: diamondIcon.src,
  },
  {
    title: "Security at the Core",
    description:
      "Every solution is designed to meet strict compliance and regulatory standards.",
    icon: diamondIcon.src,
  },
  {
    title: "Client-Centric Partnership",
    description:
      "We align technology with your business objectives, not the other way around.",
    icon: diamondIcon.src,
  },
  {
    title: "Holistic Approach",
    description:
      "From strategy and governance to execution and post-migration support.",
    icon: diamondIcon.src,
  },
];

// Reusable Feature Card Component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
  <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-sm p-4 md:p-6 w-full">
    <div className="flex-shrink-0">
      <Image
        src={feature.icon}
        alt={feature.title}
        className="w-12 h-12 object-contain"
        width={32}
        height={32}
      />
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
);

const WhyChooseUsSection = () => {
  const [features, setFeatures] = useState<FeatureItem[]>(
    STATIC_FALLBACK_FEATURES
  );

  // const { data: whyChooseUs } = useFetchData("why-choose-uses1?populate=*");

  useEffect(() => {
    setFeatures(STATIC_FALLBACK_FEATURES);
  }, []);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_60%] gap-6 lg:gap-10 items-start">
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
            <div className="relative flex flex-col items-center w-full">
              {/* Top 4 cards in a 2-column grid */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                {features.slice(0, 4).map((feature, index) => (
                  <StaggerItem key={`${feature.title}-${index}`} direction="up">
                    <FeatureCard feature={feature} />
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Centered last card */}
              {features.length > 4 && (
                <div className="mt-8 flex justify-center w-full">
                  <StaggerItem direction="up">
                    <div className="flex justify-center w-full">
                      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
                        <FeatureCard feature={features[4]} />
                      </div>
                    </div>
                  </StaggerItem>
                </div>
              )}
            </div>
          </FadeInLeft>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
