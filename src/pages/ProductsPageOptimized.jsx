import React, { useState, useEffect } from 'react';
import { 
  Leaf, Award, Users, Globe, ArrowRight, Star,
  Shield, Truck, Heart, ShoppingCart, Eye, Search, 
  Grid, List, Filter, ChevronDown
} from 'lucide-react';

// AnnouncementCards Component (This would be in components/AnnouncementCards.js)
const AnnouncementCards = ({ products, onProductClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-min">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`
            ${getSizeClasses(product.size)}
            group relative bg-white rounded-2xl shadow-sm hover:shadow-xl 
            transition-all duration-500 overflow-hidden cursor-pointer
            transform hover:-translate-y-2 hover:scale-[1.02]
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ 
            transitionDelay: `${index * 100}ms`,
            border: '1px solid rgba(34, 197, 94, 0.1)'
          }}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => onProductClick(product.id)}
        >
          {/* Badge */}
          <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1.5 rounded-full text-xs font-semibold z-10 backdrop-blur-sm shadow-lg`}>
            {product.badge}
          </div>

          {/* Wishlist & Quick Actions */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 z-10">
            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </button>
            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
              <Eye className="w-4 h-4 text-gray-600 hover:text-green-500" />
            </button>
          </div>

          {/* Product Image */}
          {product.hasImage && product.image && (
            <div className="relative h-2/3 sm:h-3/5 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating elements for premium feel */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-white/30 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-green-400/40 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          )}

          {/* Content Section */}
          <div 
            className={`
              ${product.hasImage && product.image ? 'h-1/3 sm:h-2/5' : 'h-full'} 
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
            <div className="relative z-10 flex-grow">
              <h3 className={`
                text-white font-bold leading-tight mb-2
                ${product.size === 'large' ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 
                  product.size === 'medium' ? 'text-base sm:text-lg md:text-xl' : 
                  product.size.includes('small-bottom') ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'}
              `}>
                {product.name}
              </h3>

              {product.tagline && (
                <p className={`
                  text-white/90 font-light leading-relaxed mb-3
                  ${product.size === 'large' ? 'text-sm sm:text-base' : 
                    product.size.includes('small-bottom') ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'}
                `}>
                  {product.tagline}
                </p>
              )}

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-300 fill-current' : 'text-white/30'}`} />
                  ))}
                  <span className="text-white/70 text-xs ml-1">({product.reviews})</span>
                </div>
              )}

              {/* Features for larger cards */}
              {(product.size === 'large' || product.size === 'medium') && product.features && (
                <div className="space-y-1 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-2"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      <span className="text-white/80 text-xs font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Price and Actions */}
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <span className={`
                  text-white font-bold
                  ${product.size === 'large' ? 'text-xl sm:text-2xl' : 
                    product.size.includes('small-bottom') ? 'text-lg sm:text-xl' : 'text-lg sm:text-xl'}
                `}>
                  ${typeof product.price === 'number' ? product.price : product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-white/50 text-sm line-through ml-2">
                    ${product.originalPrice}
                  </span>
                )}
                {product.shipping && (
                  <p className="text-white/60 text-xs mt-1">
                    {product.shipping}
                  </p>
                )}
              </div>

              {/* Action buttons */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="flex space-x-1">
                  <button 
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Subtle Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
          
          {/* Premium shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

// Main Products Page Component
const ProductsPageOptimized = () => {
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
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'gardens', name: 'Smart Gardens', count: 3 },
    { id: 'accessories', name: 'Accessories', count: 6 },
    { id: 'pods', name: 'Plant Pods', count: 3 }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: '0-100', name: 'Under $100' },
    { id: '100-300', name: '$100 - $300' },
    { id: '300-600', name: '$300 - $600' },
    { id: '600+', name: '$600+' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest' }
  ];

  // Complete Product Catalog with masonry sizes
  const products = [
    {
      id: 1,
      name: 'Nelover Garden Compact',
      category: 'gardens',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 847,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop',
      badge: 'BESTSELLER',
      badgeColor: 'bg-green-500',
      tagline: 'Perfect starter kit for fresh herbs and small vegetables.',
      features: ['6 plant pods', 'LED grow lights', 'Smart water system', 'Mobile app control'],
      size: 'large',
      hasImage: true,
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 2,
      name: 'Nelover Garden Plus',
      category: 'gardens',
      price: 599,
      originalPrice: 799,
      rating: 4.8,
      reviews: 523,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=600&fit=crop',
      badge: 'POPULAR',
      badgeColor: 'bg-blue-500',
      tagline: 'Advanced features for serious gardeners with premium materials.',
      features: ['12 plant pods', 'Full spectrum LEDs', 'Automated nutrients', 'Growth analytics'],
      size: 'medium',
      hasImage: false,
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 3,
      name: 'Nelover Garden Pro',
      category: 'gardens',
      price: 999,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 234,
      badge: 'PREMIUM',
      badgeColor: 'bg-purple-500',
      tagline: 'Professional-grade with AI optimization for commercial use.',
      features: ['24 plant pods', 'AI grow optimization', 'Premium materials', 'Professional support'],
      size: 'small',
      hasImage: false,
      shipping: 'Free shipping',
      inStock: true
    },
    {
      id: 4,
      name: 'Smart Sensor Kit',
      category: 'accessories',
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 312,
      badge: 'NEW',
      badgeColor: 'bg-orange-500',
      tagline: 'Advanced sensors for monitoring pH and nutrients.',
      features: ['pH monitoring', 'Nutrient tracking', 'Temperature control', 'Humidity sensing'],
      size: 'small',
      hasImage: false,
      shipping: 'Standard shipping',
      inStock: true
    },
    {
      id: 5,
      name: 'LED Grow Light Panel',
      category: 'accessories',
      price: 149,
      originalPrice: 199,
      rating: 4.6,
      reviews: 456,
      badge: 'SALE',
      badgeColor: 'bg-red-500',
      tagline: 'Full spectrum LED panel for optimal plant growth.',
      features: ['Full spectrum light', 'Energy efficient', 'Adjustable intensity', 'Timer function'],
      size: 'small-bottom',
      hasImage: false,
      shipping: 'Standard shipping',
      inStock: true
    },
    {
      id: 6,
      name: 'Nutrient Solution Set',
      category: 'accessories',
      price: 79,
      originalPrice: 99,
      rating: 4.8,
      reviews: 789,
      badge: 'ORGANIC',
      badgeColor: 'bg-green-600',
      tagline: 'Organic nutrient formulas for optimal plant health.',
      features: ['100% organic', '3-month supply', 'Balanced formula', 'Easy mixing'],
      size: 'small-bottom',
      hasImage: false,
      shipping: 'Standard shipping',
      inStock: true
    },
    {
      id: 10,
      name: 'Herb Starter Pack',
      category: 'pods',
      price: 29,
      originalPrice: 39,
      rating: 4.9,
      reviews: 1234,
      badge: 'BESTSELLER',
      badgeColor: 'bg-green-500',
      tagline: 'Complete herb collection with basil, mint, parsley.',
      features: ['6 herb varieties', 'Pre-seeded pods', 'Germination guarantee', 'Growing guide'],
      size: 'small-bottom',
      hasImage: false,
      shipping: 'Standard shipping',
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
          <div className="text-center text-white" data-animate id="hero-section">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 transition-all duration-1000 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Award className="w-4 h-4 text-green-300" />
              <span className="text-sm font-medium">Award-Winning Smart Gardens</span>
            </div>

            {/* Main Title */}
            <div className={`mb-8 transition-all duration-1000 delay-300 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="block">Our Smart</span>
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                  Gardens
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Discover our complete range of intelligent indoor gardening solutions. 
                From compact herb gardens to professional growing systems.
              </p>
            </div>

            {/* Product Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              isVisible['hero-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: ShoppingCart, text: `${products.length} Products`, color: "from-blue-400 to-cyan-400" },
                { icon: Star, text: "4.9 Rating", color: "from-yellow-400 to-orange-400" },
                { icon: Users, text: "50K+ Users", color: "from-green-400 to-emerald-400" },
                { icon: Globe, text: "15+ Countries", color: "from-purple-400 to-pink-400" }
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
            }`}>
              <button 
                onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Shop All Products
              </button>
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center">
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Product Demo
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
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Right Controls */}
              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>

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
                  {filteredProducts.length} products
                </span>
              </div>
            </div>

            {/* Second Row - Category Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Filter Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Advanced Filters</span>
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
                      <span className="ml-1 opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
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
                    <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                    <div className="space-y-2">
                      {['Smart Technology', 'LED Grow Lights', 'Mobile App Control', 'Auto Watering', 'pH Monitoring'].map((feature, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            className="text-green-500 focus:ring-green-500 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Plant Capacity</h4>
                    <div className="space-y-2">
                      {['1-6 plants', '6-12 plants', '12-24 plants', '24+ plants'].map((capacity, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="radio"
                            name="capacity"
                            className="text-green-500 focus:ring-green-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{capacity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
                    <div className="space-y-2">
                      {['Nelover', 'AeroGarden', 'Click & Grow', 'Tower Garden'].map((brand, index) => (
                        <label key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            className="text-green-500 focus:ring-green-500 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700">{brand}</span>
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
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our premium selection of smart gardening solutions designed to bring fresh, healthy produce to your home.
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                  Clear all filters
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
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold text-gray-800 mb-6 transition-all duration-1000 ${
              isVisible['categories-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Shop by <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isVisible['categories-section'] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'gardens',
                name: 'Smart Gardens',
                description: 'Complete growing systems with AI optimization and premium materials',
                count: '3 Products',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
                color: 'from-green-500 to-emerald-500'
              },
              {
                id: 'accessories',
                name: 'Accessories',
                description: 'Sensors, lights, nutrients, and professional growing accessories',
                count: '6 Products',
                image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                id: 'pods',
                name: 'Plant Pods',
                description: 'Pre-seeded pods for herbs, vegetables, and microgreens',
                count: '3 Products',
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
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm font-medium">{category.count}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Garden Tips
            </h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto text-lg">
              Get expert gardening advice, seasonal tips, and exclusive product offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 outline-none"
              />
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-green-200 text-sm mt-4">
              Join 25,000+ gardeners who trust our expertise. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer would be here */}
      {/* <Footer /> */}
    </div>
  );
};

export default ProductsPageOptimized;