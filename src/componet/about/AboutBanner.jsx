import { IoIosArrowRoundForward } from "react-icons/io";

function AboutBanner() {
   return (
      <div className="bg-[#C23E82] relative flex justify-center items-center hidden lg:block  overflow-hidden">

         {/* Background Image */}
         <div className="flex flex-col items-center">
            <img className="w-full object-cover" src="/Section (2).png" alt="Background" />

            {/* Center Content */}
            <div className="w-full max-w-[690px] h-[720px] absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white shadow-lg p-5 md:p-10">

               <div className="flex flex-col justify-center items-center gap-5 text-center">
                  <h3 className="text-[40px] md:text-[70px] lg:text-[100px] leading-tight font-family">
                     Artisan<br />
                     <span className="text-primary">Gelato</span> Shop
                  </h3>
                  <p className="text-[16px] md:text-[20px] lg:text-[22px] font-semibold">
                     Experience the rich, creamy flavors of our artisan<br />
                     gelato creations.
                  </p>

                  <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-full text-white text-md shadow-md hover:bg-[#e02d7e] transition">
                     Discover Our Gelato Flavors <IoIosArrowRoundForward />
                  </button>
               </div>
            </div>

         </div>
         
         

      </div>
   );
}

export default AboutBanner;
