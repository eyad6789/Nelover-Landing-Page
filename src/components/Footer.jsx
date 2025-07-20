import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import NeloverLogo from '../assets/NeloverLogo.png'

const Footer = () => {
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
      {/* Footer Section */}
      <footer className="bg-gray-100 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Links */}
            <div>
              <img src={NeloverLogo} alt="logo" className='w-20 h-12 mb-10'/>
              <p className='text-gray-600 text-justify'>Nelover new startup in Iraq take care about plant and how make </p>

            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">about</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">products</a></li>
              </ul>
            </div>

            {/* About us */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">About us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Who We are?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">what we did</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">what we do</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Our goals & vision</a></li>
              </ul>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">Our Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Model H</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Model A</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Model M</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Model F</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Model E</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Model Y</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6">Contact</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">Phone Numbers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-200">@Nelover Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-gray-600 text-sm">
                  Copyright © 2025 Nelover Com.
                </p>
                <a href="#" className="text-gray-600 hover:text-pink-500 text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Iraq, Baghdad</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;