import React from "react";
import { useState } from "react";
import { IoIosArrowRoundForward, IoIosSearch, IoMdClose, IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { TbLayoutGridFilled } from "react-icons/tb";
import { TfiLayoutGrid3 } from "react-icons/tfi";


function ShoupLayoutThrees() {

   const [gridCols, setGridCols] = useState(3);
   const [showSidebar, setShowSidebar] = useState(false);
   return (
      <>

         <div className="bg-white">
            <div className="container mx-auto py-20">
               <div className="flex flex-col gap-5 md:flex-row items-center justify-between p-4 rounded-lg">
                  <div className="flex  items-center gap-3 px-4 py-2 border rounded-full bg-white w-72">
                     <IoIosSearch className="text-gray-500 text-xl" />
                     <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none bg-transparent w-full text-gray-700"
                     />
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                     <TfiLayoutGrid3
                        className={`text-2xl cursor-pointer transition ${gridCols === 3 ? "text-blue-500" : "hover:text-blue-500"}`}
                        onClick={() => setGridCols(3)}
                     />
                     <TbLayoutGridFilled
                        className={`text-2xl cursor-pointer transition ${gridCols === 4 ? "text-blue-500" : "hover:text-blue-500"}`}
                        onClick={() => setGridCols(4)}
                     />
                  </div>
                  <button
                     className="md:hidden px-4 py-2 bg-blue-500 text-white rounded-full"
                     onClick={() => setShowSidebar(true)}
                  >
                     Filter
                  </button>
               </div>

               <div className="grid grid-cols-12 gap-5 py-12">
                  <div className={`fixed md:relative md:col-span-3 bg-white p-6 transition-transform ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block top-0 left-0 w-64 h-full md:h-auto shadow-lg md:shadow-none z-50`}>
                     <button
                        className="md:hidden absolute top-4 right-4 text-xl"
                        onClick={() => setShowSidebar(false)}
                     >
                        <IoMdClose />
                     </button>
                     

                     <div className="col-span-3 ">

                        <div className="">
                           <h3 className="text-[22px] font-family">Categories</h3>

                           <div className="py-7">
                              <ul className="flex flex-col justify-start items-start gap-5 ">
                                 <li className="text-gray-500 text-[14px] font-semibold flex items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    Canned Ice Cream(3)
                                 </li>

                                 <li className="text-gray-500 text-[14px] font-semibold flex items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    Frozen Yogurt(5)
                                 </li>

                                 <li className="text-gray-500 text-[14px] font-semibold flex items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    Ice Cream Cakes(3)
                                 </li>


                                 <li className="text-gray-500 text-[14px] font-semibold flex items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    Milkshakes(6)
                                 </li>



                                 <li className="text-gray-500 text-[14px] font-semibold flex items-center gap-4">
                                    <input type="checkbox" name="" id="" />
                                    Popsicles(4)
                                 </li>


                              </ul>

                              <div className="border-t-blue-300">
                                 <h3 className="text-[22px] font-family py-8">Filter by Price</h3>

                                 <div className="py-9">
                                    <p className="text-[22px]  ">Range: 5$ - 50$</p>
                                    <p className="border-b-1 border-gray-400 mt-5"></p>
                                 </div>

                                 <div className="flex flex-col gap-6">
                                    <h3 className="text-[22px] font-family mt-6 mb-4">Featured Products</h3>


                                    <div className="flex items-center gap-5">
                                       <div className="w-[66px] h-[66px] rounded-full flex items-center justify-center bg-[#F8EBE4]">

                                          <img className="mx-auto " src="/shop1-image1.png.png" alt="" />

                                       </div>

                                       <div className="">
                                          <h3 className="text-[20px] font-bold">Rocky Road</h3>

                                          <div className="flex items-center gap-4">
                                             <p className="text-[16px] font-fam line-through text-gray-500">$9.80</p>
                                             <p className="text-primary text-[16px] font-fam font-semibold">$3.99</p>
                                          </div>


                                       </div>
                                    </div>



                                    <div className="flex items-center gap-5">
                                       <div className="w-[66px] h-[66px] rounded-full  flex items-center justify-center bg-[#F8EBE4]">

                                          <img className="mx-auto rounded-2xl " src="/shop3-image1.png.png" alt="" />

                                       </div>

                                       <div className="">
                                          <h3 className="text-[20px] font-bold">Rocky Road</h3>

                                          <div className="flex items-center gap-4">
                                             <p className="text-[16px] font-fam line-through text-gray-500">$9.80</p>
                                             <p className="text-primary text-[16px] font-fam font-semibold">$3.99</p>
                                          </div>


                                       </div>
                                    </div>



                                    <div className="flex items-center gap-5">
                                       <div className="w-[66px] h-[66px] rounded-full  flex items-center justify-center bg-[#F8EBE4]">

                                          <img className="mx-auto rounded-2xl" src="/shop3-image4.png.png" alt="" />

                                       </div>

                                       <div className="">
                                          <h3 className="text-[20px] font-bold">Rocky Road</h3>

                                          <div className="flex items-center gap-4">
                                             <p className="text-[16px] font-fam line-through text-gray-500">$9.80</p>
                                             <p className="text-primary text-[16px] font-fam font-semibold">$3.99</p>
                                          </div>


                                       </div>
                                    </div>


                                    <div className="flex items-center gap-5">
                                       <div className="w-[66px] h-[66px] rounded-full  flex items-center justify-center bg-[#F8EBE4]">

                                          <img className="mx-auto " src="/shop1-image1.png.png" alt="" />

                                       </div>

                                       <div className="">
                                          <h3 className="text-[20px] font-bold">Rocky Road</h3>

                                          <div className="flex items-center gap-4">
                                             <p className="text-[16px] font-fam line-through text-gray-500">$9.80</p>
                                             <p className="text-primary text-[16px] font-fam font-semibold">$3.99</p>
                                          </div>


                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className={`col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} lg:grid-cols-${gridCols} gap-6 mt-10 p-3 md:p-1`}>
                     {[...Array(6)].map((_, index) => (
                        <div
                           key={index}
                           className=" rounded-2xl p-4 "
                        >
                           <div className="flex flex-col items-center  p-5 ransition">

                              {/* Image Wrapper */}
                              <div className="w-[200px] h-[200px] sm:w-[254px] sm:h-[254px] mx-auto flex items-end justify-center bg-[#F1FEFE] rounded-full overflow-hidden shadow-md">
                                 <img className=" object-cover" src="/popular-image1.png.png" alt="Strawberry Balsamic Gelato" />
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
                     ))}
                  </div>
               </div>
            </div>
         </div>

      </>
   );
}

export default ShoupLayoutThrees;