import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/LeicanAra website Intro v2.mp4"
import SvavaVideo from "../../Assets/WebsiteTest.mp4"
const projects = [
    {
      title: 'StarFall',
      description: 'This is an awesome project.',
      type: 'video',
      thumbnail: starFallVideo
    },
    {
      title: 'Svava',
      description: 'This is another awesome project.',
      type: 'video',
      thumbnail: SvavaVideo,
    },
    // Add more projects here
  ];
  
  export default projects;
  