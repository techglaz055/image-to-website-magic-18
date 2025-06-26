
import React from 'react';

const AlumniCompaniesSection = () => {
  const companies = [
    'Google', 'Swiggy', 'Zomato', 'Phillips', 'Microsoft', 'Zomato', 'Paytm',
    'Disney+ Hotstar', 'Snapdeal', 'Apna', 'Walmart', 'Uber', 'Phillips', 'Adobe'
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our alumni work at top brands like</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-8">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 h-16">
                  <span className="text-gray-700 font-medium text-sm text-center">{company}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:block hidden">
            {/* Empty space for sticky testimonial card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCompaniesSection;
