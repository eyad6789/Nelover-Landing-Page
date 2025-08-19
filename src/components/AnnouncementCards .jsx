import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Leaf, Target, Award, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AnnouncementCards = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCardClick = (productId) => {
    // Navigate to the product page using the product ID
    window.location.href = `/product/${productId}`;
  };

  const announcements = [
    {
      id: 'garden-pro-elite',
      type: t('newRelease'),
      title: t('language') === 'en' ? 'GardenPro Elite' : 'حديقة برو إيليت',
      subtitle: t('language') === 'en' ? 'AI-Powered Smart Garden' : 'حديقة ذكية مدعومة بالذكاء الاصطناعي',
      price: "$499",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop&crop=center",
      size: "large",
      hasImage: true,
      badge: t('bestSeller')
    },
    {
      id: 'garden-compact',
      type: t('language') === 'en' ? 'FEATURED' : 'مميز',
      title: t('language') === 'en' ? 'GardenCompact' : 'حديقة مدمجة',
      subtitle: t('perfectStarter'),
      price: "$299",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      size: "medium",
      hasImage: false,
      badge: t('spaceSaver')
    },
    {
      id: 'garden-hydro-max',
      type: t('language') === 'en' ? 'PROFESSIONAL' : 'احترافي',
      title: t('language') === 'en' ? 'HydroMax Pro' : 'هيدرو ماكس برو',
      subtitle: t('commercialGrade'),
      price: "$1,299",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      size: "small",
      hasImage: false,
      badge: t('proChoice')
    },
    {
      id: 'garden-smart-tower',
      type: t('language') === 'en' ? 'INNOVATIVE' : 'مبتكر',
      title: t('language') === 'en' ? 'SmartTower Vertical' : 'برج ذكي عمودي',
      subtitle: t('plantsCapacity'),
      price: "$899",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      size: "small",
      hasImage: false,
      badge: t('verticalSolution')
    },
    {
      id: 'garden-mini',
      type: t('language') === 'en' ? 'STARTER' : 'للمبتدئين',
      title: t('language') === 'en' ? 'Garden Mini' : 'حديقة صغيرة',
      subtitle: t('perfectStarterKit'),
      price: "$199",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      size: "small-bottom",
      hasImage: false,
      badge: t('beginnerFriendly')
    },
    {
      id: 'garden-plus',
      type: t('language') === 'en' ? 'UPGRADED' : 'محسن',
      title: t('language') === 'en' ? 'Garden Plus' : 'حديقة بلس',
      subtitle: t('enhancedFeatures'),
      price: "$399",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      size: "small-bottom",
      hasImage: false,
      badge: t('enhanced')
    },
    {
      id: 'garden-outdoor',
      type: t('language') === 'en' ? 'SEASONAL' : 'موسمي',
      title: t('language') === 'en' ? 'Outdoor Edition' : 'إصدار خارجي',
      subtitle: t('weatherResistant'),
      price: "$699",
      date: t('language') === 'en' ? 'September 9, 2024' : '9 سبتمبر، 2024',
      size: "small-bottom",
      hasImage: false,
      badge: t('allWeather')
    }
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 sm:row-span-2 h-48 sm:h-64 md:h-80';
      case 'medium':
        return 'col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 h-32 sm:h-36 md:h-40';
      case 'small':
        return 'col-span-1 row-span-1 h-32 sm:h-36 md:h-40';
      case 'small-bottom':
        return 'col-span-1 row-span-1 h-28 sm:h-32 md:h-36';
      default:
        return 'col-span-1 row-span-1 h-32 sm:h-36 md:h-40';
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${isRTL ? 'text-center' : ''}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t('choosePerfectGarden')}
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 ${isRTL ? 'text-center' : ''}`}>
            {t('discoverProducts')}
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link 
              to="/products"
              className={`group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Leaf className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('shopSmartGardens')}
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
            
            <button 
              onClick={() => setVideoModalOpen(true)}
              className={`group border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Play className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('watchDemo')}
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-min">
          {announcements.map((announcement, index) => (
            <Link
              key={announcement.id}
              to={`/${announcement.id}`}
              className={`
                ${getSizeClasses(announcement.size)}
                group relative bg-white rounded-2xl shadow-sm hover:shadow-lg 
                transition-all duration-500 overflow-hidden cursor-pointer
                transform hover:-translate-y-1
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {announcement.badge && (
                <div className={`absolute top-3 z-20 bg-white/90 backdrop-blur-sm text-green-600 px-2 py-1 rounded-full text-xs font-semibold ${isRTL ? 'right-3' : 'left-3'}`}>
                  {announcement.badge}
                </div>
              )}

              {/* Image Section (for large card) */}
              {announcement.hasImage && (
                <div className="relative h-2/3 sm:h-3/5 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${announcement.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Product mockup overlay for main card */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Leaf className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div 
                className={`
                  ${announcement.hasImage ? 'h-1/3 sm:h-2/5' : 'h-full'} 
                  bg-gradient-to-br from-green-500 to-emerald-600 p-3 sm:p-4 md:p-6 flex flex-col justify-between
                  relative overflow-hidden
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-white/20 rounded-full" />
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-2 sm:mb-3">
                    <span className={`text-white/80 text-xs sm:text-xs md:text-sm font-semibold tracking-wide uppercase ${isRTL ? 'text-right' : 'text-left'}`}>
                      {announcement.type}
                    </span>
                  </div>

                  <h3 className={`
                    text-white font-bold leading-tight mb-2 ${isRTL ? 'text-right' : 'text-left'}
                    ${announcement.size === 'large' ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 
                      announcement.size === 'medium' ? 'text-base sm:text-lg md:text-xl' : 
                      announcement.size.includes('small-bottom') ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}
                  `}>
                    {announcement.title}
                  </h3>

                  {/* Subtitle and Price */}
                  {announcement.subtitle && (
                    <p className={`text-white/80 text-sm mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>{announcement.subtitle}</p>
                  )}
                  {announcement.price && (
                    <p className={`text-white font-bold text-lg ${isRTL ? 'text-right' : 'text-left'}`}>{announcement.price}</p>
                  )}
                </div>

                {/* Date */}
                <div className="relative z-10 mt-auto">
                  <span className={`
                    text-white/70 font-medium ${isRTL ? 'text-right' : 'text-left'}
                    ${announcement.size.includes('small-bottom') ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm md:text-base'}
                  `}>
                    {announcement.date}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Arrow indicator */}
                <div className={`absolute top-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 ${isRTL ? 'left-3' : 'right-3'}`}>
                  <ArrowRight className={`w-3 h-3 text-white ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Subtle Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${isRTL ? 'text-center' : ''}`}>
          <p className="text-gray-600 mb-6">{t('needHelp')}</p>
          <Link 
            to="/contact"
            className={`bg-white border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <Target className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t('getExpertRec')}
          </Link>
        </div>
      </div>

      {/* Demo Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`flex justify-between items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-800">{t('smartGardenDemo')}</h3>
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Demo Content */}
            <div className="space-y-6">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <div className={`text-center text-green-800 ${isRTL ? 'text-center' : ''}`}>
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <p className="text-lg font-medium">{t('watchInAction')}</p>
                  <p className="text-sm text-green-600 mt-2">{t('easyGrowing')}</p>
                </div>
              </div>

              {/* Demo Features */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`bg-gray-50 rounded-xl p-4 text-center ${isRTL ? 'text-center' : ''}`}>
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">{t('smartGrowing')}</h4>
                  <p className="text-sm text-gray-600">{t('aiOptimizes')}</p>
                </div>
                <div className={`bg-gray-50 rounded-xl p-4 text-center ${isRTL ? 'text-center' : ''}`}>
                  <Play className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">{t('appControl')}</h4>
                  <p className="text-sm text-gray-600">{t('monitorAnywhere')}</p>
                </div>
                <div className={`bg-gray-50 rounded-xl p-4 text-center ${isRTL ? 'text-center' : ''}`}>
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">{t('provenResults')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('language') === 'en' ? '98% success rate' : 'معدل نجاح 98%'}
                  </p>
                </div>
              </div>

              {/* CTA in Modal */}
              <div className="text-center pt-4">
                <Link 
                  to="/garden-pro-elite"
                  onClick={() => setVideoModalOpen(false)}
                  className={`bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('startGrowingToday2')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementCards;