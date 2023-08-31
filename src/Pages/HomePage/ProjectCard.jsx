import React,{useState} from 'react';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative p-4 "onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
         >
      <div className="hover:opacity-40 hover:scale-105 transition-all duration-[600ms] rounded  shadow-lg">
        <div className={` overflow-clip`}>
          {project.type === 'image' ? (
            <img src={project.thumbnail} alt={project.title} className="rounded-t" />
          ) : (
            <video muted autoPlay loop  className={`transition-all duration-[600ms] ${isHovered? "scale-[150%]":"scale-100"}`}>
              <source src={project.thumbnail} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className={`p-4 absolute inset-0 transition-opacity duration-[600ms] rounded  bg-opacity-50 flex flex-col justify-center items-center 
                          ${isHovered ? 'opacity-100' : 'opacity-0'} `} 
                         >
        
          <h4 className="font-bold text-xl text-black mb-2">{project.title}</h4>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
