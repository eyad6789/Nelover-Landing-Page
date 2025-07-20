// import { appleImg, bagImg, searchImg } from '../utils';
// import { navLists } from '../constants';
import { useState } from 'react';
import NeloverLogo from "../assets/NeloverLogo.png";
import instagram from '../assets/instagram.png';

const navLists = ["Home", "Products", "About", "Support"];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full shadow-sm top-0 z-50">
            {/* //max-w-7xl */}
            <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            src={NeloverLogo} 
                            alt="Nelover Logo" 
                            className="h-8 w-auto md:h-10 object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                        {navLists.map((nav) => (
                            <a
                                key={nav}
                                href={`#${nav.toLowerCase()}`}
                                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm lg:text-base font-normal transition-colors duration-200 ease-in-out"
                            >
                                {nav}
                            </a>
                        ))}
                    </div>

                    {/* Social Icons & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        {/* Instagram Icon */}
                        <a 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Follow us on Instagram"
                        >
                            <img 
                                src={instagram} 
                                alt="Instagram" 
                                className="h-6 w-6 sm:h-7 sm:w-7 object-contain hover:scale-110 transition-transform duration-200"
                            />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-200"
                            aria-expanded={isMobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'max-h-64 opacity-100 pb-4' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
                        {navLists.map((nav) => (
                            <a
                                key={nav}
                                href={`#${nav.toLowerCase()}`}
                                className="text-gray-700 hover:text-green-600 hover:bg-white block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {nav}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;