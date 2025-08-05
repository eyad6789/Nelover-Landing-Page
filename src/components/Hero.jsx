
// Hero.jsx
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import Navbar from './Navbar';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet); // Fixed typo
    };
  }, []);

  useGSAP(() => {
    // Set initial states
    gsap.set('#hero', { opacity: 0 });
    gsap.set('#cta', { opacity: 0, y: 50 });
    
    // Animate in
    const tl = gsap.timeline();
    tl.to('#hero', { opacity: 1, duration: 1.5, delay: 0.5 })
      .to('#cta', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.5');
  }, []);

  return (
    <section className="w-full min-h-screen nav-height bg-black relative">
      <Navbar />
      <div className="h-4/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title opacity-0">Nelover Garden Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video 
            className="pointer-events-none" 
            autoPlay 
            loop 
            muted 
            playsInline={true} 
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="mb-20 flex flex-col items-center opacity-0">
        <a href="#highlights" className="btn">Buy Now</a>
        <p className="font-normal text-xl text-white">From $299/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
