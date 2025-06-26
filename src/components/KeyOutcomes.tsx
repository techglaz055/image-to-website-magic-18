
import React from 'react';

const KeyOutcomes = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Outcomes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-8">
              Gain a thorough understanding of the consulting industry, its diverse career trajectories, 
              necessary skills, and the inner workings of consulting firms. This knowledge will empower you to 
              make well-informed decisions about your potential engagement in this field.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Understand the role, functions, and daily activities of consultants</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Explore diverse career paths and strategies to overcome entry barriers</span>
              </li>
            </ul>
            
            <button className="text-blue-600 font-medium mt-4 flex items-center gap-2">
              Read More
              <span>↓</span>
            </button>
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

export default KeyOutcomes;
