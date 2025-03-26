import { IoIosArrowRoundForward } from "react-icons/io";

function Summer() {
   return (
      <div className="bg-[#683292] relative overflow-hidden">
         <div className="container mx-auto py-16 px-5">
            <div className="flex flex-col lg:flex-row items-center justify-around gap-10">

               
               <div className="text-white space-y-6 text-center lg:text-left relative max-w-lg">
                  <h3 className="text-[48px] sm:text-[64px] lg:text-[112px] font-bold leading-tight">
                     Summer <br /> Special!
                  </h3>
                  <p className="text-[20px] sm:text-[24px] lg:text-[30px]">Buy One Sundae, Get One 50% Off!</p>

                  <div className="flex flex-col sm:flex-row items-center gap-5">
                     <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-3xl text-white text-lg">
                        Get This Deal <IoIosArrowRoundForward />
                     </button>
                     <p className="text-[16px]">Use code: <b>SUMMER50</b> at checkout.</p>
                  </div>

                  <img className="absolute top-14 left-0 -translate-11 w-20 sm:w-28" src="/public/Figure → special-doted.png.png" alt="" />
               </div>

               
               <div className="flex justify-center w-full lg:w-1/2 relative">
                  <img src="/Image (1).png" alt="Summer Offer" className="w-full max-w-sm lg:max-w-full object-contain" />

                  <img className="absolute w-[250px] sm:w-[300px] top-10 sm:top-16" src="/Figure → special-image.png.png" alt="" />
                  <img className="w-[180px] sm:w-[266px] absolute left -top-5 sm:-translate-x-32 z-40" src="/public/Figure → special-dotedarrow.png.png" alt="" />

                  <div className="w-[100px] sm:w-[138px] h-[100px] sm:h-[138px] absolute -left-10 md:-translate-x-44 lg:translate-x-34 lg:top-11 top-16 bg-[#F69C0C] rounded-full flex items-center justify-center text-white">
                     <div className="flex flex-col items-center justify-center">
                        <h3 className="text-xl sm:text-3xl font-fam">50%</h3>
                        <p className="font-fam text-white text-sm sm:text-base">OFF</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <img className="absolute right-1 top-52 w-28 sm:w-40" src="/special-rightimage.png.png" alt="" />
      </div>
   );
}

export default Summer;
