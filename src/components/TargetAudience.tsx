
import React from 'react';

const TargetAudience = () => {
  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
              Still wondering If Management Consulting Mentorship Program is for you?
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              Gain a thorough understanding of the consulting industry, its diverse career trajectories, 
              necessary skills, and the inner workings of consulting firms. This knowledge will empower you to 
              make well-informed decisions about your potential engagement in this field.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Aspiring Strategy Consultants</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Job Seekers</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Business Students</span>
                </div>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Early-tenure Management Consultants</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Marketers & Growth Managers</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">Anyone curious about what consultants & consulting firms truly do</span>
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
  );
};

export default TargetAudience;
