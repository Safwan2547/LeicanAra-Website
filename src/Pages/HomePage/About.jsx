import React, { useRef, useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import {InView} from 'react-intersection-observer';
import { animate,spring, scroll, inView,glide } from "motion"


function AboutPage() {
  const boxRef = useRef(null);
  


  useEffect(() => {
    // Ensure the ref is set
    if (boxRef.current) {
      // Define the callback
      const callback = (info) => {
        animate(info.target,
          { y:-100, opacity: 1},
          {easing:glide({
            velocity: -120,
            min: -200,
            bounceStiffness: 100,
            bounceDamping: 20
          })}
          // { easing: spring({ velocity: 1000 },{ damping: 500 },{mass:100000}),duration:200 }
         
        );
      };

      const options = {
        margin: "0px 0px -30% 0px",

      };

      // Call the inView function with the options
      const stop = inView(boxRef.current, callback, options);

      // Return the cleanup function
      return () => stop();
    }
  }, []);
  
  return (
    <div 
   
      className=" mt-10  sm:m-10   text-left  overflow-x-hidden"
    >
      
      <div  
      className='hidden  sm:flex justify-center items-center sm:w-screen 
      h-screen  '>
      
      <h2 data-scroll-section
        data-scroll-speed="2"
        id='leicanAra_info'
        ref={boxRef}
      
        className=" opacity-0 transition-opacity pt-3 text-xl max-w-3xl  mr-5 textC text-wrap absolute  sm:text-6xl font-Lora font-light"
      >
        LeicanAra is an innovative, independent branding studio, based in Halifax.
      </h2>

      </div>
      

      <div
      data-scroll-section
      data-scroll-speed="2"
      id='leicanAra_info2'
      ref={boxRef}

      className='  w-screen h-screen relative '>
        <h1 className='hidden font-Satoshi text-3xl sm:text-8xl'> Our Bond,<br></br> Stronger than any string</h1>
      <h2 
      
        className="opacity-80  pt-3 sm:pt-10 text-xl w-11/12  pr-5  textC text-wrap sm:max-h-20 sm:text-6xl font-Lora font-light sm:max-w-11/12 pt-"
      >
       From the beginning of time, we sat around fires and shared stories with each other. This wove a connection that bound us together . 
      </h2>
      
      </div>
      <div className='w-full h-2/3 overflow-auto'> 
        <h1 className='text-3xl sm:text-6xl textC max-w-2xl '> At <span className='sm:text-9xl text-6xl textC hover:text-LunarTwilight transition-color duration-1000'>LeicanAra</span></h1>
        <h3 className="font-Lora text-xl mt-3 sm:text-6xl sm:mt-7  h-auto sm:pb-5  
        ">
          we inherit this tradition, recognizing storytelling as a string of human connection. </h3>
      </div>
      
    </div>
  );
}

export default AboutPage;
