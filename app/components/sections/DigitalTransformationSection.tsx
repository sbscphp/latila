"use client";

import FadeInLeft from "../animations/FadeInLeft";
import FadeInRight from "../animations/FadeInRight";

interface AboutCard {
  image?: {
    url?: string;
  };
  name?: string;
  position?: string;
}

interface DigitalTransformationSectionProps {
  aboutCards: {
    data?: AboutCard[];
  };
}

const DigitalTransformationSection = ({ aboutCards }: DigitalTransformationSectionProps) => {

  
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <FadeInLeft delay={0.2}>
            <div className="space-y-6 lg:pr-8">
              {/* Main Heading */}
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight">
                <span className="text-gray-900">Empowering growth</span>
                <br />
                <span className="text-gray-900">through </span>
                <span className="text-cyan-400">secure</span>
                <span className="text-gray-900">, </span>
                <span className="text-cyan-400">smart</span>
                <span className="text-gray-900"> and</span>
                <br />
                <span className="text-cyan-400">scalable</span>
                <span className="text-gray-900"> technology</span>
                <span className="text-cyan-400">.</span>
              </h1>

              {/* Description Text */}
              <div className="space-y-4 pt-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are an IT consulting and project management firm helping
                  organizations build secure, scalable, and efficient technology
                  foundations. We specialize in guiding clients through complex
                  technology transformations — from cloud adoption and
                  cybersecurity to project management and enterprise
                  modernization. With experience serving financial institutions,
                  global enterprises, and growing businesses across Africa and
                  North America, we combine technical expertise with business
                  insight to deliver lasting impact.
                </p>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Content - CEO Profile */}
          <FadeInRight delay={0.4}>
            <div className="flex justify-center lg:justify-end">
              <div className=" rounded-3xl p-8 max-w-md w-full">
                <div className="text-center space-y-6">
                  {/* CEO Image */}
                  <div className="relative">
                    <div className="w-80 h-50 rounded-2xl mx-auto overflow-hidden">
                      <img
                        src={aboutCards?.data?.[0]?.image?.url || "N/A"}
                        alt={aboutCards?.data?.[0]?.name || "CEO"}
                      />
                    </div>
                  </div>

                  {/* CEO Info */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {aboutCards?.data?.[0]?.name || "N/A"}
                    </h3>
                    <p className="text-gray-600 text-lg">
                     {aboutCards?.data?.[0]?.position || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSection;
