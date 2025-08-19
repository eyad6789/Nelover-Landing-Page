import { useState } from 'react';
import { 
  Phone, Mail, Leaf, Star, Shield, Truck,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
    alert(t('language') === 'en' ? 'Thanks for subscribing!' : 'شكراً للاشتراك!');
  };

  const footerSections = [
    {
      title: t('products'),
      links: [
        { name: t('language') === 'en' ? 'All Products' : 'جميع المنتجات', href: '/products' },
        { name: t('language') === 'en' ? 'Garden Compact' : 'حديقة مدمجة', href: '/products/compact' },
        { name: t('language') === 'en' ? 'Garden Plus' : 'حديقة بلس', href: '/products/plus' },
        { name: t('language') === 'en' ? 'Garden Pro' : 'حديقة برو', href: '/products/pro' },
        { name: t('accessories'), href: '/products/accessories' },
        { name: t('plantPods'), href: '/products/pods' }
      ]
    },
    {
      title: t('language') === 'en' ? 'Support' : 'الدعم',
      links: [
        { name: t('language') === 'en' ? 'Help Center' : 'مركز المساعدة', href: '/help' },
        { name: t('language') === 'en' ? 'Getting Started' : 'البدء', href: '/getting-started' },
        { name: t('language') === 'en' ? 'FAQ' : 'الأسئلة الشائعة', href: '/faq' },
        { name: t('language') === 'en' ? 'User Manual' : 'دليل المستخدم', href: '/manual' },
        { name: t('language') === 'en' ? 'Video Tutorials' : 'دروس فيديو', href: '/tutorials' }
      ]
    },
    {
      title: t('language') === 'en' ? 'Company' : 'الشركة',
      links: [
        { name: t('aboutTitle'), href: '/about' },
        { name: t('contactTitle'), href: '/contact' },
        { name: t('language') === 'en' ? 'Our Story' : 'قصتنا', href: '/story' },
        { name: t('language') === 'en' ? 'Reviews' : 'التقييمات', href: '/reviews' },
        { name: t('language') === 'en' ? 'Partners' : 'الشركاء', href: '/partners' }
      ]
    },
    {
      title: t('language') === 'en' ? 'Resources' : 'الموارد',
      links: [
        { name: t('language') === 'en' ? 'Growing Guide' : 'دليل الزراعة', href: '/growing-guide' },
        { name: t('language') === 'en' ? 'Plant Library' : 'مكتبة النباتات', href: '/plant-library' },
        { name: t('language') === 'en' ? 'Seasonal Tips' : 'نصائح موسمية', href: '/seasonal-tips' },
        { name: t('language') === 'en' ? 'Recipes' : 'وصفات', href: '/recipes' },
        { name: t('language') === 'en' ? 'Community' : 'المجتمع', href: '/community' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-6 gap-8 ${isRTL ? 'text-right' : ''}`}>
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className={`flex items-center space-x-3 mb-6 group ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="relative">
                    <Leaf className="w-8 h-8 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 w-8 h-8 bg-green-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <span className="text-2xl font-bold text-white">Nelover</span>
                    <div className="text-green-400 text-sm font-light">
                      {t('smartGardens')}
                    </div>
                  </div>
                </div>
                <p className={`text-white/70 leading-relaxed mb-6 ${isRTL ? 'text-right' : ''}`}>
                  {t('footerDescription')}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className={`flex items-center space-x-3 text-white/70 hover:text-green-400 transition-colors ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Phone className="w-4 h-4" />
                    <a href="tel:+9647736285961">+964 773 6285 961</a>
                  </div>
                  <div className={`flex items-center space-x-3 text-white/70 hover:text-green-400 transition-colors ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <Mail className="w-4 h-4" />
                    <a href="mailto:Eduru.Coie@Gmail.Com">Eduru.Coie@Gmail.Com</a>
                  </div>
                </div>

                {/* Social Media */}
                <div className={`flex space-x-4 mt-6 ${isRTL ? 'flex-row-reverse space-x-reverse justify-end' : ''}`}>
                  {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300 group"
                    >
                      <span className="text-sm font-bold group-hover:scale-110 transition-transform">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <div key={section.title} className={isRTL ? 'text-right' : ''}>
                  <h4 className="font-bold text-white mb-6 text-lg">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className={`text-white/70 hover:text-green-400 transition-all duration-300 inline-block ${
                            isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'
                          }`}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div className={`border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <p className={`text-gray-400 text-sm mb-4 md:mb-0 ${isRTL ? 'text-right' : ''}`}>
                &copy; {currentYear} Nelover. {t('language') === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'} {t('madeWithLove')}
              </p>
              <div className={`flex space-x-6 text-sm text-white/70 ${isRTL ? 'space-x-reverse' : ''}`}>
                <a href="/privacy" className="hover:text-green-400 transition-colors">{t('privacyPolicy')}</a>
                <a href="/terms" className="hover:text-green-400 transition-colors">{t('termsOfService')}</a>
                <a href="/cookies" className="hover:text-green-400 transition-colors">{t('cookiePolicy')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;