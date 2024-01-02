import React, { useEffect, useState } from 'react';
import { animate,spring, scroll, inView } from "motion" 


function Cursor() {
  //initializing position state and hovering state
  const [position, setPosition] = useState({ x: 0, y: 0});
  const [hovering, setHovering] = useState(null);
  
  //Cursor Size
  const cursorSize = 30;

 



  useEffect(() => {
    const handleMouseMove = (e) => {
      adjustCursorPosition(e.clientX, e.clientY);
  
    };
    
    const handleMouseOver = (e) => {
      if (e.target.className.includes('textC')) {
        setHovering('text');
        console.log("text");}

      else if(e.target.className.includes('buttonC')){
        setHovering('button');
        console.log("button");


      }
      else if(e.target.className.includes('textP')){
        setHovering('textP');
        console.log("textP");
      }
      else if(e.target.className.includes('footerC')){
        setHovering('footerC');
        console.log("footerC");
      }
      else if(e.target.className.includes('footerC')){
        setHovering('footerC');
        console.log("footerC");
      }
      else if (e.target.className.includes("enterC")){
        setHovering('enterC');
        console.log("enterC");
      }
      else{
        setHovering(null)
      }

    };
    
     // Mouse move
     document.addEventListener('mousemove', handleMouseMove);

     // Mouse enter
     document.addEventListener('mouseover', handleMouseOver);
 
 
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [position.x,position.y]);

  // Adjust the cursor position
  const adjustCursorPosition = (x, y) => {
    const element = document.getElementById('Cursor');
    animate(element, {
      left: `${x - cursorSize / 2}px`,
      top: `${y - cursorSize / 2}px`
    }, {
     // Adjust the duration to control the "drag" effect
    easing: spring({mass:4,stiffness:700, damping: 200,
      }) // Custom easing to give a feeling of inertia
  });

  };
// Conditionally render arrow element for 'enterC'
const renderArrow = () => {
  if (hovering === 'enterC') {
    return (
      <div className='  animate-pulse-slow flex transition-opacity duration-500 justify-center w-full h-full items-center '>
        <div className=" scale-[200%] rotate-90 ">
          <span className=' text-LunarTwilight'>&#8593;</span>
        </div>
      </div>
    );
  }
  return null;
};



  return (
    
       
    <div id="Cursor" 
      className= {`${hovering === 'button'? 
      '!opacity-80 !w-0 !h-0 !bg-LunarTwilight'

      : hovering === 'text' ? 
      '!opacity-80 !w-1 !h-24 !border-NightFall !bg-NightFall cursor-none'

      : hovering === 'textP'? 
      '!opacity-80 !w-1 !h-10 !border-NightFall !bg-NightFall cursor-none'
      
      : hovering === 'enterC' ? 
      '!opacity-100 transition-all !border-opacity-95  drop-shadow-lg  !bg-MainBeige ease-in-out  !w-20 !h-20 !border-NightFall border-solid cursor-none'
      
      
      :''}
        !opacity-100 transition-cursor hidden sm:block !duration-300  bg-LunarTwilight  fixed rounded-full z-50` }
      style={{
        pointerEvents: "none"
      }}
    >{renderArrow() } </div>
    
    
  );
}

export default Cursor;
