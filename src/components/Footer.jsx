import { useState } from 'react';
import { 
  Phone, Mail, Leaf, Star, Shield, Truck,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
    alert('Thanks for subscribing!');
  };

  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Garden Compact', href: '/products/compact' },
        { name: 'Garden Plus', href: '/products/plus' },
        { name: 'Garden Pro', href: '/products/pro' },
        { name: 'Accessories', href: '/products/accessories' },
        { name: 'Plant Pods', href: '/products/pods' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Setup Guide', href: '/support/setup' },
        { name: 'Plant Care', href: '/support/care' },
        { name: 'Troubleshooting', href: '/support/troubleshoot' },
        { name: 'Warranty', href: '/support/warranty' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Blog', href: '/blog' },
        { name: 'Sustainability', href: '/sustainability' }
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
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Get the latest tips on smart gardening, new product releases, and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6 group">
                  <div className="relative">
                    <Leaf className="w-8 h-8 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 w-8 h-8 bg-green-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">Nelover</span>
                    <div className="text-green-400 text-sm font-light">Smart Gardens</div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Revolutionizing indoor gardening with intelligent technology. Growing fresh, healthy food has never been easier or more sustainable.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/70 hover:text-green-400 transition-colors">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+9647736285961">+964 773 6285 961</a>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70 hover:text-green-400 transition-colors">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:Eduru.Coie@Gmail.Com">Eduru.Coie@Gmail.Com</a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 mt-6">
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
                <div key={section.title}>
                  <h4 className="font-bold text-white mb-6 text-lg">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-white/70 hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 py-8 mt-12 border-t border-gray-800">
              <div className="flex items-center space-x-2 text-white/70">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm">30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Truck className="w-5 h-5 text-green-500" />
                <span className="text-sm">Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Award className="w-5 h-5 text-green-500" />
                <span className="text-sm">2024 Innovation Award Winner</span>
              </div>
              <div className="flex items-center space-x-1 text-white/70">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
                <span className="text-sm ml-2">4.9/5 Customer Rating</span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Nelover. All rights reserved. Made with ❤️ in Iraq.
              </p>
              <div className="flex space-x-6 text-sm text-white/70">
                <a href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-green-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;