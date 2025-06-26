
import React from 'react';
import { Download } from 'lucide-react';

const CertificationSection = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Before you ask!</h2>
            <p className="text-lg text-gray-700 mb-8">Yes! You will be certified for this program.</p>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
              <img 
                src="https://d3kl8zsmmx4oop.cloudfront.net/GS_certificate_b91252c431_b546f36e85.png" 
                alt="Growth School Certificate"
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Earn NSDC Certification</h3>
            
            <p className="text-gray-700 mb-6">
              The National Skill Development Corporation (NSDC), under the Government of India, promotes 
              skill development. Your course is a part of NSDC programme and you'll receive a certificate upon 
              completion*
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Benefits of NSDC Certification:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Boost your career prospects with a certification acknowledged across India.</li>
                <li>Improves chances of employment and career advancement.</li>
                <li>Ensures top-quality education and training.</li>
              </ol>
            </div>
            
            <p className="text-gray-700 mb-6">
              Register for NSDC certification today and advance your career with industry-recognized 
              credentials.
            </p>
            
            <p className="text-gray-500 text-sm mb-8">* Subject to evaluation and attendance</p>
            
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <img 
                src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/nsdc.webp" 
                alt="NSDC Certificate"
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <p className="text-center mt-4">
              <span className="text-blue-600">For more details, visit: </span>
              <a href="#" className="text-blue-600 underline">NSDC</a>
            </p>
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

export default CertificationSection;
