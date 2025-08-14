// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nelover-language') || 'en';
    }
    return 'en';
  });
  
  const [isRTL, setIsRTL] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('nelover-language') || 'en';
      return savedLang === 'ar';
    }
    return false;
  });

  // Apply language settings when component mounts or language changes
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('nelover-language', language);
    
    // Update document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update isRTL state
    setIsRTL(language === 'ar');
    
    // Add language class to body for CSS targeting
    document.body.className = document.body.className.replace(/\blang-\w+\b/g, '');
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  // Apply initial settings when component mounts
  useEffect(() => {
    const savedLang = localStorage.getItem('nelover-language') || 'en';
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;
    document.body.classList.add(`lang-${savedLang}`);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  };

  // Translation function
  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Handle parameterized translations
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return Object.keys(params).reduce((str, param) => {
        return str.replace(`{{${param}}}`, params[param]);
      }, value);
    }
    
    return value || key;
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};