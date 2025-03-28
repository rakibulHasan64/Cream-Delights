import { IoIosArrowRoundForward } from "react-icons/io";


function TwoRelated() {
   return (
      <>

         <div className="bg-white">
            <div className="container mx-auto py-20">
               <h1 className="text-[42px] md:text-[60px] text-center font-family leading-tight">
                  Related
                  <span className="text-primary"> Products</span> Flavors
               </h1>

               <p className="text-[18px] text-center md:text-[16px] font-semibold mt-5">
                  Choose from some of related products
               </p>
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

                     <img src="/vegan-image3.jpg.png" alt="Almond Joy Sundae" className="w-full  object-cover " />
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

export default TwoRelated;