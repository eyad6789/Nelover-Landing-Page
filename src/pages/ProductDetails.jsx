import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, ChevronRight, Leaf, Droplets, 
  Sun, Wifi, Zap, Award, Users, Globe, ArrowRight, Star,
  Shield, Truck, Clock, Heart, Target, Lightbulb, Menu, X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Animation utilities (simplified GSAP-like animations with CSS)
const useScrollAnimation = (ref, options = {}) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);
};

// Hero Section
const Hero = () => {
  const { t, isRTL } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)`
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <Leaf className="w-4 h-4 text-green-300 rotate-12" />
          </div>
        ))}
      </div>
      <Navbar />
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center w-full px-6">
        <div className={`max-w-6xl text-center text-white ${isRTL ? 'text-center' : ''}`}>
          {/* Animated Badge */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } ${isRTL ? 'space-x-reverse' : ''}`}>
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700">{t('innovationWinner')}</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('gardenProElite')}
            </h1>
            
            <p className={`text-2xl md:text-3xl text-gray-500 mb-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {t('futureIndoorGardening')}
            </p>
          </div>

          {/* Feature Highlights */}
          <div className={`relative mb-16 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 rounded-3xl p-12 overflow-hidden shadow-2xl">
              
              {/* Ambient Lighting Effects */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
              
              {/* 3D Product Container */}
              <div className="relative z-10 flex items-center justify-center h-96 md:h-[500px]">
                
                {/* Simulated 3D Product */}
                <div className="relative transform-gpu" 
                     style={{ 
                       transform: `rotateY(${scrollY * 0.1}deg) rotateX(${Math.sin(scrollY * 0.01) * 5}deg)`,
                       transition: 'transform 0.1s ease-out'
                     }}>
                  
                  {/* Main Product Body */}
                  <div className="relative">
                    {/* Base Unit */}
                    <div className="w-64 h-80 bg-gradient-to-b from-gray-100 via-white to-gray-50 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-200">
                      
                      {/* Screen/Display */}
                      <div className="absolute top-6 left-6 right-6 h-16 bg-gray-900 rounded-xl overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 opacity-90 animate-pulse"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-xs font-mono">
                            {t('language') === 'en' ? 'Growing... 89%' : 'ينمو... 89%'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Growing Chambers */}
                      <div className="absolute top-28 left-6 right-6 bottom-6 grid grid-cols-2 gap-3">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="bg-gradient-to-t from-green-100 to-green-50 rounded-lg relative overflow-hidden border border-green-200">
                            <div className="absolute inset-0 bg-green-200/50">
                              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 bg-green-500 rounded-t-full animate-pulse`} 
                                   style={{ height: `${30 + (i * 10)}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* LED Light Strip */}
                      <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 opacity-80 animate-pulse"></div>
                      
                      {/* Floating Plants */}
                      {[...Array(8)].map((_, i) => (
                        <Leaf 
                          key={i}
                          className="absolute w-3 h-3 text-green-500 opacity-70 animate-bounce"
                          style={{
                            left: `${20 + (i * 10)}%`,
                            top: `${40 + Math.sin(i) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '3s'
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Reflection */}
                    <div className="absolute top-full left-0 w-64 h-40 bg-gradient-to-b from-gray-200/40 to-transparent rounded-2xl transform scale-y-[-1] blur-sm opacity-40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className={`text-center mb-12 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl max-w-md mx-auto">
              <div className="mb-4">
                <div className={`text-sm text-gray-500 mb-2 ${isRTL ? 'text-center' : ''}`}>{t('startingAt')}</div>
                <div className="text-4xl md:text-5xl font-semibold text-gray-800">$499</div>
                <div className={`text-gray-500 mt-2 ${isRTL ? 'text-center' : ''}`}>{t('monthlyPayment')}</div>
              </div>
              
              <div className={`space-y-2 mb-6 text-sm text-gray-600 ${isRTL ? 'text-center' : ''}`}>
                <div className={`flex items-center justify-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <Star className="w-4 h-4 fill-current text-green-500" />
                  <span>{t('ratingReviews')}</span>
                </div>
                <div>{t('freeShipping')}</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`mb-2 flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <button className={`group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Play className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('startGrowingToday')}
            </button>
            <button className={`group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('watchDemo')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float { animation: float linear infinite; }
        
        /* Animation for scroll-triggered elements */
        .animate-in { 
          opacity: 1 !important; 
          transform: translateY(0) !important; 
          scale: 1 !important;
        }
      `}</style>
    </div>
  );
};

// Video Carousel Component
const VideoCarousel = () => {
  const { t, isRTL } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const highlights = [
    {
      id: 1,
      title: t('smartAISystem').split('.'),
      duration: 4,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: t('hydroponicTech').split('.'),
      duration: 5,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: t('yearRoundGrowing').split('.'),
      duration: 3,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: t('mobileAppControl').split('.'),
      duration: 4,
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentVideo(curr => (curr + 1) % highlights.length);
            return 0;
          }
          return prev + (100 / (highlights[currentVideo].duration * 10));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentVideo, highlights]);

  const handleVideoControl = () => {
    setIsPlaying(!isPlaying);
  };

  const resetVideo = () => {
    setCurrentVideo(0);
    setProgress(0);
    setIsPlaying(false);
  };

  return (
    <div className="relative">
      {/* Video Slides */}
      <div className={`flex transition-transform duration-700 ease-in-out ${isRTL ? 'flex-row-reverse' : ''}`}
           style={{ transform: `translateX(${isRTL ? '' : '-'}${currentVideo * 100}%)` }}>
        {highlights.map((highlight, index) => (
          <div key={highlight.id} className="w-full flex-shrink-0 px-4">
            <div className="relative h-[70vh] rounded-3xl overflow-hidden">
              {/* Video Background Placeholder */}
              <div className={`w-full h-full bg-gradient-to-br ${highlight.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Content Overlay */}
                <div className={`absolute top-12 left-8 z-10 text-white ${isRTL ? 'right-8 left-auto text-right' : ''}`}>
                  {highlight.title.map((line, i) => (
                    <p key={i} className="text-2xl md:text-4xl font-semibold mb-2">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Visual Elements */}
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Leaf className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-12 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        {/* Progress Indicators */}
        <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3">
          {highlights.map((_, index) => (
            <div key={index} className="relative">
              <div className="w-3 h-3 bg-gray-600 rounded-full" />
              {index === currentVideo && (
                <div 
                  className="absolute inset-0 bg-white rounded-full transition-all duration-100"
                  style={{ clipPath: `circle(${progress/2}% at center)` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={handleVideoControl}
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-black" />
          ) : (
            <Play className="w-6 h-6 text-black ml-1" />
          )}
        </button>

        {/* Reset Button */}
        <button
          onClick={resetVideo}
          className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200"
        >
          <RotateCcw className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

// Highlights Section
const Highlights = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef();
  useScrollAnimation(sectionRef);

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
          <div className={`text-center mb-16 ${isRTL ? 'text-center' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              {t('chooseYourHighlights')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          </div>

          <VideoCarousel />
          
          <div className={`flex flex-col md:flex-row justify-center items-center gap-6 mt-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <a href="#" className={`flex items-center text-green-600 hover:text-green-700 transition-colors font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className={isRTL ? 'ml-2' : 'mr-2'}>{t('watchFilm')}</span>
              <Play className="w-5 h-5" />
            </a>
            <a href="#" className={`flex items-center text-green-600 hover:text-green-700 transition-colors font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className={isRTL ? 'ml-2' : 'mr-2'}>{t('watchEvent')}</span>
              <ChevronRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef();
  const titleRef = useRef();
  
  useScrollAnimation(sectionRef);
  useScrollAnimation(titleRef);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="opacity-0 translate-y-10 transition-all duration-1000 mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-gray-800 text-center mb-6 ${isRTL ? 'text-center' : ''}`}>
            {t('exploreFullStory')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {/* Main Title */}
          <div className={`text-center mb-16 ${isRTL ? 'text-center' : ''}`}>
            <h3 className="text-6xl md:text-8xl font-bold text-gray-800 leading-tight">
              {t('neloverSmart').split('.')[0]}.
            </h3>
            <h3 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
              {t('neloverSmart').split('.').slice(1).join('.')}
            </h3>
          </div>

          {/* Feature Video */}
          <div className="mb-16">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-center text-green-800 ${isRTL ? 'text-center' : ''}`}>
                  <div className="w-24 h-24 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Wifi className="w-12 h-12 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{t('smartGrowingTech')}</h4>
                  <p className="text-green-700">{t('aiOptimization')}</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-green-500/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-emerald-400/40 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Feature Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-200 rounded-3xl overflow-hidden relative group shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-center text-blue-800 ${isRTL ? 'text-center' : ''}`}>
                  <Droplets className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold">{t('hydroponicSystem')}</h4>
                  <p className="text-blue-600 text-sm mt-2">{t('cleanEfficient')}</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl overflow-hidden relative group shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-center text-orange-800 ${isRTL ? 'text-center' : ''}`}>
                  <Sun className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold">{t('ledGrowLights')}</h4>
                  <p className="text-orange-600 text-sm mt-2">{t('fullSpectrumNutrition')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Text */}
          <div className={`grid md:grid-cols-2 gap-12 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
            <div>
              <p className="text-lg leading-relaxed">
                {t('smartGrowingDescription')}
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                {t('effortlessRewarding')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Model/Product Showcase Section
const ProductShowcase = () => {
  const { t, isRTL } = useLanguage();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('compact');
  const sectionRef = useRef();
  
  useScrollAnimation(sectionRef);

  const models = [
    { 
      name: t('language') === 'en' ? 'Garden Compact in Natural Wood' : 'حديقة مدمجة بالخشب الطبيعي', 
      colors: ['#8B4513', '#D2691E', '#A0522D'], 
      price: '$299' 
    },
    { 
      name: t('language') === 'en' ? 'Garden Plus in Modern White' : 'حديقة بلس بالأبيض العصري', 
      colors: ['#F5F5F5', '#E0E0E0', '#D3D3D3'], 
      price: '$599' 
    },
    { 
      name: t('language') === 'en' ? 'Garden Pro in Premium Black' : 'حديقة برو بالأسود الفاخر', 
      colors: ['#2F2F2F', '#1C1C1C', '#0A0A0A'], 
      price: '$999' 
    },
  ];

  const sizes = [
    { label: t('language') === 'en' ? 'Compact' : 'مدمج', value: 'compact' },
    { label: t('language') === 'en' ? 'Plus' : 'بلس', value: 'plus' },
    { label: t('language') === 'en' ? 'Pro' : 'برو', value: 'pro' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className={`text-4xl md:text-6xl font-light text-center text-gray-900 mb-16 ${isRTL ? 'text-center' : ''}`}>
            {t('takeCloserLook')}
          </h2>

          {/* Product Display */}
          <div className="relative h-[80vh] mb-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-center ${isRTL ? 'text-center' : ''}`}>
                <div className="w-64 h-64 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Leaf className="w-32 h-32 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {models[selectedColor].name}
                </h3>
                <p className="text-4xl font-bold text-green-600">
                  {models[selectedColor].price}
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-green-400/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-emerald-500/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-12 w-3 h-3 bg-green-300/40 rounded-full animate-bounce"></div>
          </div>

          {/* Controls */}
          <div className="text-center">
            <p className={`text-lg text-gray-600 mb-8 ${isRTL ? 'text-center' : ''}`}>{models[selectedColor].name}</p>
            
            {/* Color Selection */}
            <div className={`flex justify-center items-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="flex space-x-4 bg-gray-100 rounded-full p-2">
                {models.map((model, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === index ? 'border-gray-800 scale-110' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: model.colors[0] }}
                  />
                ))}
              </div>
              
              {/* Size Selection */}
              <div className={`flex space-x-2 bg-gray-900 rounded-full p-1 ${isRTL ? 'mr-8' : 'ml-8'}`}>
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedSize === size.value 
                        ? 'bg-white text-black' 
                        : 'text-white hover:text-gray-300'
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef();
  const chipRef = useRef();
  
  useScrollAnimation(sectionRef);
  useScrollAnimation(chipRef);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* AI Chip */}
        <div ref={chipRef} className="opacity-0 scale-150 transition-all duration-1000 text-center mb-20">
          <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <Zap className="w-24 h-24 text-white" />
          </div>
        </div>

        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
          {/* Title */}
          <div className={`text-center mb-16 ${isRTL ? 'text-center' : ''}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              {t('aiProChip')}
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8">
              {t('language') === 'en' ? 'A revolution in smart gardening.' : 'ثورة في البستنة الذكية.'}
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('mostAdvanced')}
            </p>
          </div>

          {/* Feature Video Frame */}
          <div className="relative mb-16">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-green-100 rounded-3xl overflow-hidden relative shadow-2xl">
              {/* Frame overlay */}
              <div className="absolute inset-4 border-2 border-gray-300 rounded-2xl" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-center text-gray-800 ${isRTL ? 'text-center' : ''}`}>
                  <div className="w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Wifi className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">{t('smartGardenInterface')}</h4>
                </div>
              </div>
            </div>
            <p className={`text-gray-600 text-center mt-4 font-medium ${isRTL ? 'text-center' : ''}`}>{t('smartGardenInterface')}</p>
          </div>

          {/* Feature Text */}
          <div className={`grid md:grid-cols-2 gap-12 text-gray-700 ${isRTL ? 'text-right' : ''}`}>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                {t('mostIntelligent')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('thriveNeverBefore')}
              </p>
            </div>
            
            <div className={`${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
              <p className="text-green-600 text-sm font-medium mb-2">
                {t('language') === 'en' ? 'New' : 'جديد'}
              </p>
              <p className="text-4xl font-bold text-gray-800 mb-2">
                {t('proClassAI').split(' ')[0]} {t('proClassAI').split(' ')[1]}
              </p>
              <p className="text-gray-600">{t('proClassAI').split(' ').slice(2).join(' ')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const ProductDetails = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Highlights />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default ProductDetails;