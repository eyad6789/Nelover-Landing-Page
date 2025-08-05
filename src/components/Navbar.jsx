import React, { useState } from "react";
import { Leaf } from 'lucide-react';

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Updated navigation items with proper routing paths
  const navLists = [
    { label: "Home", path: "/", id: "home" },
    { label: "Products", path: "/products", id: "products" },
    { label: "About", path: "/about", id: "about" },
    { label: "Contact", path: "/contact", id: "contact" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full shadow-sm top-0 z-50 absolute">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 group">
            <Leaf className="w-8 h-8 text-green-600 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-xl font-semibold text-zinc-600 transition-colors duration-300 group-hover:text-green-400">Nelover</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.path}
                className={`px-3 py-2 text-sm lg:text-base font-normal transition-colors duration-200 ease-in-out relative group ${
                  currentPage === nav.id 
                    ? 'text-green-400 font-medium' 
                    : 'text-zinc-600 hover:text-green-400'
                }`}
              >
                {nav.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                  currentPage === nav.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-green-400 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
            {navLists.map((nav) => (
              <a
                key={nav.id}
                href={nav.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                  currentPage === nav.id
                    ? 'text-green-600 bg-green-50 font-semibold'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;