// Importing necessary React hooks and components
import React, { useState, useEffect, useRef } from 'react';
import Intro from './HomePage/Intro';
import LandingPage from './HomePage/landing';
import AboutSection from './HomePage/About';
import ProjectsSection from './Projects/Projects';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from '../Modules/Footer';
import mouseParallax from '../Modules/mouseParallax';
import ProjectGrid from '../Pages/HomePage/ProjectGrid';
import projects from './Projects/Projects';
import { float } from '../Modules/floater';
import Watcher from '../Modules/Watcher';
import CallToAction from './HomePage/CallToAction';
import { Parallax } from '@react-spring/parallax';

// Defining the functional component HomePage
function HomePage() {
  // Creating a reference for the container element
  const containerRef = useRef(null);
  // Declaring a variable for the Locomotive Scroll instance
  let scroll;

  // useEffect to handle updates after initial render
  useEffect(() => {
    // Checking if the scroll instance exists and updating it if so
    if (scroll) scroll.update();
    // Adding dependencies if needed (dependencies that change when your page content changes)
  }, [/* dependencies that change when your page content changes */]);

  // Calling the float function
  float();

  // Rendering the HomePage component
  return (
    <div className='  bg-white'>
      {/* Container for Locomotive Scroll */}
      <div ref={containerRef} className=" snap-center bg-white ">
        {/* LandingPage component */}
        
        <LandingPage />
       
        {/* AboutPage component */}
        {/* <AboutSection /> */}
        {/* ProjectGrid component with projects passed as props */}
        <ProjectGrid projects={projects} />
        {/* CallToAction component */}
        <CallToAction />
        
        {/* Footer component */}
        <Footer />
        
      </div>
    </div>
  );
}

// Exporting the HomePage component as the default export
export default HomePage;
