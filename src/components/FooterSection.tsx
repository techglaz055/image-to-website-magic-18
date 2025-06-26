
import React from 'react';
import { Download } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Digital Marketing - Elite</h3>
            <p className="text-gray-400">Looking for your team?</p>
          </div>
          
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Apply Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/20 flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" />
              Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
