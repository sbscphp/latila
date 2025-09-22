"use client";

import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: "#00447D" }}
          >
            CONTACT US HERE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/images/Content.png"
                  alt="Professional support team at Latila Consulting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h3>
                <p className="text-gray-600">
                  Fill the form below to reach out to us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                    style={{ outline: "none" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 0 2px #00447D")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                    style={{ outline: "none" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 0 2px #00447D")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                    style={{ outline: "none" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 0 0 2px #00447D")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter message here"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  style={{ backgroundColor: "#00447D" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#003366")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00447D")
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
