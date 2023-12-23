// Import React and the ProjectCard component
import React from 'react';
import ProjectCard from './ProjectCard';

// Functional component to render a grid of projects
const ProjectGrid = ({ projects }) => {
  return (
    // Outer container with flex layout and centering
    <div className="w-[100%] flex justify-center items-start flex-wrap">
      <h1 className='text-NightFall text-8xl'>Projects</h1>
      {/* Grid container for projects with specified columns, gap, and border */}
      <div className="sm:grid-cols-4 gap-36 w-[95vw]  ">
       
       
          
        
        
        {/* Map through the projects and render ProjectCard for each */}
        {projects.map((project) => (
          <div className=' col-span-4 cursor-none   mt-10  ' key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the ProjectGrid component
export default ProjectGrid;
