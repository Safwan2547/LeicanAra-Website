import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/LeicanAra website Intro v2.mp4"
import SvavaVideo from "../../Assets/WebsiteTest.mp4"
const projects = [
    {
      title: 'StarFall',
      description: 'Branding a revolutionary space mining company',
      type: 'video',
      thumbnail: starFallVideo,
      projectLink: 'https://www.starfallstudios.com/',
    },
    {
      title: 'Svava',
      description: 'Branding the next renassaince of skincare.',
      type: 'video',
      thumbnail: SvavaVideo,
      projectLink: 'https://www.leicanAra.com',
    },
    {
      title:'LeicanAra',
      description:'This is a third awesome project',
      type:'video',
      thumbnail:starFallVideo,
      projectLink: 'https://www.starfallstudios.com/',
    }
    // Add more projects here
  ];
  
  export default projects;
  