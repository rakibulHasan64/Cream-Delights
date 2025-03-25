import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
   return (
      <div className="bg-[#FFFFFF] relative overflow-hidden">
         <div className="container mx-auto py-20 px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative">

               
               <div className="relative flex justify-center">
                  <img className="w-72 md:w-96 lg:w-[500px]" src="/relive-image.png.png" alt="Ice Cream" />
                  <img className="absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-56 lg:w-72" src="/Figure → relive-circle.png.png" alt="Circle" />
               </div>

               
               <div className="text-center lg:text-left space-y-6">
                  <h1 className="text-[42px] md:text-[60px] font-family leading-tight">
                     Relive the Sweet<br /> Memories of Classic<br />
                     <span className="text-primary">Ice Creams</span>
                  </h1>

                  <p className="text-[18px] md:text-[22px] font-fam">
                     From rich chocolate fudge to creamy vanilla sundaes,<br className="hidden md:block" />
                     discover our menu of classic ice cream creations.
                  </p>

                  <button className="flex mx-auto lg:mx-0 text-md items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-4xl text-white">
                     Explore Our Menu <IoIosArrowRoundForward />
                  </button>
               </div>

            </div>

         
            <img className="absolute right-10 top-20 w-16 md:w-24 lg:w-32" src="/public/Figure → relive-triangle.png.png" alt="Triangle" />
            <img className="absolute right-10 bottom-10 w-20 md:w-32 lg:w-40" src="/Figure → relive-rightbottomimage.png.png" alt="Bottom Image" />

         </div>
      </div>
   );
}

export default Hero;
