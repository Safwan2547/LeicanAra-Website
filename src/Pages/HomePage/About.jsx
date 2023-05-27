import React, { useRef, useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Observer from '../../Modules/IntersectionObserver';

function AboutPage() {
  
  return (
    <div 
   
      className=" mt-10  sm:m-10   text-left  overflow-x-hidden"
    >
      
      <div  
      className='hidden  sm:flex justify-center items-end sm:w-screen 
      h-screen  '>
      
      <h2 data-scroll-section
        data-scroll-speed="2"
      
        className=" opacity-80 pt-3 text-xl max-w-3xl  mr-5 textC text-wrap absolute  sm:text-6xl font-Lora font-light"
      >
        We are an innovative, independent design studio based in Halifax
      </h2>

      </div>
      

      <div className='  w-screen h-screen relative '>
      <h2 
      
        className="opacity-80  pt-3 text-xl w-8/12 pr-5 max-w-10 textC text-wrap sm:max-h-20 sm:text-6xl font-Lora font-light sm:w-96"
      >
        Drawing from the timeless art of storytelling, we see design as a tool to share profound narratives. 
      </h2>
      
      </div>
      
    </div>
  );
}

export default AboutPage;
