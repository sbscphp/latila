"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white pt-16 lg:pt-24 pb-0" id="contact">
      <div className="w-full">
        {/* Section Header */}

        {/* Content area with light blue background */}
        <div className=" p-8" style={{ backgroundColor: "#E6F2FF" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Image */}
            <div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/contact us.png"
                  alt="Professional support team at Latila Consulting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill the form below to reach out to us.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>

                  {/* Email and Phone in same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter message here"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full text-white py-3 px-6 rounded-full font-medium transition-colors"
                    style={{ backgroundColor: "#00447D" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
