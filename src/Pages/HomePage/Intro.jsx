import React from "react";
import { useEffect } from "react";
import { animate,spring,timeline } from "motion";
import videoFile from '../../Assets/LeicanAra website Intro v2.mp4';


function intro(){
    //Intro Animation
 
 

  return (
  <div className="z-200 scale-[50%]  border-none  object-cover  focus:outline-none outline-none hover:none  fixed flex overflow-hidden  hover:none justify-center align-middle intro-Back  w-screen h-screen bg-white">
    <video className=" overflow-clip line-clamp-none " autoPlay muted  width=" ">
        <source src={videoFile} type="video/mp4" />
      </video>
  </div>);
  
}
export default intro;