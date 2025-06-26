
import React from 'react';
import StickyTestimonialCard from './StickyTestimonialCard';

const KeyOutcomes = () => {
  return (
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
  );
};

export default KeyOutcomes;
