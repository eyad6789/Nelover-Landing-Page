import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Add this import for navigation

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // Add this hook for navigation
  
  const navLists = [
    { label: "Home", path: "/", id: "home" },
    { label: "Products", path: "/productsOptimized", id: "productsOptimized" },
    { label: "About", path: "/about", id: "about" },
    { label: "Contact", path: "/contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add navigation handler
  const handleShopNowClick = () => {
    navigate('/productsOptimized');
  };

  return (
    <header className={`w-full top-0 z-50 fixed transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Leaf className={`w-8 h-8 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                scrolled ? 'text-green-600' : 'text-green-400'
              }`} />
              <div className="absolute inset-0 w-8 h-8 bg-green-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors duration-300 group-hover:text-green-500 ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Nelover
              </span>
              <span className={`text-xs font-light -mt-1 transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-green-200'
              }`}>
                Smart Gardens
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.path}
                className={`px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 ease-in-out relative group rounded-full ${
                  currentPage === nav.id 
                    ? `${scrolled ? 'text-green-600 bg-green-50' : 'text-green-300 bg-white/10'}` 
                    : `${scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white/90 hover:text-green-300'} hover:bg-white/10`
                }`}
              >
                {nav.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 rounded-full ${
                  currentPage === nav.id ? 'w-6' : 'w-0 group-hover:w-6'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Enhanced CTA Button - UPDATED TO NAVIGATE */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleShopNowClick}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                scrolled 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl' 
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-800'
              }`}
            >
              Shop Now
            </button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl mt-2 p-4 shadow-2xl border border-green-100">
            {navLists.map((nav, index) => (
              <a
                key={nav.id}
                href={nav.path}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 mb-1 ${
                  currentPage === nav.id
                    ? 'text-green-600 bg-green-50 font-semibold'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button 
                onClick={handleShopNowClick}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;