"use client";

import { useState } from "react";
import FadeInLeft from "../animations/FadeInLeft";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
import { useFetchData } from "@/app/hooks/useApis";

interface FAQItem {
  id: string;
  title: string;
  detail: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const { data: faqsData } = useFetchData("faqs");

  console.log(faqsData?.data);

  return (
    <section className=" py-16 lg:py-24" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <FadeInLeft delay={0.2}>
            <div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                  Frequently Asked questions
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Latila Consulting is here to answer your questions about us
                  and our services. Contact us for further questions you wish to
                  ask.
                </p>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Content - FAQ Accordion */}
          <StaggerContainer className="space-y-4">
            {faqsData?.data?.map((faq: FAQItem, index: number) => {
              console.log(faq);
              return (
                <StaggerItem key={faq?.id} direction="up">
                  <div
                    className={`rounded-2xl transition-all ${
                      openIndex === index
                        ? "bg-gray-100 shadow-sm"
                        : "bg-gray-100"
                    }`}
                  >
                    <button
                      className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq?.title}
                      </span>
                      <div className="flex-shrink-0">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor:
                              openIndex === index ? "#01C6FA" : "#01C6FA",
                          }}
                        >
                          {openIndex === index ? (
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>

                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq?.detail}
                        </p>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
