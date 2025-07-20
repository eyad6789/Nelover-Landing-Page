import Navbar from './components/Navbar';
import ForestHeroSections from './components/hero2';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import WhoWeAreSection from './components/About';
import AnnouncementGrid from './components/products';
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <ForestHeroSections />
      <WhoWeAreSection/>
      <AnnouncementGrid/>
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
