import React, { useRef,useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
//FIX LOCOMOTIVE SCROLL

function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);
 

  useEffect(() => {
   const timer1 = setTimeout(() => setIsMounted1(true), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  

 
  

    return (
      //wrapper
      <div data-scroll-section  className="">
      <div  className={`transition-opacity ease-elastic duration-1000 ${isMounted1 ? 'opacity-100' : 'opacity-0'}
       sm:ml-0 overflow-x-hidden flex flex-col 
       sm:flex-wrap justify-center  sm:items-center   sm:justify-items-start
       h-screen prose prose-sm lg:prose-xl text-NightFall relative`}>
      <h1 className={` flex  w-1/2   sm:absolute sm:top-0   sm:hidden textC transition duration-200 text-left font-Satoshi text-5xl`}>
            Branding Meets Soul
          </h1>
          
          <p className={`opacity-80  font-Lora pt-3  text-lg   sm:hidden w-2/3 `}>
          We take your vision and craft a brand that breathes.
          </p>
          {/* This is the Desktop view */}
          <h1 data-scroll  className={`text-NightFall hidden sm:flex textC sm:relative hover:text-LunarTwilight 
            transition-text duration-200 text-center font-Satoshi text-9xl font-bold`}>
            Branding Meets Soul
          </h1>
          <h1 className={`hidden opacity-80  font-Lora  sm:relative text-4xl mt-5 sm:block  text-center  `}>
          We take your vision and craft a brand that breathes.

          </h1>
        </div>
        </div>
        
    );
    
  
  }

export default LandingPage;