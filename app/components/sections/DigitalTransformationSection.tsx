"use client";

const DigitalTransformationSection = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Empowering Digital Transformation
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2018, Latila Consulting began as a small team of
                technology enthusiasts dedicated to helping businesses embrace
                digital transformation. Over the years, we have expanded our
                expertise to include cloud migration, IT ventures, and
                comprehensive project management.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we proudly serve clients across various industries,
                delivering scalable and secure technology solutions tailored to
                their unique needs.
              </p>
            </div>
          </div>

          {/* Right Content - CEO Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm">
              <div className="text-center">
                {/* CEO Image */}
                <div className="mb-6">
                  <div className="w-72 h-72 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/assets/images/oladimeji.png"
                      alt="Oladimeji Alao, CEO of Latila Consulting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CEO Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Oladimeji Alao
                  </h3>
                  <p className="text-lg text-gray-600">
                    CEO, Latila Consulting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationSection;
