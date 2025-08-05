import React, { useState, useEffect } from 'react';
import { Play, Plus, ChevronDown, ChevronRight, Target, Users, Lightbulb, Phone, Mail, ArrowRight, Leaf } from 'lucide-react';

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Updated navigation items with proper routing paths
  const navLists = [
    { label: "Home", path: "/", id: "home" },
    { label: "Products", path: "/products", id: "products" },
    { label: "About", path: "/about", id: "about" },
    { label: "Contact", path: "/contact", id: "contact" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full shadow-sm top-0 z-50 absolute">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 group">
            <Leaf className="w-8 h-8 text-green-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-green-400">Nelover</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.path}
                className={`px-3 py-2 text-sm lg:text-base font-normal transition-colors duration-200 ease-in-out relative group ${
                  currentPage === nav.id 
                    ? 'text-green-400 font-medium' 
                    : 'text-white hover:text-green-400'
                }`}
              >
                {nav.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                  currentPage === nav.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-green-400 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  currentPage === nav.id
                    ? 'text-green-600 bg-green-50 font-semibold'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};


// Your Forest Hero Section (enhanced)
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

// Your Products Section (enhanced)
const AnnouncementGrid = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const announcements = [
    {
      id: 1,
      title: "Nelover Garden Compact",
      description: "Perfect starter kit for fresh herbs",
      date: "Starting at $299",
      type: "BESTSELLER",
      size: "hero-square",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&crop=entropy&auto=format",
    },
    {
      id: 2,
      title: "Nelover Garden Plus", 
      description: "Advanced features for serious gardeners",
      date: "Starting at $599",
      type: "FEATURED",
      size: "hero-rectangle",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      id: 3,
      title: "Smart Sensors",
      description: "Monitor your garden remotely",
      date: "From $199",
      type: "NEW",
      size: "small-square",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      id: 4,
      title: "Grow Lights",
      description: "Full spectrum LED technology",
      date: "From $149",
      type: "ACCESSORIES",
      size: "small-square", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      id: 5,
      title: "Nutrient Kits",
      description: "Organic formulas for optimal growth",
      date: "From $79",
      type: "ESSENTIALS",
      size: "",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      id: 6,
      title: "Garden Pro",
      description: "Professional grade with AI optimization",
      date: "From $999",
      type: "PREMIUM",
      size: "",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop&crop=entropy&auto=format",
    }
  ];

  const getCardClasses = (size) => {
    const baseClasses = "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl";
    
    switch (size) {
      case 'hero-square': return `${baseClasses} col-span-2 row-span-2 aspect-square`;
      case 'hero-rectangle': return `${baseClasses} col-span-2 row-span-1 aspect-[2/1]`;
      case 'small-square': return `${baseClasses} col-span-1 row-span-1 aspect-square`;
      default: return `${baseClasses} col-span-1 row-span-1 aspect-square`;
    }
  };

  return (
    <div id="products" className="bg-white py-20">
      <div className="w-11/12 mx-auto" data-animate id="products-section">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl font-light text-gray-800 mb-6 transition-all duration-1000 ${
            isVisible['products-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Our Smart <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Gardens</span>
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isVisible['products-section'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map((item, index) => (
            <div
              key={item.id}
              className={`${getCardClasses(item.size)} ${
                isVisible['products-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150 + 500}ms` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-green-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Type Badge */}
                <div className="self-start">
                  <span className="bg-green-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.type}
                  </span>
                </div>

                {/* Title and Description */}
                <div className="mt-auto">
                  <h3 className={`font-bold mb-2 leading-tight group-hover:scale-105 transition-transform duration-300 ${
                    item.size === 'hero-square' ? 'text-3xl' : 
                    item.size === 'hero-rectangle' ? 'text-2xl' : 'text-lg'
                  }`}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm opacity-90 mb-2">{item.description}</p>
                  )}
                  <p className="text-sm opacity-80 font-medium">{item.date}</p>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="w-8 h-8 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Your About Section (enhanced)
const WhoWeAreSection = () => {
  const [expandedSection, setExpandedSection] = useState('who-we-are');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      icon: Users,
      content: `We are Nelover, a passionate team of innovators, gardeners, and technology enthusiasts united by a simple belief: everyone deserves access to fresh, healthy food grown in their own home. Our diverse team combines expertise in sustainable agriculture, IoT technology, and user experience design to create intelligent indoor gardening solutions that make growing fresh produce accessible, enjoyable, and rewarding for everyone.`,
      gradient: 'from-green-400 to-green-600'
    },
    {
      id: 'what-we-do',
      title: 'What We Do & Did',
      icon: Target,
      content: `We design and manufacture smart indoor gardening systems that revolutionize how people grow food at home. Our flagship products, the Nelover Garden Compact and Plus, feature advanced hydroponic technology, AI-powered growing optimization, and seamless smartphone integration. Since our founding, we've helped over 50,000 families grow fresh herbs, vegetables, and greens year-round, reducing their environmental footprint while improving their health and wellbeing.`,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'goals-vision',
      title: 'Our Goals & Vision',
      icon: Lightbulb,
      content: `We envision a world where every home has access to fresh, pesticide-free produce regardless of climate, season, or location. Our mission is to democratize fresh food production through intelligent technology that makes gardening effortless and enjoyable. By 2030, we aim to have Nelover gardens in 1 million homes worldwide, creating a global network of sustainable food production that reduces transportation emissions and promotes healthier communities.`,
      gradient: 'from-emerald-500 to-green-700'
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div id="about" className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-green-300/20 to-lime-300/20 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="relative z-10 w-11/12 mx-auto">
        {/* Title */}
        <div className="text-center mb-16" data-animate id="about-title">
          <h1 className={`text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible['about-title'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          }`}>
            WHO WE ARE?
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isVisible['about-title'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start" data-animate id="about-content">
          {/* Left Column - Accordion */}
          <div className={`space-y-4 transition-all duration-1000 ${
            isVisible['about-content'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className={`transition-all duration-500 ${
                  isVisible['about-content'] ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-6 flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-2xl mb-2 hover:bg-white transition-all duration-300 hover:bg-green-100 group-hover:bg-green-100 group-hover:border-green-600 group-hover:border-2 group-hover:border-solid group-hover:border-green-600 group-hover:border-opacity-50`}
 hover:scale-[1.02] group border border-green-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${section.gradient} text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                      <section.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 text-left group-hover:text-gray-900 transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedSection === section.id ? (
                      <ChevronDown className="w-6 h-6 text-green-600 transition-all duration-300 group-hover:scale-110" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 transition-all duration-300 group-hover:text-green-600 group-hover:translate-x-1" />
                    )}
                  </div>
                </button>

                {/* Section Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 bg-white/60 backdrop-blur-sm rounded-2xl mx-1 border border-green-50">
                    <div className={`h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mb-6 transition-all duration-500 ${
                      expandedSection === section.id ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                    <p className={`text-gray-700 leading-relaxed text-base transition-all duration-500 delay-200 ${
                      expandedSection === section.id ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                    }`}>
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual */}
          <div className="lg:sticky lg:top-8">
            <div className={`transition-all duration-1000 delay-600 ${
              isVisible['about-content'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden transform hover:scale-105 hover:-rotate-1">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-lg animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-full animate-ping delay-1000"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-white rounded-full animate-bounce delay-500"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rounded-2xl animate-pulse delay-700"></div>
                </div>
                
                {/* Main Content */}
                <div className="text-center text-white p-8 relative z-10">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 backdrop-blur-sm">
                    <Leaf className="w-12 h-12 group-hover:animate-pulse" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">Our Garden</h4>
                  <p className="text-white/80 text-sm transition-all duration-300 group-hover:text-white">
                    Where innovation meets nature
                  </p>
                </div>
              </div>
              
              {/* Stats Cards */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Call-to-Action Section (conversion-focused)
const CTASection = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const benefits = [
    "90% less water than traditional gardening",
    "Fresh herbs and vegetables year-round",
    "No soil, no mess, no experience needed",
    "Smart AI optimization for perfect growth"
  ];

  const ctaCards = [
    {
      title: "Start Growing Today",
      description: "Get your first Nelover garden and start growing fresh food at home",
      buttonText: "Shop Gardens",
      buttonStyle: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
      icon: "🌱"
    },
    {
      title: "Need Help Choosing?",
      description: "Talk to our garden experts and find the perfect system for your space",
      buttonText: "Get Expert Advice",
      buttonStyle: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
      icon: "🤝"
    },
    {
      title: "Questions?",
      description: "Have questions about our smart gardens? We're here to help you succeed",
      buttonText: "Contact Support",
      buttonStyle: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      icon: "💬"
    }
  ];

  return (
    <div id="cta" className="relative overflow-hidden">
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-48 h-48 bg-white/3 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/4 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/6 rounded-full animate-bounce delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10" data-animate id="main-cta">
          <h2 className={`text-4xl md:text-6xl font-light text-white mb-6 transition-all duration-1000 ${
            isVisible['main-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Ready to Start <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">Growing Fresh?</span>
          </h2>
          
          <p className={`text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible['main-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Join thousands of families already growing fresh, healthy food at home with Nelover's smart gardens. 
            No green thumb required!
          </p>

          {/* Benefits List */}
          <div className={`grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible['main-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-green-100 group"
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
              >
                <div className="w-2 h-2 bg-green-300 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="group-hover:text-white transition-colors duration-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible['main-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 flex items-center justify-center group transform hover:scale-105 shadow-xl hover:shadow-2xl">
              Shop Smart Gardens
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Talk to Expert
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-green-200 transition-all duration-1000 delay-900 ${
            isVisible['main-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center space-x-2">
              <span className="font-medium">4.9/5 Stars (2,400+ Reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Free Shipping Worldwide</span>
            </div>
            <div className="flex items-center space-x-2">

              <span className="font-medium">30-Day Money Back</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-50/70 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="group">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-6 h-6 text-green-500 group-hover:animate-pulse transition-all duration-300" />
              <span className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">Nelover</span>
            </div>
            <p className="text-sm group-hover:text-gray-200 transition-colors duration-300">
              Growing the future of indoor gardening with intelligent, sustainable solutions.
            </p>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-3">Products</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Garden Compact</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Garden Plus</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Garden Pro</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Press</a></li>
              <li><a href="#" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold text-white mb-3">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Get In Touch</a></li>
              <li><a href="tel:+9647736285961" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">+964 773 6285 961</a></li>
              <li><a href="mailto:Eduru.Coie@Gmail.Com" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Email Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-all duration-300 hover:translate-x-1">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="hover:text-green-400 transition-colors duration-300">&copy; 2025 Nelover. All rights reserved. Made with ❤️ in Iraq.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Page Component
const NelovelCustomHomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ForestHeroSection />
      <AnnouncementGrid />
      <WhoWeAreSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default NelovelCustomHomePage;