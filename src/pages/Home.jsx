import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { 
  Play, Plus, ChevronDown, ChevronRight, Target, Users, Lightbulb, 
  Phone, Mail, ArrowRight, Leaf, Star, Shield, Truck, Clock,
  Zap, Droplets, Sun, Wifi, Heart, Award, Check, Menu, X
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementCards from '../components/AnnouncementCards ';
import CTASection from '../components/CTASection';

const HeroSection = () => {
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
        {[...Array(20)].map((_, i) => (
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

          {/* Main Headlines */}
          <div className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <span>Growing </span><span className="bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                Smarter</span><span className='block'>Gardens</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Revolutionary indoor gardening technology that grows fresh food year-round. 
              No soil, no mess, no experience needed.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              to="/garden-pro-elite"
              className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Growing Today
            </Link>
            <Link 
              to="/products"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              View All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Access Links */}
          <div className={`mt-12 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/garden-compact" className="text-green-200 hover:text-white transition-colors border-b border-transparent hover:border-green-200">
                Perfect for Small Spaces →
              </Link>
              <Link to="/garden-hydro-max" className="text-green-200 hover:text-white transition-colors border-b border-transparent hover:border-green-200">
                Professional Growing →
              </Link>
              <Link to="/smart-tower-vertical" className="text-green-200 hover:text-white transition-colors border-b border-transparent hover:border-green-200">
                Vertical Gardens →
              </Link>
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
      `}</style>
    </div>
  );
};

// Updated Products Section with Navigation
const ProductsSection = () => {
  return (
    <section id="products-section" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Product Links */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your Perfect <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Garden</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">Discover our complete range of smart indoor gardening solutions</p>
          
          {/* Quick Product Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              to="/garden-pro-elite"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Elite Series
            </Link>
            <Link 
              to="/garden-compact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center"
            >
              <Leaf className="w-5 h-5 mr-2" />
              Compact Series
            </Link>
            <Link 
              to="/garden-hydro-max"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center"
            >
              <Droplets className="w-5 h-5 mr-2" />
              Pro Series
            </Link>
            <Link 
              to="/smart-tower-vertical"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center"
            >
              <Sun className="w-5 h-5 mr-2" />
              Tower Series
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <AnnouncementCards/>
        
        {/* View All Products Link */}
        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg transition-colors duration-300 group"
          >
            View All Products & Compare Features
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Updated About Section with Product Integration
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: Target,
      content: "We're revolutionizing how people grow food at home. Our mission is to make fresh, healthy produce accessible to everyone, regardless of space, experience, or climate. Through innovative technology and sustainable practices, we're building a future where every home can be a source of fresh nutrition.",
      cta: { text: "See Our Products", link: "/products" }
    },
    {
      id: 'story',
      title: 'Our Story',
      icon: Heart,
      content: "Founded in 2022 by a team of agricultural engineers and tech innovators, Nelover was born from a simple observation: traditional gardening shouldn't be the only way to grow fresh food. We've helped over 50,000 families grow millions of fresh vegetables and herbs, reducing their carbon footprint while improving their health.",
      cta: { text: "Start Your Journey", link: "/garden-pro-elite" }
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: Lightbulb,
      content: "We envision a world where fresh food production is decentralized, sustainable, and accessible to all. By 2030, we aim to have Nelover gardens in 1 million homes worldwide, creating a global network of sustainable food production that reduces transportation emissions and promotes healthier communities.",
      cta: { text: "Join the Movement", link: "/garden-compact" }
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: Users },
    { number: '2M+', label: 'Plants Grown', icon: Leaf },
    { number: '90%', label: 'Water Saved', icon: Droplets },
    { number: '365', label: 'Days Growing', icon: Clock }
  ];

  return (
    <section id="about-section" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Growing the <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Future</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Tab Navigation */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100/10 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white group-hover:scale-110'
                    }`}>
                      <tab.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{tab.title}</h3>
                      <p className={`text-sm leading-relaxed ${
                        activeTab === tab.id ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {activeTab === tab.id ? tab.content : tab.content.substring(0, 100) + '...'}
                      </p>
                      {activeTab === tab.id && (
                        <Link 
                          to={tab.cta.link}
                          className="inline-flex items-center mt-4 text-white/90 hover:text-white font-medium transition-colors"
                        >
                          {tab.cta.text}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 p-8 shadow-2xl">
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Leaf className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Smart Growing Technology</h4>
                    <p className="text-white/80 mb-6">AI-powered systems that learn and adapt to grow the perfect plants every time.</p>
                    <Link 
                      to="/garden-pro-elite"
                      className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors duration-300"
                    >
                      See Technology
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <Wifi className="w-8 h-8 text-green-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component Assembly
const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;