import React, { useState,useEffect,useRef,Link } from 'react';
import Intro from './HomePage/Intro';
import LandingPage from './HomePage/landing';
import AboutPage from './HomePage/About';
import ProjectsSection from './HomePage/Projects';
import IntroParent from './HomePage/IntroParent';
import LocomotiveScroll from 'locomotive-scroll';
import useIntersectionObserver from '../Modules/IntersectionObserver';

function HomePage() {
  const containerRef = useRef(null);
  let scroll;
  <useIntersectionObserver/>


  useEffect(() => {
    const timer = setTimeout(() => {
      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
       lerp:0.1,
       multiplier:0.7,
       gestureDirection:"vertical"
      });

    }, 1000);

    return () => {
      clearTimeout(timer);
      if(scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    if(scroll) scroll.update();
  }, [/* dependencies that change when your page content changes */]);

  

  return (

    
        <div
        ref={containerRef} 
        data-scroll-container >
          <LandingPage/>
          
          <AboutPage />
          <ProjectsSection/>
        </div>
    
  
  );
}

export default HomePage;
