// ProjectPage.jsx
//Serves as a template for the project pages
//Is dynamically generated based on the project
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from './Projects';

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
    <div className="w-screen h-screen bg-white">
      {projectData ? (
        <>
          <h1>{projectData.title}</h1>
          <p>{projectData.mainHeader}</p>

          {/* Render other project details as needed */}
          <div className="project-details">
            
          </div>

          {/* Render images or videos */}
          {projectData.landingView && (
            <div className="project-media">
              <img src={projectData.landingView} alt="Project Landing View" />
            </div>
          )}

          {/* Render other project content as needed */}
          <div className="project-content">
            <p>{projectData.text1}</p>
            {/* Add more content sections as needed */}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProjectPage;
