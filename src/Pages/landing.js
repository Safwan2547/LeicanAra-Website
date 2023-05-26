import React, { useRef,useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function LandingPage() {
  const [isMounted1, setIsMounted1] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsMounted1(true), 800);
   

    return () => {
      clearTimeout(timer1);
    };
  }, []);
    //## locomotive below
//   const containerRef = useRef(null);

//   useEffect(() => {
//     let scroll;
//     const timer = setTimeout(() => {
//         scroll = new LocomotiveScroll({
//             el: containerRef.current,
//             smooth: true,
//             direction:"vertical",
//             getDirection:true,
//             offset:["0%", "200%"],
//             repeat:true,
//             initPosition:{x:0,y:0},
//         });
//     }, 1000); // Adjust the delay as needed

//     return () => {
//         if (scroll) scroll.destroy();
//         clearTimeout(timer);
//     }
// }, []);


    return (
      //wrapper
      <div  className="">
    
      <div className={`transition-opacity ease-expo duration-1000 ${isMounted1 ? 'opacity-100' : 'opacity-0'}
       sm:ml-0 overflow-x-hidden flex flex-col basis-1  
       lg:flex-wrap justify-center sm:items-center items-start 
       h-screen prose prose-sm lg:prose-xl`}>
      <p className={` h-1/3  w-1/2   top-24  block sm:hidden textC hover:text-red-400 transition duration-200 text-left font-Satoshi text-5xl`}>
            Branding Beyond The Ordinary!
          </p>
          <p className={`opacity-80 pl-2 font-Lora pt-3  text-lg   sm:hidden w-2/3 `}>
          Drawing from the timeless art of storytelling, we see design as a tool to share profound narratives. 
          </p>
          <h1 className={`m-5 hidden sm:block textC absolute hover:text-red-400 text-Black transition duration-200 text-left font-Satoshi text-9xl font-bold`}>
            Branding Meets Soul
          </h1>
        </div>
        <div className=" flex-col sm:flex-row mt-10 lg:p-48 items-center   h-screen sm:w-screen flex  text-left ">
          <h2 
          className="opacity-80  pt-3  text-xl  max-w-1/2  pr-5 max-w-10  textC 
           text-wrap  sm:max-h-20 sm:text-6xl font-Lora font-light sm:w-96
            ">We are an innovative,independent design studio based in
          Halifax</h2>
        </div>
        </div>
    );
    
  }

export default LandingPage;