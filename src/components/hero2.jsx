import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';


const ForestHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Forest Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80")`,
          transform: `scale(${1 + scrollY * 0.0002})`,
        }}
      />
      
      {/* Atmospheric Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.7) 100%)
          `
        }}
      />
      
      {/* Floating Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center text-white">
          {/* Subtitle */}
          <div 
            className={`mb-6 transform transition-all duration-1500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <p className="text-lg md:text-xl font-light tracking-wide text-white/90 hover:text-white transition-colors duration-500">
              Nelover Garden Classical
            </p>
          </div>

          {/* Main Title */}
          <div 
            className={`mb-12 transform transition-all duration-1500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block hover:scale-105 transition-transform duration-700 cursor-default">
                The definitive
              </span>
              <span className="block mt-2 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent hover:from-green-300 hover:via-emerald-200 hover:to-teal-200 transition-all duration-700 cursor-default">
                smart garden.
              </span>
            </h1>
          </div>

          {/* Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: '0.9s' }}
          >
            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <span className="relative z-10 flex items-center gap-3">
                <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Explore Garden
              </span>
            </button>

            <button className="group relative px-8 py-4 bg-transparent border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              <span className="relative z-10 flex items-center gap-3">
                Learn More
                <Plus size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
              <span className="text-sm mb-2 tracking-wide">Scroll to explore</span>
              <div className="w-px h-8 bg-white/30 relative overflow-hidden">
                <div className="absolute inset-0 w-full bg-white/70 animate-scroll-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-scroll-line { animation: scroll-line 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};
export default ForestHeroSection;