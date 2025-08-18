import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, Search, Compass, Star, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext'; // Import language context

const Error404Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, isRTL } = useLanguage(); // Use language context

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Star, delay: 0, duration: 6 },
    { icon: Zap, delay: 1, duration: 8 },
    { icon: Compass, delay: 2, duration: 7 },
    { icon: Search, delay: 3, duration: 9 },
  ];

  const handleGoBack = () => {
    // If there's history, go back, otherwise go home
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-6 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient following mouse */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)`
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className={`absolute top-20 ${isRTL ? 'right-20' : 'left-20'} w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 animate-bounce`} style={{ animationDuration: '6s' }} />
        <div className={`absolute top-40 ${isRTL ? 'left-32' : 'right-32'} w-24 h-24 bg-gradient-to-br from-emerald-200 to-green-300 rounded-lg opacity-20 animate-pulse`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-32 ${isRTL ? 'right-40' : 'left-40'} w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-300 rounded-full opacity-20 animate-ping`} style={{ animationDuration: '8s' }} />
        
        {/* Floating icons */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute opacity-10 animate-float"
            style={{
              [isRTL ? 'right' : 'left']: `${10 + (index * 20)}%`,
              top: `${20 + (index * 15)}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <element.icon className="w-8 h-8 text-green-400" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        {/* 404 Number with Animation */}
        <div className={`mb-8 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="relative">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent leading-none select-none">
              {isRTL ? '٤٠٤' : '404'}
            </h1>
            {/* Glowing effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-black text-green-600 opacity-20 blur-sm leading-none animate-pulse">
              {isRTL ? '٤٠٤' : '404'}
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('oopsPageNotFound')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('pageNotFoundDescription')}
          </p>
        </div>

        {/* Suggestions Box */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Beautiful animated elements */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          
          {/* Go Back Button */}
          <button 
            onClick={handleGoBack}
            className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-5 rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-200 flex items-center overflow-hidden"
          >
            {/* Button shine effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent ${isRTL ? 'translate-x-[100%] group-hover:translate-x-[-100%]' : 'translate-x-[-100%] group-hover:translate-x-[100%]'} transition-transform duration-1000`}></div>
            
            <ArrowLeft className={`w-6 h-6 ${isRTL ? 'ml-3 rotate-180 group-hover:translate-x-2' : 'mr-3 group-hover:-translate-x-2'} transition-transform duration-300`} />
            <span className="relative z-10">{t('goBack')}</span>
            
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </button>

          {/* Go Home Button */}
          <a 
            href="/"
            className="group relative bg-white border-2 border-green-600 text-green-600 px-12 py-5 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-green-200 flex items-center overflow-hidden"
          >
            {/* Button shine effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-green-600/10 to-transparent ${isRTL ? 'translate-x-[100%] group-hover:translate-x-[-100%]' : 'translate-x-[-100%] group-hover:translate-x-[100%]'} transition-transform duration-1000`}></div>
            
            <Home className={`w-6 h-6 ${isRTL ? 'ml-3' : 'mr-3'} group-hover:scale-110 transition-transform duration-300`} />
            <span className="relative z-10">{t('goHome')}</span>
            
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full bg-green-600/10 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          </a>
        </div>

        {/* Help Text */}
        <div className={`mt-16 transition-all duration-1000 delay-900 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Decorative elements */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-green-300"></div>
            <Star className="w-4 h-4 text-green-400 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-green-300"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes bounce-soft {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }
        
        /* Gradient text animation */
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* RTL Support */
        [dir="rtl"] .space-x-8 > * + * {
          margin-left: 0;
          margin-right: 2rem;
        }
        
        [dir="rtl"] .space-x-4 > * + * {
          margin-left: 0;
          margin-right: 1rem;
        }

        .rtl {
          direction: rtl;
        }
        
        .ltr {
          direction: ltr;
        }
      `}</style>
    </div>
  );
};

export default Error404Page;