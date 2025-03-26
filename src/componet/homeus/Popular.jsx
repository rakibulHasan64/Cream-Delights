import { IoIosArrowRoundForward } from "react-icons/io";


function Popular() {
   return (
      <>
         
         <div className="bg-[#ffff]">
            <div className="container mx-auto py-32">
               <h3 className="text-center text-[60px] font-family">Our Popular <span className="text-primary ">Vegan </span>Treats</h3>

               <p className="text-gray-500 text-center font-semibold">Check out our favorite vegan ice cream flavors.</p>

               <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 mt-14">
                  <div className=" p-4 text-center ">
                     
                     <img src="/vegan-image2.jpg.png" alt="Almond Joy Sundae" className="w-full  object-cover " />
                     <div className="mt-6 p-4">
                        <h3 className="text-[20px] font-semibold">Almond Joy Sundae</h3>
                        <p className="text-[14px] font-bold text-gray-600">⭐⭐⭐⭐⭐ (4.9/5)</p>
                        <p className="text-[22px] text-primary font-semibold">$4.89</p>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white mx-auto mt-3">
                           Add to Cart <IoIosArrowRoundForward />
                        </button>
                     </div>
                  </div>



                  <div className=" p-4 text-center">

                     <img src="/public/vegan-image3.jpg.png" alt="Almond Joy Sundae" className="w-full  object-cover " />
                     <div className="mt-6 p-4">
                        <h3 className="text-[20px] font-semibold">Almond Joy Sundae</h3>
                        <p className="text-[14px] font-bold text-gray-600">⭐⭐⭐⭐⭐ (4.9/5)</p>
                        <p className="text-[22px] text-primary font-semibold">$4.89</p>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white mx-auto mt-3">
                           Add to Cart <IoIosArrowRoundForward />
                        </button>
                     </div>
                  </div>



                  <div className=" p-4 text-center">

                     <img src="/vegan-image1.jpg.png" alt="Almond Joy Sundae" className="w-full   " />
                     <div className="p-4 mt-6">
                        <h3 className="text-[20px] font-semibold">Almond Joy Sundae</h3>
                        <p className="text-[14px] font-bold text-gray-600">⭐⭐⭐⭐⭐ (4.9/5)</p>
                        <p className="text-[22px] text-primary font-semibold">$4.89</p>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white mx-auto mt-3">
                           Add to Cart <IoIosArrowRoundForward />
                        </button>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         
      </>
   );
}

export default Popular;