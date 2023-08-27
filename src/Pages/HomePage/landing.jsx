import React, { useRef,useState, useEffect } from 'react';
import logo from '../../Assets/Logo.svg'; // Adjust the path according to your directory structure
import LocomotiveScroll from 'locomotive-scroll';
import { animate, scroll, inView,timeline,spring } from "motion"
//FIX LOCOMOTIVE SCROLL

function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);

  

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
const starFloat=[
  [".braidedStar",{ y:0}, { duration: 0.5, easing: 'ease-out' }],
  [".braidedStar",{ y:10}, { duration: 0.5, easing: 'ease-out' }],
  
];
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
   timeline(starFloat, {duration : 5,
    direction: "alternate",repeat:Infinity},{
    defaultOptions: { ease: "ease-in-out" },
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

      

        <div data-factor="0.1" className='opacity-0 braidedStar scale-x-0 floater flex left-[70%] justify-center 
        align-middle absolute w-[300px] h-screen overflow-hidden'>
          <img className="relative    " src={logo} alt="Braided Star Logo" /></div>
      <h1  className={`landingItem flex opacity-0 w-1/2 text-NightFall z-1   sm:absolute sm:top-0   sm:hidden textC transition duration-200 text-left font-Satoshi text-5xl`}>
            Sculpting Aspirations.<br></br>Crafting Brands.
          </h1>
          
          <p className={`opacity-80  font-Lora pt-3  text-lg   sm:hidden w-2/3 `}>
           
          </p>


          {/* This is the Desktop view */}
          <h1 data-scroll id='hero_line'  className={`opacity-0 landingItem mouseParallax text-NightFall hidden sm:flex textC sm:absolute hover:text-LunarTwilight 
            transition-text duration-200 text-left font-Satoshi text-7xl left-10 bottom-[25%]  font-bold`}>
            Sculpting Aspirations,<br></br>Crafting Brands.
          </h1>
          <h1 className={`hidden opacity-80  font-Lora  sm:relative text-4xl mt-5 sm:block  text-center  `}>
           

          </h1>
        </div>
        </div>
        
    );
    
  
  }

export default LandingPage;