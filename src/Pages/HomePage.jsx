import React, { useState } from 'react';
import Intro from './HomePage/Intro';
import LandingPage from './HomePage/landing';
import AboutPage from './HomePage/About';
import IntroParent from './HomePage/IntroParent';

function HomePage() {
  

  return (

    
        <div>
          <LandingPage/>
          <AboutPage />
        </div>
    
  
  );
}

export default HomePage;
