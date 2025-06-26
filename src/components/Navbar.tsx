
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-gray-900 text-base md:text-lg">Growth School</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium text-sm">
              <span>Learn</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">Upskill your Team</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">About</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm">
              Login
            </button>
            <button className="bg-gray-900 text-white font-medium px-3 md:px-4 py-2 rounded-lg hover:bg-gray-800 text-sm">
              Apply as Mentor
            </button>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
          <div className="flex flex-col space-y-4 pt-4">
            <button className="flex items-center justify-between text-gray-700 hover:text-gray-900 font-medium text-left">
              <span>Learn</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Upskill your Team</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <div className="flex flex-col sm:hidden space-y-3 pt-4 border-t border-gray-100">
              <button className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 border border-gray-300 rounded-lg text-center">
                Login
              </button>
              <button className="bg-gray-900 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-800 text-center">
                Apply as Mentor
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
