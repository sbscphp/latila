"use client";

const MissionVisionSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
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

          {/* Right Content - Mission & Vision Cards */}
          <div className="order-1 lg:order-2 space-y-8 relative">
            {/* Mission Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden max-w-md">
                {/* Blue triangle in top-right corner */}
                <div className="absolute top-0 right-0">
                  <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-blue-900"></div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                  <img src="/assets/images/FRAME2.png" alt="" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To empower businesses with innovative, secure, and efficient IT solutions that enable sustainable growth and operational excellence.
                </p>
              </div>
            </div>

            
            <div className="relative lg:ml-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden max-w-md">
               
                <div className="absolute top-0 right-0">
                  <div className="w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-blue-900"></div>
                </div>

          
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                  <img src="/assets/images/FRAME4.png" alt="" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To be the most trusted partner for cloud-driven transformation and digital innovation in Africa and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;