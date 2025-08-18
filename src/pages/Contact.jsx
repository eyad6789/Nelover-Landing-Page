import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, ArrowRight, Clock, MessageCircle, Instagram, 
  Facebook, Twitter, Linkedin, Globe, Send, Leaf, CheckCircle, 
  Star, Shield, Truck, Award, Users, Menu, X, Zap
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext'; // Import language context

// Main Contact Page Component
const ContactPage = () => {
  const { t, isRTL } = useLanguage(); // Use language context
  
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Mouse move effect for hero section
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', subject: '', email: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t('phoneSupport'),
      info: "+964 773 6285 961",
      description: t('phoneSupportDesc'),
      action: t('callNow'),
      bgColor: "from-indigo-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      icon: Mail,
      title: t('emailSupport'),
      info: "Eduru.Coie@Gmail.Com",
      description: t('emailSupportDesc'),
      action: t('sendEmail'),
      bgColor: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      icon: MessageCircle,
      title: t('whatsappChat'),
      info: "+964 773 6285 961",
      description: t('whatsappDesc'),
      action: t('chatWhatsapp'),
      bgColor: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100"
    }
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", handle: "@nelover_iraq", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", handle: "Nelover Iraq", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", handle: "@nelover_iraq", color: "text-blue-400" },
    { icon: Linkedin, name: "LinkedIn", handle: "Nelover Company", color: "text-blue-700" }
  ];

  const locations = [
    {
      city: isRTL ? "بغداد" : "Baghdad",
      address: isRTL ? "منطقة الكرادة، بالقرب من فندق بابل" : "Al-Karrada District, Near Babylon Hotel",
      coords: "33.3152° N, 44.3661° E",
      type: isRTL ? "المكتب الرئيسي" : "Main Office"
    },
    {
      city: isRTL ? "أربيل" : "Erbil",
      address: isRTL ? "منطقة عنكاوا، مركز الأعمال" : "Ankawa District, Business Center",
      coords: "36.1911° N, 44.0093° E",
      type: isRTL ? "الفرع" : "Branch Office"
    }
  ];

  const businessHours = [
    { 
      day: isRTL ? "الإثنين - الخميس" : "Monday - Thursday", 
      hours: isRTL ? "9:00 صباحاً - 6:00 مساءً" : "9:00 AM - 6:00 PM" 
    },
    { 
      day: isRTL ? "الجمعة" : "Friday", 
      hours: isRTL ? "9:00 صباحاً - 1:00 ظهراً" : "9:00 AM - 1:00 PM" 
    },
    { 
      day: isRTL ? "السبت" : "Saturday", 
      hours: isRTL ? "10:00 صباحاً - 4:00 مساءً" : "10:00 AM - 4:00 PM" 
    },
    { 
      day: isRTL ? "الأحد" : "Sunday", 
      hours: isRTL ? "مغلق" : "Closed", 
      closed: true 
    }
  ];

  const faqs = [
    {
      question: t('questionResponse'),
      answer: t('answerResponse')
    },
    {
      question: t('questionTechnical'),
      answer: t('answerTechnical')
    },
    {
      question: t('questionShowroom'),
      answer: t('answerShowroom')
    },
    {
      question: t('questionLanguages'),
      answer: t('answerLanguages')
    }
  ];

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar currentPage="contact" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 flex items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)`
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                [isRTL ? 'right' : 'left']: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            >
              <Leaf className="w-4 h-4 text-green-300 rotate-12" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center text-white" data-animate id="hero-section">
            {/* Badge */}
            <div className={`inline-flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 transition-all duration-1000 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <MessageCircle className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium">{t('customerSupport')}</span>
            </div>

            {/* Main Title */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="block">{t('getInTouch').split(' ')[0]}</span>
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                  {t('getInTouch').split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                {t('heroContactText')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button className={`group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} group-hover:scale-110 transition-transform`} />
                {t('sendMessage')}
              </button>
              <button className={`group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'} group-hover:scale-110 transition-transform`} />
                {t('callUsNow')}
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float { animation: float linear infinite; }
        `}</style>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-animate id="contact-methods">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
              isVisible['contact-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {t('chooseConnection')}
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['contact-methods'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`group ${method.gradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 ${
                  isVisible['contact-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-700 mb-2 group-hover:scale-105 transition-transform duration-300" dir="ltr">
                    {method.info}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {method.description}
                  </p>
                  
                  <button className={`bg-gradient-to-r ${method.bgColor} text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2 mx-auto group`}>
                    <span>{method.action}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-300`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6" data-animate id="form-section">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className={`grid lg:grid-cols-2 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
              
              {/* Left Column - Contact Form */}
              <div className={`p-12 transition-all duration-1000 ${
                isVisible['form-section'] ? 'translate-x-0 opacity-100' : `${isRTL ? 'translate-x-10' : '-translate-x-10'} opacity-0`
              } ${isRTL ? 'lg:col-start-2' : ''}`}>
                <div className="mb-8">
                  <h2 className={`text-4xl font-bold text-gray-800 mb-4 flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3`}>
                    <Send className="w-8 h-8 text-green-600" />
                    <span>{t('sendUsMessage')}</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('formDescription')}
                  </p>
                </div>
                
                {isSubmitted && (
                  <div className={`mb-6 p-4 bg-green-100 border border-green-400 rounded-2xl flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3 animate-pulse`}>
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">{t('messageSuccess')}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className={`block text-sm font-semibold text-gray-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('nameLabel')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 hover:border-gray-300"
                        placeholder={isRTL ? "الاسم الكامل" : "Your full name"}
                        required
                        dir={isRTL ? 'rtl' : 'ltr'}
                      />
                    </div>

                    <div className="form-group">
                      <label className={`block text-sm font-semibold text-gray-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {t('emailLabel')} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 hover:border-gray-300"
                        placeholder="your.email@example.com"
                        required
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className={`block text-sm font-semibold text-gray-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {isRTL ? "الموضوع" : "Subject"} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 hover:border-gray-300"
                      placeholder={isRTL ? "ما موضوع رسالتك؟" : "What's this about?"}
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>

                  <div className="form-group">
                    <label className={`block text-sm font-semibold text-gray-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('messageLabel')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 text-gray-700 resize-none hover:border-gray-300"
                      placeholder={isRTL ? "أخبرنا كيف يمكننا مساعدتك..." : "Tell us how we can help you..."}
                      required
                      dir={isRTL ? 'rtl' : 'ltr'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center justify-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2 ${
                      isSubmitting ? 'scale-95 opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{isRTL ? "جاري الإرسال..." : "Sending Message..."}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('sendMessage')}</span>
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    {isRTL ? "بإرسال هذه الرسالة، فإنك توافق على الشروط وسياسة الخصوصية." : "By sending this message, you agree to our terms and privacy policy."}
                  </p>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className={`bg-gradient-to-br from-green-500 to-emerald-600 p-12 text-white relative overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible['form-section'] ? 'translate-x-0 opacity-100' : `${isRTL ? '-translate-x-10' : 'translate-x-10'} opacity-0`
              } ${isRTL ? 'lg:col-start-1' : ''}`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} w-8 h-8 border-2 border-white rounded-lg animate-pulse`}></div>
                  <div className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'} w-6 h-6 border-2 border-white rounded-full animate-ping delay-1000`}></div>
                  <div className={`absolute bottom-8 ${isRTL ? 'right-8' : 'left-8'} w-4 h-4 bg-white rounded-full animate-bounce delay-500`}></div>
                  <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} w-12 h-12 border border-white rounded-2xl animate-pulse delay-700`}></div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-8">{t('getInTouch')}</h3>
                  <p className="text-green-100 mb-12 text-lg leading-relaxed">
                    {isRTL ? "مستعد لتحويل منزلك إلى جنة حديقة ذكية؟ نحن هنا لإرشادك في كل خطوة." : "Ready to transform your home into a smart garden paradise? We're here to guide you every step of the way."}
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-8">
                    {/* Business Hours */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3 mb-4`}>
                        <Clock className="w-6 h-6 text-green-200" />
                        <h4 className="text-xl font-bold">{t('businessHours')}</h4>
                      </div>
                      <div className="space-y-2 text-green-100">
                        {businessHours.map((hour, index) => (
                          <div key={index} className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span>{hour.day}</span>
                            <span className={hour.closed ? 'text-red-300' : ''}>{hour.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3 mb-4`}>
                        <MapPin className="w-6 h-6 text-green-200" />
                        <h4 className="text-xl font-bold">{t('ourLocations')}</h4>
                      </div>
                      <div className="space-y-4">
                        {locations.map((location, index) => (
                          <div key={index} className="border-b border-white/20 last:border-b-0 pb-4 last:pb-0">
                            <div className={`flex justify-between items-start mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <h5 className="font-bold text-green-100">{location.city}</h5>
                              <span className="text-xs bg-green-400/20 text-green-200 px-2 py-1 rounded-full">
                                {location.type}
                              </span>
                            </div>
                            <p className={`text-sm text-green-200 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>{location.address}</p>
                            <p className={`text-xs text-green-300 ${isRTL ? 'text-right' : 'text-left'}`} dir="ltr">{location.coords}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                      <div className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-3 mb-4`}>
                        <Globe className="w-6 h-6 text-green-200" />
                        <h4 className="text-xl font-bold">{t('followUs')}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {socialMedia.map((social, index) => (
                          <div key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 cursor-pointer group`}>
                            <social.icon className="w-5 h-5 text-green-200 group-hover:scale-110 transition-transform duration-300" />
                            <div className={isRTL ? 'text-right' : 'text-left'}>
                              <p className="font-semibold text-sm text-green-100">{social.name}</p>
                              <p className="text-xs text-green-300" dir="ltr">{social.handle}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <button className={`w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2 group`}>
                        <Phone className="w-4 h-4 group-hover:animate-pulse" />
                        <span>{t('emergencySupport')}</span>
                      </button>
                      <button className={`w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} space-x-2 group`}>
                        <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                        <span>{t('liveChatSupport')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default ContactPage;