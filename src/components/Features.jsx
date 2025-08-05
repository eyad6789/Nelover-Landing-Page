
// Features.jsx
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Set initial states
    gsap.set('#features_title', { opacity: 0, y: 50 });
    gsap.set('.g_grow', { scale: 0.8, opacity: 0 });
    gsap.set('.g_text', { opacity: 0, y: 50 });

    // Video animation
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    });

    // Title animation
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    
    // Grow animation
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    
    // Text animation
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    );
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading opacity-0">Explore the full story.</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold text-white">Nelover.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold text-white">Smart. Sustainable. Pro.</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video 
                playsInline 
                id="exploreVideo" 
                className="w-full h-full object-cover object-center" 
                preload="none" 
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="smart garden" className="feature-video g_grow opacity-0" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="sustainable growing" className="feature-video g_grow opacity-0" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text opacity-0">
                    Nelover Garden Pro is {' '}
                    <span className="text-white">
                      the first smart indoor garden to feature AI-powered growing optimization
                    </span>,
                    using advanced hydroponic technology for perfect plant growth.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text opacity-0">
                    Our intelligent system monitors every aspect of plant health, making indoor gardening {' '}
                    <span className="text-white">
                      effortless and rewarding for everyone.
                    </span>
                    You'll notice the difference from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;