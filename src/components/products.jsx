import React from 'react';

const AnnouncementGrid = () => {
  const announcements = [
    {
      id: 1,
      title: "Nelover debuts Model H",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "hero-square",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=600&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 2,
      title: "Nelover introduces Model A",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "hero-rectangle",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 3,
      title: "Model S",
      description: "Advanced autonomous driving with cutting-edge AI technology",
      date: "September 8, 2024",
      type: "UPDATES",
      size: "small-square",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 4,
      title: "Model F",
      description: "Future-ready design with sustainable energy solutions",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "small-square",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 5,
      title: "Model E",
      description: "Electric performance meets luxury in perfect harmony",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    }
    ,{
      id: 6,
      title: "Model E",
      description: "Electric performance meets luxury in perfect harmony",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    },
    {
      id: 7,
      title: "Model E",
      description: "Electric performance meets luxury in perfect harmony",
      date: "September 8, 2024",
      type: "PRESS RELEASE",
      size: "hero-rectangle",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=entropy&auto=format",
      gradient: "from-pink-500 to-rose-400"
    },
  ];

  const getCardClasses = (size) => {
    const baseClasses = "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl";
    
    switch (size) {
      case 'hero-square':
        return `${baseClasses} col-span-2 row-span-2 aspect-square`;
      case 'hero-rectangle':
        return `${baseClasses} col-span-2 row-span-1 aspect-[2/1]`;
      case 'small-square':
        return `${baseClasses} col-span-1 row-span-1 aspect-square`;
      default:
        return `${baseClasses} col-span-1 row-span-1 aspect-square`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Here's what we announced.
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={getCardClasses(item.size)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>

              Content
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Type Badge */}
                <div className="flex justify-start">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-white bg-opacity-25 rounded-full backdrop-blur-sm">
                    {item.type}
                  </span>
                </div>

                {/* Title, Description and Date */}
                <div className="mt-auto">
                  <h3 className={`font-bold mb-2 leading-tight ${
                    item.size === 'hero-square' ? 'text-3xl' : 
                    item.size === 'hero-rectangle' ? 'text-2xl' : 
                    'text-lg'
                  }`}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm opacity-90 mb-2 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <p className="text-xs opacity-80 font-medium">
                    {item.date}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-8 h-8 bg-white bg-opacity-25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementGrid;