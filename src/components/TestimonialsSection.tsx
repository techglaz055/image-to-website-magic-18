
import React from 'react';
import { Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Excited to announce my graduation 🎓 from the UX Career Acceleration Program by GrowthSchool under the mentorship of Anudeep Ayyagari (UX Anudeep). It's been an enriching journey exploring UX concepts, design tools 🛠️, and the realm of product design. Collaborating with talented peers, we've delved into crafting...",
      author: "Abhishika K.N",
      role: "Engineer - 2 - Version",
      platform: "LinkedIn",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c784?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "✨ Just completed Vaibhav Sisinty's LinkedIn workshop at GrowthSchool – mind officially blown! 🤯 Ready to share the top three secrets that turned my LinkedIn game around. 💪 🚀 Crafting a magnetic headline, mastering connection requests, and decoding the LinkedIn algorithm – all in one session! 🎯💼 Let'...",
      author: "Rahul Phathani",
      role: "Social Media Strategist, LinkedIn",
      platform: "LinkedIn",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "I landed my first international client with Growth School's LinkedIn Workshop. Here are the things I discovered over the last workshop: 1. Having an optimised profile makes you more credible and approachable. 2. You can do wonders with the Featured Section - if done the right way. 3. Followers don't matter ...",
      author: "Akash Pandey",
      role: "Instagram Growth Coach, Instagram",
      platform: "LinkedIn",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "Hey Folks Excited to start this new year with a bang with the Digital Marketing Program with GrowthSchool. All set to begin the journey with the Learners on 7th Jan! The best part - I'll be driving the program alongside some of the top industry veterans including but NOT Limited to: Kaushik Sen Deka (Digital Ma...",
      author: "sumit varma",
      role: "Media Account Specialist Head, Google",
      platform: "LinkedIn",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const videoTestimonials = [
    {
      name: "Nishank Koushak",
      role: "Senior Sales Manager, SingleInterface",
      text: "I am thrilled to share that I have developed a dynamic and insightful dashboard on Power BI, providing real-time predictions and analysis of the USD-INR exchange rates. With this dashboard, you can track the latest trends, historical data, and forecasted movements of the USD-INR exchange rates. It's an invaluab...",
      author: "Nidhi worah",
      authorRole: "Computer Vision Engineer, Ignitus",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop"
    },
    {
      name: "Tushar Baweja",
      role: "Investigation Specialist 1, Amazon",
      text: "Hey Folks! HNY 2024! 🎉 Excited to start this new year with a bang with the Digital Marketing Program with GrowthSchool. All set to begin the journey with the Learners on 7th Jan! The best part - I'll be driving the program alongside some of the top industry veterans including but NOT Limited to: Sumit Verma (M...",
      author: "Kaushik Sen",
      authorRole: "Digital Marketing Strategist, Google",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-2">HEAR IT FROM THEM</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                Ambitious People <Heart className="w-6 h-6 text-red-500 fill-current" /> GrowthSchool
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">in</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-4">{testimonial.text}</p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.author}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {videoTestimonials.map((video, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative">
                    <img 
                      src={video.videoThumbnail} 
                      alt={`${video.name} testimonial`}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-8 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold">{video.name}</h4>
                      <p className="text-sm opacity-90">{video.role}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">in</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{video.text}</p>
                    
                    <div className="flex items-center gap-3">
                      <img 
                        src={video.image} 
                        alt={video.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">{video.author}</h5>
                        <p className="text-gray-600 text-xs">{video.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                See Our Wall of Love
              </button>
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

export default TestimonialsSection;
