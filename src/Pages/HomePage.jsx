import React, { useState,useEffect,useRef,Link } from 'react';
import Intro from './HomePage/Intro';
import LandingPage from './HomePage/landing';
import AboutPage from './HomePage/About';
import ProjectsSection from './HomePage/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import useIntersectionObserver from '../Modules/IntersectionObserver';
import Footer from '../Modules/Footer';
import mouseParallax from '../Modules/mouseParallax';
import ProjectGrid from '../Pages/HomePage/ProjectGrid';
import projects from './HomePage/Projects';
import { float } from '../Modules/floater';
function HomePage() {
  const containerRef = useRef(null);
  let scroll;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     scroll = new LocomotiveScroll({
  //       el: containerRef.current,
  //       smooth: true,
  //      lerp:0.1,
  //      multiplier:0.7,
  //      gestureDirection:"vertical"
  //     });

  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //     if(scroll) scroll.destroy();
  //   };
  // }, []);

  useEffect(() => {
    if(scroll) scroll.update();
  }, [/* dependencies that change when your page content changes */]);
  float();

  return (

    <div>
      <Intro/>
        <div
        ref={containerRef} 
        data-scroll-container className="pl-5 pr-5 sm:pl-10 sm:pr-10" >
          
          <LandingPage/>
          
          <AboutPage />
          <ProjectGrid projects={projects} />
          <Footer/>
        </div>
        </div>
    
  
  );
}

export default HomePage;
