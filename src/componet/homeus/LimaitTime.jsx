import { IoIosArrowRoundForward } from "react-icons/io";

function LimitedTime() {
   return (
      <div className="bg-[#F83D8E] py-16 px-6">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-center lg:text-left">

               {/* Left Image */}
               <div className="flex justify-center">
                  <img src="/Figure → limited-leftimage.png.png" alt="Limited Offer" className="max-w-xs md:max-w-sm" />
               </div>

               {/* Center Content */}
               <div className="flex flex-col gap-6 items-center lg:items-center relative">
                  <h2 className="text-[50px] md:text-[70px] lg:text-[90px] leading-tight text-center text-white font-bold">
                     Limited<br />
                     Time Offer!
                  </h2>

                  <p className="text-lg md:text-2xl">
                     Get <span className="text-yellow-400">20% Off</span> All Vegan Ice Creams!
                  </p>

                  <button className="flex items-center gap-3 px-6 py-3 bg-[#683292] rounded-full text-white text-lg">
                     Get This Deal <IoIosArrowRoundForward />
                  </button>

                  <img className="absolute -top-8 left-0 w-16 md:w-24" src="/Figure → special-doted.png.png" alt="Dots" />

                  <p className="text-white text-sm md:text-md">Use code: <b>VEGAN20</b> at checkout.</p>
               </div>

               {/* Right Image */}
               <div className="flex justify-center">
                  <img src="/Figure → limited-rightimage.png.png" alt="Right Offer" className="max-w-xs md:max-w-sm" />
               </div>

            </div>
         </div>
      </div>
   );
}

export default LimitedTime;
