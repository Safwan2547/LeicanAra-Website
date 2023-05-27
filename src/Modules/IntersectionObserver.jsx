import React, { useEffect, useRef } from 'react';

function Observer({ children,className }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Apply CSS class for fading in
            observer.unobserve(entry.target); // Stop observing once element is visible
          }
        });
      },
      { threshold: 0.5 } // Trigger at 50% visibility of element
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return <div ref={elementRef} className={className}>{children}</div>}

  export default Observer;
