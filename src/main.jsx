import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'  // Import App, not Home
import ProductDetails from './pages/ProductDetails.jsx'  
import ContactPage from './pages/Contact.jsx'    
import AboutUs from './pages/AboutUs.jsx'    
import Products from './pages/products.jsx' 
import Home from './pages/Home.jsx' // Import Home from the correct location

// Import your beautiful 404 page
import Error404Page from './pages/Error404Page.jsx'

// Import LanguageProvider
import { LanguageProvider } from './context/LanguageContext'

import './index.css'

//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      {/* Updated Router with basename for GitHub Pages - MUST match repo name */}
      <Router basename="/Nelover-Landing-Page">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/productsOptimized" element={<Products />} />
          
          {/* Product Detail Routes */}
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/garden-pro-elite" element={<ProductDetails productId="garden-pro-elite" />} />
          <Route path="/garden-compact" element={<ProductDetails productId="garden-compact" />} />
          <Route path="/garden-hydro-max" element={<ProductDetails productId="garden-hydro-max" />} />
          <Route path="/smart-tower-vertical" element={<ProductDetails productId="smart-tower-vertical" />} />
          
          {/* Optional: Additional product routes */}
          <Route path="/products/garden-pro-elite" element={<ProductDetails productId="garden-pro-elite" />} />
          <Route path="/products/garden-compact" element={<ProductDetails productId="garden-compact" />} />
          <Route path="/products/garden-hydro-max" element={<ProductDetails productId="garden-hydro-max" />} />
          <Route path="/products/smart-tower-vertical" element={<ProductDetails productId="smart-tower-vertical" />} />
          
          {/* 404 Error Page - MUST BE LAST! */}
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>,
)