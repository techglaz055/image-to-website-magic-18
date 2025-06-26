
import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const FooterSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Newsletter section */}
      <div className="px-4 md:px-6 py-8 md:py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-teal-600 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">Best Kept Secrets ✨</h3>
              <p className="text-gray-400 text-sm md:text-base">Be the first to find out about the newest programs, workshops, and community activities - plus industry news, articles, and special reports.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-green-500 focus:outline-none flex-1"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="flex items-center gap-4 mb-6 lg:mb-0">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm md:text-base">Mentorship Programs</h4>
                <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Performance Marketing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">UI UX Design</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Product Management</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Management Consulting</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Product Marketing</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm md:text-base">Workshops</h4>
                <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">ChatGPT</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn Growth</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">AI For Consultants</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Product Management</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Marketing Mastermind</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Business Mastermind</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm md:text-base">Company</h4>
                <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm md:text-base">Engage</h4>
                <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Upskill Your Team</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Apply as Mentor</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-xs md:text-sm">© 2025 Sisinity Pvt. Ltd. All rights reserved</p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
