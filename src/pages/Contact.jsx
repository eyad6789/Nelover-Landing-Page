import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle, Instagram, Facebook, Twitter, Linkedin, Globe, Send, Leaf, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
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
      title: "Phone Number",
      info: "+964 773 6285 961",
      description: "Available 9 AM - 6 PM (Baghdad Time)",
      action: "Call Now",
      bgColor: "bg-red-100",
      iconColor: "text-red-500",
      buttonClass: "bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
    },
    {
      icon: Mail,
      title: "Email Address", 
      info: "Eduru.Coie@Gmail.Com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      buttonClass: "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+964 773 6285 961", 
      description: "Quick messaging support",
      action: "Chat on WhatsApp",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      buttonClass: "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@nelover_iraq", color: "text-pink-500", hoverColor: "hover:text-pink-600" },
    { icon: Facebook, name: "Facebook", handle: "Nelover Iraq", color: "text-blue-600", hoverColor: "hover:text-blue-700" },
    { icon: Twitter, name: "Twitter", handle: "@nelover_iraq", color: "text-blue-400", hoverColor: "hover:text-blue-500" },
    { icon: Linkedin, name: "LinkedIn", handle: "Nelover Company", color: "text-blue-700", hoverColor: "hover:text-blue-800" }
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <Navbar currentPage="contact" />
      
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
          className="absolute w-64 h-64 bg-blue-300/30 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            animationDelay: '1s'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-bounce delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-animate id="hero-section">
            <h1 className={`text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible['hero-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              GET IN TOUCH
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible['hero-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              We'd love to hear from you. Whether you have questions about our products, 
              need support, or want to collaborate - we're here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="mb-20" data-animate id="contact-methods">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div 
                  key={index} 
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:-rotate-1 group ${
                    isVisible['contact-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 400}ms` }}
                >
                  <div className={`${method.bgColor} p-4 rounded-2xl inline-block mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <method.icon className={`w-8 h-8 ${method.iconColor} transition-all duration-300 group-hover:animate-pulse`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{method.title}</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-2 group-hover:scale-105 transition-transform duration-300">{method.info}</p>
                  <p className="text-sm text-gray-500 mb-6 group-hover:text-gray-600 transition-colors duration-300">{method.description}</p>
                  <button className={`${method.buttonClass} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl active:scale-95 flex items-center space-x-2 group`}>
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Main Contact Form & Info */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20" data-animate id="form-section">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column - Contact Form */}
              <div className={`transition-all duration-1000 ${
                isVisible['form-section'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center space-x-3">
                  <Send className="w-8 h-8 text-green-600" />
                  <span>Send Us a Message</span>
                </h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-2xl flex items-center space-x-3 animate-pulse">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      placeholder="Enter your full name..."
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-green-400 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 resize-none bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      placeholder="Tell us what you want to share..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center space-x-2 ${
                      isSubmitting ? 'scale-95 opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Right Column - Additional Info */}
              <div className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible['form-section'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                
                {/* Business Hours */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-500 group-hover:animate-pulse" />
                    <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    {[
                      { day: 'Monday - Thursday:', hours: '9:00 AM - 6:00 PM' },
                      { day: 'Friday:', hours: '9:00 AM - 1:00 PM' },
                      { day: 'Saturday:', hours: '10:00 AM - 4:00 PM' },
                      { day: 'Sunday:', hours: 'Closed', closed: true }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center group p-2 rounded-lg hover:bg-white/50 transition-all duration-300">
                        <span>{item.day}</span>
                        <span className={`font-semibold ${item.closed ? 'text-red-500' : 'group-hover:text-blue-500'} transition-colors duration-300`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Globe className="w-6 h-6 text-purple-500" />
                    <span>Follow Us</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialMedia.map((social, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-1"
                      >
                        <social.icon className={`w-5 h-5 ${social.color} ${social.hoverColor} group-hover:scale-110 transition-all duration-300`} />
                        <div>
                          <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{social.name}</p>
                          <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{social.handle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-bold text-gray-800">Our Locations</h3>
                  </div>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">{location.city}</h4>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full animate-pulse">
                            {location.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1 group-hover:text-gray-700 transition-colors duration-300">{location.address}</p>
                        <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors duration-300">{location.coords}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute top-2 right-2 w-20 h-20 bg-white/5 rounded-full animate-ping"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6" />
                      <span>Need Immediate Help?</span>
                    </h3>
                    <p className="text-green-100 text-sm mb-6">
                      For urgent inquiries or technical support, reach out to us directly.
                    </p>
                    <div className="space-y-3">
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2 group">
                        <Phone className="w-4 h-4 group-hover:animate-pulse" />
                        <span>Emergency Support</span>
                      </button>
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2 group">
                        <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                        <span>Technical Help</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;