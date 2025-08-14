import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Leaf, Target, Award } from 'lucide-react';

const AnnouncementCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (productId) => {
    // Navigate to the product page using the product ID
    window.location.href = `/product/${productId}`;
  };

  const announcements = [
    {
      id: 'garden-pro-elite',
      type: "NEW RELEASE",
      title: "GardenPro Elite",
      subtitle: "AI-Powered Smart Garden",
      price: "$499",
      date: "September 9, 2024",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&crop=center",
      size: "large",
      hasImage: true,
      badge: "Best Seller"
    },
    {
      id: 'garden-compact',
      type: "FEATURED",
      title: "GardenCompact",
      subtitle: "Perfect for Small Spaces",
      price: "$299",
      date: "September 9, 2024",
      size: "medium",
      hasImage: false,
      badge: "Space Saver"
    },
    {
      id: 'garden-hydro-max',
      type: "PROFESSIONAL",
      title: "HydroMax Pro",
      subtitle: "Commercial Grade",
      price: "$1,299",
      date: "September 9, 2024",
      size: "small",
      hasImage: false,
      badge: "Pro Choice"
    },
    {
      id: 'garden-smart-tower',
      type: "INNOVATIVE",
      title: "SmartTower Vertical",
      subtitle: "20 Plants Capacity",
      price: "$899",
      date: "September 9, 2024",
      size: "small",
      hasImage: false,
      badge: "Vertical Solution"
    },
    {
      id: 'garden-mini',
      type: "STARTER",
      title: "Garden Mini",
      subtitle: "Perfect Starter Kit",
      price: "$199",
      date: "September 9, 2024",
      size: "small-bottom",
      hasImage: false,
      badge: "Beginner Friendly"
    },
    {
      id: 'garden-plus',
      type: "UPGRADED",
      title: "Garden Plus",
      subtitle: "Enhanced Features",
      price: "$399",
      date: "September 9, 2024",
      size: "small-bottom",
      hasImage: false,
      badge: "Enhanced"
    },
    {
      id: 'garden-outdoor',
      type: "SEASONAL",
      title: "Outdoor Edition",
      subtitle: "Weather Resistant",
      price: "$699",
      date: "September 9, 2024",
      size: "small-bottom",
      hasImage: false,
      badge: "All Weather"
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 sm:row-span-2 h-48 sm:h-64 md:h-80';
      case 'medium':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 h-32 sm:h-36 md:h-40';
      case 'small':
        return 'col-span-1 row-span-1 h-32 sm:h-36 md:h-40';
      case 'small-bottom':
        return 'col-span-1 row-span-1 h-28 sm:h-32 md:h-36';
      default:
        return 'col-span-1 row-span-1 h-32 sm:h-36 md:h-40';
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Choose Your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Garden</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From compact countertop gardens to professional growing systems, find the perfect fit for your space and needs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              to="/products"
              className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              <Leaf className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Shop Smart Gardens
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => setVideoModalOpen(true)}
              className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-min">
          {announcements.map((announcement, index) => (
            <Link
              key={announcement.id}
              to={`/${announcement.id}`}
              className={`
                ${getSizeClasses(announcement.size)}
                group relative bg-white rounded-2xl shadow-sm hover:shadow-lg 
                transition-all duration-500 overflow-hidden cursor-pointer
                transform hover:-translate-y-1
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {announcement.badge && (
                <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                  {announcement.badge}
                </div>
              )}

              {/* Image Section (for large card) */}
              {announcement.hasImage && (
                <div className="relative h-2/3 sm:h-3/5 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${announcement.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Product mockup overlay for main card */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Leaf className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div 
                className={`
                  ${announcement.hasImage ? 'h-1/3 sm:h-2/5' : 'h-full'} 
                  bg-gradient-to-br from-green-500 to-emerald-600 p-3 sm:p-4 md:p-6 flex flex-col justify-between
                  relative overflow-hidden
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-white/20 rounded-full" />
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-3">
                    <span className="text-white/80 text-xs sm:text-xs md:text-sm font-semibold tracking-wide uppercase">
                      {announcement.type}
                    </span>
                  </div>

                  <h3 className={`
                    text-white font-bold leading-tight mb-2
                    ${announcement.size === 'large' ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 
                      announcement.size === 'medium' ? 'text-base sm:text-lg md:text-xl' : 
                      announcement.size.includes('small-bottom') ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}
                  `}>
                    {announcement.title}
                  </h3>

                  {/* Subtitle and Price */}
                  {announcement.subtitle && (
                    <p className="text-white/80 text-sm mb-1">{announcement.subtitle}</p>
                  )}
                  {announcement.price && (
                    <p className="text-white font-bold text-lg">{announcement.price}</p>
                  )}
                </div>

                {/* Date */}
                <div className="relative z-10 mt-auto">
                  <span className={`
                    text-white/70 font-medium
                    ${announcement.size.includes('small-bottom') ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm md:text-base'}
                  `}>
                    {announcement.date}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Arrow indicator */}
                <div className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 mb-6">Need help choosing the right garden for you?</p>
          <Link 
            to="/contact"
            className="bg-white border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <Target className="w-5 h-5 mr-2" />
            Get Expert Recommendation
          </Link>
        </div>
      </div>

      {/* Demo Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Smart Garden Demo</h3>
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Demo Content */}
            <div className="space-y-6">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-green-800">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-lg font-medium">Watch Smart Garden in Action</p>
                  <p className="text-sm text-green-600 mt-2">See how easy growing can be</p>
                </div>
              </div>

              {/* Demo Features */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Smart Growing</h4>
                  <p className="text-sm text-gray-600">AI optimizes growth conditions</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Play className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">App Control</h4>
                  <p className="text-sm text-gray-600">Monitor from anywhere</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">Proven Results</h4>
                  <p className="text-sm text-gray-600">98% success rate</p>
                </div>
              </div>

              {/* CTA in Modal */}
              <div className="text-center pt-4">
                <Link 
                  to="/garden-pro-elite"
                  onClick={() => setVideoModalOpen(false)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Start Growing Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementCards;