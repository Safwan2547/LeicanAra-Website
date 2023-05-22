import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [hoveringText,setHoveringText]=useState(false);
  // const [hoveringButton,setHoveringButton]=useState(false);
  const [hovering, setHovering] = useState(null);





  useEffect(() => {
    const handleMouseMove = (e) => {
      
      setPosition({ x: e.clientX, y: e.clientY });
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
      element.style.left = `${x - rect.width / 2}px`;
      element.style.top = `${y - rect.height / 2}px`;
    }

  };

  useEffect(() => {
    adjustCursorPosition(position.x, position.y);
  }, [position]);
 
  return (
    <div id="Cursor" 
      className={`${hovering === 'button'
      ? '!opacity-80 !w-20 !h-20 border-red'
      : hovering === 'text'
      ? '!opacity-80 !w-1 !h-20 !border-black'
      : ''}
       border-MainBeige border-solid border-2 transition-cursor duration-350  bg-black  absolute rounded-full z-50` }
      style={{
        left: position.x,
        top: position.y,
        pointerEvents: "none"
      }}
    />
  );
}

export default Cursor;
