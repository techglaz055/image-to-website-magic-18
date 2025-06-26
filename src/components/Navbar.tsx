
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">Growth School</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
              <span>Learn</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Upskill your Team</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 border border-gray-300 rounded-lg">
            Login
          </button>
          <button className="bg-gray-900 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-800">
            Apply as Mentor
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
