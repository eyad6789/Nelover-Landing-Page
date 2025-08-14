import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Clock, Zap, Heart, ArrowRight, Play, X, Leaf, Target, Award } from 'lucide-react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Droplets, text: "90% less water usage" },
    { icon: Clock, text: "Fresh herbs year-round" },
    { icon: Zap, text: "AI-powered growth optimization" },
    { icon: Heart, text: "Pesticide-free produce" }
  ];

  return (
    <section id="cta-section" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
              Smart Garden Journey?
            </span>
          </h2>
          
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families already growing fresh, healthy food at home. 
            No green thumb required – our smart technology does the work for you.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group transition-all duration-500`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <benefit.icon className="w-8 h-8 text-green-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-sm text-green-100 group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              to="/products"
              className="group bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center"
            >
              <span>Shop Smart Gardens</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <button 
              onClick={() => setVideoModalOpen(true)}
              className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Quick Product Links */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-green-200 mb-4">Or explore our popular models:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/garden-pro-elite" 
                className="text-green-300 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-green-300"
              >
                GardenPro Elite - $499
              </Link>
              <Link 
                to="/garden-compact" 
                className="text-green-300 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-green-300"
              >
                GardenCompact - $299
              </Link>
              <Link 
                to="/garden-hydro-max" 
                className="text-green-300 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-green-300"
              >
                HydroMax Pro - $1,299
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Smart Garden Demo</h3>
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Demo Content */}
            <div className="space-y-6">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-green-800">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-lg font-medium">Watch How It Works</p>
                  <p className="text-sm text-green-600 mt-2">See the magic of smart gardening</p>
                </div>
              </div>

              {/* Benefits Showcase */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-green-600" />
                    AI-Powered Growth
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our smart system monitors and adjusts light, water, and nutrients automatically. Your plants get exactly what they need, when they need it.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-green-600" />
                    Effortless Growing
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    No green thumb required! Just plant, connect to the app, and watch your garden thrive. Perfect for beginners and experts alike.
                  </p>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Proven Results</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">50K+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">90%</div>
                    <div className="text-sm text-gray-600">Less Water</div>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">Hydroponic</h5>
                  <p className="text-xs text-gray-600">Soil-free growing</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">Year-Round</h5>
                  <p className="text-xs text-gray-600">Fresh herbs always</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">Organic</h5>
                  <p className="text-xs text-gray-600">Pesticide-free</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">Smart App</h5>
                  <p className="text-xs text-gray-600">Remote monitoring</p>
                </div>
              </div>

              {/* CTA in Modal */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Ready to start growing?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/garden-pro-elite"
                    onClick={() => setVideoModalOpen(false)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    Start with GardenPro Elite
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/products"
                    onClick={() => setVideoModalOpen(false)}
                    className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    View All Models
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;