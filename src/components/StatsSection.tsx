
import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">₹ 10,00,000+</div>
                <div className="text-sm text-gray-600">AVERAGE ANNUAL CTC</div>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">₹</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Top companies hiring in this industry</h3>
            <p className="text-sm text-gray-600 mb-4">GET HIRED TO WORK FOR THESE GLOBAL GIANTS</p>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg">IGGY</span>
                <span className="text-gray-600">Zoho</span>
                <span className="font-bold">Walmart</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">J</span>
                <span className="font-bold">Walmart</span>
                <span className="font-bold">Uber</span>
                <span className="font-bold">P</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-4">
              <div className="text-lg font-semibold text-gray-900">Multiple projects</div>
              <div className="text-sm text-gray-600">LEARN BY DOING</div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-4">
              <div className="text-lg font-semibold text-gray-900">Secret insights</div>
              <div className="text-sm text-gray-600">FROM REAL CASE-STUDIES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
