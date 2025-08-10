import React, { useState, useEffect, useRef } from 'react';
import { 
  Leaf, Award, Users, Globe, ArrowRight, Star,
  Shield, Truck, Heart,
  ShoppingCart, Eye, Search, Grid, List
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Main Products Page Component
const ProductsPageOptimized = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // Complete Product Catalog
  const products = [
    // Smart Gardens
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
      description: 'Perfect starter kit for fresh herbs and small vegetables. Ideal for beginners.',
      features: ['6 plant pods', 'LED grow lights', 'Smart water system', 'Mobile app control'],
      specifications: {
        dimensions: '45 x 25 x 38 cm',
        weight: '3.2 kg',
        power: '35W',
        capacity: '6 plants'
      },
      inStock: true,
      shipping: 'Free shipping',
      warranty: '2 years'
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
      description: 'Advanced features for serious gardeners. Larger capacity with premium materials.',
      features: ['12 plant pods', 'Full spectrum LEDs', 'Automated nutrients', 'Growth analytics'],
      specifications: {
        dimensions: '60 x 35 x 45 cm',
        weight: '5.8 kg',
        power: '65W',
        capacity: '12 plants'
      },
      inStock: true,
      shipping: 'Free shipping',
      warranty: '3 years'
    },
    {
      id: 3,
      name: 'Nelover Garden Pro',
      category: 'gardens',
      price: 999,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=600&fit=crop',
      badge: 'PREMIUM',
      badgeColor: 'bg-purple-500',
      description: 'Professional-grade with AI optimization and premium materials for commercial use.',
      features: ['24 plant pods', 'AI grow optimization', 'Premium materials', 'Professional support'],
      specifications: {
        dimensions: '80 x 50 x 60 cm',
        weight: '12.5 kg',
        power: '120W',
        capacity: '24 plants'
      },
      inStock: true,
      shipping: 'Free shipping',
      warranty: '5 years'
    },
    // Accessories
    {
      id: 4,
      name: 'Smart Sensor Kit',
      category: 'accessories',
      price: 199,
      originalPrice: 249,
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=600&fit=crop',
      badge: 'NEW',
      badgeColor: 'bg-orange-500',
      description: 'Advanced sensors for monitoring pH, nutrients, and environmental conditions.',
      features: ['pH monitoring', 'Nutrient tracking', 'Temperature control', 'Humidity sensing'],
      specifications: {
        connectivity: 'WiFi + Bluetooth',
        battery: '6 months',
        range: '10 meters',
        compatibility: 'All Nelover gardens'
      },
      inStock: true,
      shipping: 'Free shipping',
      warranty: '1 year'
    },
    {
      id: 5,
      name: 'LED Grow Light Panel',
      category: 'accessories',
      price: 149,
      originalPrice: 199,
      rating: 4.6,
      reviews: 456,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
      badge: 'SALE',
      badgeColor: 'bg-red-500',
      description: 'Full spectrum LED panel for optimal plant growth in any environment.',
      features: ['Full spectrum light', 'Energy efficient', 'Adjustable intensity', 'Timer function'],
      specifications: {
        power: '45W',
        spectrum: 'Full spectrum',
        lifespan: '50,000 hours',
        coverage: '60 x 60 cm'
      },
      inStock: true,
      shipping: 'Free shipping',
      warranty: '3 years'
    },
    {
      id: 6,
      name: 'Nutrient Solution Set',
      category: 'accessories',
      price: 79,
      originalPrice: 99,
      rating: 4.8,
      reviews: 789,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop',
      badge: 'ORGANIC',
      badgeColor: 'bg-green-600',
      description: 'Organic nutrient formulas for optimal plant growth and health.',
      features: ['100% organic', '3-month supply', 'Balanced formula', 'Easy mixing'],
      specifications: {
        volume: '3 x 500ml bottles',
        duration: '3 months',
        type: 'Organic liquid',
        plants: 'All vegetables & herbs'
      },
      inStock: true,
      shipping: 'Standard shipping',
      warranty: '6 months'
    },
    {
      id: 7,
      name: 'Water Circulation Pump',
      category: 'accessories',
      price: 89,
      originalPrice: 119,
      rating: 4.5,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
      description: 'High-efficiency pump for optimal water circulation and aeration.',
      features: ['Silent operation', 'Energy efficient', 'Adjustable flow', 'Easy installation'],
      specifications: {
        flow: '800L/hour',
        power: '15W',
        noise: '<25dB',
        warranty: '2 years'
      },
      inStock: true,
      shipping: 'Standard shipping',
      warranty: '2 years'
    },
    {
      id: 8,
      name: 'pH Testing Kit',
      category: 'accessories',
      price: 39,
      originalPrice: 49,
      rating: 4.4,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1583912086296-32d18e3b9ab0?w=600&h=600&fit=crop',
      description: 'Digital pH meter and testing solutions for precise water management.',
      features: ['Digital display', 'Auto calibration', 'Storage case', 'Calibration solutions'],
      specifications: {
        range: 'pH 0-14',
        accuracy: '±0.1 pH',
        calibration: 'Automatic',
        battery: 'AAA x2'
      },
      inStock: true,
      shipping: 'Standard shipping',
      warranty: '1 year'
    },
    {
      id: 9,
      name: 'Smart Garden Stand',
      category: 'accessories',
      price: 129,
      originalPrice: 159,
      rating: 4.7,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1586985561592-ef86e4b4abe5?w=600&h=600&fit=crop',
      description: 'Adjustable premium stand with storage for any Nelover garden system.',
      features: ['Height adjustable', 'Storage shelves', 'Premium materials', 'Easy assembly'],
      specifications: {
        material: 'Aluminum alloy',
        height: '80-120 cm adjustable',
        weight: '8.5 kg',
        capacity: '50 kg'
      },
      inStock: true,
      shipping: 'Free shipping',
      warranty: '5 years'
    },
    // Plant Pods
    {
      id: 10,
      name: 'Herb Starter Pack',
      category: 'pods',
      price: 29,
      originalPrice: 39,
      rating: 4.9,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&h=600&fit=crop',
      badge: 'BESTSELLER',
      badgeColor: 'bg-green-500',
      description: 'Complete herb collection with basil, mint, parsley, and cilantro pods.',
      features: ['6 herb varieties', 'Pre-seeded pods', 'Germination guarantee', 'Growing guide'],
      specifications: {
        varieties: '6 different herbs',
        germination: '5-10 days',
        harvest: '4-6 weeks',
        yield: 'Multiple harvests'
      },
      inStock: true,
      shipping: 'Standard shipping',
      warranty: 'Germination guarantee'
    },
    {
      id: 11,
      name: 'Vegetable Garden Pack',
      category: 'pods',
      price: 49,
      originalPrice: 69,
      rating: 4.8,
      reviews: 567,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop',
      description: 'Fresh vegetables including lettuce, spinach, kale, and cherry tomatoes.',
      features: ['8 vegetable varieties', 'Seasonal selection', 'High yield', 'Nutrition guide'],
      specifications: {
        varieties: '8 vegetables',
        germination: '7-14 days',
        harvest: '6-8 weeks',
        seasons: 'All year'
      },
      inStock: true,
      shipping: 'Standard shipping',
      warranty: 'Germination guarantee'
    },
    {
      id: 12,
      name: 'Microgreens Collection',
      category: 'pods',
      price: 35,
      originalPrice: 45,
      rating: 4.6,
      reviews: 289,
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&h=600&fit=crop',
      badge: 'SUPERFOOD',
      badgeColor: 'bg-purple-500',
      description: 'Nutrient-dense microgreens collection for health-conscious gardeners.',
      features: ['12 microgreen varieties', 'High nutrition', 'Fast growing', 'Superfood collection'],
      specifications: {
        varieties: '12 microgreens',
        germination: '3-7 days',
        harvest: '10-14 days',
        nutrition: 'High vitamin content'
      },
      inStock: true,
      shipping: 'Standard shipping',
      warranty: 'Germination guarantee'
    }
  ];

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="products" />
      
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
                { icon: ShoppingCart, text: "12 Products", color: "from-blue-400 to-cyan-400" },
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
              <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center">
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

      {/* Filter & Search Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6" data-animate id="filter-section">
          <div className={`transition-all duration-1000 ${
            isVisible['filter-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-green-500 text-white' : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-green-500 text-white' : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6" data-animate id="products-section">
          <div className={`transition-all duration-1000 ${
            isVisible['products-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Results Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:border-green-500 outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className={`grid ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-8`}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-rotate-1 ${
                    isVisible['products-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    {product.badge && (
                      <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}>
                        {product.badge}
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                      </button>
                    </div>

                    <div 
                      className="aspect-square bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-2">
                        <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-200 flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>Quick View</span>
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center space-x-1">
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'fill-current text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{product.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & Stock */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className={`flex items-center space-x-1 ${
                        product.inStock ? 'text-green-600' : 'text-red-500'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          product.inStock ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className="text-sm font-medium">
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                    </div>

                    {/* Shipping & Warranty */}
                    <div className="text-xs text-gray-500 mb-4 space-y-1">
                      <div className="flex items-center space-x-1">
                        <Truck className="w-3 h-3" />
                        <span>{product.shipping}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>{product.warranty} warranty</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                        <ShoppingCart className="w-5 h-5" />
                        <span>Add to Cart</span>
                      </button>
                      <button className="w-full border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            {filteredProducts.length >= 8 && (
              <div className="text-center mt-12">
                <button className="bg-white border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Load More Products
                </button>
              </div>
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
                name: 'Smart Gardens',
                description: 'Complete growing systems with AI optimization',
                count: '3 Products',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
                color: 'from-green-500 to-emerald-500'
              },
              {
                name: 'Accessories',
                description: 'Sensors, lights, and growing accessories',
                count: '6 Products',
                image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Plant Pods',
                description: 'Pre-seeded pods for herbs and vegetables',
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

      <Footer />
    </div>
  );
};

export default ProductsPageOptimized;