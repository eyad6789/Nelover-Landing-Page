import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle, Instagram, 
  Facebook, Twitter, Linkedin, Globe, Send, Leaf, CheckCircle, 
  Star, Shield, Truck, Award, Users, Menu, X, Zap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Contact Page Component
const ContactPageOptimized = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', subject: '', email: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      info: "+964 773 6285 961",
      description: "Available 9 AM - 6 PM (Baghdad Time)",
      action: "Call Now",
      bgColor: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      icon: Mail,
      title: "Email Support", 
      info: "Eduru.Coie@Gmail.Com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      bgColor: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      info: "+964 773 6285 961", 
      description: "Quick messaging support",
      action: "Chat on WhatsApp",
      bgColor: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100"
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@nelover_iraq", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", handle: "Nelover Iraq", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", handle: "@nelover_iraq", color: "text-blue-400" },
    { icon: Linkedin, name: "LinkedIn", handle: "Nelover Company", color: "text-blue-700" }
  ];

  const locations = [
    {
      city: "Baghdad",
      address: "Al-Karrada District, Near Babylon Hotel",
      coords: "33.3152° N, 44.3661° E",
      type: "Main Office"
    },
    {
      city: "Erbil",
      address: "Ankawa District, Business Center", 
      coords: "36.1911° N, 44.0093° E",
      type: "Branch Office"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="contact" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 flex items-center">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center text-white" data-animate id="hero-section">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 transition-all duration-1000 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <MessageCircle className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium">24/7 Customer Support</span>
            </div>

            {/* Main Title */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="block">Get in</span>
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                We'd love to hear from you. Whether you have questions about our products, 
                need support, or want to collaborate - we're here to help.
              </p>
            </div>

            {/* Quick Contact Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: Clock, text: "24h Response", color: "from-blue-400 to-cyan-400" },
                { icon: Users, text: "Expert Team", color: "from-green-400 to-emerald-400" },
                { icon: Globe, text: "Global Support", color: "from-purple-400 to-pink-400" },
                { icon: MessageCircle, text: "Live Chat", color: "from-orange-400 to-red-400" }
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
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center">
                <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Send Message
              </button>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center">
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Call Us Now
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
        `}</style>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-animate id="contact-methods">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
              isVisible['contact-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Choose Your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Connection</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['contact-methods'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`group ${method.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                  isVisible['contact-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-700 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {method.info}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {method.description}
                  </p>
                  
                  <button className={`bg-gradient-to-r ${method.bgColor} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto group`}>
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6" data-animate id="form-section">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              
              {/* Left Column - Contact Form */}
              <div className={`p-12 transition-all duration-1000 ${
                isVisible['form-section'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
                    <Send className="w-8 h-8 text-green-600" />
                    <span>Send Us a Message</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    We're here to help with any questions or concerns.
                  </p>
                </div>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-2xl flex items-center space-x-3 animate-pulse">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 hover:border-gray-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 hover:border-gray-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 hover:border-gray-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 resize-none hover:border-gray-300"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'scale-95 opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By sending this message, you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className={`bg-gradient-to-br from-green-500 to-emerald-600 p-12 text-white relative overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible['form-section'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-lg animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-full animate-ping delay-1000"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-white rounded-full animate-bounce delay-500"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rounded-2xl animate-pulse delay-700"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8">Get in Touch Today</h3>
                  <p className="text-green-100 mb-12 text-lg leading-relaxed">
                    Ready to transform your home into a smart garden paradise? 
                    We're here to guide you every step of the way.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-8">
                    {/* Business Hours */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Clock className="w-6 h-6 text-green-200" />
                        <h4 className="text-xl font-bold">Business Hours</h4>
                      </div>
                      <div className="space-y-2 text-green-100">
                        <div className="flex justify-between">
                          <span>Monday - Thursday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday</span>
                          <span>9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="text-red-300">Closed</span>
                        </div>
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <MapPin className="w-6 h-6 text-green-200" />
                        <h4 className="text-xl font-bold">Our Locations</h4>
                      </div>
                      <div className="space-y-4">
                        {locations.map((location, index) => (
                          <div key={index} className="border-b border-white/20 last:border-b-0 pb-4 last:pb-0">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-bold text-green-100">{location.city}</h5>
                              <span className="text-xs bg-green-400/20 text-green-200 px-2 py-1 rounded-full">
                                {location.type}
                              </span>
                            </div>
                            <p className="text-sm text-green-200 mb-1">{location.address}</p>
                            <p className="text-xs text-green-300">{location.coords}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Globe className="w-6 h-6 text-green-200" />
                        <h4 className="text-xl font-bold">Follow Us</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {socialMedia.map((social, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer group">
                            <social.icon className="w-5 h-5 text-green-200 group-hover:scale-110 transition-transform duration-300" />
                            <div>
                              <p className="font-semibold text-sm text-green-100">{social.name}</p>
                              <p className="text-xs text-green-300">{social.handle}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
                        <Phone className="w-4 h-4 group-hover:animate-pulse" />
                        <span>Emergency Support</span>
                      </button>
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group">
                        <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                        <span>Live Chat Support</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-animate id="faq-section">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
              isVisible['faq-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Frequently Asked <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['faq-section'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly or use our WhatsApp chat for faster response."
              },
              {
                question: "Do you offer technical support?",
                answer: "Yes! We provide comprehensive technical support for all our smart garden products, including setup assistance, troubleshooting, and maintenance guidance."
              },
              {
                question: "Can I visit your showroom?",
                answer: "Absolutely! We have showrooms in Baghdad and Erbil where you can see our products in action. Please call ahead to schedule a visit and product demonstration."
              },
              {
                question: "What languages do you support?",
                answer: "We provide support in Arabic, English, and Kurdish to serve our diverse customer base across Iraq and the region."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
                  isVisible['faq-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-start space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${
            isVisible['faq-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Full FAQ
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPageOptimized;