
import React from 'react';

const MentorsSection = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Your Mentors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">V</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Varun Khullar</h3>
                  <p className="text-gray-600">Director of Business Development, LinkedIn</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">P</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Prashanth Balasubramanian</h3>
                  <p className="text-gray-600">Head of Strategy, Meta</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Megha Bansal</h3>
                  <p className="text-gray-600">Head of Business- SecureNow, Ex-McKinsey & Co., Ex-Aon</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">R</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rushika HandaSood</h3>
                  <p className="text-gray-600">Ex- Consultant, BCG</p>
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

export default MentorsSection;
