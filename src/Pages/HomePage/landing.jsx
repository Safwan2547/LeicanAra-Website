import React, { useRef,useState, useEffect } from 'react';
import logo from '../../Assets/Logo.svg'; // Adjust the path according to your directory structure
import LocomotiveScroll from 'locomotive-scroll';
import landingVid from '../../Assets/Website landing 1.mp4'
import { animate, scroll, inView,timeline,spring } from "motion"
import { Parallax } from 'react-parallax';
//FIX LOCOMOTIVE SCROLL

function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);
  //This starts the video on the landing page
  const [showLandingVideo, setShowLandingVideo] = useState(false); // State to control when to show the landing video


  //  delay for the landing video
  setTimeout(() => {
    setShowLandingVideo(true);
  }, 0);

//This is the animation for the landing page
  const landingAnimations=[
    [".navItem", { opacity: 0 }], 
    [".landingItem", { opacity: 0}],
    [".braidedStar", { opacity: 0}],  // Initial state: set opacity to 0
    [".navItem", { opacity: 1 }, { duration: 0.4, delay: stagger(0.1) }],
    
    [".landingItem",{ opacity: 1}, { duration: 0.3}],
    [".braidedStar",{ opacity: 1}, { duration: 0.3,easing:"ease-out"}],
  ];

    
  
// ];
//This is the intro Animation
//The entire page is covered with a black bg
//Must ensure the animation only triggers once when the user first logs in (May need cookies)

// const introAnimate=[
//   [".intro-Back",{ opacity: 0}, { duration: 0.3,delay:1.5,easeing:["ease-in", "ease-out"] }],
//   [".intro-Back",{ display:"none"}, {  duration:0.01, delay:0.5  }]


  
 

  function stagger(delay) {
  return (i) => i * delay;
}

   useEffect(() => {
  // timeline(introAnimate, {duration : 0},{
  //   defaultOptions: { ease: "ease-in"}} )

   timeline(landingAnimations, {duration : 3,delay:0},{
    defaultOptions: {easing:"ease-in-out" },
  })
  
   
    return () => {
      
    };
  }, []);
  
  

 
  

    return (
      //wrapper
      <div data-scroll-section  className="">
        
      <div  className={` transition-opacity overflow-hidden duration-1000 
       sm:ml-0 overflow-x-hidden flex flex-col 
       sm:flex-wrap justify-center  sm:items-center   sm:justify-items-start
       h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>

<div className="z-1   w-screen h-screen absolute outline-none ">
          {/* Conditionally render the landing video based on showLandingVideo state */}
          {showLandingVideo && (
            <video className="w-full  h-full absolute scale-[60%] border-none overflow-hidden object-cover hover:none" controls={false} autoPlay muted loop>
              <source src={landingVid} type="video/mp4" />
              {/* You can add more source elements for different video formats (WebM, Ogg) */}
            </video>
          )}
        </div>

      

          {/* This is the Mobile view */}            
      <h1  className={`landingItem flex opacity-0 w-1/3 z-10 text-NightFall z-3   sm:absolute sm:top-0  
         sm:hidden textC transition duration-200 text-left font-Satoshi text-5xl`}>
            StoryTellers for the Visionaries
          </h1>
          
          <p className={`opacity-80  font-Lora pt-3  text-lg   sm:hidden w-2/3 `}>
           
          </p>


          {/* This is the Desktop view */}

          <div strength={100} className='opacity-0  landingItem mouseParallax text-NightFall hidden sm:flex  sm:absolute hover:text-LunarTwilight 
            transition-text duration-200 text-left   left-10 bottom-[10%] w-2/3 flex-col '>

          <h1 data-scroll id='hero_line'  className={` textC mb-5 font-medium font-Satoshi text-9xl`}>
          Storytellers for the Visionaries
          </h1>

          <h1   className={`hidden opacity-80 textP landingItem text-black font-light font-Satoshi pl-2 
           text-3xl ml-5 mr-44 sm:block  text-left  `}>
          We eliminate invisibility by creating distinct brand identities that resonate.

           

          </h1>
          </div>
        </div>
        </div>
        
    );
    
  
  }

export default LandingPage;