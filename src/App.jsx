import * as Sentry from '@sentry/react';

// If you want to keep App.jsx for any wrapper logic, use this simplified version:
const App = ({ children }) => {
  return (
    <div className="app-wrapper">
      {children}
    </div>
  );
};

export default Sentry.withProfiler(App);
