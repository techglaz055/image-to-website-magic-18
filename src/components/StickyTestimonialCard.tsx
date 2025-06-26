
import React from 'react';

const StickyTestimonialCard = () => {
  return (
    <div className="lg:sticky lg:top-8 bg-white border border-gray-200 rounded-xl p-4 md:p-6 h-fit">
      <div className="mb-4 md:mb-6">
        <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">6.5M+ Learners</div>
        <div className="text-sm md:text-base text-gray-600">have reaped benefits from our programs</div>
      </div>
      
      <div className="flex items-center gap-1 md:gap-2 mb-4 md:mb-6 overflow-x-auto">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-gray-700 text-xs md:text-sm">Stay ahead in your field by mastering industry relevant skills through our online sessions</span>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-gray-700 text-xs md:text-sm">Dive into real challenges from today's businesses, gaining hands-on experience.</span>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-gray-700 text-xs md:text-sm">Tap into a wealth of career opportunities through our established network.</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
        <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs">G</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-xs md:text-sm font-medium">LinkedIn</span>
          <span className="text-xs md:text-sm text-gray-600">Top Startup India 2023</span>
        </div>
      </div>
    </div>
  );
};

export default StickyTestimonialCard;
