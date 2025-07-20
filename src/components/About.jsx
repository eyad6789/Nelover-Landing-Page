import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const WhoWeAreSection = () => {
  const [expandedSection, setExpandedSection] = useState('who-we-are');

  const sections = [
    {
      id: 'who-we-are',
      title: 'Who We are',
      content: `We are a forward-thinking technology company dedicated to creating seamless digital experiences. Our team specializes in developing innovative solutions that bridge the gap between different platforms and devices. With iPhone mirroring and continuity features at the core of our expertise, we enable users to transition effortlessly between their mobile and desktop environments. Our commitment to user-centric design ensures that every interaction feels natural and intuitive, making technology work harmoniously in your daily life.`
    },
    {
      id: 'what-we-do',
      title: 'What we do & did',
      content: `Our portfolio spans across multiple domains including cross-platform integration, mobile application development, and cloud-based solutions. We have successfully delivered projects that enhance productivity through seamless device synchronization, real-time collaboration tools, and innovative user interface designs. Our past achievements include award-winning applications that have transformed how users interact with their digital ecosystem, serving millions of users worldwide.`
    },
    {
      id: 'goals-vision',
      title: 'Our goals & vision',
      content: `We envision a future where technology boundaries dissolve, creating a unified digital experience across all platforms. Our goal is to lead the industry in developing solutions that anticipate user needs and adapt to their workflows. We strive to build a world where switching between devices feels as natural as breathing, and where technology enhances human potential rather than creating barriers. Through continuous innovation and user feedback, we aim to set new standards for digital interaction.`
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-200/50 to-gray-100 p-8">
      <div className="w-11/12 mx-auto">
        {/* Title */}
        <h1 className="text-6xl font-black mb-12 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          WHO WE ARE?
        </h1>

        {/* Main Container */}
        <div className=" p-8 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Accordion Content */}
            <div className="space-y-1">
              {sections.map((section, /*index*/) => (
                <div key={section.id} className="overflow-hidden">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="text-xl font-bold text-gray-800 text-left">
                      {section.title}
                    </h3>
                    <div className="ml-4 flex-shrink-0">
                      {expandedSection === section.id ? (
                        <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-200" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400 transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  {/* Section Content */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Visual Block */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 group">
                {/* Placeholder Content */}
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Visual Content</h4>
                  <p className="text-white/80 text-sm">
                    Image or video placeholder
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/25 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content or Call to Action */}
        {/* <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-2xl font-bold hover:from-red-600 hover:to-orange-600 transition-all duration-300 hover:scale-105 transform shadow-lg">
            Learn More About Us
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WhoWeAreSection;