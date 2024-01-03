// Import React and the ProjectCard component
import React,{ useState,useEffect } from 'react';
import ProjectCard from './ProjectCard';

// Functional component to render a grid of projects
const ProjectGrid = ({ projects }) => {

  const [snappedContainer, setSnappedContainer] = useState(null);

  const handleScroll = () => {
    // Determine the current scroll position
    const scrollPosition = window.scrollLeft || document.documentElement.scrollLeft;

    // Use your layout-specific logic to determine the snapped container
    const containerWidth = 0;
    const containerIndex = Math.floor(scrollPosition / containerWidth);

    // Update the state with the snapped container index
    setSnappedContainer(containerIndex);
  };
  
  return (
    // Outer container with flex layout and centering
    <div id='gridClassWrap' className="w-[100%] flex justify-center  overflow-x-scroll items-center flex-wrap">
      <h1 className='text-NightFall text-6xl mb-8 sm:text-8xl'>Projects</h1>
      {/* Grid container for projects with specified columns, gap, and border */}
      <div id='projectHolder' className=" sm:flex-col flex-row  relative flex overflow-x-scroll   gap-8 w-[95vw]  snap-mandatory snap-x   ">

        <div id='mobileScrollArrow' className=" sm:hidden left-1/2 top-1/2 z-10 sticky  " >
        <div className=' scale-150  animate-pulse-slow flex transition-opacity duration-500 justify-center w-full h-full items-center '>
        <div className=" scale-[200%] rotate-90 ">
          <span className=' text-LunarTwilight'>&#8593;</span>
        </div>
      </div>
        </div>
       
        
        {/* Map through the projects and render ProjectCard for each */}
        {projects.map((project) => (
          <div className='  cursor-none flex-none mt-10  border-black snap-always snap-center ' key={project.key}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the ProjectGrid component
export default ProjectGrid;
