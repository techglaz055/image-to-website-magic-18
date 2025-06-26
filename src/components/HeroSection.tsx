
import React from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 lg:pr-8">
            <div className="relative bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl p-8 mb-8">
              <img 
                src="https://d3kl8zsmmx4oop.cloudfront.net/MCP_39e7df7c6c_d9c653a440.webp" 
                alt="Management Consulting Team"
                className="w-full h-64 object-cover rounded-lg"
              />
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
          
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Management Consulting</h1>
            <p className="text-xl text-gray-300 mb-8">
              A 15-week AI-powered mentorship program designed by consultants from 
              McKinsey, Bain & more to help you understand, practice, and implement the 
              principles of management consulting.
            </p>
            
            <div className="mb-8">
              <p className="text-gray-400 mb-2">Cohort start date</p>
              <p className="text-xl font-semibold">Coming Soon</p>
            </div>
            
            <div>
              <p className="text-gray-400 mb-4">Mentors</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">V</span>
                  </div>
                  <div>
                    <p className="font-semibold">Varun Khullar</p>
                    <p className="text-sm text-gray-400">Director of Business Development, LinkedIn</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">P</span>
                  </div>
                  <div>
                    <p className="font-semibold">Prashanth Bal...</p>
                    <p className="text-sm text-gray-400">Head of Strategy, Meta</p>
                  </div>
                </div>
                
                <div className="text-gray-400">
                  <span className="font-semibold">+ 2 more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
