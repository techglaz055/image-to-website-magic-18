
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import StickyTestimonialCard from './StickyTestimonialCard';

const MainContentWithStickyCard = () => {
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
    <div className="relative">
      {/* Key Outcomes Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Key Outcomes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
                Gain a thorough understanding of the consulting industry, its diverse career trajectories, 
                necessary skills, and the inner workings of consulting firms. This knowledge will empower you to 
                make well-informed decisions about your potential engagement in this field.
              </p>
              
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-gray-700">Understand the role, functions, and daily activities of consultants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-gray-700">Explore diverse career paths and strategies to overcome entry barriers</span>
                </li>
              </ul>
              
              <button className="text-blue-600 font-medium mt-4 flex items-center gap-2 text-sm md:text-base hover:text-blue-700 transition-colors">
                Read More
                <span>↓</span>
              </button>
            </div>
            
            <div>
              <StickyTestimonialCard />
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">What will you learn?</h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">MODULE 1</div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">Introduction to Consulting</div>
                    </div>
                    <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  </div>
                  <div className="mt-4 text-gray-700 text-sm md:text-base">
                    Gain insight into consulting careers, key skills, firm operations, industry trends, and 
                    pathways. Explore entry strategies, prominent firms, practice types, and a real-life case 
                    study.
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">MODULE 2</div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">Business and Data 101</div>
                    </div>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">MODULE 3</div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">Key Consulting Concepts - Part 1</div>
                    </div>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">MODULE 4</div>
                      <div className="font-semibold text-gray-900 text-sm md:text-base">Key Consulting Concepts - Part 2</div>
                    </div>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:block hidden">
              {/* Empty space for sticky testimonial card */}
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Who Should Attend?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Recent Graduates</h3>
                  <p className="text-gray-700 text-sm">Starting your career journey and looking to break into consulting</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Career Switchers</h3>
                  <p className="text-gray-700 text-sm">Professionals seeking to transition into the consulting industry</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Business Professionals</h3>
                  <p className="text-gray-700 text-sm">Looking to enhance analytical and problem-solving skills</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 md:p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Entrepreneurs</h3>
                  <p className="text-gray-700 text-sm">Wanting to develop strategic thinking and business acumen</p>
                </div>
              </div>
            </div>
            
            <div className="lg:block hidden">
              {/* Empty space for sticky testimonial card */}
            </div>
          </div>
        </div>
      </div>

      {/* Mentors Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Learn from Industry Experts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                      alt="Mentor"
                      className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">John Smith</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Senior Partner at McKinsey</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">15+ years of consulting experience across various industries</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                      alt="Mentor"
                      className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Sarah Johnson</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Principal at BCG</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Expert in digital transformation and strategy consulting</p>
                </div>
              </div>
            </div>
            
            <div className="lg:block hidden">
              {/* Empty space for sticky testimonial card */}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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
            
            <div className="lg:block hidden">
              {/* Empty space for sticky testimonial card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentWithStickyCard;
