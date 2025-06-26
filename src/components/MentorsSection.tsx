
import React from 'react';
import StickyTestimonialCard from './StickyTestimonialCard';

const MentorsSection = () => {
  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Meet Your Mentors</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm md:text-base">V</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Varun Khullar</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Director of Business Development, LinkedIn</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm md:text-base">P</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Prashanth Balasubramanian</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Head of Strategy, Meta</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm md:text-base">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Megha Bansal</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Head of Business- SecureNow, Ex-McKinsey & Co., Ex-Aon</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm md:text-base">R</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Rushika HandaSood</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Ex- Consultant, BCG</p>
                </div>
              </div>
            </div>
            
            {/* Before you ask section */}
            <div className="mt-12 md:mt-16">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Before you ask!</h3>
              <p className="text-sm md:text-base text-gray-700 mb-6">Yes! You will be certified for this program.</p>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 flex items-center justify-center">
                <img 
                  src="https://d3kl8zsmmx4oop.cloudfront.net/GS_certificate_b91252c431_b546f36e85.png" 
                  alt="Growth School Certificate" 
                  className="max-w-full h-auto max-h-48 md:max-h-64 object-contain"
                />
              </div>
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

export default MentorsSection;
