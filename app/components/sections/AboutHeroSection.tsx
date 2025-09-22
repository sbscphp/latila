"use client";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: "#00447D" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/assets/images/Frame 4.png')",
          filter: "brightness(0.3) sepia(1) hue-rotate(200deg) saturate(2)",
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
