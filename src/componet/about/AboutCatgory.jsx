import { IoIosArrowRoundForward } from "react-icons/io";


function AboutCatgory() {
   return (
      <>
   
         <div className="bg-white py-32 px-5 ">
         <div className="container mx-auto">
            <h2 className="text-center font-family text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
                        Find Your Perfect  <span className="text-primary">Gelato</span>
            </h2>
            <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
                  Browse through our different gelato offerings to find your favorite.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
               {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-full max-w-[350px] mx-auto h-[420px] sm:h-[458px] relative">
                     <img className="w-full h-full object-cover rounded-xl" src="/categories-image4.jpg.png" alt="Ice Cream Cones" />
                     <div className="absolute bottom-2 left-2 right-2 p-2 flex items-center justify-between">
                        <div className="bg-white shadow-lg py-2 px-5 rounded-xl flex items-center justify-between w-full">
                           <span className="font-fam text-[14px] sm:text-[16px]">Ice Cream Cones</span>
                           <button className="w-[40px] sm:w-[46px] h-[40px] sm:h-[46px] flex items-center justify-center bg-primary text-white rounded-full">
                              <IoIosArrowRoundForward />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
         
      </>
   );
}

export default AboutCatgory;