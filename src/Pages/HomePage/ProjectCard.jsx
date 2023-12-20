import TransitionLink from '../../Modules/TransitionLink';
import React,{useState} from 'react';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseMove = (e) => {
      // Calculate the mouse position relative to the image's center
      const image = e.currentTarget.querySelector('.wobbling-image');
      const imageRect = image.getBoundingClientRect();
      const x = e.clientX - imageRect.left - imageRect.width / 2;
      const y = e.clientY - imageRect.top - imageRect.height / 2;
  
      // Update the mouse position state
      setMousePosition({ x, y });
    };
    const handleMouseLeave = () => {
      // Reset the mouse position when the mouse leaves the image
      setMousePosition({ x: 0, y: 0 });
    };

  return (
    

    <div className='relative grid grid-cols-7'>
    
         
          
         <TransitionLink to={project.projectLink} className="   col-span-4 gap-7" 
         onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave} 
        > {/* Use the Link component with the project's link */}
      <div className=" rounded hover:opacity-80 hover:scale-[102%] transition-all duration-300 shadow-lg" >
        
        <div className={`     hover:opacity-40 hover:scale-105 transition-all duration-[600ms] overflow-clip`}>
        
          {project.type === 'image' ? (
            <img src={project.thumbnail} alt={project.title} className="rounded-t" />
          ) : (
            <video muted autoPlay loop  className={`transition-all duration-[600ms] ${isHovered? "opacity-50 scale-[120%]":"scale-[100%]"}`}>
              <source src={project.thumbnail} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className={`  buttonC cursor-none p-4 absolute inset-0 transition-opacity duration-[600ms] rounded
          bg-opacity-50 flex flex-col justify-center items-center 
                          ${isHovered ? 'opacity-100' : 'opacity-0'} `} 
                         >
         
        </div>
      </div>
      </TransitionLink>
      <div className="ml-10  col-span-3">
        <h4 className="textC font-bold text-6xl text-black mb-2">{project.title}</h4>
        <p className="text-gray-700 textP text-3xl">{project.description}</p>
      </div>

    </div>
    
  );
};

export default ProjectCard;
