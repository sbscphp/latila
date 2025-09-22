"use client";

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: "#00447D" }}
          >
            MISSION AND VISION
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Team Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/images/Frame 4 (1).png"
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
                  <svg
                    className="w-6 h-6"
                    style={{ color: "#00447D" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
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
                  <svg
                    className="w-6 h-6"
                    style={{ color: "#00447D" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
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
