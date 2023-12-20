import React from 'react';
import ProjectCard from './ProjectCard';


const ProjectGrid = ({ projects }) => {
  return (
    
    <div className=" w-[100%] flex justify-center items-center">
       

      <div className="grid sm:grid-cols-4  gap-36 w-[95%]">
        
      <div className='col-span-4 relative flex justify-center items-center text-9xl font-bold m-24' >
        <h1>Featured</h1>
        </div>
        {projects.map((project) => (
  <div className='col-span-4 gap-7' key={project.id}>
    <ProjectCard project={project} />
  </div>
))}

      </div>
    </div>
  );
};

export default ProjectGrid;
