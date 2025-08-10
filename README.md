# 🌱 Nelover Smart Gardens

> **Revolutionary indoor gardening technology that grows fresh food year-round. No soil, no mess, no experience needed.**

**👨‍💻 Author**: [Eyad Qasim](https://github.com/eyadqasim) - Full Stack Developer & Smart Garden Innovator

![Nelover Logo](https://img.shields.io/badge/Nelover-Smart%20Gardens-green?style=for-the-badge&logo=leaf)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)
![Author](https://img.shields.io/badge/Author-Eyad%20Qasim-purple?style=for-the-badge)

## 📋 Table of Contents

- [👨‍💻 About the Author](#-about-the-author)
- [🌟 Features](#-features)
- [🚀 Demo](#-demo)
- [💻 Technologies](#-technologies)
- [📦 Installation](#-installation)
- [🎯 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [📱 Pages Overview](#-pages-overview)
- [🔧 Configuration](#-configuration)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📞 Contact](#-contact)
- [📄 License](#-license)

## 👨‍💻 About the Author

**Eyad Qasim** - Passionate Front End Developer from Iraq 🇮🇶

🚀 **Junior**:
- React.js & Modern Frontend Development
- UI/UX Design with Tailwind CSS
- Smart Garden Technology Innovation
- E-commerce Platform Development
<!--
💼 **Portfolio**: [eyadqasim.dev](https://eyadqasim.dev)  
📧 **Email**: [eyad@nelover.com](mailto:eyad@nelover.com)  
💼 **LinkedIn**: [linkedin.com/in/eyadqasim](https://linkedin.com/in/eyadqasim)  
🐙 **GitHub**: [github.com/eyadqasim](https://github.com/eyadqasim)
-->
> *"Building the future of sustainable urban agriculture through innovative technology and beautiful design."* - Eyad Qasim

## 🌟 Features

### ✨ **Core Features**
- 🌿 **Premium Design**: Apple-inspired design language with smooth animations
- 📱 **Fully Responsive**: Mobile-first approach with tablet and desktop optimization
- 🎨 **Green Theme**: Beautiful gradient-based design system (no blue colors)
- ⚡ **Fast Performance**: Optimized React components and animations
- 🔍 **SEO Optimized**: Meta tags, semantic HTML, and accessibility features

### 🏠 **Homepage**
- 🎬 Hero section with dynamic mouse-responsive background
- ⭐ Trust indicators and customer reviews
- 🏆 Award badges and certifications
- 📊 Statistics showcase
- 💌 Newsletter subscription

### 🛍️ **Products Page**
- 📦 Complete product catalog (12+ products)
- 🔍 Advanced search and filtering system
- 🎯 Category-based navigation
- 💰 Price comparison and reviews
- 🛒 E-commerce ready interface

### ℹ️ **About Page**
- 👥 Interactive team showcase
- 📈 Company timeline and milestones
- 💡 Mission, vision, and values
- 📊 Impact statistics
- 🏢 Office locations

### 📞 **Contact Page**
- 📝 Interactive contact form
- 🗺️ Multiple contact methods
- 🕒 Business hours display
- 📍 Office locations with coordinates
- 💬 FAQ section

## 🚀 Demo

🌐 **Live Demo**: [https://nelover-smart-gardens.vercel.app](https://nelover-smart-gardens.vercel.app)

### 📷 Screenshots

| Homepage | Products | About | Contact |
|----------|----------|-------|---------|
| ![Homepage](https://via.placeholder.com/200x150/10b981/ffffff?text=Home) | ![Products](https://via.placeholder.com/200x150/059669/ffffff?text=Products) | ![About](https://via.placeholder.com/200x150/047857/ffffff?text=About) | ![Contact](https://via.placeholder.com/200x150/065f46/ffffff?text=Contact) |

## 💻 Technologies

### 🔧 **Frontend Stack**
```json
{
  "framework": "React 18+",
  "styling": "Tailwind CSS",
  "icons": "Lucide React",
  "routing": "React Router DOM",
  "animations": "CSS Transitions & Transforms",
  "bundler": "Vite/Create React App"
}
```

### 🎨 **Design & UI**
- **Design System**: Custom green-themed design tokens
- **Typography**: Inter font family
- **Colors**: Green gradients (#10b981, #059669, #047857)
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first approach

### 📦 **Dependencies**
```bash
# Core Dependencies
react: "^18.0.0"
react-dom: "^18.0.0"
react-router-dom: "^6.0.0"

# UI & Icons
lucide-react: "^0.263.1"
tailwindcss: "^3.3.0"

# Development
vite: "^4.4.0"
eslint: "^8.45.0"
```

## 📦 Installation

### 📋 **Prerequisites**
- Node.js 16+ and npm/yarn
- Git

### 🔧 **Quick Start**

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nelover-smart-gardens.git
cd nelover-smart-gardens
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
http://localhost:3000
```

### 🏗️ **Build for Production**
```bash
npm run build
# or
yarn build
```

## 🎯 Usage

### 🔗 **Navigation**
```javascript
// Import the Navbar component
import Navbar from './components/Navbar';

// Use with current page prop
<Navbar currentPage="home" />
<Navbar currentPage="products" />
<Navbar currentPage="about" />
<Navbar currentPage="contact" />
```

### 🎨 **Custom Styling**
```javascript
// Using Tailwind classes with green theme
<div className="bg-green-gradient text-green-gradient">
  <button className="btn-green hover-green-lift">
    Click Me
  </button>
</div>
```

### 📱 **Responsive Design**
```css
/* Custom breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## 📂 Project Structure

```
nelover-smart-gardens/
├── 📁 public/
│   ├── 🖼️ favicon.ico
│   ├── 📄 index.html
│   └── 🖼️ logo192.png
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🧭 Navbar.jsx
│   │   ├── 🦶 Footer.jsx
│   │   └── 🎨 UI components
│   ├── 📁 pages/
│   │   ├── 🏠 HomePage.jsx
│   │   ├── 🛍️ ProductsPage.jsx
│   │   ├── ℹ️ AboutPage.jsx
│   │   └── 📞 ContactPage.jsx
│   ├── 📁 styles/
│   │   ├── 🎨 globals.css
│   │   └── 📱 responsive.css
│   ├── 📁 utils/
│   │   ├── 🔧 helpers.js
│   │   └── 📊 constants.js
│   ├── 🎯 App.jsx
│   └── 🚀 index.js
├── 📋 package.json
├── ⚙️ tailwind.config.js
├── 📖 README.md
└── 📄 LICENSE
```

## 🎨 Design System

### 🎨 **Color Palette**
```css
/* Primary Colors */
--green-50:  #f0fdf4
--green-100: #dcfce7
--green-500: #10b981  /* Primary */
--green-600: #059669
--green-700: #047857

/* Neutral Colors */
--gray-50:   #f9fafb
--gray-100:  #f3f4f6
--gray-500:  #6b7280
--gray-800:  #1f2937
--gray-900:  #111827

/* Accent Colors */
--orange-500: #f59e0b
--red-500:    #ef4444
--purple-500: #8b5cf6
--yellow-500: #eab308
```

### 📝 **Typography**
```css
/* Font Families */
font-family: 'Inter', sans-serif;

/* Font Sizes */
text-xs:   0.75rem   /* 12px */
text-sm:   0.875rem  /* 14px */
text-base: 1rem      /* 16px */
text-lg:   1.125rem  /* 18px */
text-xl:   1.25rem   /* 20px */
text-2xl:  1.5rem    /* 24px */
text-4xl:  2.25rem   /* 36px */
text-6xl:  3.75rem   /* 60px */
```

### 🎬 **Animations**
```css
/* Custom animations available */
.animate-fade-in-green
.animate-slide-up-green
.animate-bounce-green
.animate-float
.hover-green-lift
```

## 📱 Pages Overview

### 🏠 **Homepage**
**Path**: `/`
**Features**: 
- Hero section with animated background
- Product highlights carousel
- Trust indicators and reviews
- Newsletter signup

**Key Components**:
```javascript
- HeroSection
- ProductsShowcase  
- StatsSection
- CTASection
```

### 🛍️ **Products Page**
**Path**: `/productsOptimized`
**Features**:
- 12+ product catalog
- Search and filter functionality
- Category navigation
- Product comparison

**Product Categories**:
- 🌱 Smart Gardens (3 products)
- 🔧 Accessories (6 products)  
- 🌿 Plant Pods (3 products)

### ℹ️ **About Page**
**Path**: `/about`
**Features**:
- Company story and timeline
- Team member showcase
- Values and mission
- Interactive elements

### 📞 **Contact Page**
**Path**: `/contact`
**Features**:
- Contact form with validation
- Multiple contact methods
- Business hours
- FAQ section

## 🔧 Configuration

### 🎨 **Tailwind Configuration**
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          500: '#10b981',
          600: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### ⚙️ **Environment Variables**
```bash
# .env.local
REACT_APP_API_URL=https://api.nelover.com
REACT_APP_CONTACT_EMAIL=contact@nelover.com
REACT_APP_PHONE=+9647736285961
```

## 🌐 Deployment

### 🚀 **Vercel Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 📦 **Netlify Deployment**
```bash
# Build
npm run build

# Deploy build folder to Netlify
```

### 🐳 **Docker Deployment**
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### 🔧 **Development Workflow**
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### 📋 **Code Standards**
- Use ESLint and Prettier
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic

## 📞 Contact

### 🏢 **Nelover Team**
**Founded & Developed by Eyad Qasim**
- **Website**: [https://nelover.com](https://nelover.com)
- **Email**: [Eduru.Coie@Gmail.Com](mailto:Eduru.Coie@Gmail.Com)
- **Phone**: [+964 773 6285 961](tel:+9647736285961)

**👨‍💻 Lead Developer**: Eyad Qasim  
📧 **Developer Email**: [eyad@nelover.com](mailto:eyad@nelover.com)  
💼 **Portfolio**: [eyadqasim.dev](https://eyadqasim.dev)

### 📍 **Office Locations**
**Baghdad Office** (Main)  
Al-Karrada District, Near Babylon Hotel  
📧 baghdad@nelover.com

**Erbil Office** (Branch)  
Ankawa District, Business Center  
📧 erbil@nelover.com

### 🌐 **Social Media**
- **Instagram**: [@nelover_iraq](https://instagram.com/nelover_iraq)
- **Facebook**: [Nelover Iraq](https://facebook.com/nelover.iraq)
- **Twitter**: [@nelover_iraq](https://twitter.com/nelover_iraq)
- **LinkedIn**: [Nelover Company](https://linkedin.com/company/nelover)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 🌱 **Growing the Future of Indoor Gardening** 🌱

**Created with ❤️ in Iraq 🇮🇶 by [Eyad Qasim](https://github.com/eyadqasim)**

*Full Stack Developer | Smart Garden Innovator | UI/UX Designer*

[![GitHub stars](https://img.shields.io/github/stars/eyadqasim/nelover-smart-gardens?style=social)](https://github.com/eyadqasim/nelover-smart-gardens)
[![Twitter Follow](https://img.shields.io/twitter/follow/nelover_iraq?style=social)](https://twitter.com/nelover_iraq)
[![Portfolio](https://img.shields.io/badge/Portfolio-eyadqasim.dev-green?style=social&logo=globe)](https://eyadqasim.dev)

**💼 Connect with Eyad:**  
[LinkedIn](https://linkedin.com/in/eyadqasim) • [GitHub](https://github.com/eyadqasim) • [Portfolio](https://eyadqasim.dev) • [Email](mailto:eyad@nelover.com)

</div>

---

**⭐ Star this repository if you found it helpful!**
