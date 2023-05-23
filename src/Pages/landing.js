import React from 'react';
function LandingPage() {
    return (
      <div className=" bg-MainBeige cursor-none">
      <div className="pointer-events: none flex justify-center items-center h-screen prose lg:prose-xl ">
          <p className=" textC hover:text-red-400 text-Black transition duration-200 text-left font-Satoshi text-9xl font-bold">
            Branding Meets Soul
          </p>
        </div>
        <div className="  items-center  pointer-events: none h-screen w-screen flex lg:prose-xl text-left ">
          <h2 className=" textC max-h-20 text-6xl font-Lora font-medium w-96">We are an innovative,independent design studio based in
          Halifax</h2>
        </div>
        </div>
    );
    
  }

export default LandingPage;