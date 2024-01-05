import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/StarFall insta reel blue.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.jpg"
import LeicanAraPhoto from "../../Assets/Magazine.png"
import SvavaPhoto from "../../Assets/Zen.jpg"
import leicanAraPortrait from "../../Assets/portrait uw.png"
import starFallvideo2 from "../../Assets/Laptop Mockup 1080 v2.mp4"



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
  
      services:"Branding, Vision, ",

      //Mobile Content
      mainHeaderMobile:"Beyond the Stars",
      thumbnailPort:starFallVideo,
      textColorMobile:"text-[#efece3]",
      typeMobile:"video",


      //Project Page Content
      ambitionHead:"To create a brand that inspires people to look beyond the stars and into the future.",

    },
    {
      key:"leicanara",
      title: 'LeicanAra',
      mainHeader: 'Stories that Bind us.',
      type: 'image',
      thumbnail: LeicanAraPhoto,
      services:"",
      
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]",
    

      //mobile Content
      mainHeaderMobile:"Stories that bind us",
      textColorMobile:"text-[#efece3]", 
      typeMobile:"image",
      thumbnailPort:leicanAraPortrait,
    },
    {
      key:"svava",
      title:'Sväva',
      mainHeader:'Skincare forever changed',
      type:'image',
      thumbnail:SvavaPhoto,
      thumbnailPort:starFallPhoto,
      projectLink: 'https://www.starfallstudios.com/',
      textColor:"text-[#efece3]",
      typeMobile:"image"

    }
    // Add more projects here
  ];
  
  export default projects;
  