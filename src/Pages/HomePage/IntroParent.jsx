import React, { useState } from 'react';
import Intro from './intro';
import LandingPage from './landing';

const IntroParent = () => {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulating loading or initialization process
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);
  
    return <div>{isLoading ? <Intro /> : <LandingPage />}</div>;
  };

export default IntroParent;
