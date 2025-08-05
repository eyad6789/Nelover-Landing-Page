import React from 'react';
import NelovelCustomHomePage from './pages/NelovelCustomHomePage';
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main>
      <NelovelCustomHomePage/>
    </main>
  )
}

export default Sentry.withProfiler(App);
