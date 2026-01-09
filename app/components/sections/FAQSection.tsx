"use client";

import { useState, useEffect } from "react";
import FadeInLeft from "../animations/FadeInLeft";
import StaggerContainer from "../animations/StaggerContainer";
import StaggerItem from "../animations/StaggerItem";
// import { useFetchData } from "@/app/hooks/useApis";

interface FAQItem {
  id: string;
  title: string;
  detail: string;
}

// Static fallback data matching the design
const STATIC_FALLBACK_FAQS: FAQItem[] = [
  {
    id: "static-faq-1",
    title: "How can i get a quote for my project?",
    detail:
      "You can request a quote through our contact page by filling out the inquiry form or emailing us directly. Our team will respond within 1-2 business days.",
  },
  {
    id: "static-faq-2",
    title: "What services does Latila Consulting provide?",
    detail:
      "We specialize in IT consulting, cloud migration, project management, and digital transformation solutions designed to help businesses scale efficiently.",
  },
  {
    id: "static-faq-3",
    title: "Who we are.",
    detail:
      "Latila Consulting excels in delivering top-notch IT solutions, leveraging deep expertise to drive innovation and efficiency for businesses.",
  },
];

// FAQ Accordion Item Component
const FAQAccordionItem = ({
  faq,
  index,
  openIndex,
  setOpenIndex,
}: {
  faq: FAQItem;
  index: number;
  openIndex: number;
  setOpenIndex: (index: number) => void;
}) => (
  <StaggerItem direction="up">
    <div
      className={`rounded-2xl transition-all ${
        openIndex === index ? "bg-gray-100 shadow-sm" : "bg-gray-100"
      }`}
    >
      <button
        className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">
          {faq?.title}
        </span>
        <div className="flex-shrink-0">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{
              backgroundColor: "#01C6FA",
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
          <p className="text-gray-600 leading-relaxed">{faq?.detail}</p>
        </div>
      )}
    </div>
  </StaggerItem>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const [faqs, setFaqs] = useState<FAQItem[]>(STATIC_FALLBACK_FAQS);

  // const { data: faqsData } = useFetchData("faqs1");

  useEffect(() => {
    setFaqs(STATIC_FALLBACK_FAQS);
  }, []);

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
                  Frequently Asked Questions
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
            {faqs.map((faq: FAQItem, index: number) => (
              <FAQAccordionItem
                key={faq?.id}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
