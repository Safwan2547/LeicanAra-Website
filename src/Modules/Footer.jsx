import React,{useState,useEffect} from 'react';

function Footer(){



    return(

        <footer className="flex relative justify-between items-center alig bg-MainBeige w-screen h-[30vh] cursor-none footerC ">
            <div>
            <button className='text-lg text-NightFall cursor-none'>Instagram</button>
            </div>
            <div  className='flex flex-col w-full pb-10
            footerC justify-center items-center absolute top-[80%] align-bottom h-30  '>
                
                <p className="text-NightFall font-Lora text-sm">Designed and Developed by LeicanAra</p>
                <p className="text-NightFall font-Lora  text-sm">All rights reserved</p>
            </div>
            
            


        </footer>



    );




}
export default Footer;