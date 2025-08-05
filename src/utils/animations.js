// utils/animations.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  });
};

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );
};

// Additional utility functions for common animations
export const fadeInUp = (target, delay = 0) => {
  gsap.set(target, { opacity: 0, y: 50 });
  gsap.to(target, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay,
    ease: 'power2.out'
  });
};

export const staggerFadeIn = (targets, staggerDelay = 0.2) => {
  gsap.set(targets, { opacity: 0, y: 30 });
  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: staggerDelay,
    ease: 'power2.out'
  });
};

export const scaleIn = (target, delay = 0) => {
  gsap.set(target, { scale: 0, opacity: 0 });
  gsap.to(target, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    delay,
    ease: 'back.out(1.7)'
  });
};

// Scroll-triggered animations
export const scrollFadeIn = (target, options = {}) => {
  const defaultOptions = {
    start: 'top 80%',
    toggleActions: 'play none none reverse',
    duration: 1,
    y: 50,
    opacity: 0
  };
  
  const config = { ...defaultOptions, ...options };
  
  gsap.set(target, { opacity: config.opacity, y: config.y });
  
  gsap.to(target, {
    opacity: 1,
    y: 0,
    duration: config.duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: target,
      start: config.start,
      toggleActions: config.toggleActions,
      ...config.scrollTrigger
    }
  });
};

export const scrollStagger = (targets, options = {}) => {
  const defaultOptions = {
    start: 'top 80%',
    toggleActions: 'play none none reverse',
    duration: 0.8,
    stagger: 0.2,
    y: 30,
    opacity: 0
  };
  
  const config = { ...defaultOptions, ...options };
  
  gsap.set(targets, { opacity: config.opacity, y: config.y });
  
  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration: config.duration,
    stagger: config.stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: targets,
      start: config.start,
      toggleActions: config.toggleActions,
      ...config.scrollTrigger
    }
  });
};