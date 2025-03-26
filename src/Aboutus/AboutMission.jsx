import { IoIosArrowRoundForward } from "react-icons/io";

function AboutMission() {
   return (
      <>
         <div className="bg-[#683292]">
            <div className="container mx-auto py-10 px-4">
               <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                  {/* Text Section */}
                  <div className="text-center md:text-left md:w-1/2">
                     <h2 className="text-[40px] sm:text-[50px] md:text-[60px] font-family leading-tight text-white">
                        Our Mission is to<br />
                        Create Moments
                     </h2>
                     <p className="text-base sm:text-lg md:text-xl text-white mt-4">
                        We strive to foster a welcoming and joyful environment<br />
                        where customers of all ages can gather, celebrate, and<br />
                        make lasting memories. Our commitment extends beyond<br />
                        serving great ice cream.
                     </p>

                     <div className="mt-6 flex justify-center md:justify-start">
                        <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-4xl text-white text-md hover:bg-[#F63D7C] transition-colors duration-300">
                           Read More <IoIosArrowRoundForward />
                        </button>
                     </div>
                  </div>

                  {/* Image Section */}
                  <div className="md:w-1/2 flex justify-center">
                     <img src="/Image (3).png" alt="Mission Image" className="w-full max-w-[560px] h-auto" />
                  </div>

               </div>
            </div>
         </div>
      </>
   );
}

export default AboutMission;
