import { Leaf } from 'lucide-react';

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
export default Footer;