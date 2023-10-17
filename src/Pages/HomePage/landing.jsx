import React, { useRef,useState, useEffect } from 'react';
import logo from '../../Assets/Logo.svg'; // Adjust the path according to your directory structure
import LocomotiveScroll from 'locomotive-scroll';
import landingVid from '../../Assets/Website landing 1.mp4'
import { animate, scroll, inView,timeline,spring } from "motion"
//FIX LOCOMOTIVE SCROLL

function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);
  //This starts the video on the landing page
  const [showLandingVideo, setShowLandingVideo] = useState(false); // State to control when to show the landing video


  //  delay for the landing video
  setTimeout(() => {
    setShowLandingVideo(true);
  }, 3500);

//This is the animation for the landing page
  const landingAnimations=[
    [".navItem", { opacity: 0 }], 
    [".landingItem", { opacity: 0}],
    [".braidedStar", { opacity: 0}],  // Initial state: set opacity to 0
    [".navItem", { opacity: 1 }, { duration: 0.4, delay: stagger(0.1) }],
    
    [".landingItem",{ opacity: 1}, { duration: 0.3}],
    [".braidedStar",{ opacity: 1}, { duration: 0.3,easing:"ease-out"}],
  ];

//StarFloat
// const starFloat=[
 
//     [".braidedStar", { transform: 'translate3d(0, 0, 0)' }, { duration: 1, easing: 'ease-in-out' }],
//     [".braidedStar", { transform: 'translate3d(0, 20px, 0)' }, { duration: 1, easing: 'ease-in-out' }],
    
  
// ];
//This is the intro Animation
//The entire page is covered with a black bg
//Must ensure the animation only triggers once when the user first logs in (May need cookies)

const introAnimate=[
  [".intro-Back",{ opacity: 0}, { duration: 0.5,delay:1,easeing:["ease-in", "ease-out"] }],
  [".intro-Back",{ display:"none"}, { duration:0.001 }]


  
]

  function stagger(delay) {
  return (i) => i * delay;
}

 
    

  
 

  useEffect(() => {
  timeline(introAnimate, {duration : 3.5},{
    defaultOptions: { ease: "ease-in-out"}} )

   timeline(landingAnimations, {duration : 3,delay:1.5},{
    defaultOptions: {easing:spring() },
  })
  //  timeline(starFloat, {duration : 5,
  //   direction: "alternate",repeat:Infinity},{
  //   defaultOptions: { ease: "ease-in-out" },
  // })
  
   
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

<div className="z-1 w-screen h-screen absolute outline-none border-none">
          {/* Conditionally render the landing video based on showLandingVideo state */}
          {showLandingVideo && (
            <video className="w-full h-full absolute scale-90 border-none overflow-hidden object-cover hover:none" controls={false} autoPlay muted loop>
              <source src={landingVid} type="video/mp4" />
              {/* You can add more source elements for different video formats (WebM, Ogg) */}
            </video>
          )}
        </div>

      

        {/* <div data-factor="0.1" className='hidden sm:flex opacity-0 braidedStar scale-x-0 floater  left-[70%] justify-center 
        align-middle absolute w-[300px] h-screen overflow-hidden'>
          <img className="relative    " src={logo} alt="Braided Star Logo" /></div> */}
      <h1  className={`landingItem flex opacity-0 w-1/2 text-NightFall z-2   sm:absolute sm:top-0   sm:hidden textC transition duration-200 text-left font-Satoshi text-5xl`}>
            StoryTellers for the Visionaries
          </h1>
          
          <p className={`opacity-80  font-Lora pt-3  text-lg   sm:hidden w-2/3 `}>
           
          </p>


          {/* This is the Desktop view */}
          <div className='opacity-0 landingItem mouseParallax text-NightFall hidden sm:flex  sm:absolute hover:text-LunarTwilight 
            transition-text duration-200 text-left  left-10 bottom-[20%] w-2/3 flex-col '>
          <h1 data-scroll id='hero_line'  className={` textC mb-5 font-bold font-Satoshi text-7xl`}>
          StoryTellers for the Visionaries
          </h1>
          <h1 className={`hidden opacity-80 textP landingItem text-black font-light font-Satoshi pl-2  text-3xl mr-44 sm:block  text-left  `}>
          LeicanAra is an innovative, independent branding studio, based in Halifax.

           

          </h1>
          </div>
        </div>
        </div>
        
    );
    
  
  }

export default LandingPage;