import React, { useRef, useState, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function AboutPage() {
  const containerRef = useRef(null);
  let scroll;

  useEffect(() => {
    const timer = setTimeout(() => {
      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      if(scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    if(scroll) scroll.update();
  });

  return (
    <div 
      ref={containerRef} 
      data-scroll-section 
      className="flex-col sm:flex-row sm:justify-between mt-10 sm:mt-1 sm:p-10 items-start h-screen sm:w-screen flex text-left"
    >
      <h2 
        data-scroll 
        data-scroll-speed="1" 
        data-scroll-offset="10"
        className="opacity-80 pt-3 text-xl max-w-1/2 pr-5 max-w-10 textC text-wrap hidden sm:block sm:max-h-20 sm:text-6xl font-Lora font-light sm:w-96"
      >
        We are an innovative, independent design studio based in Halifax
      </h2>
      <h2 
        data-scroll 
        data-scroll-speed="3" 
        data-scroll-delay="0.4" 
        data-scroll-offset="50%"
        className="opacity-80 pt-3 text-xl w-8/12 pr-5 max-w-10 textC text-wrap sm:max-h-20 sm:text-6xl font-Lora font-light sm:w-96"
      >
        Drawing from the timeless art of storytelling, we see design as a tool to share profound narratives. 
      </h2>
    </div>
  );
}

export default AboutPage;
