"use client";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#00447D" }}
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-40"
        style={{
          backgroundImage: "url('/assets/images/about logo.png')",
        }}
      ></div>

      {/* Content */}
 <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-left pt-8 lg:pt-16 pl-4 lg:pl-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
