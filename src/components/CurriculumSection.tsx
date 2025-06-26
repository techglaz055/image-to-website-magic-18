
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CurriculumSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What will you learn?</h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">MODULE 1</div>
                    <div className="font-semibold text-gray-900">Introduction to Consulting</div>
                  </div>
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                </div>
                <div className="mt-4 text-gray-700">
                  Gain insight into consulting careers, key skills, firm operations, industry trends, and 
                  pathways. Explore entry strategies, prominent firms, practice types, and a real-life case 
                  study.
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">MODULE 2</div>
                    <div className="font-semibold text-gray-900">Business and Data 101</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">MODULE 3</div>
                    <div className="font-semibold text-gray-900">Key Consulting Concepts - Part 1</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">MODULE 4</div>
                    <div className="font-semibold text-gray-900">Key Consulting Concepts - Part 2</div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-900 mb-2">6.5M+ Learners</div>
              <div className="text-gray-600">have reaped benefits from our programs</div>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Stay ahead in your field by mastering industry relevant skills through our online sessions</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Dive into real challenges from today's businesses, gaining hands-on experience.</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">Tap into a wealth of career opportunities through our established network.</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">LinkedIn</span>
                <span className="text-sm text-gray-600">Top Startup India 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
