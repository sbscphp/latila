"use client";

import Skeleton from "react-loading-skeleton";
import FadeInLeft from "../animations/FadeInLeft";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import { useFetchData } from "@/app/hooks/useApis";
import { useEffect, useState } from "react";

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const WhyChooseUsSection = () => {
  const [features, setFeatures] = useState<FeatureItem[]>([]);

  const { data: whyChooseUs, isLoading } = useFetchData(
    "why-choose-uses?populate=*"
  );

  useEffect(() => {
    if (!whyChooseUs?.data) return;

    const mappedData: FeatureItem[] = whyChooseUs.data.map(
      (item: { title: string; desc: string; icon: { url: string } }) => ({
        title: item.title,
        description: item.desc,
        icon: item.icon?.url,
      })
    );

    // Reorder: last card becomes first, others shift down
    if (mappedData.length > 1) {
      const lastItem = mappedData.pop(); // remove the last one
      mappedData.unshift(lastItem!); // add it to the front
    }

    setFeatures(mappedData);
  }, [whyChooseUs?.data]);

  // Reusable Feature Card Component
  const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
    <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-sm p-4 md:p-6 w-full">
      <div className="flex-shrink-0">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-12 h-12 object-contain"
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
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                  <Skeleton height={150} borderRadius={10} />
                  <Skeleton height={150} borderRadius={10} />
                  <Skeleton height={150} borderRadius={10} />
                  <Skeleton height={150} borderRadius={10} />
                </div>
              ) : (
                <>
                  {/* Top 4 cards in a 2-column grid */}
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                    {features.slice(0, 4).map((feature) => (
                      <StaggerItem key={feature.title} direction="up">
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
                </>
              )}
            </div>
          </FadeInLeft>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
