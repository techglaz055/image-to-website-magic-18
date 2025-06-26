
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import StickyTestimonialCard from './StickyTestimonialCard';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the duration of this program?",
      answer: "The Digital Marketing Elite program is designed to be completed in 8-12 weeks with flexible learning options."
    },
    {
      question: "Is this program suitable for beginners?",
      answer: "Yes, this program is designed for learners at all levels, from beginners to experienced professionals looking to upskill."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you will receive a Growth School certificate upon successful completion of the program."
    },
    {
      question: "What kind of support will I get during the program?",
      answer: "You'll have access to dedicated mentors, office hours, peer networking, and comprehensive learning resources."
    },
    {
      question: "Are there any prerequisites for this program?",
      answer: "No specific prerequisites are required. Basic computer literacy and enthusiasm to learn are sufficient."
    }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-4 md:px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base pr-4">{faq.question}</span>
                    <ChevronDown 
                      className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform flex-shrink-0 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-4 md:px-6 pb-4">
                      <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <StickyTestimonialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
