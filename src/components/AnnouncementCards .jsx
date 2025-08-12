import React, { useState, useEffect } from 'react';

const AnnouncementCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (productId) => {
    // Navigate to the product page using the product ID
    window.location.href = `/products/${productId}`;
    // Alternative: if using React Router, you could use:
    // navigate(`/products/${productId}`);
  };

  const announcements = [
    {
      id: 1,
      type: "PRESS RELEASE",
      title: "Nelover debuts Model H",
      date: "September 9, 2024",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&crop=center",
      size: "large",
      hasImage: true
    },
    {
      id: 2,
      type: "PRESS RELEASE",
      title: "Nelover introduces Model A",
      date: "September 9, 2024",
      size: "medium",
      hasImage: false
    },
    {
      id: 3,
      type: "UPDATE",
      title: "Model S",
      date: "September 9, 2024",
      size: "small",
      hasImage: false
    },
    {
      id: 4,
      type: "PRESS RELEASE",
      title: "Model F",
      date: "September 9, 2024",
      size: "small",
      hasImage: false
    },
    {
      id: 5,
      type: "PRESS RELEASE",
      title: "Model E",
      date: "September 9, 2024",
      size: "small-bottom",
      hasImage: false
    },
    {
      id: 6,
      type: "PRESS RELEASE",
      title: "Model H",
      date: "September 9, 2024",
      size: "small-bottom",
      hasImage: false
    },
    {
      id: 7,
      type: "PRESS RELEASE",
      title: "penguinite",
      date: "September 9, 2024",
      size: "small-bottom",
      hasImage: false
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
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compact countertop gardens to professional growing systems, find the perfect fit for your space and needs.
          </p>
          
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-min">
          {announcements.map((announcement, index) => (
            <div
              key={announcement.id}
              className={`
                ${getSizeClasses(announcement.size)}
                group relative bg-white rounded-2xl shadow-sm hover:shadow-lg 
                transition-all duration-500 overflow-hidden cursor-pointer
                transform hover:-translate-y-1
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCardClick(announcement.id)}
            >
              {/* Image Section (for large card) */}
              {announcement.hasImage && (
                <div className="relative h-2/3 sm:h-3/5 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${announcement.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                    text-white font-bold leading-tight mb-auto
                    ${announcement.size === 'large' ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 
                      announcement.size === 'medium' ? 'text-base sm:text-lg md:text-xl' : 
                      announcement.size.includes('small-bottom') ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}
                  `}>
                    {announcement.title}
                  </h3>
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
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            </div>
          ))}
        </div>
                {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 mb-6">Need help choosing the right garden for you?</p>
          <button className="bg-white border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Get Expert Recommendation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCards;