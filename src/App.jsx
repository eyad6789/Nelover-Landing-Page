
import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home'; // Update path if needed
import Product from './pages/Product'; // Update path if needed
import * as Sentry from '@sentry/react';

const App = () => {
  const location = useLocation();
  
  // Check if current path is a product showcase route
  const isProductRoute = location.pathname.startsWith('/product/') || 
                        location.pathname === '/garden-pro-elite' ||
                        location.pathname === '/garden-compact' ||
                        location.pathname === '/hydro-max-pro' ||
                        location.pathname === '/smart-tower-vertical';
  
  // Extract product ID from URL
  const getProductId = () => {
    if (location.pathname.startsWith('/product/')) {
      return location.pathname.split('/product/')[1];
    }
    
    // Direct routes
    switch (location.pathname) {
      case '/garden-pro-elite': return 'garden-pro-elite';
      case '/garden-compact': return 'garden-compact';
      case '/hydro-max-pro': return 'garden-hydro-max';
      case '/smart-tower-vertical': return 'garden-smart-tower';
      default: return 'garden-pro-elite';
    }
  };

  return (
    <main>
      {isProductRoute ? (
        <Product productId={getProductId()} />
      ) : (
        <Home />
      )}
    </main>
  );
};

export default Sentry.withProfiler(App);
