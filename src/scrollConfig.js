// src/scrollConfig.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Export configured gsap
export { gsap, ScrollTrigger, ScrollSmoother };