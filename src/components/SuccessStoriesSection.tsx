
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
    <div className="w-full py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider">SUCCESS STORIES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">HEAR IT FROM THEM</h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Our Learners at Leading Companies</h3>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.slice(currentSlide * 3, (currentSlide + 1) * 3).map((story, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{story.name}</h4>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-lg">↓</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-base">{story.role}</p>
                    <p className="text-gray-600 text-base">{story.company}</p>
                  </div>
                  
                  <div className="text-center pt-3 border-t border-gray-100">
                    <p className="text-gray-600 text-sm">{story.prevRole}</p>
                    <p className="text-gray-600 text-sm">{story.prevCompany}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
