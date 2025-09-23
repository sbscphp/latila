"use client";

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
 <div className="mb-12 flex items-center justify-between">
          <h2
            className="text-lg font-bold uppercase tracking-wider"
            style={{ color: "#00447D" }}
          >
            MISSION AND VISION
          </h2>
                 <div className="flex space-x-0.5">
            <div className="w-6 h-2 rounded-lg" style={{ backgroundColor: "#00447D"}}></div>
            <div className="w-2 h-2 rounded-lg" style={{ backgroundColor: "#4EB2FF"}}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Team Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/images/mission.png"
                alt="Team collaboration at Latila Consulting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content - Mission and Vision Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Mission Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative shadow-lg">
              {/* Decorative Triangle */}
              <div
                className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent rounded-tr-2xl"
                style={{ borderTopColor: "#00447D", borderTopWidth: "60px" }}
              ></div>

              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e6f2ff" }}
                >
                  <img src="/assets/images/FRAME2.png" alt="" />
                </div>
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#00447D" }}
              >
                Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative, secure, and efficient IT
                solutions that enable sustainable growth and operational
                excellence.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 relative shadow-lg">
              {/* Decorative Triangle */}
              <div
                className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent rounded-tr-2xl"
                style={{ borderTopColor: "#00447D", borderTopWidth: "60px" }}
              ></div>

              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e6f2ff" }}
                >
                <img src="/assets/images/FRAME4.png" alt="" />
                </div>
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#00447D" }}
              >
                Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted partner for cloud-driven transformation
                and digital innovation in Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
