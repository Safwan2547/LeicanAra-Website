import React, { useEffect } from 'react';

/**
 * MouseParallax - A function designed to create a parallax effect relative to the mouse position.
 *
 * Approach:
 * 1. Get all elements with the class 'mouseParallax'.
 * 2. Get the mouse position on mouse movement.
 * 3. Establish the center point of the viewport.
 * 4. Calculate the displacement between the mouse and the center point.
 * 5. Translate each target element based on the mouse displacement, reduced by a factor,
 *    ensuring elements never leave the viewport.
 */
function MouseParallax() {
  useEffect(() => {
    // Step 3: Establish the center point of the viewport
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Step 1: Capture initial positions of all elements
    const targets = document.getElementsByClassName('mouseParallax');
    const initialPositions = [];
    for (let i = 0; i < targets.length; i++) {
      const rect = targets[i].getBoundingClientRect();
      initialPositions[i] = { x: rect.left, y: rect.top };
      console.log(initialPositions[i])
    }

    const handleMouseMove = (event) => {
      // Step 2: Get mouse position
      const { clientX: mouseX, clientY: mouseY } = event;

      // Step 4: Calculate the displacement between the mouse and the center point
      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;
        console.log("Del X "+ deltaX)
      console.log("Del Y "+ deltaY)

      // Iterate through each target element
      for (let i = 0; i < targets.length; i++) {
        // Step 5: Translate the element based on mouse displacement and a reduction factor
        const factor = 0.01; 

        const initialX = initialPositions[i].x;
        const initialY = initialPositions[i].y;
        console.log("Initial X "+ initialX)
        console.log("Initial Y "+ initialY)

        let moveX = initialX + deltaX * factor;
        let moveY = initialY + deltaY * factor;

        // Constrain movement to keep elements within the viewport
        const rect = targets[i].getBoundingClientRect();
       
        // Apply the transform
        targets[i].style.transform = `translate(${moveX}px, ${moveY}px)`;
        console.log("Move X "+ moveX)
        console.log("Move Y "+ moveY)
        console.log(targets[i].getBoundingClientRect().top)
      }
    };

    // Attach event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return null;
}

export default MouseParallax;
