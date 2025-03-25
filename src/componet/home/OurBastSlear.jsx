import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

function OurBestSeller() {
   return (
      <div className="bg-white ">
         <div className="container mx-auto py-20 px-5 mb-16">
            <h3 className="text-[36px] sm:text-[48px] md:text-[60px] text-center font-family">
               Our <span className="text-primary">Best</span> Sellers
            </h3>
            <p className="text-center font-fam text-[16px] sm:text-[18px] max-w-2xl mx-auto">
               Discover the favorites that keep our customers coming back for more.
            </p>

            {/* Grid container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
               {[...Array(4)].map((_, index) => (
                  <div
                     key={index}
                     className="shadow-lg rounded-2xl p-4"
                     style={{
                        background: "linear-gradient(45deg, #EAF8F9, #F8EAE1, #F5F9FC, #EFD7EF)",
                     }}
                  >
                     <div className="rounded-xl relative p-4">
                        <img
                           className="p-3 mx-auto w-[200px] h-[220px] object-cover"
                           src="/screencapture-localhost-5175-2025-01-08-15_53_29.png"
                           alt=""
                        />
                        <button className="absolute top-2 right-2 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center shadow">
                           <IoMdHeartEmpty />
                        </button>
                     </div>

                     <div>
                        <div className="flex items-center justify-between gap-4 py-3">
                           <h1 className="font-fam text-[18px] sm:text-[20px]">
                              Chocolate Cookie Cone
                           </h1>
                           <span className="font-semibold text-sm sm:text-base">⭐4.9/5</span>
                        </div>

                        <p className="text-[14px] sm:text-[16px] font-semibold text-gray-500">
                           Chocolate chip cookie dough ice cream in a cone.
                        </p>

                        <div className="flex items-center justify-between mt-4">
                           <h3 className="font-fam text-[18px] sm:text-[20px] text-primary">$5.69</h3>
                           <button className="w-[40px] sm:w-[46px] h-[40px] sm:h-[46px] flex items-center justify-center text-xl rounded-full text-white bg-[#683292]">
                              <RiShoppingCartLine />
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
       </div>
   );
}

export default OurBestSeller;
