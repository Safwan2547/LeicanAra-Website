import React from "react";
import { useEffect } from "react";
import { animate,spring,timeline } from "motion";
import videoFile from '../../Assets/LeicanAra Intro Desktop_1.mp4';


function intro(){
    //Intro Animation
 
 

  return (
  <div className="flex justify-center align-middle intro-Back absolute w-screen h-screen bg-black">
    <video autoPlay muted  width="1000">
        <source src={videoFile} type="video/mp4" />
      </video>
  </div>);
  
}
export default intro;