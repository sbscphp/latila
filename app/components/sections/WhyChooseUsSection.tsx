"use client";

const WhyChooseUsSection = () => {
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

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom column ratios */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 lg:gap-10 items-start">
          {/* Left Column - Header Text */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Latila Consulting excels in delivering top-notch IT solutions,
              leveraging deep expertise to drive innovation and efficiency for
              businesses.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col lg:flex-row">
            {/* Left Features */}
            <div className="flex-1 space-y-6 md:space-y-8 lg:pr-8">
              {leftFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-4 bg-white rounded-2xl shadow-sm p-4 md:p-6"
                >
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
              ))}
            </div>

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
            <div className="flex-1 space-y-6 md:space-y-8 lg:pl-8">
              {rightFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-4 bg-white rounded-2xl shadow-sm p-4 md:p-6"
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
