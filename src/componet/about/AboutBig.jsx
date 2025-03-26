import { IoIosArrowRoundForward } from "react-icons/io";

function AboutBig() {
   return (
      <div className="bg-[#683292]  px-5">
         <div className="container mx-auto py-16 lg:py-24">

            {/* Responsive Flex/Grid Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-around gap-10">

               {/* Left Content */}
               <div className="text-white space-y-6 text-center lg:text-left relative max-w-lg">
                  <h3 className="text-[40px] sm:text-[64px] lg:text-[90px] font-family ">

                     
                  
                     Gelato Lovers’ <br /> Special!
                  </h3>
                  <p className="text-[18px] sm:text-[24px] lg:text-[30px]">
                     Buy One Sundae, Get One <b>50% Off!</b>
                  </p>

                  {/* Button & Code */}
                  <div className="flex flex-col sm:flex-row items-center gap-5">
                     <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-3xl text-white text-lg shadow-md hover:bg-[#e02d7e] transition">
                        Get This Deal <IoIosArrowRoundForward />
                     </button>
                     
                  </div>

                  {/* Decorative Image */}
                  <img className="absolute top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-16 sm:w-28"
                     src="/Figure → special-doted.png.png" alt="Decoration" />
               </div>

               {/* Right Image */}
               <div className="max-w-xs sm:max-w-md lg:max-w-lg">
                  <img className="w-full" src="/Image (2).png" alt="Summer Special Ice Cream" />
               </div>

            </div>

         </div>
      </div>
   );
}

export default AboutBig;
