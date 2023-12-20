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
    

    <div className='relative grid grid-cols-1'>
    
         
          
         <TransitionLink to={project.projectLink} className="   col-span-4 gap-7" 
         onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave} 
        > {/* Use the Link component with the project's link */}
      <div className=" rounded  transition-all duration-300 shadow-lg" >
        
        <div className={`      transition-all duration-[600ms] overflow-clip`}>
        
          {project.type === 'image' ? (
            <img src={project.thumbnail} alt={project.title} className="rounded-t" />
          ) : (
            <video muted autoPlay loop  className={`transition-all duration-[600ms] ${isHovered? "opacity-100 scale-[120%]":"scale-[100%]"}`}>
              <source src={project.thumbnail} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className={`  buttonC cursor-none p-4 absolute inset-0 transition-opacity duration-[600ms] rounded
          bg-opacity-50 flex flex-col justify-center items-center 
                          ${isHovered ? 'opacity-100' : 'opacity-100'} `} 
                         >
         
        </div>
      </div>
      </TransitionLink>
      <div className=" ml-10 mt-10 col-span-4 absolute">
        <h4 className= {`textC  text-3xl opacity-90 ${project.textColor} ml-1 mb-2`}>{project.title}</h4>
        <p className={`textP ${project.textColor} font-bold text-8xl`}>{project.description}</p>
      </div>

    </div>
    
  );
};

export default ProjectCard;
