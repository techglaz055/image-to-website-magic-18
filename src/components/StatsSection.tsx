
import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">₹ 10,00,000+</div>
                <div className="text-xs md:text-sm text-gray-600">AVERAGE ANNUAL CTC</div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xl md:text-2xl">₹</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Top companies hiring in this industry</h3>
            <p className="text-xs md:text-sm text-gray-600 mb-4">GET HIRED TO WORK FOR THESE GLOBAL GIANTS</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <span className="font-bold text-sm md:text-lg">IGGY</span>
                <span className="text-gray-600 text-xs md:text-sm">Zoho</span>
                <span className="font-bold text-xs md:text-sm">Walmart</span>
              </div>
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <span className="text-gray-600 text-xs md:text-sm">J</span>
                <span className="font-bold text-xs md:text-sm">Walmart</span>
                <span className="font-bold text-xs md:text-sm">Uber</span>
                <span className="font-bold text-xs md:text-sm">P</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <div className="mb-4">
              <div className="text-base md:text-lg font-semibold text-gray-900">Multiple projects</div>
              <div className="text-xs md:text-sm text-gray-600">LEARN BY DOING</div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm">
            <div className="mb-4">
              <div className="text-base md:text-lg font-semibold text-gray-900">Secret insights</div>
              <div className="text-xs md:text-sm text-gray-600">FROM REAL CASE-STUDIES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
