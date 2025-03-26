import { IoIosArrowRoundForward } from "react-icons/io";

function AboutHero() {
   return (
      <div className="bg-white py-32 px-5">
         <div className="container mx-auto">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

               {/* Left Image */}
               <div className="w-full max-w-[400px] lg:max-w-[500px]">
                  <img className="w-full" src="/art-image.png.png" alt="Gelato Art" />
               </div>

               {/* Right Content */}
               <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
                  <h3 className="text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-family">
                     Experience the<br />
                     Art of <span className="text-primary">Gelato</span>
                  </h3>
                  <p className="text-lg md:text-xl">Handcrafted Flavors with Fresh, Local Ingredients.</p>
                  <p className="text-lg md:text-xl">
                     Enjoy gelato made with the finest ingredients and <br className="hidden md:block" />
                     traditional techniques.
                  </p>

                  <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-full shadow-lg shadow-[#F83D8E] text-white text-md hover:bg-[#e02d7e] transition">
                     See Our Gelato Menu <IoIosArrowRoundForward />
                  </button>
               </div>

            </div>

         </div>
      </div>
   );
}

export default AboutHero;
