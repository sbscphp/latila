"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: "Who we are?",
      answer:
        "We are a team of technology enthusiasts dedicated to helping businesses embrace digital transformation.",
    },
    {
      question: "What services does Latila Ventures provide?",
      answer:
        "We specialize in IT consulting, cloud migration, project management, and digital transformation solutions designed to help businesses scale efficiently.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "You can contact us through our contact form or reach out directly to discuss your project requirements and receive a customized quote.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <h2
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: "#00447D" }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                You have questions, we have answers.
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Latila Consulting is here to answer your questions about us and
                our services. Contact us for further questions you wish to ask.
              </p>
            </div>
          </div>

          {/* Right Content - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="bg-gray-50 rounded-2xl">
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#00447D" }}
                      >
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
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#00447D" }}
                      >
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
                      </div>
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
