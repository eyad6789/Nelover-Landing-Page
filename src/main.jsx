import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './App.jsx'
import ProductDetails from './pages/ProductDetails.jsx'  
import ContactPage from './pages/Contact.jsx'    
import AboutUs from './pages/AboutUs.jsx'    
import Products from './pages/ProductDetails.jsx'  

// Import your beautiful 404 page
import Error404Page from './pages/Error404Page.jsx'

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
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/productsOptimized" element={<Products />} />
        
        {/* New Product Showcase Routes - All point to Home (App.jsx) */}
        <Route path="/product/:productId" element={<Home />} />
        <Route path="/garden-pro-elite" element={<Home />} />
        <Route path="/garden-compact" element={<Home />} />
        <Route path="/hydro-max-pro" element={<Home />} />
        <Route path="/smart-tower-vertical" element={<Home />} />
        
        {/* Optional: Additional product routes */}
        <Route path="/products/garden-pro-elite" element={<Home />} />
        <Route path="/products/garden-compact" element={<Home />} />
        <Route path="/products/hydro-max-pro" element={<Home />} />
        <Route path="/products/smart-tower-vertical" element={<Home />} />
        
        {/* 404 Error Page - MUST BE LAST! */}
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
