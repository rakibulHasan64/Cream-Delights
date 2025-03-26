import { IoIosArrowRoundForward } from "react-icons/io";


function OurArtisan() {
   return (
      <>

         <div className="">
            <div className="container mx-auto py-16">
               <h1 className="text-[42px] md:text-[60px] text-center font-family leading-tight">
                  Our Memories of Classic
                  <span className="text-primary">Artisan Gelato</span>
               </h1>

               <p className="text-[18px] text-center md:text-[16px] font-semibold mt-5">
                  Check out our selection of artisanal gelato flavors.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">

                  {/* Card */}
                  <div className="flex flex-col items-center  p-5 ransition">

                     {/* Image Wrapper */}
                     <div className="w-[200px] h-[200px] sm:w-[254px] sm:h-[254px] mx-auto flex items-end justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img className=" object-cover" src="/flover-image4.png.png" alt="Strawberry Balsamic Gelato" />
                     </div>

                     {/* Content */}
                     <div className="flex flex-col items-center gap-3 mt-6">
                        <h4 className="text-lg font-semibold text-gray-700">⭐ 4.9/5</h4>
                        <h1 className="text-[18px] sm:text-[20px] font-semibold text-center">
                           Strawberry <br className="hidden sm:block" />
                           Balsamic Gelato
                        </h1>
                        <p className="text-lg font-bold text-primary">$6.49</p>

                        {/* Button */}
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white shadow-md hover:bg-[#e02d7e] transition">
                           Add to Cart <IoIosArrowRoundForward />
                        </button>
                     </div>

                  </div>



                  <div className="flex flex-col items-center  p-5 ransition">

                     {/* Image Wrapper */}
                     <div className="w-[200px] h-[200px] sm:w-[254px] sm:h-[254px] mx-auto flex items-end justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img className=" object-cover" src="/public/flover-image2.png.png" alt="Strawberry Balsamic Gelato" />
                     </div>

                     {/* Content */}
                     <div className="flex flex-col items-center gap-3 mt-6">
                        <h4 className="text-lg font-semibold text-gray-700">⭐ 4.9/5</h4>
                        <h1 className="text-[18px] sm:text-[20px] font-semibold text-center">
                           Strawberry <br className="hidden sm:block" />
                           Balsamic Gelato
                        </h1>
                        <p className="text-lg font-bold text-primary">$6.49</p>

                        {/* Button */}
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white shadow-md hover:bg-[#e02d7e] transition">
                           Add to Cart <IoIosArrowRoundForward />
                        </button>
                     </div>

                  </div>





                  <div className="flex flex-col items-center  p-5 ransition">

                     {/* Image Wrapper */}
                     <div className="w-[200px] h-[200px] sm:w-[254px] sm:h-[254px] mx-auto flex items-end justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img className=" object-cover" src="/flover-image2.png.png" alt="Strawberry Balsamic Gelato" />
                     </div>

                     {/* Content */}
                     <div className="flex flex-col items-center gap-3 mt-6">
                        <h4 className="text-lg font-semibold text-gray-700">⭐ 4.9/5</h4>
                        <h1 className="text-[18px] sm:text-[20px] font-semibold text-center">
                           Strawberry <br className="hidden sm:block" />
                           Balsamic Gelato
                        </h1>
                        <p className="text-lg font-bold text-primary">$6.49</p>

                        {/* Button */}
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white shadow-md hover:bg-[#e02d7e] transition">
                           Add to Cart <IoIosArrowRoundForward />
                        </button>
                     </div>

                  </div>



                  <div className="flex flex-col items-center  p-5 ransition">

                     {/* Image Wrapper */}
                     <div className="w-[200px] h-[200px] sm:w-[254px] sm:h-[254px] mx-auto flex items-end justify-center bg-white rounded-full overflow-hidden shadow-md">
                        <img className=" object-cover" src="/flover-image4.png.png" alt="Strawberry Balsamic Gelato" />
                     </div>

                     {/* Content */}
                     <div className="flex flex-col items-center gap-3 mt-6">
                        <h4 className="text-lg font-semibold text-gray-700">⭐ 4.9/5</h4>
                        <h1 className="text-[18px] sm:text-[20px] font-semibold text-center">
                           Strawberry <br className="hidden sm:block" />
                           Balsamic Gelato
                        </h1>
                        <p className="text-lg font-bold text-primary">$6.49</p>

                        {/* Button */}
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F83D8E] rounded-full text-white shadow-md hover:bg-[#e02d7e] transition">
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

export default OurArtisan;