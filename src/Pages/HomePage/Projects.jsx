import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/StarFall_Card_v1.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.jpg"
import LeicanAraPhoto from "../../Assets/Magazine.png"
import SvavaPhoto from "../../Assets/Zen.jpg"

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
      description: 'Stories that Bind us.',
      type: 'image',
      thumbnail: LeicanAraPhoto,
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]"
    },
    {
      title:'Sväva',
      description:'Skincare forever changed',
      type:'image',
      thumbnail:SvavaPhoto,
      projectLink: 'https://www.starfallstudios.com/',
      textColor:"text-[#efece3]"

    }
    // Add more projects here
  ];
  
  export default projects;
  