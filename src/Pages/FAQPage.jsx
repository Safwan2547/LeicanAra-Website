import React,{useState,useEffect} from 'react';
function FAQPage() {
    const [isMounted1, setIsMounted1] = useState(false);
    const [isMounted2, setIsMounted2] = useState(false);


    useEffect(() => {
        const timer1 = setTimeout(() => setIsMounted1(true), 500);
        const timer2 = setTimeout(() => setIsMounted2(true), 1000);
         return () => {
           clearTimeout(timer1);
           clearTimeout(timer2);
         };
       }, []);
return(
    <div className=" bg-MainBeige cursor-none">
      

    <div className={`w-full transition-opacity ease-elastic duration-1000 ${isMounted1 ? 'opacity-100' : 'opacity-0'} flex justify-center align-middle items-start flex-col sm:p-[10%]  mt-[35%] sm:mt-[0] prose sm:prose-xl mb-[10%]`}>
        <p className=" textC sm:hover:text-LunarTwilight text-Black transition duration-200 text-left font-Satoshi text-7xl sm:text-9xl font-bold">
          FAQs
        </p>
        <div className={`transition-opacity ease-elastic duration-1000 ${isMounted2 ? 'opacity-100' : 'opacity-0'} flex flex-col flex-wrap sm:w-full w-full mt-20 justify-between items-start space-y-20`}>
            <div className="">
        <h3 className="faq-h3 textP">Hello! Are you a big company?</h3>
        <p className="faq-P textP">Nope! We are a small design studio!
             Our size lets us create personalized, 
             innovative design solutions while fostering strong relationships with our clients. 
             They love it, and we think you will, too!</p>
             </div>

             <div>
             <h3 className='faq-h3 textCS'>What is your design process?</h3>
             <p className='faq-P'>At LeicanAra, we initiate a journey, where each step is crucial. It begins with understanding your brand, 
                followed by conceptualization, design, and refinement, 
                all while weaving your story into the design.</p>
                </div>

                <div>
             <h3 className='faq-h3'>Do you offer post-project support?</h3>
             <p className='faq-P'>Our commitment doesn't end with the delivery of a project. We are always available 
                for support and to help your story continue to unfold beautifully in its next chapters.</p>
                </div>

                <div>
             <h3 className='faq-h3'>How do you ensure the designs align with our brand?</h3>
             <p className='faq-P'>Your brand's essence is our North Star. We consistently ensure our designs 
                    mirror your brand's identity, maintaining a cohesive narrative that echoes with authenticity.</p>
                </div>

                <div>
             <h3 className='faq-h3'>Will we have all the rights to the design after the project is complete?</h3>
             <p className='faq-P'>Indeed! Once the project reaches completion and all dues are settled, 
                    every creative element we designed for you is fully yours to use as you please.</p>
                </div>
                <div>
             <h3 className='faq-h3'>How do I get started?</h3>
             <p className='faq-P'>Embarking on this journey with us is simple.
                Just drop us an email (info@LeicanAra.com),
                 and we promise to reach out to you at the earliest!</p>
                </div>

        </div>
      </div>
     
      </div>

);




}
export default FAQPage