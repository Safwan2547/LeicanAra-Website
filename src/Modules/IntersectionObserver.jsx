import React, { useEffect } from 'react';

function MyIntersectionObserver() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersection Spotted");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}

export default MyIntersectionObserver;
