
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CurriculumSection = () => {
  return (
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
  );
};

export default CurriculumSection;
