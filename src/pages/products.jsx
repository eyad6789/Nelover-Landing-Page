import React, { useState, useEffect } from 'react';
import { 
  Leaf, Award, Users, Globe, ArrowRight, Star,
  Shield, Truck, Heart, ShoppingCart, Eye, Search, 
  Grid, List, Filter, ChevronDown
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementCards from '../components/AnnouncementCards ';


// Main Products Page Component
const Products = () => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

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

  // Product Categories
  const categories = [
    { id: 'all', name: t('allProducts'), count: 12 },
    { id: 'gardens', name: t('smartGardensCategory'), count: 3 },
    { id: 'accessories', name: t('accessories'), count: 6 },
    { id: 'pods', name: t('plantPods'), count: 3 }
  ];

  const priceRanges = [
    { id: 'all', name: t('allPrices') },
    { id: '0-100', name: t('under100') },
    { id: '100-300', name: t('price100to300') },
    { id: '300-600', name: t('price300to600') },
    { id: '600+', name: t('price600plus') }
  ];

  const sortOptions = [
    { id: 'featured', name: t('featured') },
    { id: 'price-low', name: t('priceLowHigh') },
    { id: 'price-high', name: t('priceHighLow') },
    { id: 'rating', name: t('highestRated') },
    { id: 'newest', name: t('newest') }
  ];

  // Complete Product Catalog with masonry sizes
  const products = [
    {
      id: 1,
      name: t('language') === 'en' ? 'Nelover Garden Compact' : 'حديقة نيلوفر المدمجة',
      category: 'gardens',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 847,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop',
      badge: t('bestSeller'),
      badgeColor: 'bg-green-500',
      tagline: t('language') === 'en' ? 'Perfect starter kit for fresh herbs and small vegetables.' : 'طقم البداية المثالي للأعشاب الطازجة والخضروات الصغيرة.',
      features: [
        t('language') === 'en' ? '6 plant pods' : '6 كبسولات نباتات',
        t('language') === 'en' ? 'LED grow lights' : 'مصابيح LED للنمو',
        t('language') === 'en' ? 'Smart water system' : 'نظام مياه ذكي',
        t('language') === 'en' ? 'Mobile app control' : 'تحكم تطبيق الهاتف'
      ],
      size: 'large',
      hasImage: true,
      shipping: t('language') === 'en' ? 'Free shipping' : 'شحن مجاني',
      inStock: true
    },
    {
      id: 2,
      name: t('language') === 'en' ? 'Nelover Garden Plus' : 'حديقة نيلوفر بلس',
      category: 'gardens',
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      reviews: 523,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop',
      badge: t('language') === 'en' ? 'POPULAR' : 'شائع',
      badgeColor: 'bg-blue-500',
      tagline: t('language') === 'en' ? 'Advanced features for serious gardeners with premium materials.' : 'مميزات متقدمة للبستانيين الجادين بمواد فاخرة.',
      features: [
        t('language') === 'en' ? '12 plant pods' : '12 كبسولة نباتات',
        t('language') === 'en' ? 'Full spectrum LEDs' : 'مصابيح LED طيف كامل',
        t('language') === 'en' ? 'Automated nutrients' : 'مغذيات آلية',
        t('language') === 'en' ? 'Growth analytics' : 'تحليلات النمو'
      ],
      size: 'medium',
      hasImage: false,
      shipping: t('language') === 'en' ? 'Free shipping' : 'شحن مجاني',
      inStock: true
    },
    {
      id: 3,
      name: t('language') === 'en' ? 'Nelover Garden Pro' : 'حديقة نيلوفر برو',
      category: 'gardens',
      price: 999,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 234,
      badge: t('language') === 'en' ? 'PREMIUM' : 'فاخر',
      badgeColor: 'bg-purple-500',
      tagline: t('language') === 'en' ? 'Professional-grade with AI optimization for commercial use.' : 'درجة احترافية مع تحسين الذكاء الاصطناعي للاستخدام التجاري.',
      features: [
        t('language') === 'en' ? '24 plant pods' : '24 كبسولة نباتات',
        t('language') === 'en' ? 'AI grow optimization' : 'تحسين النمو بالذكاء الاصطناعي',
        t('language') === 'en' ? 'Premium materials' : 'مواد فاخرة',
        t('language') === 'en' ? 'Professional support' : 'دعم احترافي'
      ],
      size: 'small',
      hasImage: false,
      shipping: t('language') === 'en' ? 'Free shipping' : 'شحن مجاني',
      inStock: true
    },
    {
      id: 4,
      name: t('language') === 'en' ? 'Smart Sensor Kit' : 'طقم أجهزة الاستشعار الذكية',
      category: 'accessories',
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 312,
      badge: t('newRelease'),
      badgeColor: 'bg-orange-500',
      tagline: t('language') === 'en' ? 'Advanced sensors for monitoring pH and nutrients.' : 'أجهزة استشعار متقدمة لمراقبة الأس الهيدروجيني والمغذيات.',
      features: [
        t('language') === 'en' ? 'pH monitoring' : 'مراقبة الأس الهيدروجيني',
        t('language') === 'en' ? 'Nutrient tracking' : 'تتبع المغذيات',
        t('language') === 'en' ? 'Temperature control' : 'تحكم في درجة الحرارة',
        t('language') === 'en' ? 'Humidity sensing' : 'استشعار الرطوبة'
      ],
      size: 'small',
      hasImage: false,
      shipping: t('language') === 'en' ? 'Standard shipping' : 'شحن عادي',
      inStock: true
    },
    {
      id: 5,
      name: t('language') === 'en' ? 'LED Grow Light Panel' : 'لوحة مصابيح LED للنمو',
      category: 'accessories',
      price: 149,
      originalPrice: 199,
      rating: 4.6,
      reviews: 456,
      badge: t('language') === 'en' ? 'SALE' : 'تخفيض',
      badgeColor: 'bg-red-500',
      tagline: t('language') === 'en' ? 'Full spectrum LED panel for optimal plant growth.' : 'لوحة LED طيف كامل للنمو الأمثل للنباتات.',
      features: [
        t('language') === 'en' ? 'Full spectrum light' : 'ضوء طيف كامل',
        t('language') === 'en' ? 'Energy efficient' : 'موفر للطاقة',
        t('language') === 'en' ? 'Adjustable intensity' : 'شدة قابلة للتعديل',
        t('language') === 'en' ? 'Timer function' : 'وظيفة المؤقت'
      ],
      size: 'small-bottom',
      hasImage: false,
      shipping: t('language') === 'en' ? 'Standard shipping' : 'شحن عادي',
      inStock: true
    },
    {
      id: 6,
      name: t('language') === 'en' ? 'Nutrient Solution Set' : 'مجموعة المحاليل المغذية',
      category: 'accessories',
      price: 79,
      originalPrice: 99,
      rating: 4.8,
      reviews: 789,
      badge: t('language') === 'en' ? 'ORGANIC' : 'عضوي',
      badgeColor: 'bg-green-600',
      tagline: t('language') === 'en' ? 'Organic nutrient formulas for optimal plant health.' : 'تركيبات مغذية عضوية لصحة النباتات المثلى.',
      features: [
        t('language') === 'en' ? '100% organic' : '100% عضوي',
        t('language') === 'en' ? '3-month supply' : 'إمداد 3 أشهر',
        t('language') === 'en' ? 'Balanced formula' : 'تركيبة متوازنة',
        t('language') === 'en' ? 'Easy mixing' : 'خلط سهل'
      ],
      size: 'small-bottom',
      hasImage: false,
      shipping: t('language') === 'en' ? 'Standard shipping' : 'شحن عادي',
      inStock: true
    },
    {
      id: 10,
      name: t('language') === 'en' ? 'Herb Starter Pack' : 'حزمة البداية للأعشاب',
      category: 'pods',
      price: 29,
      originalPrice: 39,
      rating: 4.9,
      reviews: 1234,
      badge: t('bestSeller'),
      badgeColor: 'bg-green-500',
      tagline: t('language') === 'en' ? 'Complete herb collection with basil, mint, parsley.' : 'مجموعة أعشاب كاملة مع الريحان والنعناع والبقدونس.',
      features: [
        t('language') === 'en' ? '6 herb varieties' : '6 أنواع أعشاب',
        t('language') === 'en' ? 'Pre-seeded pods' : 'كبسولات مزروعة مسبقاً',
        t('language') === 'en' ? 'Germination guarantee' : 'ضمان الإنبات',
        t('language') === 'en' ? 'Growing guide' : 'دليل الزراعة'
      ],
      size: 'small-bottom',
      hasImage: false,
      shipping: t('language') === 'en' ? 'Standard shipping' : 'شحن عادي',
      inStock: true
    }
  ];

  // Handle product click
  const handleProductClick = (productId) => {
    window.location.href = `/products/${productId}`;
  };

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Filter by search term
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tagline && product.tagline.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      const [min, max] = selectedPriceRange.split('-').map(p => p.replace('+', ''));
      filtered = filtered.filter(product => {
        const price = typeof product.price === 'number' ? product.price : parseFloat(product.price.replace('$', ''));
        if (selectedPriceRange === '600+') return price >= 600;
        return price >= parseInt(min) && price <= parseInt(max);
      });
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = typeof a.price === 'number' ? a.price : parseFloat(a.price.replace('$', ''));
          const priceB = typeof b.price === 'number' ? b.price : parseFloat(b.price.replace('$', ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = typeof a.price === 'number' ? a.price : parseFloat(a.price.replace('$', ''));
          const priceB = typeof b.price === 'number' ? b.price : parseFloat(b.price.replace('$', ''));
          return priceB - priceA;
        });
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation would be here */}
      <Navbar/>
      {/* <Navbar currentPage="products" /> */}
      
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
                left: `${Math.random() * 100}%`,
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
          <div className={`text-center text-white ${isRTL ? 'text-center' : ''}`} data-animate id="hero-section">
            {/* Main Title */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="block">{t('ourSmartGardens').split(' ')[0]} {t('ourSmartGardens').split(' ')[1]}</span>
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                  {t('gardens')}
                </span>
              </h1>
              <p className={`text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-center' : ''}`}>
                {t('heroProductsText')}
              </p>
            </div>

            {/* Product Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: ShoppingCart, text: `${products.length} ${t('productsCount')}`, color: "from-blue-400 to-cyan-400" },
                { icon: Star, text: `4.9 ${t('rating')}`, color: "from-yellow-400 to-orange-400" },
                { icon: Users, text: `50K+ ${t('users')}`, color: "from-green-400 to-emerald-400" },
                { icon: Globe, text: `15+ ${t('countries')}`, color: "from-purple-400 to-pink-400" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-green-200 group-hover:text-white transition-colors duration-300">{stat.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button 
                onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
                className={`group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <ShoppingCart className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('shopAllProducts')}
              </button>
              <button className={`group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Eye className={`w-5 h-5 group-hover:scale-110 transition-transform ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('productDemo')}
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

      {/* Filter & Controls Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6" data-animate id="filter-section">
          <div className={`transition-all duration-1000 ${
            isVisible['filter-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Top Row - Search & Controls */}
            <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${isRTL ? 'right-3' : 'left-3'}`} />
                <input
                  type="text"
                  placeholder={t('searchProducts')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all ${isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4'}`}
                />
              </div>

              {/* Right Controls */}
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {/* Sort Dropdown */}
                <div className="relative">
                  <label className={`text-sm text-gray-600 mb-1 block ${isRTL ? 'text-right' : 'text-left'}`}>{t('sortBy')}</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none ${isRTL ? 'text-right' : ''}`}
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Results Count */}
                <span className="text-gray-600 text-sm whitespace-nowrap">
                  {filteredProducts.length} {t('productsCount')}
                </span>
              </div>
            </div>

            {/* Second Row - Category Filters */}
            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              {/* Filter Controls */}
              <div className={`flex flex-wrap items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${isRTL ? 'space-x-reverse' : ''}`}
                >
                  <Filter className="w-4 h-4" />
                  <span>{t('advancedFilters')}</span>
                  <ChevronDown className={`w-4 h-4 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                      }`}
                    >
                      {category.name}
                      <span className={`opacity-75 ${isRTL ? 'mr-1' : 'ml-1'}`}>({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className={`px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none ${isRTL ? 'text-right' : ''}`}
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>

            {/* Expandable Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className={`font-semibold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('language') === 'en' ? 'Features' : 'المميزات'}
                    </h4>
                    <div className="space-y-2">
                      {[
                        t('language') === 'en' ? 'Smart Technology' : 'تقنية ذكية',
                        t('language') === 'en' ? 'LED Grow Lights' : 'مصابيح LED للنمو',
                        t('language') === 'en' ? 'Mobile App Control' : 'تحكم تطبيق الهاتف',
                        t('language') === 'en' ? 'Auto Watering' : 'سقي آلي',
                        t('language') === 'en' ? 'pH Monitoring' : 'مراقبة الأس الهيدروجيني'
                      ].map((feature, index) => (
                        <label key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <input
                            type="checkbox"
                            className="text-green-500 focus:ring-green-500 rounded"
                          />
                          <span className={`text-sm text-gray-700 ${isRTL ? 'mr-2 text-right' : 'ml-2'}`}>{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('language') === 'en' ? 'Plant Capacity' : 'سعة النباتات'}
                    </h4>
                    <div className="space-y-2">
                      {[
                        t('language') === 'en' ? '1-6 plants' : '1-6 نباتات',
                        t('language') === 'en' ? '6-12 plants' : '6-12 نبتة',
                        t('language') === 'en' ? '12-24 plants' : '12-24 نبتة',
                        t('language') === 'en' ? '24+ plants' : '24+ نبتة'
                      ].map((capacity, index) => (
                        <label key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <input
                            type="radio"
                            name="capacity"
                            className="text-green-500 focus:ring-green-500"
                          />
                          <span className={`text-sm text-gray-700 ${isRTL ? 'mr-2 text-right' : 'ml-2'}`}>{capacity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold text-gray-900 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('language') === 'en' ? 'Brand' : 'العلامة التجارية'}
                    </h4>
                    <div className="space-y-2">
                      {['Nelover', 'AeroGarden', 'Click & Grow', 'Tower Garden'].map((brand, index) => (
                        <label key={index} className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <input
                            type="checkbox"
                            className="text-green-500 focus:ring-green-500 rounded"
                          />
                          <span className={`text-sm text-gray-700 ${isRTL ? 'mr-2 text-right' : 'ml-2'}`}>{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50" id="products-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6" data-animate id="products-grid">
          <div className={`transition-all duration-1000 ${
            isVisible['products-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('noProductsFound')}</h3>
                <p className="text-gray-600">{t('noProductsMessage')}</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  {t('clearAllFilters')}
                </button>
              </div>
            ) : (
              <AnnouncementCards 
                products={filteredProducts} 
                onProductClick={handleProductClick}
              />
            )}
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6" data-animate id="categories-section">
          <div className={`text-center mb-16 ${isRTL ? 'text-center' : ''}`}>
            <h2 className={`text-4xl md:text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
              isVisible['categories-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {t('shopByCategory')}
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['categories-section'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'gardens',
                name: t('smartGardensCategory'),
                description: t('completeSystems'),
                count: `3 ${t('productsCount')}`,
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
                color: 'from-green-500 to-emerald-500'
              },
              {
                id: 'accessories',
                name: t('accessories'),
                description: t('professionalAccessories'),
                count: `6 ${t('productsCount')}`,
                image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
                color: 'from-indigo-500 to-cyan-500'
              },
              {
                id: 'pods',
                name: t('plantPods'),
                description: t('preSeededPods'),
                count: `3 ${t('productsCount')}`,
                image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&h=400&fit=crop',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                  isVisible['categories-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200 + 400}ms` }}
                onClick={() => setSelectedCategory(category.id)}
              >
                {/* Background Image */}
                <div 
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className={`absolute inset-0 flex items-end p-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-white/80 text-sm font-medium">{category.count}</span>
                      <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16" data-animate id="newsletter-section">
          <div className={`text-center transition-all duration-1000 ${
            isVisible['newsletter-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } ${isRTL ? 'text-center' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('stayUpdated')}
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
              {t('gardenTipsText')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <input
                type="email"
                placeholder={t('enterEmail')}
                className={`flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 outline-none ${isRTL ? 'text-right' : ''}`}
              />
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                {t('subscribeNow')}
              </button>
            </div>
            <p className="text-green-200 text-sm mt-4">
              {t('subscriberCount')}
            </p>
          </div>
        </div>
      </section>

      {/* Footer would be here */}
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default Products;