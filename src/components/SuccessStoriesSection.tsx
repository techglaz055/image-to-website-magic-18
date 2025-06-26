
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      name: "Abhiram",
      role: "Senior Social Media Manager",
      company: "Ogilvy",
      prevRole: "Senior Social Media Manager",
      prevCompany: "Infinity Learn",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Teja Vanama",
      role: "Deputy Manager (Geology)",
      company: "NMDC Limited",
      prevRole: "Assistant Manager",
      prevCompany: "NMDC Limited",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sujay Putta",
      role: "Chief Executive Officer",
      company: "The Kaliq",
      prevRole: "Chief Brand Designer & Founder",
      prevCompany: "SCGB Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Ravi Shankar",
      role: "VP - Products & Marketing",
      company: "STL - Sterlite Technologies Limited",
      prevRole: "Vice President - Products & Marketing",
      prevCompany: "Skyvera",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aditya Suri",
      role: "Senior Associate",
      company: "alliantgroup",
      prevRole: "Associate Manager",
      prevCompany: "Google Operations Center",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(stories.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(stories.length / 3)) % Math.ceil(stories.length / 3));
  };

  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6 md:mb-8">
              <p className="text-sm text-gray-600 mb-2">SUCCESS STORIES</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Learners at Leading Companies</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {stories.slice(currentSlide * 3, (currentSlide + 1) * 3).map((story, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">{story.name}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xs">↓</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-sm">{story.role}</p>
                      <p className="text-gray-600 text-sm">{story.company}</p>
                    </div>
                    
                    <div className="text-center pt-2 border-t border-gray-100">
                      <p className="text-gray-600 text-xs">{story.prevRole}</p>
                      <p className="text-gray-600 text-xs">{story.prevCompany}</p>
                    </div>
                  </div>
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

export default SuccessStoriesSection;
