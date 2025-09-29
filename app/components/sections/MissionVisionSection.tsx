"use client";

import Skeleton from "react-loading-skeleton";
import FadeInLeft from "../animations/FadeInLeft";
import FadeInRight from "../animations/FadeInRight";
import StaggerContainer from "../animations/StaggerContainer";
import { useFetchData } from "@/app/hooks/useApis";
import StaggerItem from "../animations/StaggerItem";

const MissionVisionSection = () => {

  const { data: missions, isLoading: isMissionsLoading } = useFetchData(
        "missions?populate=*"
      );
    
      console.log(missions, "missions");

  const { data: visions, isLoading: isVisionsLoading } = useFetchData(
        "visions?populate=*"
      );
    
      console.log(visions, "visions");
      
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <FadeInLeft delay={0.2}>
            <div className="order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <div className="w-full h-[400px] lg:h-[500px] bg-gray-300 flex items-center justify-center">
                  <img
                    src="/assets/images/mission.png"
                    alt="Team collaboration at Latila Consulting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Content - Mission & Vision Cards */}
          <FadeInRight delay={0.4}>
            <div className="order-1 lg:order-2 space-y-8 relative">
              {/* Check if either is loading */}
              {isMissionsLoading || isVisionsLoading ? (
                <div className="flex-1 space-y-6 md:space-y-8 lg:pr-8">
                 <Skeleton height={150} width={300} borderRadius={10} />
                  <div className="animate-pulse space-y-4">
                    <div className="h-40 bg-gray-300 rounded-2xl"></div>
                    <div className="h-40 bg-gray-300 rounded-2xl"></div>
                  </div>
                </div>
              ) : (
                <StaggerContainer className="space-y-8">
                  {/* Mission Cards */}
                  {missions?.data?.map((mission: any) => (
                    <StaggerItem direction="up" key={mission.id}>
                      <div className="relative">
                        <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden max-w-md">
                          {/* Blue triangle in top-right corner */}
                          <div className="absolute top-0 right-0">
                            <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-blue-900"></div>
                          </div>

                          {/* Icon */}
                          <div className="mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                              <img 
                                src={mission?.icon?.url || "/assets/images/default-icon.png"} 
                                alt={mission?.title || "icon"}
                              />
                            </div>
                          </div>

                          <h3 className="text-xl font-semibold mb-3 text-gray-900">
                            {mission?.title || "N/A"}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {mission?.detail || "N/A"}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}

                  {/* Vision Cards */}
                  {visions?.data?.map((vision: any) => (
                    <StaggerItem direction="up" key={vision.id}>
                      <div className="relative lg:ml-16">
                        <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden max-w-md">
                          <div className="absolute top-0 right-0">
                            <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-blue-900"></div>
                          </div>

                          <div className="mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                              <img 
                                src={vision?.icon?.url || "/assets/images/FRAME4.png"} 
                                alt={vision?.title || "icon"}
                              />
                            </div>
                          </div>

                          <h3 className="text-xl font-semibold mb-3 text-gray-900">
                            {vision?.title || "N/A"}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {vision?.detail || "N/A"}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;