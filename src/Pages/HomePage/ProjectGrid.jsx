import React from 'react';
import ProjectCard from './ProjectCard';


const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid sm:grid-cols-2  gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
