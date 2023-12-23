// Import necessary modules and components
import React, { useState } from 'react';
import TransitionLink from '../../Modules/TransitionLink';

// Functional component to render a project card
const ProjectCard = ({ project }) => {
  // State to track mouse hover status and position
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement to calculate position relative to the image's center
  const handleMouseMove = (e) => {
    const image = e.currentTarget.querySelector('.wobbling-image');
    const imageRect = image.getBoundingClientRect();
    const x = e.clientX - imageRect.left - imageRect.width / 2;
    const y = e.clientY - imageRect.top - imageRect.height / 2;

    // Update the mouse position state
    setMousePosition({ x, y });
  };

  // Reset mouse position when the mouse leaves the image
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Render the project card
  return (
    <div className='relative enterC  flex'>
      {/* Use TransitionLink component with the project's link */}
      <TransitionLink
        to={project.projectLink}
        className="enterC"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="enterC object-cover  rounded transition-all duration-300">
          <div className={`relative enterC transition-all duration-[600ms] overflow-hidden`}>
            {/* Render image or video based on the project type */}
            {project.type === 'image' ? (
              <img  src={project.thumbnail} alt={project.title} className="
               rounded-t object-cover overflow-hidden aspect-[1.85/1] cursor-none " />
            ) : (
              <video
                muted
                autoPlay
                loop
                className={`transition-all duration-[600ms] ${
                  isHovered ? 'opacity-100 scale-[120%]' : 'scale-[100%]'
                }`}
              >
                <source src={project.thumbnail} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div
            className={`enterC p-4 absolute cursor-none inset-0 transition-opacity duration-[600ms] rounded
                        bg-opacity-50 flex flex-col justify-center items-center
                        ${isHovered ? 'opacity-100' : 'opacity-100'}`}
          ></div>
        </div>
      </TransitionLink>
      {/* Additional project information */}
      <div className="cursor-none enterC ml-10 mt-10 col-span-4 absolute">
        <h4 className={`enterC text-3xl opacity-90 ${project.textColor} ml-1 mb-2`}>
          {project.title}
        </h4>
        <p className={`enterC ${project.textColor} font-bold text-9xl `}>{project.description}</p>
      </div>
    </div>
  );
};

// Export the ProjectCard component
export default ProjectCard;
