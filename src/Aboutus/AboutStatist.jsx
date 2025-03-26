import React from 'react';
import { GoPlus } from 'react-icons/go';

function AboutStatist() {
   return (
      <>
         <div className="bg-white">
            <div className="container mx-auto py-28">
               <h3 className="text-center text-[60px] font-family">Our Popular <span className="text-primary ">  Our </span> Statistics</h3>
         

               <p className="text-gray-500 text-center font-semibold">What makes us special through our impressive statistics.</p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-14 mt-6 p-2 ">

                  <div className="py-20  bg-white shadow-2xl border-b-4 border-b-primary rounded-2xl">
                     <div className="flex items-center justify-center">
                        <h3 className='text-[44px] font-family text-center'>91</h3>
                        <span className='text-[20px]'><GoPlus /></span>
                     </div>

                     <p className='text-center text-[16px] font-semibold text-gray-500'>Awards Win</p>
                  </div>



                  <div className="py-20  bg-white shadow-2xl border-b-4 border-b-primary rounded-2xl">
                     <div className="flex items-center justify-center">
                        <h3 className='text-[44px] font-family text-center'>143</h3>
                        <span className='text-[20px]'><GoPlus /></span>
                     </div>

                     <p className='text-center text-[16px] font-semibold text-gray-500'> Employees Working</p>
                  </div>



                  <div className="py-20  bg-white shadow-2xl border-b-4 border-b-primary rounded-2xl">
                     <div className="flex items-center justify-center">
                        <h3 className='text-[44px] font-family text-center'>95</h3>
                        <span className='text-[20px]'><GoPlus /></span>
                     </div>

                     <p className='text-center text-[16px] font-semibold text-gray-500'>Satisified Clients</p>
                  </div>



                  <div className="py-20  bg-white shadow-2xl border-b-4 border-b-primary rounded-2xl">
                     <div className="flex items-center justify-center">
                        <h3 className='text-[44px] font-family text-center'>4</h3>
                        <span className='text-[20px]'><GoPlus /></span>
                     </div>

                     <p className='text-center text-[16px] font-semibold text-gray-500'>Years of Experience</p>
                  </div>



               

               </div>

            </div>
         </div>
         
      </>
   );
}

export default AboutStatist;