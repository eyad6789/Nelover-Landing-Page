import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import NeloverLogo from '../assets/NeloverLogo.png'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Contact Section */}
      <div className="px-8 py-16">
        <div className="w-11/12 mx-auto">
          {/* Title */}
          <h1 className="text-6xl font-black mb-16 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            SEND US A MASSAGE
          </h1>

          {/* Main Container */}
          <div className="bg-white rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Left Column - Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Send To Us What You Want To Tell Us About
                </h2>
                
                <div className="space-y-6">
                  {/* Your Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4  border-b border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-200 text-gray-700"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* The Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      The Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-b border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-200 text-gray-700"
                      placeholder="What is this about?"
                    />
                  </div>

                  {/* Your Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-b border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-200 text-gray-700"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Write Your Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Write Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border-b border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all duration-200 text-gray-700 resize-none"
                      placeholder="Tell us what you want to share..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 transform shadow-lg"
                  >
                    submit
                  </button>
                </div>
              </div>

              {/* Right Column - Contact Information */}
              <div className="space-y-8">
                
                {/* Phone Number */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-2xl">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Our Phone Number
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      +964 773 6285 961
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-2xl">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Our Email
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      Eduru.Coie@Gmail.Com
                    </p>
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className="mt-12">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                    <div className="text-center text-white p-8">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-10 h-10" />
                      </div>
                      <h4 className="text-xl font-bold">Get In Touch</h4>
                      <p className="text-pink-100 text-sm mt-2">
                        We'd love to hear from you
                      </p>
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

export default ContactSection;