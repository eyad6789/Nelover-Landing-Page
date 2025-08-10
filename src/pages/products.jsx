import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, ChevronRight, Leaf, Droplets, 
  Sun, Wifi, Zap, Award, Users, Globe, ArrowRight, Star,
  Shield, Truck, Clock, Heart, Target, Lightbulb, Menu, X
} from 'lucide-react';
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
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl text-center text-white">
          {/* Animated Badge */}
          <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Award className="w-4 h-4 text-green-300" />
            <span className="text-sm font-medium">Winner of 2024 Innovation Award</span>
          </div>

          {/* Main Headlines */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="block">The definitive</span>
              <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                smart garden.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionary indoor gardening technology that grows fresh food year-round. 
              No soil, no mess, no experience needed.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { icon: Droplets, text: "90% Less Water", color: "from-blue-400 to-cyan-400" },
              { icon: Sun, text: "Year-Round Growth", color: "from-yellow-400 to-orange-400" },
              { icon: Wifi, text: "Smart Monitoring", color: "from-purple-400 to-pink-400" },
              { icon: Zap, text: "AI Optimized", color: "from-green-400 to-emerald-400" }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-green-200 group-hover:text-white transition-colors duration-300">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Growing Today
            </button>
            <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center">
              Watch Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-16 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-green-200">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
                <span className="ml-2 font-medium">4.9/5 (2,400+ reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="font-medium">30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span className="font-medium">Free Worldwide Shipping</span>
              </div>
            </div>
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
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const highlights = [
    {
      id: 1,
      title: ["Smart AI System.", "Growing made simple.", "Professional results."],
      duration: 4,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: ["Hydroponic Technology.", "No soil. No mess.", "Pure nutrition."],
      duration: 5,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: ["Year-round growing.", "Fresh herbs and vegetables.", "Every season."],
      duration: 3,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: ["Mobile App Control.", "Monitor anywhere.", "Smart notifications."],
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
      <div className="flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentVideo * 100}%)` }}>
        {highlights.map((highlight, index) => (
          <div key={highlight.id} className="w-full flex-shrink-0 px-4">
            <div className="relative h-[70vh] rounded-3xl overflow-hidden">
              {/* Video Background Placeholder */}
              <div className={`w-full h-full bg-gradient-to-br ${highlight.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Content Overlay */}
                <div className="absolute top-12 left-8 z-10 text-white">
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
  const sectionRef = useRef();
  useScrollAnimation(sectionRef);

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Choose Your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Garden</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          </div>

          <VideoCarousel />
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
            <a href="#" className="flex items-center text-green-600 hover:text-green-700 transition-colors font-medium">
              <span className="mr-2">Watch the film</span>
              <Play className="w-5 h-5" />
            </a>
            <a href="#" className="flex items-center text-green-600 hover:text-green-700 transition-colors font-medium">
              <span className="mr-2">Watch the event</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const Features = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  
  useScrollAnimation(sectionRef);
  useScrollAnimation(titleRef);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="opacity-0 translate-y-10 transition-all duration-1000 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-6">
            Explore the full <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">story</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h3 className="text-6xl md:text-8xl font-bold text-gray-800 leading-tight">
              Nelover.
            </h3>
            <h3 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
              Smart. Sustainable. Pro.
            </h3>
          </div>

          {/* Feature Video */}
          <div className="mb-16">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 rounded-3xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-green-800">
                  <div className="w-24 h-24 bg-white/30 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Wifi className="w-12 h-12 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Smart Growing Technology</h4>
                  <p className="text-green-700">AI-powered optimization in action</p>
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
                <div className="text-center text-blue-800">
                  <Droplets className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold">Hydroponic System</h4>
                  <p className="text-blue-600 text-sm mt-2">Clean, efficient growing</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-yellow-200 rounded-3xl overflow-hidden relative group shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-orange-800">
                  <Sun className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold">LED Grow Lights</h4>
                  <p className="text-orange-600 text-sm mt-2">Full spectrum nutrition</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Text */}
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div>
              <p className="text-lg leading-relaxed">
                Nelover Garden Pro is <span className="text-green-600 font-semibold">the first smart indoor garden to feature AI-powered growing optimization</span>, using advanced hydroponic technology for perfect plant growth.
              </p>
            </div>
            <div>
              <p className="text-lg leading-relaxed">
                Our intelligent system monitors every aspect of plant health, making indoor gardening <span className="text-green-600 font-semibold">effortless and rewarding for everyone</span>. You'll notice the difference from day one.
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
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('compact');
  const sectionRef = useRef();
  
  useScrollAnimation(sectionRef);

  const models = [
    { name: 'Garden Compact in Natural Wood', colors: ['#8B4513', '#D2691E', '#A0522D'], price: '$299' },
    { name: 'Garden Plus in Modern White', colors: ['#F5F5F5', '#E0E0E0', '#D3D3D3'], price: '$599' },
    { name: 'Garden Pro in Premium Black', colors: ['#2F2F2F', '#1C1C1C', '#0A0A0A'], price: '$999' },
  ];

  const sizes = [
    { label: 'Compact', value: 'compact' },
    { label: 'Plus', value: 'plus' },
    { label: 'Pro', value: 'pro' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-6xl font-light text-center text-gray-900 mb-16">
            Take a closer look.
          </h2>

          {/* Product Display */}
          <div className="relative h-[80vh] mb-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
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
            <p className="text-lg text-gray-600 mb-8">{models[selectedColor].name}</p>
            
            {/* Color Selection */}
            <div className="flex justify-center items-center mb-8">
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
              <div className="flex space-x-2 bg-gray-900 rounded-full p-1 ml-8">
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
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              AI Pro chip.
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-8">
              A revolution in smart gardening.
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              It's here. The most advanced indoor gardening system ever created.
            </p>
          </div>

          {/* Feature Video Frame */}
          <div className="relative mb-16">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-green-100 rounded-3xl overflow-hidden relative shadow-2xl">
              {/* Frame overlay */}
              <div className="absolute inset-4 border-2 border-gray-300 rounded-2xl" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-800">
                  <div className="w-20 h-20 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Wifi className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">Smart Garden Interface</h4>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-center mt-4 font-medium">Smart Garden Interface</p>
          </div>

          {/* Feature Text */}
          <div className="grid md:grid-cols-2 gap-12 text-gray-700">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                AI Pro delivers our <span className="text-green-600 font-semibold">most intelligent growing system by far</span>.
              </p>
              <p className="text-lg leading-relaxed">
                Your plants will <span className="text-green-600 font-semibold">thrive like never before</span>, with perfectly optimized growing conditions and automated care.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-green-600 text-sm font-medium mb-2">New</p>
              <p className="text-4xl font-bold text-gray-800 mb-2">Pro-class AI</p>
              <p className="text-gray-600">with smart sensors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const NelovelAppleInspiredApp = () => {
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

export default NelovelAppleInspiredApp;
