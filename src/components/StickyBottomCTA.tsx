
import React from 'react';
import { Download } from 'lucide-react';

const StickyBottomCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white border-t border-gray-800">
      <div className="px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <h3 className="text-lg md:text-xl font-semibold">Digital Marketing - Elite</h3>
              <p className="text-gray-400 text-sm">Looking for your team?</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 md:px-8 rounded-lg transition-colors">
                Apply Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 md:px-8 rounded-lg border border-white/20 flex items-center justify-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomCTA;
