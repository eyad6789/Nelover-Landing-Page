import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, ChevronRight, Leaf, Users, Target, Award, ArrowRight, 
  Globe, Heart, Zap, Play, Star, Shield, Truck, Clock, Droplets, 
  Sun, Wifi, Calendar, TrendingUp, Eye, X, CheckCircle, Lightbulb
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

// Main About Page Component
const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState('who-we-are');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeValue, setActiveValue] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mouse move effect
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

  // Auto-rotate values every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      id: 'who-we-are',
      title: 'Who We Are',
      icon: Users,
      content: `We are Nelover, a passionate team of innovators, gardeners, and technology enthusiasts united by a simple belief: everyone deserves access to fresh, healthy food grown in their own home. Our diverse team combines expertise in sustainable agriculture, IoT technology, and user experience design to create intelligent indoor gardening solutions that make growing fresh produce accessible, enjoyable, and rewarding for everyone.`,
      highlight: "passionate team of innovators"
    },
    {
      id: 'what-we-do',
      title: 'What We Do & Did',
      icon: Target,
      content: `We design and manufacture smart indoor gardening systems that revolutionize how people grow food at home. Our flagship products, the Nelover Garden Compact and Plus, feature advanced hydroponic technology, AI-powered growing optimization, and seamless smartphone integration. Since our founding, we've helped over 50,000 families grow fresh herbs, vegetables, and greens year-round, reducing their environmental footprint while improving their health and wellbeing.`,
      highlight: "50,000 families"
    },
    {
      id: 'goals-vision',
      title: 'Our Goals & Vision',
      icon: Lightbulb,
      content: `We envision a world where every home has access to fresh, pesticide-free produce regardless of climate, season, or location. Our mission is to democratize fresh food production through intelligent technology that makes gardening effortless and enjoyable. By 2030, we aim to have Nelover gardens in 1 million homes worldwide, creating a global network of sustainable food production that reduces transportation emissions and promotes healthier communities.`,
      highlight: "1 million homes worldwide"
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Gardeners', icon: Users, color: 'from-indigo-500 to-cyan-500' },
    { number: '2M+', label: 'Plants Grown', icon: Leaf, color: 'from-green-500 to-emerald-500' },
    { number: '15+', label: 'Countries Served', icon: Globe, color: 'from-purple-500 to-pink-500' },
    { number: '98%', label: 'Success Rate', icon: Award, color: 'from-yellow-500 to-orange-500' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Sustainability First',
      description: 'Every decision we make considers environmental impact and long-term sustainability for our planet.',
      color: 'from-red-500 to-pink-500',
      features: ['Carbon neutral shipping', 'Recyclable materials', 'Energy-efficient systems']
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We continuously push boundaries to make indoor gardening smarter and more efficient.',
      color: 'from-yellow-500 to-orange-500',
      features: ['AI optimization', 'IoT integration', 'Continuous updates']
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We build products that bring people together around the joy of growing fresh food.',
      color: 'from-indigo-500 to-cyan-500',
      features: ['User community', '24/7 support', 'Growing guides']
    }
  ];

  const timeline = [
    { year: '2022', title: 'Founded', description: 'Nelover was born from a vision to revolutionize home gardening' },
    { year: '2023', title: 'First Product', description: 'Launched Garden Compact, our first smart garden system' },
    { year: '2024', title: 'Global Expansion', description: 'Reached 15 countries and 50,000+ happy customers' },
    { year: '2025', title: 'Innovation Award', description: 'Won the prestigious Innovation Award for sustainable technology' }
  ];

  const teamMembers = [
    { name: 'Mohamed Farhod ', role: 'CEO & Co-founder', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b15c?w=300&h=300&fit=crop&crop=face' },
    { name: 'Ali', role: 'CTO & Co-founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
    { name: 'Eyad Qasim', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
    { name: 'Mahidi ', role: 'Lead Scientist', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
    { name: 'Mohemd Hasan', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face' },
    { name: 'Hamed', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face' }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="about" />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 min-h-screen flex items-center">
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
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div data-animate id="hero-content">
              <div className={`transition-all duration-1000 ${
                isVisible['hero-content'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                  <Award className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-white">Innovation Award Winner 2024</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
                  Growing the
                  <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  We're on a mission to bring fresh, sustainable food production into every home through intelligent indoor gardening technology that makes growing easier than ever.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    onClick={() => setVideoModalOpen(true)}
                    className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Our Story
                  </button>
                  <button 
                    onClick={() => {
                      const teamSection = document.getElementById('team-section');
                      teamSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Meet The Team
                    <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">50K+</div>
                    <div className="text-sm text-green-200">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">15+</div>
                    <div className="text-sm text-green-200">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">98%</div>
                    <div className="text-sm text-green-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible['hero-content'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl backdrop-blur-sm border border-white/20 p-8">
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Leaf className="w-12 h-12" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                      <p className="text-white/80">Making fresh food accessible to everyone, everywhere</p>
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-ping delay-1000"></div>
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Video Modal */}
        {videoModalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
                <button 
                  onClick={() => setVideoModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Enhanced Story Content */}
              <div className="space-y-6">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center text-green-800">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-lg font-medium">Our Journey Video</p>
                    <p className="text-sm text-green-600 mt-2">Click to play</p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2 text-green-600" />
                      The Beginning
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Founded in 2022, Nelover was born from a simple observation: traditional gardening shouldn't be the only way to grow fresh food. Our founders, passionate about sustainability and technology, set out to make fresh food production accessible to everyone.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-green-600" />
                      Our Mission Today
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We've helped over 50,000 families grow fresh herbs, vegetables, and greens year-round. Our smart indoor gardens have grown over 2 million plants, reducing environmental impact while improving health and wellbeing.
                    </p>
                  </div>
                </div>

                {/* Quick Stats in Modal */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Our Impact</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">50,000+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">2M+</div>
                      <div className="text-sm text-gray-600">Plants Grown</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">15+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>

                {/* Call to Action in Modal */}
                <div className="text-center pt-4">
                  <button 
                    onClick={() => {
                      setVideoModalOpen(false);
                      const teamSection = document.getElementById('team-section');
                      teamSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Meet Our Amazing Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float { animation: float linear infinite; }
        `}</style>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-animate id="stats-section">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
              isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Our Impact in Numbers
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['stats-section'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-700 hover:scale-110 ${
                  isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6`}>
                  <stat.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Main About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6" data-animate id="about-section">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible['about-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Our Story
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['about-section'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Enhanced Accordion */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div 
                  key={section.id} 
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                    isVisible['about-section'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-8 py-6 flex items-center justify-between transition-all duration-300 hover:bg-green-50 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 text-left group-hover:text-green-600 transition-colors duration-300">
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
                    <div className="px-8 pb-8">
                      <div className={`h-px bg-gradient-to-r from-transparent via-green-300 to-transparent mb-6 transition-all duration-500 ${
                        expandedSection === section.id ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                      <p className={`text-gray-700 leading-relaxed text-base transition-all duration-500 delay-200 ${
                        expandedSection === section.id ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
                      }`}>
                        {section.content.split(section.highlight).map((part, i) => (
                          <span key={i}>
                            {part}
                            {i === 0 && (
                              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent font-semibold">
                                {section.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Enhanced Visual with Timeline */}
            <div className="lg:sticky lg:top-8">
              <div className={`transition-all duration-1000 delay-600 ${
                isVisible['about-section'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                {/* Main Visual */}
                <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden transform hover:scale-105 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  <div className="relative z-10 text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 backdrop-blur-sm">
                      <Heart className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                    <p className="text-white/90 leading-relaxed">
                      Making fresh, healthy food accessible to everyone through innovative smart gardening technology
                    </p>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-ping delay-1000"></div>
                </div>

                {/* Timeline */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Our Journey</h4>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">{item.title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-animate id="values-section">
          <div className="text-center mb-16">
            <h3 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
              isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>Our Core Values</h3>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              The principles that guide everything we do at Nelover
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
                onMouseEnter={() => setActiveValue(index)}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Feature list */}
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.color} transition-all duration-300 ${
                  activeValue === index ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6" data-animate id="team-section">
          <div className="text-center mb-16">
            <h3 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${
              isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>Meet Our Team</h3>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              The passionate individuals behind Nelover's innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                  isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Passionate about sustainable technology and making fresh food accessible to everyone.
                  </p>
                </div>

                {/* Social links placeholder */}
                <div className="flex justify-center space-x-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {['L', 'T', 'E'].map((social, idx) => (
                    <div key={idx} className="w-8 h-8 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg flex items-center justify-center text-sm font-bold transition-colors duration-300 cursor-pointer">
                      {social}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection/>
      <Footer />
    </div>
  );
};

export default AboutUs;