import React, { useEffect, useState } from 'react';

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [hovering,setHovering]=useState(false);
  const [hoveringText,setHoveringText]=useState(false);



  useEffect(() => {
    const handleMouseMove = (e) => {
      
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = (e) => {
      if (e.target.className.includes("triggerCursor")) {
        setHoveringText(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.className.includes("triggerCursor")) {
        setHoveringText(false);
      }
    };
     // Mouse move
     document.addEventListener('mousemove', handleMouseMove);

     // Mouse enter
     document.addEventListener('mouseover', handleMouseEnter);
 
     // Mouse leave
     document.addEventListener('mouseout', handleMouseLeave);
 
 
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      console.log(hoveringText);

    };
  }, [hoveringText,position.x,position.y]);
 
  return (
    <div id="Cursor" 
      className={`${hoveringText ? 'opacity-80 w-1 h-18' : 'opacity-50 w-8 h-8'} border-MainBeige border-solid border-2 transition-cursor duration-250 cursor-none bg-black  fixed rounded-full z-50` }
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}

export default Cursor;
