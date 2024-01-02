import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/StarFall_Card_v1.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.jpg"
import LeicanAraPhoto from "../../Assets/Magazine.png"
import SvavaPhoto from "../../Assets/Zen.jpg"
import SvavaVideo from "../../Assets/WebsiteTest.mp4"

const projects = [
    {
      key:"starfall",
      title: 'StarFall',
      mainHeader: 'Humanity\'s future, Revolutionized.',
      type: 'image',
      thumbnail: starFallPhoto,
      thumbnailAlt:"image description",
      projectLink: '/ProjectPage',
      textColor:"text-MainBeige",
      services:"",

    },
    {
      key:"leicanara",
      title: 'LeicanAra',
      mainHeader: 'Stories that Bind us.',
      type: 'image',
      thumbnail: LeicanAraPhoto,
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]"
    },
    {
      key:"svava",
      title:'Sväva',
      mainHeader:'Skincare forever changed',
      type:'image',
      thumbnail:SvavaPhoto,
      projectLink: 'https://www.starfallstudios.com/',
      textColor:"text-[#efece3]"

    }
    // Add more projects here
  ];
  
  export default projects;
  