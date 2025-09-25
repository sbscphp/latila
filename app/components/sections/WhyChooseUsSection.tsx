"use client";

const WhyChooseUsSection = () => {
  const features = [
    {
      img: "/assets/images/FRAME7.png",
      title: "Holistic Approach",
      description:
        "From strategy and governance to execution and post-migration support.",
    },
    {
      img: "/assets/images/FRAME3.png", 
      title: "Security at the Core",
      description:
        "Every solution is designed to meet strict compliance and regulatory standards.",
    },
    {
      img: "/assets/images/FRAME7.png", 
      title: "Client-Centric Partnership",
      description:
        "We align technology with your business objectives, not the other way around.",
    },
    {
      img: "/assets/images/FRAME2.png",
      title: "Expertise Across Regions",
      description:
        "Experience delivering successful transformations in North America, Africa, and beyond",
    },
    {
      img: "/assets/images/FRAME4.png", 
      title: "Adaptability",
      description:
        "Skilled in multiple delivery methodologies (Agile, Waterfall, Hybrid), tailored to client needs",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <h2
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: "#00447D" }}
          >
            WHY CHOOSE US
          </h2>
         <div className="flex space-x-0.5">
            <div className="w-6 h-2 rounded-lg" style={{ backgroundColor: "#00447D"}}></div>
            <div className="w-2 h-2 rounded-lg" style={{ backgroundColor: "#4EB2FF"}}></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row - 3 items */}
          {features.slice(0, 3).map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-6 shadow-sm relative overflow-hidden"
              >
                {/* Blue Triangle */}
                <div
                  className="absolute top-0 right-0 w-0 h-0"
                  style={{ 
                    borderLeft: "50px solid transparent",
                    borderTop: "50px solid #00447D"
                  }}
                ></div>

                <div className="mb-4">
                  
                    <img 
                      src={feature.img} 
                      alt={feature.title}
                      className="w-12 h-12 object-contain"
                    />
                </div>

                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <h3 className="text-base font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row - 2 items centered */}
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {features.slice(3, 5).map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 shadow-sm relative overflow-hidden"
            >
              {/* Blue Triangle */}
              <div
                className="absolute top-0 right-0 w-0 h-0"
                style={{ 
                  borderLeft: "50px solid transparent",
                  borderTop: "50px solid #00447D"
                }}
              ></div>

           
              <div className="mb-4">
                  <img 
                    src={feature.img} 
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
              </div>

              {/* Content */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-base font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;