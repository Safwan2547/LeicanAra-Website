// Import React and the ProjectCard component
import React from 'react';
import ProjectCard from './ProjectCard';

// Functional component to render a grid of projects
const ProjectGrid = ({ projects }) => {
  return (
    // Outer container with flex layout and centering
    <div className="w-[100%] flex justify-center overflow-scroll items-start  flex-wrap">
      <h1 className='text-NightFall text-8xl'>Projects</h1>
      {/* Grid container for projects with specified columns, gap, and border */}
      <div className="sm:flex flex-col gap-8 w-[95vw]  snap-mandatory snap-both overflow-scroll  ">
       
        
        {/* Map through the projects and render ProjectCard for each */}
        {projects.map((project, index) => (
          <div className='  cursor-none snap-start  mt-20  border-black ' key={project.key}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the ProjectGrid component
export default ProjectGrid;
