import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle, Instagram, Facebook, Twitter, Linkedin, Globe, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  // Refs for animations
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactMethodsRef = useRef(null);
  const formRef = useRef(null);
  const rightColumnRef = useRef(null);
  const footerRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', subject: '', email: '', message: '' });
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
      buttonColor: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      info: "Eduru.Coie@Gmail.Com",
      description: "We'll respond within 24 hours",
      action: "Send Email",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "+964 773 6285 961",
      description: "Quick messaging support",
      action: "Chat on WhatsApp",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
      buttonColor: "bg-green-500 hover:bg-green-600"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="px-8 py-16 relative z-10" ref={heroRef}>
        <div className="w-11/12 mx-auto text-center mb-16">
          <h1 
            ref={titleRef}
            className="text-6xl font-black mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"
          >
            GET IN TOUCH
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We'd love to hear from you. Whether you have questions about our products, 
            need support, or want to collaborate - we're here to help.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="w-11/12 mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8" ref={contactMethodsRef}>
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/20 hover:transform hover:scale-105 hover:shadow-xl"
              >
                <div className={`${method.bgColor} p-4 rounded-2xl inline-block mb-6 transform transition-transform duration-300 hover:rotate-12`}>
                  <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{method.info}</p>
                <p className="text-sm text-gray-500 mb-6">{method.description}</p>
                <button className={`${method.buttonColor} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl active:scale-95`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Main Contact Form & Info */}
        <div className="w-11/12 mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/20">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column - Contact Form */}
              <div ref={formRef}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Send Us a Message
                </h2>
                
                <div className="space-y-8">
                  <div className="form-group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-300 text-gray-700 bg-transparent"
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
                      className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-300 text-gray-700 bg-transparent"
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
                      className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-300 text-gray-700 bg-transparent"
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
                      className="w-full px-4 py-4 border-b-2 border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-300 text-gray-700 resize-none bg-transparent"
                      placeholder="Tell us what you want to share..."
                      required
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center space-x-2 active:scale-95"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-8" ref={rightColumnRef}>
                
                {/* Business Hours */}
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-800">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between items-center group">
                      <span>Monday - Thursday:</span>
                      <span className="font-semibold group-hover:text-blue-500 transition-colors duration-300">9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between items-center group">
                      <span>Friday:</span>
                      <span className="font-semibold group-hover:text-blue-500 transition-colors duration-300">9:00 AM - 1:00 PM</span>
                    </p>
                    <p className="flex justify-between items-center group">
                      <span>Saturday:</span>
                      <span className="font-semibold group-hover:text-blue-500 transition-colors duration-300">10:00 AM - 4:00 PM</span>
                    </p>
                    <p className="flex justify-between items-center group">
                      <span>Sunday:</span>
                      <span className="font-semibold text-red-500">Closed</span>
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialMedia.map((social, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-1"
                      >
                        <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                        <div>
                          <p className="font-semibold text-sm text-gray-800 group-hover:text-gray-900">{social.name}</p>
                          <p className="text-xs text-gray-500 group-hover:text-gray-600">{social.handle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Locations */}
                <div className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-green-500" />
                    <h3 className="text-xl font-bold text-gray-800">Our Locations</h3>
                  </div>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <div 
                        key={index} 
                        className="p-4 bg-white/60 backdrop-blur-sm rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-gray-800">{location.city}</h4>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full animate-pulse">
                            {location.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                        <p className="text-xs text-gray-400">{location.coords}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                    <p className="text-pink-100 text-sm mb-6">
                      For urgent inquiries or technical support, reach out to us directly.
                    </p>
                    <div className="space-y-3">
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                        Emergency Support
                      </button>
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                        Technical Help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;