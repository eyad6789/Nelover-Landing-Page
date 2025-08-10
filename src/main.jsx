import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NelovelCustomHomePage from './App.jsx'
import Products from './pages/products.jsx'  // Adjust path if needed
import ContactPage from './pages/Contact.jsx'    // Adjust path if needed
import NelovelAboutPage from './pages/about.jsx'    
import ProductsPageOptimized from './pages/ProductsPageOptimized.jsx'  
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
        <Route path="/" element={<NelovelCustomHomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<NelovelAboutPage />} />
        <Route path="/productsOptimized" element={<ProductsPageOptimized />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)