import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0});

  const [hovering, setHovering] = useState(null);
  const cursorSize = 30;

 



  useEffect(() => {
    const handleMouseMove = (e) => {
      adjustCursorPosition(e.clientX, e.clientY);
  
      console.log(e.target.className)
    };
    
    const handleMouseOver = (e) => {
      if (e.target.className.includes('textC')) {
        setHovering('text');
        console.log("text");}

      else if(e.target.className.includes('buttonC')){
        setHovering('button');
        console.log("button");


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
  const adjustCursorPosition = (x, y) => {
    const element = document.getElementById('Cursor');
    if (element) {
      const rect = element.getBoundingClientRect();
      element.style.left = `${x - cursorSize / 2}px`;
      element.style.top = `${y - cursorSize / 2}px`;
    }

  };


  return (
    <div id="Cursor" 
      className= {`${hovering === 'button'
      ? '!opacity-80 !w-0 !h-0 !bg-customTeal'
      : hovering === 'text'
      ? '!opacity-80 !w-1 !h-20 !border-black !bg-black'
      : ''}
       transition-cursor hidden sm:block !duration-300  bg-customTeal  fixed rounded-full z-50` }
      style={{
     
        pointerEvents: "none"
      }}
    />
  );
}

export default Cursor;
