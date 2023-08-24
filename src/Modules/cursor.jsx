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
    easing: spring({mass:1,stiffness:700, damping: 200,
      }) // Custom easing to give a feeling of inertia
  });

  };


  return (
    <div id="Cursor" 
      className= {`${hovering === 'button'
      ? '!opacity-80 !w-0 !h-0 !bg-LunarTwilight'
      : hovering === 'text'
      ? '!opacity-80 !w-1 !h-24 !border-NightFall !bg-NightFall'
      : hovering === 'textP'
      ? '!opacity-80 !w-1 !h-24 !border-NightFall !bg-NightFall'
      // : hovering === 'footerC'
      // ? '!opacity-80 !w-7 !h-7 !border-MainBeige !bg-MainBeige'
      : ''}
       transition-cursor hidden sm:block !duration-300  bg-LunarTwilight  fixed rounded-full z-50` }
      style={{
     
        pointerEvents: "none"
      }}
    />
  );
}

export default Cursor;
