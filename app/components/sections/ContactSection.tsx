"use client";

import { useState } from "react";
import FadeInLeft from "../animations/FadeInLeft";
import FadeInRight from "../animations/FadeInRight";
import Image from "next/image";
import { usePostData } from "@/app/hooks/useApis";
import { toast } from "sonner";

const ContactSection = () => {
  const contactMutatation = usePostData("contacts");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (phone: string) => {
    if (phone.trim()) {
      // phone number should between 10 and 15 digits
      if (phone.trim().length < 10 || phone.trim().length > 15) {
        return "Please enter a valid phone number";
      }
    }
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters";
    if (message.trim().length > 1000)
      return "Message must be less than 1000 characters";
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    };

    try {
      await contactMutatation.mutateAsync(payload);

      // Reset form and errors on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      toast.success(
        "Thank you! Your message has been sent successfully. We'll get back to you soon."
      );
    } catch (error: unknown) {
      console.error("Contact form submission error:", error);

      // Handle different types of errors
      let errorMessage = "Failed to send message. Please try again.";

      // Type guard to check if error has response property
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as { response?: { status?: number } };
        if (axiosError.response?.status === 400) {
          errorMessage = "Please check your form data and try again.";
        } else if (axiosError.response?.status === 500) {
          errorMessage = "Server error. Please try again later.";
        } else if (
          axiosError.response?.status &&
          axiosError.response.status >= 400
        ) {
          errorMessage = "Something went wrong. Please try again.";
        }
      }

      // Check for network errors
      if (error && typeof error === "object" && "message" in error) {
        const errorWithMessage = error as { message?: string };
        if (errorWithMessage.message?.includes("Network Error")) {
          errorMessage =
            "Network error. Please check your connection and try again.";
        }
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white pt-16 lg:pt-24 pb-0" id="contact">
      <div className="w-full">
        {/* Content area with light blue background */}
        <div className="p-8" style={{ backgroundColor: "#E6F2FF" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Content - Image */}
            <FadeInLeft delay={0.2}>
              <div className="rounded-2xl overflow-hidden h-full">
                <Image
                  src="/assets/images/Picture for website design.png"
                  alt="Professional support team at Latila Consulting"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </FadeInLeft>

            {/* Right Content - Contact Form */}
            <FadeInRight delay={0.4}>
              <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Us
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill the form below to reach out to us.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm transition-colors ${
                        errors.name
                          ? "border-red-300 focus:ring-red-500 bg-red-50"
                          : "border-gray-200 focus:ring-blue-500"
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email and Phone in same row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm transition-colors ${
                          errors.email
                            ? "border-red-300 focus:ring-red-500 bg-red-50"
                            : "border-gray-200 focus:ring-blue-500"
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-sm transition-colors ${
                          errors.phone
                            ? "border-red-300 focus:ring-red-500 bg-red-50"
                            : "border-gray-200 focus:ring-blue-500"
                        }`}
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none text-sm transition-colors ${
                        errors.message
                          ? "border-red-300 focus:ring-red-500 bg-red-50"
                          : "border-gray-200 focus:ring-blue-500"
                      }`}
                      disabled={isSubmitting}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && (
                        <p className="text-sm text-red-600">{errors.message}</p>
                      )}
                      <p className="text-xs text-gray-500 ml-auto">
                        {formData.message.length}/1000 characters
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "hover:opacity-90 hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: isSubmitting ? "#9CA3AF" : "#00447D",
                      color: "white",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
