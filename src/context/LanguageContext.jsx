import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// All translations in one place
const translations = {
  en: {
    // Navbar
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    smartGardens: "Smart Gardens",
    shopNow: "Shop Now",
    
    // Home Page
    welcomeTitle: "Welcome to Nelover",
    welcomeSubtitle: "Smart Gardening Solutions for Modern Living",
    heroDescription: "Transform your space into a thriving garden with our innovative smart gardening technology. Grow fresh, healthy plants effortlessly.",
    learnMore: "Learn More",
    featuresTitle: "Why Choose Nelover?",
    feature1Title: "Smart Technology",
    feature1Desc: "AI-powered monitoring and automated care systems",
    feature2Title: "Easy to Use",
    feature2Desc: "User-friendly interface suitable for all skill levels",
    feature3Title: "Sustainable",
    feature3Desc: "Eco-friendly solutions for a greener future",
    growingSmarter: "Growing Smarter",
    gardens: "Gardens",
    heroMainText: "Revolutionary indoor gardening technology that grows fresh food year-round. No soil, no mess, no experience needed.",
    startGrowingToday: "Start Growing Today",
    viewAllProducts: "View All Products",
    quickAccessSmallSpaces: "Perfect for Small Spaces →",
    quickAccessProfessional: "Professional Growing →",
    quickAccessVertical: "Vertical Gardens →",
    chooseYourGarden: "Choose Your Perfect Garden",
    discoverProducts: "Discover our complete range of smart indoor gardening solutions",
    eliteSeries: "Elite Series",
    compactSeries: "Compact Series",
    proSeries: "Pro Series",
    towerSeries: "Tower Series",
    viewAllCompare: "View All Products & Compare Features",
    
    // About Page
    aboutTitle: "About Nelover",
    aboutSubtitle: "Revolutionizing Urban Gardening",
    aboutDescription: "At Nelover, we believe everyone deserves access to fresh, homegrown produce. Our smart garden systems make it possible to grow healthy plants anywhere, anytime.",
    missionTitle: "Our Mission",
    missionText: "To make sustainable gardening accessible to everyone through innovative technology and design.",
    visionTitle: "Our Vision",
    visionText: "A world where every home can produce fresh, nutritious food sustainably.",
    teamTitle: "Our Team",
    growingTheFuture: "Growing the Future",
    innovationAward: "Innovation Award Winner 2024",
    missionDescription: "We're on a mission to bring fresh, sustainable food production into every home through intelligent indoor gardening technology that makes growing easier than ever.",
    watchOurStory: "Watch Our Story",
    meetTheTeam: "Meet The Team",
    customers: "Customers",
    countries: "Countries",
    successRate: "Success Rate",
    ourImpact: "Our Impact in Numbers",
    ourStory: "Our Story",
    whoWeAre: "Who We Are",
    whatWeDo: "What We Do & Did",
    goalsVision: "Our Goals & Vision",
    whoWeAreText: "We are Nelover, a passionate team of innovators, gardeners, and technology enthusiasts united by a simple belief: everyone deserves access to fresh, healthy food grown in their own home.",
    whatWeDoText: "We design and manufacture smart indoor gardening systems that revolutionize how people grow food at home. Since our founding, we've helped over 50,000 families grow fresh herbs, vegetables, and greens year-round.",
    goalsVisionText: "We envision a world where every home has access to fresh, pesticide-free produce regardless of climate, season, or location. By 2030, we aim to have Nelover gardens in 1 million homes worldwide.",
    ourCoreValues: "Our Core Values",
    sustainabilityFirst: "Sustainability First",
    innovationDriven: "Innovation Driven",
    communityFocused: "Community Focused",
    sustainabilityDesc: "Every decision we make considers environmental impact and long-term sustainability for our planet.",
    innovationDesc: "We continuously push boundaries to make indoor gardening smarter and more efficient.",
    communityDesc: "We build products that bring people together around the joy of growing fresh food.",
    
    // Contact Page
    contactTitle: "Contact Us",
    contactSubtitle: "Get in Touch",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    messageLabel: "Message",
    sendMessage: "Send Message",
    contactInfo: "Contact Information",
    address: "Address",
    addressText: "Baghdad, Iraq",
    phone: "Phone",
    email: "Email",
    getInTouch: "Get in Touch",
    heroContactText: "We'd love to hear from you. Whether you have questions about our products, need support, or want to collaborate - we're here to help.",
    customerSupport: "24/7 Customer Support",
    callUsNow: "Call Us Now",
    chooseConnection: "Choose Your Connection",
    phoneSupport: "Phone Support",
    emailSupport: "Email Support",
    whatsappChat: "WhatsApp Chat",
    phoneSupportDesc: "Available 9 AM - 6 PM (Baghdad Time)",
    emailSupportDesc: "We'll respond within 24 hours",
    whatsappDesc: "Quick messaging support",
    callNow: "Call Now",
    sendEmail: "Send Email",
    chatWhatsapp: "Chat on WhatsApp",
    sendUsMessage: "Send Us a Message",
    formDescription: "Fill out the form below and we'll get back to you as soon as possible. We're here to help with any questions or concerns.",
    messageSuccess: "Message sent successfully! We'll get back to you soon.",
    businessHours: "Business Hours",
    ourLocations: "Our Locations",
    followUs: "Follow Us",
    emergencySupport: "Emergency Support",
    liveChatSupport: "Live Chat Support",
    frequentlyAsked: "Frequently Asked Questions",
    questionResponse: "How quickly do you respond to inquiries?",
    questionTechnical: "Do you offer technical support?",
    questionShowroom: "Can I visit your showroom?",
    questionLanguages: "What languages do you support?",
    answerResponse: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly or use our WhatsApp chat for faster response.",
    answerTechnical: "Yes! We provide comprehensive technical support for all our smart garden products, including setup assistance, troubleshooting, and maintenance guidance.",
    answerShowroom: "Absolutely! We have showrooms in Baghdad and Erbil where you can see our products in action. Please call ahead to schedule a visit and product demonstration.",
    answerLanguages: "We provide support in Arabic, English, and Kurdish to serve our diverse customer base across Iraq and the region.",
    moreQuestions: "Have more questions?",
    viewFullFAQ: "View Full FAQ",
    
    // Products Page
    productsTitle: "Our Products",
    productsSubtitle: "Smart Gardening Solutions",
    viewDetails: "View Details",
    addToCart: "Add to Cart",
    price: "Price",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    ourSmartGardens: "Our Smart Gardens",
    awardWinning: "Award-Winning Smart Gardens",
    heroProductsText: "Discover our complete range of intelligent indoor gardening solutions. From compact herb gardens to professional growing systems.",
    productsCount: "Products",
    rating: "Rating",
    users: "Users",
    shopAllProducts: "Shop All Products",
    productDemo: "Product Demo",
    searchProducts: "Search products...",
    sortBy: "Sort by",
    allProducts: "All Products",
    smartGardensCategory: "Smart Gardens",
    accessories: "Accessories",
    plantPods: "Plant Pods",
    allPrices: "All Prices",
    under100: "Under $100",
    price100to300: "$100 - $300",
    price300to600: "$300 - $600",
    price600plus: "$600+",
    featured: "Featured",
    priceLowHigh: "Price: Low to High",
    priceHighLow: "Price: High to Low",
    highestRated: "Highest Rated",
    newest: "Newest",
    advancedFilters: "Advanced Filters",
    noProductsFound: "No products found",
    noProductsMessage: "Try adjusting your search or filter criteria",
    clearAllFilters: "Clear all filters",
    shopByCategory: "Shop by Category",
    completeSystems: "Complete growing systems with AI optimization and premium materials",
    professionalAccessories: "Sensors, lights, nutrients, and professional growing accessories",
    preSeededPods: "Pre-seeded pods for herbs, vegetables, and microgreens",
    joinMovement: "Join the Movement",
    stayUpdated: "Stay Updated with Garden Tips",
    gardenTipsText: "Get expert gardening advice, seasonal tips, and exclusive product offers delivered to your inbox.",
    enterEmail: "Enter your email",
    subscribeNow: "Subscribe Now",
    subscriberCount: "Join 25,000+ gardeners who trust our expertise. Unsubscribe anytime.",
    
    // Product Details Page
    productDetails: "Product Details",
    specifications: "Specifications",
    features: "Features",
    reviews: "Reviews",
    relatedProducts: "Related Products",
    quantity: "Quantity",
    gardenProElite: "GardenPro Elite",
    futureIndoorGardening: "The future of indoor gardening.",
    innovationWinner: "Innovation Award Winner",
    startingAt: "Starting at",
    monthlyPayment: "or $41.58/mo. for 12 mo.*",
    ratingReviews: "4.9/5 rating (2,400+ reviews)",
    freeShipping: "Free shipping & 30-day returns",
    goBack: "Go Back",
    watchDemo: "Watch Demo",
    takeCloserLook: "Take a closer look.",
    chooseYourHighlights: "Choose Your Highlights",
    smartAISystem: "Smart AI System. Growing made simple. Professional results.",
    hydroponicTech: "Hydroponic Technology. No soil. No mess. Pure nutrition.",
    yearRoundGrowing: "Year-round growing. Fresh herbs and vegetables. Every season.",
    mobileAppControl: "Mobile App Control. Monitor anywhere. Smart notifications.",
    watchFilm: "Watch the film",
    watchEvent: "Watch the event",
    exploreFullStory: "Explore the full story",
    neloverSmart: "Nelover. Smart. Sustainable. Pro.",
    smartGrowingTech: "Smart Growing Technology",
    aiOptimization: "AI-powered optimization in action",
    hydroponicSystem: "Hydroponic System",
    cleanEfficient: "Clean, efficient growing",
    ledGrowLights: "LED Grow Lights",
    fullSpectrumNutrition: "Full spectrum nutrition",
    smartGrowingDescription: "Nelover Garden Pro is the first smart indoor garden to feature AI-powered growing optimization, using advanced hydroponic technology for perfect plant growth.",
    effortlessRewarding: "Our intelligent system monitors every aspect of plant health, making indoor gardening effortless and rewarding for everyone. You'll notice the difference from day one.",
    aiProChip: "AI Pro chip. A revolution in smart gardening.",
    mostAdvanced: "It's here. The most advanced indoor gardening system ever created.",
    smartGardenInterface: "Smart Garden Interface",
    mostIntelligent: "AI Pro delivers our most intelligent growing system by far.",
    thriveNeverBefore: "Your plants will thrive like never before, with perfectly optimized growing conditions and automated care.",
    proClassAI: "Pro-class AI with smart sensors",
    
    // Error 404 Page
    error404Title: "Page Not Found",
    error404Message: "The page you're looking for doesn't exist.",
    goHome: "Go Home",
    oopsPageNotFound: "Oops! Page Not Found",
    pageNotFoundDescription: "It seems like the page you're looking for has wandered off into the digital wilderness. Don't worry, we'll help you find your way back home!",
    
    // Terms and Conditions Page
    termsTitle: "Terms and Conditions",
    termsSubtitle: "Please read these terms carefully",
    lastUpdated: "Last updated",
    acceptanceTitle: "Acceptance of Terms",
    acceptanceText: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
    useOfSiteTitle: "Use of the Site",
    useOfSiteText: "You may use our website for lawful purposes only. You agree not to use the site in any way that violates any applicable federal, state, local, or international law or regulation.",
    privacyTitle: "Privacy Policy",
    privacyText: "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Site.",
    
    // Privacy Policy Page
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicySubtitle: "How we collect, use, and protect your information",
    informationCollectionTitle: "Information Collection",
    informationCollectionText: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us.",
    informationUseTitle: "How We Use Information",
    informationUseText: "We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.",
    informationSharingTitle: "Information Sharing",
    informationSharingText: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
    
    // CTA Section
    readyToStart: "Ready to Start Your Smart Garden Journey?",
    ctaDescription: "Join thousands of families already growing fresh, healthy food at home. No green thumb required – our smart technology does the work for you.",
    waterUsage: "90% less water usage",
    freshHerbs: "Fresh herbs year-round",
    aiPowered: "AI-powered growth optimization",
    pesticideFree: "Pesticide-free produce",
    shopSmartGardens: "Shop Smart Gardens",
    readyToGrow: "Ready to start growing?",
    
    // Footer
    helpCenter: "Help Center",
    setupGuide: "Setup Guide",
    plantCare: "Plant Care",
    troubleshooting: "Troubleshooting",
    warranty: "Warranty",
    careers: "Careers",
    press: "Press",
    blog: "Blog",
    sustainability: "Sustainability",
    footerDescription: "Revolutionizing indoor gardening with intelligent technology. Growing fresh, healthy food has never been easier or more sustainable.",
    madeWithLove: "Made with ❤️ in Iraq",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    
    // Announcement Cards
    newRelease: "NEW RELEASE",
    bestSeller: "Best Seller",
    spaceSaver: "Space Saver",
    proChoice: "Pro Choice",
    verticalSolution: "Vertical Solution",
    beginnerFriendly: "Beginner Friendly",
    enhanced: "Enhanced",
    allWeather: "All Weather",
    perfectStarter: "Perfect for Small Spaces",
    commercialGrade: "Commercial Grade",
    plantsCapacity: "20 Plants Capacity",
    perfectStarterKit: "Perfect Starter Kit",
    enhancedFeatures: "Enhanced Features",
    weatherResistant: "Weather Resistant",
    choosePerfectGarden: "Choose Your Perfect Garden",
    needHelp: "Need help choosing the right garden for you?",
    getExpertRec: "Get Expert Recommendation",
    smartGardenDemo: "Smart Garden Demo",
    watchInAction: "Watch Smart Garden in Action",
    easyGrowing: "See how easy growing can be",
    smartGrowing: "Smart Growing",
    aiOptimizes: "AI optimizes growth conditions",
    appControl: "App Control",
    monitorAnywhere: "Monitor from anywhere",
    provenResults: "Proven Results",
    startGrowingToday2: "Start Growing Today",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    confirm: "Confirm",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    showMore: "Show More",
    showLess: "Show Less",
  },
  ar: {
    // Navbar
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    contact: "اتصل بنا",
    smartGardens: "الحدائق الذكية",
    shopNow: "تسوق الآن",
    
    // Home Page
    welcomeTitle: "مرحباً بكم في نيلوفر",
    welcomeSubtitle: "حلول البستنة الذكية للحياة العصرية",
    heroDescription: "حول مساحتك إلى حديقة مزدهرة باستخدام تقنية البستنة الذكية المبتكرة. ازرع نباتات طازجة وصحية بسهولة.",
    learnMore: "اعرف المزيد",
    featuresTitle: "لماذا تختار نيلوفر؟",
    feature1Title: "تقنية ذكية",
    feature1Desc: "أنظمة مراقبة مدعومة بالذكاء الاصطناعي ورعاية آلية",
    feature2Title: "سهل الاستخدام",
    feature2Desc: "واجهة سهلة الاستخدام مناسبة لجميع مستويات المهارة",
    feature3Title: "مستدام",
    feature3Desc: "حلول صديقة للبيئة من أجل مستقبل أكثر خضرة",
    growingSmarter: "زراعة أذكى",
    gardens: "حدائق",
    heroMainText: "تقنية البستنة الداخلية الثورية التي تنتج طعاماً طازجاً على مدار السنة. بلا تربة، بلا فوضى، بلا خبرة مطلوبة.",
    startGrowingToday: "ابدأ الزراعة اليوم",
    viewAllProducts: "عرض جميع المنتجات",
    quickAccessSmallSpaces: "مثالي للمساحات الصغيرة ←",
    quickAccessProfessional: "زراعة احترافية ←",
    quickAccessVertical: "حدائق عمودية ←",
    chooseYourGarden: "اختر حديقتك المثالية",
    discoverProducts: "اكتشف مجموعتنا الكاملة من حلول البستنة الداخلية الذكية",
    eliteSeries: "سلسلة النخبة",
    compactSeries: "السلسلة المدمجة",
    proSeries: "السلسلة الاحترافية",
    towerSeries: "سلسلة البرج",
    viewAllCompare: "عرض جميع المنتجات ومقارنة المميزات",
    
    // About Page
    aboutTitle: "حول نيلوفر",
    aboutSubtitle: "ثورة في البستنة الحضرية",
    aboutDescription: "في نيلوفر، نؤمن بأن الجميع يستحق الوصول إلى المنتجات الطازجة المزروعة في المنزل. أنظمة الحدائق الذكية لدينا تجعل من الممكن زراعة النباتات الصحية في أي مكان وفي أي وقت.",
    missionTitle: "مهمتنا",
    missionText: "جعل البستنة المستدامة في متناول الجميع من خلال التكنولوجيا والتصميم المبتكر.",
    visionTitle: "رؤيتنا",
    visionText: "عالم يمكن فيه لكل منزل إنتاج طعام طازج ومغذي بشكل مستدام.",
    teamTitle: "فريقنا",
    growingTheFuture: "زراعة المستقبل",
    innovationAward: "الفائز بجائزة الابتكار 2024",
    missionDescription: "نحن في مهمة لجلب إنتاج الغذاء الطازج والمستدام إلى كل منزل من خلال تقنية البستنة الداخلية الذكية التي تجعل الزراعة أسهل من أي وقت مضى.",
    watchOurStory: "شاهد قصتنا",
    meetTheTeam: "تعرف على الفريق",
    customers: "عملاء",
    countries: "دول",
    successRate: "معدل النجاح",
    ourImpact: "تأثيرنا بالأرقام",
    ourStory: "قصتنا",
    whoWeAre: "من نحن",
    whatWeDo: "ما نفعله وما فعلناه",
    goalsVision: "أهدافنا ورؤيتنا",
    whoWeAreText: "نحن نيلوفر، فريق شغوف من المبتكرين والبستانيين وخبراء التكنولوجيا متحدون بإيمان بسيط: الجميع يستحق الوصول إلى طعام طازج وصحي مزروع في منزله.",
    whatWeDoText: "نصمم وننتج أنظمة البستنة الداخلية الذكية التي تثور في كيفية زراعة الناس للطعام في المنزل. منذ التأسيس، ساعدنا أكثر من 50,000 عائلة في زراعة الأعشاب والخضروات الطازجة على مدار السنة.",
    goalsVisionText: "نتصور عالماً يمكن فيه لكل منزل الوصول إلى منتجات طازجة خالية من المبيدات بغض النظر عن المناخ أو الموسم أو الموقع. بحلول 2030، نهدف إلى وجود حدائق نيلوفر في مليون منزل حول العالم.",
    ourCoreValues: "قيمنا الأساسية",
    sustainabilityFirst: "الاستدامة أولاً",
    innovationDriven: "مدفوعون بالابتكار",
    communityFocused: "نركز على المجتمع",
    sustainabilityDesc: "كل قرار نتخذه يأخذ في الاعتبار التأثير البيئي والاستدامة طويلة المدى لكوكبنا.",
    innovationDesc: "ندفع باستمرار حدود الإمكانيات لجعل البستنة الداخلية أذكى وأكثر كفاءة.",
    communityDesc: "نبني منتجات تجمع الناس حول فرحة زراعة الطعام الطازج.",
    
    // Contact Page
    contactTitle: "اتصل بنا",
    contactSubtitle: "تواصل معنا",
    nameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "رقم الهاتف",
    messageLabel: "الرسالة",
    sendMessage: "إرسال الرسالة",
    contactInfo: "معلومات التواصل",
    address: "العنوان",
    addressText: "بغداد، العراق",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    getInTouch: "تواصل معنا",
    heroContactText: "نحب أن نسمع منك. سواء كانت لديك أسئلة حول منتجاتنا، أو تحتاج إلى دعم، أو تريد التعاون - نحن هنا للمساعدة.",
    customerSupport: "دعم العملاء على مدار الساعة",
    callUsNow: "اتصل بنا الآن",
    chooseConnection: "اختر طريقة التواصل",
    phoneSupport: "دعم هاتفي",
    emailSupport: "دعم بريد إلكتروني",
    whatsappChat: "محادثة واتساب",
    phoneSupportDesc: "متاح من 9 صباحاً إلى 6 مساءً (بتوقيت بغداد)",
    emailSupportDesc: "سنرد خلال 24 ساعة",
    whatsappDesc: "دعم سريع عبر الرسائل",
    callNow: "اتصل الآن",
    sendEmail: "إرسال بريد إلكتروني",
    chatWhatsapp: "محادثة واتساب",
    sendUsMessage: "أرسل لنا رسالة",
    formDescription: "املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن. نحن هنا للمساعدة في أي أسئلة أو مخاوف.",
    messageSuccess: "تم إرسال الرسالة بنجاح! سنعاود الاتصال بك قريباً.",
    businessHours: "ساعات العمل",
    ourLocations: "مواقعنا",
    followUs: "تابعنا",
    emergencySupport: "الدعم الطارئ",
    liveChatSupport: "دعم المحادثة المباشرة",
    frequentlyAsked: "الأسئلة الشائعة",
    questionResponse: "كم سرعة الرد على الاستفسارات؟",
    questionTechnical: "هل تقدمون دعماً تقنياً؟",
    questionShowroom: "هل يمكنني زيارة صالة العرض؟",
    questionLanguages: "ما اللغات التي تدعمونها؟",
    answerResponse: "نرد عادة على جميع الاستفسارات خلال 24 ساعة في أيام العمل. للأمور العاجلة، يمكنك الاتصال بنا مباشرة أو استخدام واتساب للحصول على رد أسرع.",
    answerTechnical: "نعم! نقدم دعماً تقنياً شاملاً لجميع منتجات الحدائق الذكية، بما في ذلك مساعدة التركيب واستكشاف الأخطاء وإرشادات الصيانة.",
    answerShowroom: "بالطبع! لدينا صالات عرض في بغداد وأربيل حيث يمكنك رؤية منتجاتنا في العمل. يرجى الاتصال مسبقاً لجدولة زيارة وعرض توضيحي للمنتج.",
    answerLanguages: "نقدم الدعم باللغة العربية والإنجليزية والكردية لخدمة قاعدة عملائنا المتنوعة في العراق والمنطقة.",
    moreQuestions: "هل لديك المزيد من الأسئلة؟",
    viewFullFAQ: "عرض الأسئلة الشائعة كاملة",
    
    // Products Page
    productsTitle: "منتجاتنا",
    productsSubtitle: "حلول البستنة الذكية",
    viewDetails: "عرض التفاصيل",
    addToCart: "إضافة للسلة",
    price: "السعر",
    inStock: "متوفر",
    outOfStock: "غير متوفر",
    ourSmartGardens: "حدائقنا الذكية",
    awardWinning: "الحدائق الذكية الحائزة على جوائز",
    heroProductsText: "اكتشف مجموعتنا الكاملة من حلول البستنة الداخلية الذكية. من حدائق الأعشاب المدمجة إلى أنظمة الزراعة الاحترافية.",
    productsCount: "منتجات",
    rating: "التقييم",
    users: "المستخدمون",
    shopAllProducts: "تسوق جميع المنتجات",
    productDemo: "عرض المنتج",
    searchProducts: "البحث عن المنتجات...",
    sortBy: "ترتيب حسب",
    allProducts: "جميع المنتجات",
    smartGardensCategory: "الحدائق الذكية",
    accessories: "الإكسسوارات",
    plantPods: "كبسولات النباتات",
    allPrices: "جميع الأسعار",
    under100: "أقل من 100 دولار",
    price100to300: "100 - 300 دولار",
    price300to600: "300 - 600 دولار",
    price600plus: "600 دولار فأكثر",
    featured: "مميز",
    priceLowHigh: "السعر: من الأقل للأعلى",
    priceHighLow: "السعر: من الأعلى للأقل",
    highestRated: "الأعلى تقييماً",
    newest: "الأحدث",
    advancedFilters: "فلاتر متقدمة",
    noProductsFound: "لم يتم العثور على منتجات",
    noProductsMessage: "حاول تعديل معايير البحث أو الفلترة",
    clearAllFilters: "مسح جميع الفلاتر",
    shopByCategory: "تسوق حسب الفئة",
    completeSystems: "أنظمة زراعة كاملة مع تحسين الذكاء الاصطناعي ومواد فاخرة",
    professionalAccessories: "أجهزة استشعار وإضاءة ومغذيات وإكسسوارات زراعة احترافية",
    preSeededPods: "كبسولات مزروعة مسبقاً للأعشاب والخضروات والخضار الورقية",
    joinMovement: "انضم للحركة",
    stayUpdated: "ابق على اطلاع بنصائح البستنة",
    gardenTipsText: "احصل على نصائح البستنة المتخصصة والنصائح الموسمية والعروض الحصرية المرسلة إلى بريدك الإلكتروني.",
    enterEmail: "أدخل بريدك الإلكتروني",
    subscribeNow: "اشترك الآن",
    subscriberCount: "انضم لأكثر من 25,000 بستاني يثقون بخبرتنا. إلغاء الاشتراك في أي وقت.",
    
    // Product Details Page
    productDetails: "تفاصيل المنتج",
    specifications: "المواصفات",
    features: "المميزات",
    reviews: "التقييمات",
    relatedProducts: "منتجات ذات صلة",
    quantity: "الكمية",
    gardenProElite: "حديقة برو إيليت",
    futureIndoorGardening: "مستقبل البستنة الداخلية.",
    innovationWinner: "الفائز بجائزة الابتكار",
    startingAt: "يبدأ من",
    monthlyPayment: "أو 41.58 دولار شهرياً لمدة 12 شهراً*",
    ratingReviews: "تقييم 4.9/5 (أكثر من 2,400 تقييم)",
    freeShipping: "شحن مجاني وإرجاع خلال 30 يوماً",
    goBack: "العودة",
    watchDemo: "مشاهدة العرض",
    takeCloserLook: "ألقِ نظرة أقرب.",
    chooseYourHighlights: "اختر نقاط التميز",
    smartAISystem: "نظام ذكاء اصطناعي ذكي. زراعة بسيطة. نتائج احترافية.",
    hydroponicTech: "تقنية الزراعة المائية. بلا تربة. بلا فوضى. تغذية نقية.",
    yearRoundGrowing: "زراعة على مدار السنة. أعشاب وخضروات طازجة. كل موسم.",
    mobileAppControl: "تحكم عبر تطبيق الهاتف. مراقبة من أي مكان. إشعارات ذكية.",
    watchFilm: "شاهد الفيلم",
    watchEvent: "شاهد الحدث",
    exploreFullStory: "استكشف القصة كاملة",
    neloverSmart: "نيلوفر. ذكي. مستدام. احترافي.",
    smartGrowingTech: "تقنية الزراعة الذكية",
    aiOptimization: "تحسين مدعوم بالذكاء الاصطناعي في العمل",
    hydroponicSystem: "نظام الزراعة المائية",
    cleanEfficient: "زراعة نظيفة وفعالة",
    ledGrowLights: "مصابيح LED للنمو",
    fullSpectrumNutrition: "تغذية طيف كامل",
    smartGrowingDescription: "حديقة نيلوفر برو هي أول حديقة داخلية ذكية تتميز بتحسين النمو المدعوم بالذكاء الاصطناعي، باستخدام تقنية الزراعة المائية المتقدمة للنمو المثالي للنباتات.",
    effortlessRewarding: "نظامنا الذكي يراقب كل جانب من جوانب صحة النبات، مما يجعل البستنة الداخلية سهلة ومجزية للجميع. ستلاحظ الفرق من اليوم الأول.",
    aiProChip: "رقاقة AI Pro. ثورة في البستنة الذكية.",
    mostAdvanced: "هنا هو. أكثر أنظمة البستنة الداخلية تقدماً تم إنشاؤها على الإطلاق.",
    smartGardenInterface: "واجهة الحديقة الذكية",
    mostIntelligent: "AI Pro يقدم نظام الزراعة الأكثر ذكاءً لدينا بكثير.",
    thriveNeverBefore: "ستزدهر نباتاتك كما لم تزدهر من قبل، مع ظروف نمو محسنة بشكل مثالي ورعاية آلية.",
    proClassAI: "ذكاء اصطناعي من الدرجة الاحترافية مع أجهزة استشعار ذكية",
    
    // Error 404 Page
    error404Title: "الصفحة غير موجودة",
    error404Message: "الصفحة التي تبحث عنها غير موجودة.",
    goHome: "العودة للرئيسية",
    oopsPageNotFound: "عذراً! الصفحة غير موجودة",
    pageNotFoundDescription: "يبدو أن الصفحة التي تبحث عنها قد تاهت في البرية الرقمية. لا تقلق، سنساعدك في العثور على طريق العودة إلى المنزل!",
    
    // Terms and Conditions Page
    termsTitle: "الشروط والأحكام",
    termsSubtitle: "يرجى قراءة هذه الشروط بعناية",
    lastUpdated: "آخر تحديث",
    acceptanceTitle: "قبول الشروط",
    acceptanceText: "بالوصول إلى هذا الموقع واستخدامه، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية.",
    useOfSiteTitle: "استخدام الموقع",
    useOfSiteText: "يمكنك استخدام موقعنا للأغراض القانونية فقط. توافق على عدم استخدام الموقع بأي طريقة تنتهك أي قانون أو لائحة فيدرالية أو حكومية أو محلية أو دولية معمول بها.",
    privacyTitle: "سياسة الخصوصية",
    privacyText: "خصوصيتك مهمة بالنسبة لنا. يرجى مراجعة سياسة الخصوصية الخاصة بنا، والتي تحكم أيضاً استخدامك للموقع.",
    
    // Privacy Policy Page
    privacyPolicyTitle: "سياسة الخصوصية",
    privacyPolicySubtitle: "كيف نجمع ونستخدم ونحمي معلوماتك",
    informationCollectionTitle: "جمع المعلومات",
    informationCollectionText: "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تنشئ حساباً أو تقوم بعملية شراء أو تتصل بنا.",
    informationUseTitle: "كيف نستخدم المعلومات",
    informationUseText: "نستخدم المعلومات التي نجمعها لتوفير خدماتنا والحفاظ عليها وتحسينها، ومعالجة المعاملات، والتواصل معك.",
    informationSharingTitle: "مشاركة المعلومات",
    informationSharingText: "لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف ثالثة دون موافقتك، باستثناء ما هو موضح في هذه السياسة.",
    
    // CTA Section
    readyToStart: "مستعد لبدء رحلة الحديقة الذكية؟",
    ctaDescription: "انضم لآلاف العائلات التي تزرع بالفعل طعاماً طازجاً وصحياً في المنزل. لا حاجة لخبرة - تقنيتنا الذكية تقوم بالعمل نيابة عنك.",
    waterUsage: "استخدام أقل للمياه بنسبة 90%",
    freshHerbs: "أعشاب طازجة على مدار السنة",
    aiPowered: "تحسين النمو مدعوم بالذكاء الاصطناعي",
    pesticideFree: "منتجات خالية من المبيدات",
    shopSmartGardens: "تسوق الحدائق الذكية",
    readyToGrow: "مستعد لبدء الزراعة؟",
    
    // Footer
    helpCenter: "مركز المساعدة",
    setupGuide: "دليل التركيب",
    plantCare: "رعاية النباتات",
    troubleshooting: "استكشاف الأخطاء",
    warranty: "الضمان",
    careers: "الوظائف",
    press: "الصحافة",
    blog: "المدونة",
    sustainability: "الاستدامة",
    footerDescription: "ثورة في البستنة الداخلية بالتكنولوجيا الذكية. زراعة الطعام الطازج والصحي لم تكن أسهل أو أكثر استدامة من قبل.",
    madeWithLove: "صنع بـ ❤️ في العراق",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    cookiePolicy: "سياسة ملفات تعريف الارتباط",
    
    // Announcement Cards
    newRelease: "إصدار جديد",
    bestSeller: "الأفضل مبيعاً",
    spaceSaver: "موفر المساحة",
    proChoice: "الاختيار الاحترافي",
    verticalSolution: "الحل العمودي",
    beginnerFriendly: "مناسب للمبتدئين",
    enhanced: "محسن",
    allWeather: "جميع الأحوال الجوية",
    perfectStarter: "مثالي للمساحات الصغيرة",
    commercialGrade: "الدرجة التجارية",
    plantsCapacity: "سعة 20 نبتة",
    perfectStarterKit: "طقم البداية المثالي",
    enhancedFeatures: "مميزات محسنة",
    weatherResistant: "مقاوم للطقس",
    choosePerfectGarden: "اختر حديقتك المثالية",
    needHelp: "تحتاج مساعدة في اختيار الحديقة المناسبة لك؟",
    getExpertRec: "احصل على توصية خبير",
    smartGardenDemo: "عرض الحديقة الذكية",
    watchInAction: "شاهد الحديقة الذكية في العمل",
    easyGrowing: "انظر كم الزراعة سهلة",
    smartGrowing: "زراعة ذكية",
    aiOptimizes: "الذكاء الاصطناعي يحسن ظروف النمو",
    appControl: "تحكم التطبيق",
    monitorAnywhere: "راقب من أي مكان",
    provenResults: "نتائج مثبتة",
    startGrowingToday2: "ابدأ الزراعة اليوم",
    
    // Common
    loading: "جاري التحميل...",
    error: "خطأ",
    success: "نجح",
    cancel: "إلغاء",
    confirm: "تأكيد",
    save: "حفظ",
    edit: "تعديل",
    delete: "حذف",
    search: "بحث",
    filter: "فلترة",
    sort: "ترتيب",
    showMore: "عرض المزيد",
    showLess: "عرض أقل",
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('nelover-language');
      return savedLang || 'en';
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

  // Apply language settings when language changes
  useEffect(() => {
    // Save to localStorage (Note: In Claude artifacts, localStorage is not available)
    // In your actual React app, this will work fine
    try {
      localStorage.setItem('nelover-language', language);
    } catch (e) {
      console.log('localStorage not available in this environment');
    }
    
    // Update document direction and language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update isRTL state
    setIsRTL(language === 'ar');
    
    // Add RTL class to body for additional styling if needed
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  };

  const changeLanguage = (lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLanguage(lang);
    }
  };

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[language];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        translation = translations.en;
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  // Get translations for a specific section
  const getTranslations = (section) => {
    return translations[language][section] || translations.en[section] || {};
  };

  const contextValue = {
    language,
    isRTL,
    toggleLanguage,
    changeLanguage,
    t,
    getTranslations,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};