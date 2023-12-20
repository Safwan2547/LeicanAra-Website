import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/StarFall_Card_v1.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.jpg"
import LeicanAraPhoto from "../../Assets/Magazine.png"

import SvavaVideo from "../../Assets/WebsiteTest.mp4"
const projects = [
    {
      
      title: 'StarFall',
      description: 'Humanity\'s future, Revolutionized.',
      type: 'image',
      thumbnail: starFallPhoto,
      projectLink: 'https://www.starfallstudios.com/',
      textColor:"text-MainBeige"
    },
    {
      title: 'LeicanAra',
      description: 'Visionary',
      type: 'image',
      thumbnail: LeicanAraPhoto,
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]"
    },
    {
      title:'sc',
      description:'This is a third awesome project',
      type:'video',
      thumbnail:starFallVideo,
      projectLink: 'https://www.starfallstudios.com/',
    }
    // Add more projects here
  ];
  
  export default projects;
  