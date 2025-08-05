import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Leaf, Users, Target, Award, ArrowRight, Globe, Heart, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const NelovelAboutPage = () => {
  const [expandedSection, setExpandedSection] = useState('who-we-are');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mouse move effect for hero section
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
      content: `We are Nelover, a passionate team of innovators, gardeners, and technology enthusiasts united by a simple belief: everyone deserves access to fresh, healthy food grown in their own home. Our diverse team combines expertise in sustainable agriculture, IoT technology, and user experience design to create intelligent indoor gardening solutions that make growing fresh produce accessible, enjoyable, and rewarding for everyone.`
    },
    {
      id: 'what-we-do',
      title: 'What We Do & Did',
      content: `We design and manufacture smart indoor gardening systems that revolutionize how people grow food at home. Our flagship products, the Nelover Garden Compact and Plus, feature advanced hydroponic technology, AI-powered growing optimization, and seamless smartphone integration. Since our founding, we've helped over 50,000 families grow fresh herbs, vegetables, and greens year-round, reducing their environmental footprint while improving their health and wellbeing.`
    },
    {
      id: 'goals-vision',
      title: 'Our Goals & Vision',
      content: `We envision a world where every home has access to fresh, pesticide-free produce regardless of climate, season, or location. Our mission is to democratize fresh food production through intelligent technology that makes gardening effortless and enjoyable. By 2030, we aim to have Nelover gardens in 1 million homes worldwide, creating a global network of sustainable food production that reduces transportation emissions and promotes healthier communities.`
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Gardeners', icon: Users },
    { number: '2M+', label: 'Plants Grown', icon: Leaf },
    { number: '15+', label: 'Countries Served', icon: Globe },
    { number: '98%', label: 'Success Rate', icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Sustainability First',
      description: 'Every decision we make considers environmental impact and long-term sustainability.'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We continuously push boundaries to make indoor gardening smarter and more efficient.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We build products that bring people together around the joy of growing fresh food.'
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${mousePosition.x * 0.1}%`,
              top: `${mousePosition.y * 0.1}%`,
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute w-64 h-64 bg-green-300/30 rounded-full blur-2xl animate-pulse"
            style={{
              right: `${mousePosition.x * 0.05}%`,
              bottom: `${mousePosition.y * 0.05}%`,
              animationDelay: '1s'
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16" data-animate id="hero-text">
            <h1 className={`text-5xl md:text-7xl font-light text-gray-900 mb-6 transition-all duration-1000 ${
              isVisible['hero-text'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Growing the Future
            </h1>
            <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible['hero-text'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              We're on a mission to bring fresh, sustainable food production into every home through intelligent indoor gardening technology.
            </p>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto" data-animate id="hero-image">
            <div className={`aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 delay-500 transform hover:scale-105 hover:shadow-3xl ${
              isVisible['hero-image'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-green-800">
                  <Leaf className="w-16 h-16 mx-auto mb-4 opacity-50 animate-bounce" />
                  <p className="text-lg font-medium">Our Story Video</p>
                  <p className="text-sm opacity-75">Coming Soon</p>
                </div>
              </div>
              {/* Animated Decorative Elements */}
              <div className="absolute top-8 left-8 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
              <div className="absolute top-12 left-16 w-2 h-2 bg-green-500/40 rounded-full animate-ping delay-1000"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 bg-green-300/25 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 right-20 w-3 h-3 bg-green-400/35 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6" data-animate id="stats-section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-700 hover:scale-110 ${
                  isVisible['stats-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200 hover:rotate-6 group">
                  <stat.icon className="w-8 h-8 text-green-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 transition-all duration-300 hover:text-green-600">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Section - Your Original Component Integrated */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6" data-animate id="about-section">
          <h2 className={`text-4xl md:text-6xl font-light mb-12 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent text-center transition-all duration-1000 ${
            isVisible['about-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            WHO WE ARE?
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Accordion Content */}
            <div className="space-y-1">
              {sections.map((section, index) => (
                <div 
                  key={section.id} 
                  className={`overflow-hidden transition-all duration-500 ${
                    isVisible['about-section'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between transition-all duration-300 hover:bg-gray-50 rounded-lg group"
                  >
                    <h3 className="text-xl font-bold text-gray-800 text-left group-hover:text-green-600 transition-colors duration-300">
                      {section.title}
                    </h3>
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
                    <div className="px-6 pb-6">
                      <div className={`h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4 transition-all duration-500 ${
                        expandedSection === section.id ? 'scale-x-100' : 'scale-x-0'
                      }`}></div>
                      <p className={`text-gray-700 leading-relaxed text-base transition-all duration-500 delay-200 ${
                        expandedSection === section.id ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                      }`}>
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Visual Block */}
            <div className="lg:sticky lg:top-8">
              <div className={`bg-gradient-to-br from-green-500 to-green-600 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden transform hover:scale-105 hover:-rotate-1 ${
                isVisible['about-section'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
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
                
                {/* Floating Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/25 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6" data-animate id="values-section">
          <h3 className={`text-4xl font-light text-center mb-16 transition-all duration-1000 ${
            isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>Our Core Values</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group ${
                  isVisible['values-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6" data-animate id="team-section">
          <h3 className={`text-4xl font-light text-center mb-16 transition-all duration-1000 ${
            isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>Meet Our Team</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <div 
                key={member} 
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-rotate-2 group ${
                  isVisible['team-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-8 h-8 text-green-600 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2 group-hover:text-green-600 transition-colors duration-300">Team Member {member}</h4>
                <p className="text-green-600 text-center mb-3 font-medium">Position Title</p>
                <p className="text-gray-600 text-sm text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Passionate about sustainable technology and making fresh food accessible to everyone.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" data-animate id="cta-section">
          <h3 className={`text-4xl font-light text-white mb-6 transition-all duration-1000 ${
            isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Ready to start your growing journey?
          </h3>
          <p className={`text-xl text-green-100 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Join thousands of home gardeners who are already growing fresh, healthy food with Nelover.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible['cta-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
              Explore Our Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default NelovelAboutPage;