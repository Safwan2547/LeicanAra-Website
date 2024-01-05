// ProjectPage.jsx
//Serves as a template for the project pages
//Is dynamically generated based on the project
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import projects from './Projects/Projects';
import Footer from '../Modules/Footer';

const ProjectPage = () => {
  const { projectKey } = useParams();
  const [projectData, setProjectData] = useState(null);

  console.log(projectKey,projectData);

  useEffect(() => {
    // Fetch project details based on projectKey from Projects
    const projectDetails = projects.find((project) => project.key === projectKey);

    if (projectDetails) {
      setProjectData(projectDetails);
    } else {
      // Handle project not found (optional)
      console.error(`Project with key "${projectKey}" not found`);
      // Set an empty object or handle it in a way that suits your application
      setProjectData({});
    }
  }, [projectKey]);

  return (
    <div smooth={true} className="w-screen h-full  bg-white">
      {projectData ? (
        <>
        <section id='landing' className='mt-24 ' >
        {/* Contains main header and description for the landing */}
        <div id="headerInfo" className='flex justify-center w-full items-center  border-black  
        flex-col '>
          <h1 className='uppercase text-6xl sm:text-9xl tracking-wider font-Satoshi  '>{projectData.title}</h1>
          <p className='text-2xl m-6 font-Satoshi font-light '>{projectData.mainHeader}</p>
          
          </div>
          <p className='pl-10'>{projectData.services}</p>

          <div className='p-5' id='thumbnail'>
            <img src={projectData.thumbnail} ></img>
          </div>
            
            
          </section>
          <section id='projectInfo1' className='relative justify-center
           flex flex-row h-screen  mt-20'>
            
            <div id='ambition' className="w-2/3 ">
            <h4 className='text-2xl font-light font-Satoshi'>Ambition:</h4>
            <div id='line' className='h-20 rounded-sm w-0.5 bg-black'></div>
            <h1 id='ambitionHead' className='text-3xl font-light sm:text-5xl font-Lora'> 
            {projectData.ambitionHead}
          
            </h1>
            <p id='ambitionDescription' className='font-Satoshi mt-4 font-light text-xl sm:text-2xl' >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book.</p>

            </div>

            
            

          </section>

          

        

          
          
        </>
      ) : (
        <p>Loading...</p>
      )
      }
      
    <Footer></Footer>
    
    </div>
    
  );
};

export default ProjectPage;
