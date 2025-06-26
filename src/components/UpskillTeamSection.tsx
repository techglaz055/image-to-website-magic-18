
import React from 'react';
import { Calendar, Play, MessageSquare, Users } from 'lucide-react';

const UpskillTeamSection = () => {
  const benefits = [
    {
      icon: Calendar,
      title: "Self-paced video content",
      description: "Master new skills on your schedule with our flexible, self-paced video content."
    },
    {
      icon: Play,
      title: "Office hours with Mentors for clearing blockers",
      description: "Overcome challenges fast with dedicated mentor office hours."
    },
    {
      icon: MessageSquare,
      title: "Project driven approach to achieve outcomes",
      description: "Gain practical skills through our project-driven approach for real results."
    },
    {
      icon: Users,
      title: "Access to network of 1000+ learners",
      description: "Tap into our vibrant network of learners, enhancing your learning experience."
    }
  ];

  const brands = [
    { name: "Google", color: "bg-blue-100" },
    { name: "Shiprocket", color: "bg-green-100" },
    { name: "Domino's", color: "bg-gray-100" },
    { name: "Aditya Birla Group", color: "bg-red-100" },
    { name: "Dr.Reddy's", color: "bg-purple-100" },
    { name: "Razorpay", color: "bg-blue-100" },
    { name: "Uber", color: "bg-gray-100" },
    { name: "Shell", color: "bg-yellow-100" }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2">SKILL UP, SCALE UP</p>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Upskill your Team; Upscale your Business
                </h2>
                <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors w-fit">
                  Upskill Your Team
                </button>
              </div>
              <p className="text-gray-700 mb-8">
                Elevate your team's skills to fuel efficiency and ongoing innovation for sustained business growth.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Why learn with GrowthSchool?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Brands in Collaboration</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.map((brand, index) => (
                  <div key={index} className={`${brand.color} rounded-xl p-6 flex items-center justify-center h-20`}>
                    <span className="font-medium text-gray-800">{brand.name}</span>
                  </div>
                ))}
              </div>
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

export default UpskillTeamSection;
