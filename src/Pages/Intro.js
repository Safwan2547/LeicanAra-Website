import React, { useEffect, useRef } from 'react';
import { gsap,TweenMax,Power3 } from 'gsap';
const Intro = ({ setIsIntroOver }) => {
  const introRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsIntroOver(true),
    });

    tl.to(introRef.current, {
      delay:1,
      duration: 2,
      autoAlpha: 0,
      ease:Power3.easeIn
    });
  }, [setIsIntroOver]);

  return (
    <div
      ref={introRef}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white z-50"
    >
      <h1 className="text-4xl">To those who look beyond</h1>
    </div>
  );
};

export default Intro;
