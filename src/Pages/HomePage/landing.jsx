import React, { useRef,useState, useEffect } from 'react';
import logo from '../../Assets/Logo.svg'; // Adjust the path according to your directory structure
import LocomotiveScroll from 'locomotive-scroll';
import landingVid from '../../Assets/Website landing 1.mp4'
import { animate, scroll, inView,timeline,spring } from "motion"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
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
    // Initial state: set opacity to 0
    [".navItem", { opacity: 0 }], 
    [".landingItem1", { opacity: 0}],
    [".landingItem2", { opacity: 0}],
    [".braidedStar", { opacity: 0}],  
    // Final state: set opacity to desired value
    [".landingItem1",{ opacity: 1}, { duration: 0.2, easing:"ease-in-out"}],
    [".landingItem2",{ opacity: 0.8}, { duration: 0.2, easing:"ease-in-out"}],
    [".navItem", { opacity: 1 }, { duration: 0.3, delay: stagger(0.2) }],
    
    [".braidedStar",{ opacity: 1}, { duration: 0.2,easing:"ease-out"}],
  ];

    
  
// ];
//This is the intro Animation
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
      <div   className=" ">
      {/* <Parallax pages={3} ref={parallax} scrolling={true} horizontal={false} > */}
        
      <div  className={` transition-opacity overflow-hidden duration-1000 
       sm:ml-0 overflow-x-hidden flex flex-col 
       sm:flex-wrap justify-center  sm:items-center   sm:justify-items-start
       h-screen prose prose-sm lg:prose-xl text-MainBeige relative`}>

<div className="z-1   w-screen h-screen absolute outline-none ">
          {/* Conditionally render the landing video based on showLandingVideo state */}
          {showLandingVideo && (
            <video className="w-full  h-full absolute scale-90 sm:bottom-0 bottom-12  sm:scale-[60%] border-none overflow-hidden object-cover hover:none" controls={false} autoPlay muted loop>
              <source src={landingVid} type="video/mp4" />
              {/* You can add more source elements for different video formats (WebM, Ogg) */}
            </video>
          )}
        </div>

      

          {/* This is the Mobile view */}       
          <div className=' flex justify-center top-2/3 items-center  sm:hidden  absolute '>  
      <h1  className={`landingItem1  text-6xl w-3/4 font-extralight  text-center  opacity-0 sm:w-1/3 z-10 text-NightFall   
         sm:hidden textC transition duration-200 `}>
            StoryTellers for the Visionaries
          </h1>
          
         
          </div>   


          {/* This is the Desktop view */}
         
          <div strength={100} className='opacity-100 landingItem mouseParallax text-NightFall hidden sm:flex  sm:absolute hover:text-LunarTwilight 
            transition-text duration-200 text-left   left-10 bottom-[10%] w-2/3 flex-col '>

          <h1 data-scroll id='hero_line'  className={` textC mb-5 opacity-0 landingItem1 font-medium font-Satoshi sm:text-[128px] leading-none`}>
          Storytellers for the Visionaries
          </h1>
          

          <h1   className={`hidden opacity-0 textP landingItem2  font-normal font-Satoshi pl-2 
           sm:text-3xl ml-2 mr-44 sm:block  text-left  `}>
          We eliminate invisibility by crafting distinct creative ideas that resonate

           

          </h1>
          </div>
          
         
        </div>
        {/* </Parallax> */}
        </div>
        
    );
    
  
  }

export default LandingPage;