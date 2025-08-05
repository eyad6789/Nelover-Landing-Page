
// Highlights.jsx
import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from './VideoCarousel';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    // Set initial states
    gsap.set('#title', { opacity: 0, y: 50 });
    gsap.set('.link', { opacity: 0, y: 30 });
    
    // Animate with ScrollTrigger
    gsap.to('#title', { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
    
    gsap.to('.link', { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      stagger: 0.25,
      scrollTrigger: {
        trigger: '.link',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading opacity-0">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link opacity-0">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
