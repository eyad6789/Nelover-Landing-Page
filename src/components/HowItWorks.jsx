
// HowItWorks.jsx
import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { animateWithGsap } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Set initial states
    gsap.set('#chip', { opacity: 0, scale: 2 });
    gsap.set('.g_fadeIn', { opacity: 0, y: 50 });

    // Chip animation
    gsap.to('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: 'power2.inOut'
    });

    // Fade in animations
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20 opacity-0">
          <img src={chipImg} alt="AI chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title text-white">
            AI Pro chip.
            <br /> A revolution in smart gardening.
          </h2>

          <p className="hiw-subtitle">
            It's here. The most advanced indoor gardening system ever created.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video 
                className="pointer-events-none" 
                playsInline 
                preload="none" 
                muted 
                autoPlay 
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Smart Garden Interface</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn opacity-0">
              AI Pro delivers our {' '}
              <span className="text-white">
                most intelligent growing system by far
              </span>.
            </p>

            <p className="hiw-text g_fadeIn opacity-0">
              Your plants will {' '}
              <span className="text-white">
                thrive like never before
              </span>,
              with perfectly optimized growing conditions and automated care.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn opacity-0">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class AI</p>
            <p className="hiw-text">with smart sensors</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;