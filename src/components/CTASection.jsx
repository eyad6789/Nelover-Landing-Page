import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Clock, Zap, Heart, ArrowRight, Play, X, Leaf, Target, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Droplets, text: t('waterUsage') },
    { icon: Clock, text: t('freshHerbs') },
    { icon: Zap, text: t('aiPowered') },
    { icon: Heart, text: t('pesticideFree') }
  ];

  return (
    <section id="cta-section" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main Headline */}
          <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${isRTL ? 'text-center' : ''}`}>
            {t('readyToStart')}
            <span className="block bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
              {/* The second part is included in the translation */}
            </span>
          </h2>
          
          <p className={`text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-center' : ''}`}>
            {t('ctaDescription')}
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group transition-all duration-500`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <benefit.icon className="w-8 h-8 text-green-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <p className={`text-sm text-green-100 group-hover:text-white transition-colors duration-300 ${isRTL ? 'text-center' : ''}`}>
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link 
              to="/products"
              className={`group bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <span>{t('shopSmartGardens')}</span>
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Link>
            
            <button 
              onClick={() => setVideoModalOpen(true)}
              className={`group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Play className={`w-5 h-5 group-hover:scale-110 transition-transform duration-300 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              <span>{t('watchDemo')}</span>
            </button>
          </div>

          {/* Quick Product Links */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className={`text-green-200 mb-4 ${isRTL ? 'text-center' : ''}`}>
              {t('language') === 'en' ? 'Or explore our popular models:' : 'أو استكشف نماذجنا الشائعة:'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/garden-pro-elite" 
                className="text-green-300 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-green-300"
              >
                {t('language') === 'en' ? 'GardenPro Elite - $499' : 'حديقة برو إيليت - 499 دولار'}
              </Link>
              <Link 
                to="/garden-compact" 
                className="text-green-300 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-green-300"
              >
                {t('language') === 'en' ? 'GardenCompact - $299' : 'حديقة مدمجة - 299 دولار'}
              </Link>
              <Link 
                to="/garden-hydro-max" 
                className="text-green-300 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-green-300"
              >
                {t('language') === 'en' ? 'HydroMax Pro - $1,299' : 'هيدرو ماكس برو - 1,299 دولار'}
              </Link>
            </div>
          </div>
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

              {/* Benefits Showcase */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className={`text-xl font-semibold text-gray-800 mb-4 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Zap className={`w-5 h-5 text-green-600 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('smartGrowing')}
                  </h4>
                  <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {t('aiOptimizes')}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className={`text-xl font-semibold text-gray-800 mb-4 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Heart className={`w-5 h-5 text-green-600 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('language') === 'en' ? 'Effortless Growing' : 'زراعة بلا مجهود'}
                  </h4>
                  <p className={`text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                    {t('language') === 'en' 
                      ? 'No green thumb required! Just plant, connect to the app, and watch your garden thrive. Perfect for beginners and experts alike.'
                      : 'لا حاجة لخبرة في البستنة! فقط ازرع واربط بالتطبيق وشاهد حديقتك تزدهر. مثالي للمبتدئين والخبراء على حد سواء.'
                    }
                  </p>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <h4 className={`text-xl font-semibold text-gray-800 mb-4 text-center ${isRTL ? 'text-center' : ''}`}>
                  {t('provenResults')}
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">{t('successRate')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">50K+</div>
                    <div className="text-sm text-gray-600">{t('language') === 'en' ? 'Happy Customers' : 'عملاء سعداء'}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">90%</div>
                    <div className="text-sm text-gray-600">{t('language') === 'en' ? 'Less Water' : 'مياه أقل'}</div>
                  </div>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className={`text-center p-4 bg-gray-50 rounded-xl ${isRTL ? 'text-center' : ''}`}>
                  <Droplets className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    {t('language') === 'en' ? 'Hydroponic' : 'زراعة مائية'}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {t('language') === 'en' ? 'Soil-free growing' : 'زراعة بدون تربة'}
                  </p>
                </div>
                <div className={`text-center p-4 bg-gray-50 rounded-xl ${isRTL ? 'text-center' : ''}`}>
                  <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    {t('language') === 'en' ? 'Year-Round' : 'على مدار السنة'}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {t('language') === 'en' ? 'Fresh herbs always' : 'أعشاب طازجة دائماً'}
                  </p>
                </div>
                <div className={`text-center p-4 bg-gray-50 rounded-xl ${isRTL ? 'text-center' : ''}`}>
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    {t('language') === 'en' ? 'Organic' : 'عضوي'}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {t('language') === 'en' ? 'Pesticide-free' : 'خالي من المبيدات'}
                  </p>
                </div>
                <div className={`text-center p-4 bg-gray-50 rounded-xl ${isRTL ? 'text-center' : ''}`}>
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h5 className="font-semibold text-gray-800 text-sm">
                    {t('appControl')}
                  </h5>
                  <p className="text-xs text-gray-600">
                    {t('monitorAnywhere')}
                  </p>
                </div>
              </div>

              {/* CTA in Modal */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className={`text-gray-600 mb-4 ${isRTL ? 'text-center' : ''}`}>
                  {t('readyToGrow')}
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Link 
                    to="/garden-pro-elite"
                    onClick={() => setVideoModalOpen(false)}
                    className={`bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('language') === 'en' ? 'Start with GardenPro Elite' : 'ابدأ مع حديقة برو إيليت'}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Link>
                  <Link 
                    to="/products"
                    onClick={() => setVideoModalOpen(false)}
                    className={`border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('language') === 'en' ? 'View All Models' : 'عرض جميع النماذج'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;