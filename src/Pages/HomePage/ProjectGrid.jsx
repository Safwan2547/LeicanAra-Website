// Import React and the ProjectCard component
import React,{ useState,useEffect } from 'react';
import ProjectCard from './ProjectCard';

// Functional component to render a grid of projects
const ProjectGrid = ({ projects }) => {

  
  
  return (
    // Outer container with flex layout and centering
    <div id='gridClassWrap' className="w-[100%] flex justify-center  overflow-x-scroll items-center flex-wrap">
      <h1 className='text-NightFall font-Lora text-6xl   mb-8 sm:text-8xl'>Projects</h1>
      {/* Grid container for projects with specified columns, gap, and border */}
      <div id='projectHolder' className=" sm:flex-col flex-row  relative flex overflow-x-scroll overflow-y-hidden  gap-2 sm:gap-8 sm:p-0 pl-4 pr-4 w-screen sm:w-[95vw]  snap-mandatory snap-x   ">

       
       
        
        {/* Map through the projects and render ProjectCard for each */}
        {projects.map((project) => (
          <div className='  cursor-none flex-none mt-10 h-2/3  border-black snap-always snap-center ' key={project.key}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the ProjectGrid component
export default ProjectGrid;
