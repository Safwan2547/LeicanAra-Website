import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [hoveringText,setHoveringText]=useState(false);
  // const [hoveringButton,setHoveringButton]=useState(false);
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
     // Mouse leave
    //  document.addEventListener('mouseout', handleMouseLeave);
 
 
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // console.log(hoveringText);

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
      ? '!opacity-80 !w-14 !h-14 !bg-teal-600'
      : hovering === 'text'
      ? '!opacity-80 !w-1 !h-20 !border-black'
      : ''}
       transition-cursor hidden sm:block !duration-300  bg-black  fixed rounded-full z-50` }
      style={{
        
        pointerEvents: "none"
      }}
    />
  );
}

export default Cursor;
