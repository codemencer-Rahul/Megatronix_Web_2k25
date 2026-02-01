import React, { useState } from 'react'
import faqs from "../../../lib/data/ContactFaqData"
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqAccordian = () => {
    const [openFaq, setOpenFaq] = useState(null);
    
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
      };
    


    return (
        <div
            className="lg:col-span-12 backdrop-blur-sm rounded-xl p-6 shadow-lg relative self-start"
            style={{
              backgroundColor: "var(--surface-black)",
              border: "1px solid var(--yellow-border-soft)",
              boxShadow: "0 0 20px rgba(255, 202, 40, 0.12)",
            }}
          >
            <div
              className="absolute bottom-0 right-0 w-8 h-8 rounded-br-lg"
              style={{
                borderBottom: "2px solid var(--yellow-primary)",
                borderRight: "2px solid var(--yellow-primary)",
              }}
            ></div>
            <h3
              className="text-xl font-bold mb-6 tracking-widest pb-2"
              style={{
                color: "var(--yellow-primary)",
                borderBottom: "1px solid var(--yellow-border-soft)",
              }}
            >
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden backdrop-blur-md"
                  style={{
                    backgroundColor: "var(--surface-black)",
                    border: "1px solid var(--yellow-border-soft)",
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-3 text-left text-sm font-semibold transition-colors"
                    style={{ color: "var(--gray-text)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--yellow-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--gray-text)")
                    }
                  >
                    {faq.question}
                    {openFaq === index ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className="p-3 pt-4 text-xs leading-relaxed"
                      style={{
                        color: "var(--gray-text)",
                        borderTop: "1px solid var(--yellow-border-soft)",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    )
}

export default FaqAccordian
