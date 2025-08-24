import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // ADD THIS IMPORT
// Import your existing LanguageContext hook
import { useLanguage } from '../context/LanguageContext'; // Adjust path as needed

const Navbar = ({ currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguageTooltip, setShowLanguageTooltip] = useState(false);
  
  // Add navigate hook
  const navigate = useNavigate();
  
  // Use the global language context instead of local state
  const { language, isRTL, toggleLanguage, t } = useLanguage();
  
  // Navigation items will now use the global translation function
  const navLists = [
    { label: t('home'), path: "/", id: "home" },
    { label: t('products'), path: "/productsOptimized", id: "productsOptimized" },
    { label: t('about'), path: "/about", id: "about" },
    { label: t('contact'), path: "/contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIXED: Use navigate instead of window.location.href
  const handleShopNowClick = () => {
    navigate('/productsOptimized');
  };

  // FIXED: Use navigate instead of window.location.href
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className={`w-full top-0 z-50 fixed transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <nav className={`flex items-center justify-between h-16 md:h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Enhanced Logo - FIXED: Use Link instead of div with onClick */}
          <Link to="/" className={`flex-shrink-0 flex items-center space-x-3 group cursor-pointer ${isRTL ? 'space-x-reverse' : ''}`}>
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
                {t('smartGardens')}
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation - FIXED: Use Link instead of <a> */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navLists.map((nav) => (
              <Link
                key={nav.id}
                to={nav.path}
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
              </Link>
            ))}
          </div>

          {/* Language Toggle + CTA Buttons */}
          <div className={`hidden md:flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            {/* Language Toggle Button */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                onMouseEnter={() => setShowLanguageTooltip(true)}
                onMouseLeave={() => setShowLanguageTooltip(false)}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  scrolled 
                    ? 'border-2 border-gray-300 hover:border-green-500 bg-white hover:bg-green-50 text-gray-700 hover:text-green-600' 
                    : 'border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-green-200'
                } ${isRTL ? 'space-x-reverse' : ''}`}
                aria-label="Toggle Language"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <div className="flex items-center space-x-1">
                  <span className={`text-sm font-bold transition-colors duration-300 ${
                    language === 'en' ? (scrolled ? 'text-green-600' : 'text-green-200') : (scrolled ? 'text-gray-500' : 'text-white/70')
                  }`}>
                    EN
                  </span>
                  <span className={`text-sm ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>|</span>
                  <span className={`text-sm font-bold transition-colors duration-300 ${
                    language === 'ar' ? (scrolled ? 'text-green-600' : 'text-green-200') : (scrolled ? 'text-gray-500' : 'text-white/70')
                  }`}>
                    ع
                  </span>
                </div>
                
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 rounded-full ${
                  language === 'en' ? 'w-6' : 'w-8'
                }`}></div>
              </button>

              {/* Language Toggle Tooltip */}
              {showLanguageTooltip && (
                <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 z-50 ${
                  scrolled 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-white/90 backdrop-blur-sm text-gray-800'
                }`}>
                  {language === 'en' ? 'تبديل للعربية' : 'Switch to English'}
                  <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                    scrolled ? 'bg-gray-800' : 'bg-white/90'
                  }`}></div>
                </div>
              )}
            </div>

            {/* Shop Now Button */}
            <button 
              onClick={handleShopNowClick}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                scrolled 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl' 
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-gray-800'
              }`}
            >
              {t('shopNow')}
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

        {/* Enhanced Mobile Menu - FIXED: Use Link instead of <a> */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl mt-2 p-4 shadow-2xl border border-green-100">
            {navLists.map((nav, index) => (
              <Link
                key={nav.id}
                to={nav.path}
                className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 mb-1 ${
                  currentPage === nav.id
                    ? 'text-green-600 bg-green-50 font-semibold'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.label}
              </Link>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={toggleLanguage}
                className="w-full mb-3 flex items-center justify-center space-x-3 px-4 py-3 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-600 rounded-xl transition-all duration-300 group"
              >
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
                <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">
                  <span className={language === 'en' ? 'opacity-100' : 'opacity-50'}>EN</span>
                  <span>|</span>
                  <span className={language === 'ar' ? 'opacity-100' : 'opacity-50'}>ع</span>
                </div>
              </button>
              
              <button 
                onClick={() => {
                  handleShopNowClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                {t('shopNow')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RTL Styles */}
      <style jsx>{`
        [dir="rtl"] .space-x-2 > * + * {
          margin-left: 0;
          margin-right: 0.5rem;
        }
        [dir="rtl"] .space-x-3 > * + * {
          margin-left: 0;
          margin-right: 0.75rem;
        }
        [dir="rtl"] .space-x-4 > * + * {
          margin-left: 0;
          margin-right: 1rem;
        }
        [dir="rtl"] .space-x-1 > * + * {
          margin-left: 0;
          margin-right: 0.25rem;
        }
        [dir="rtl"] .flex-row-reverse {
          flex-direction: row-reverse;
        }
        [dir="rtl"] .text-left {
          text-align: right;
        }
        [dir="rtl"] .text-right {
          text-align: left;
        }
      `}</style>
    </header>
  );
};

export default Navbar;