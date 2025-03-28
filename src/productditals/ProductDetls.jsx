import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function ProductDetls() {
   const [quantity, setQuantity] = useState(1);

   // Function to decrease quantity
   const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1); // Prevent negative values
   };

   // Function to increase quantity
   const increaseQuantity = () => {
      setQuantity(quantity + 1);
   };

   return (
      <>
         <div className="bg-white">
            <div className="max-w-5xl mx-auto overflow-hidden p-6 py-12 sm:py-16 md:py-20 lg:py-24">
               <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">

                  {/* Image Gallery */}
                  <div className="w-full md:w-1/4 flex flex-col items-center gap-6">
                     <div className="p-4 rounded-2xl bg-[#FFFAF4]">
                        <img
                           src="/Figure → product1-image1.jpg.png"
                           alt="Product Image 1"
                           className="w-full rounded-2xl"
                        />
                     </div>

                     <div className="p-4 rounded-2xl bg-[#FFFAF4]">
                        <img
                           src="/Item → Tab (1).png"
                           alt="Product Image 2"
                           className="w-full rounded-2xl"
                        />
                     </div>

                     <div className="p-4 rounded-2xl bg-[#FFFAF4]">
                        <img
                           src="/Item → Tab.png"
                           alt="Product Image 3"
                           className="w-full rounded-2xl"
                        />
                     </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-stretch gap-8 w-full">
                     {/* Product Image */}
                     <div className="flex justify-center items-center md:w-1/2 bg-[#FFFAF4]">
                        <img
                           src="/Figure → product1-image1.jpg.png"
                           alt="Smartwatch"
                           className="h-full md:h-auto object-cover rounded-lg"
                        />
                     </div>

                     {/* Product Info */}
                     <div className="p-6 md:p-8 flex flex-col justify-between md:w-1/2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                           Classic Vanilla Ice Cream
                        </h1>
                        <div className="flex items-center mt-2">
                           <div className="text-yellow-400">★★★★☆</div>
                           <span className="ml-2 text-sm text-gray-600">(2 Reviews)</span>
                        </div>
                        <div className="mt-4">
                           <span className="text-gray-400 line-through text-lg">$99.00</span>
                           <span className="text-purple-600 text-2xl font-bold">$79.00</span>
                        </div>
                        <p className="mt-4 text-gray-600 text-sm">
                           I must explain to you how all this mistaken idea of denouncing pleasure
                           and praising pain was born and I will give you a complete account of the system.
                        </p>

                        {/* Band Color */}
                        <div className="mt-4">
                           <span className="text-sm font-semibold text-gray-700">Band Color</span>
                           <div className="flex items-center mt-1 space-x-2">
                              <button className="w-6 h-6 rounded-full bg-purple-500 border-2 border-purple-600"></button>
                              <button className="w-6 h-6 rounded-full bg-teal-500 border-2 border-gray-300"></button>
                              <button className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-gray-300"></button>
                              <button className="w-6 h-6 rounded-full bg-gray-700 border-2 border-gray-300"></button>
                           </div>
                        </div>

                        {/* Wrist Size */}
                        <div className="mt-4">
                           <span className="text-sm font-semibold text-gray-700">Wrist Size</span>
                           <div className="grid grid-cols-4 gap-2 mt-2">
                              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">S</button>
                              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">M</button>
                              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">L</button>
                              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">XL</button>
                           </div>
                        </div>

                        {/* Add to Cart & Quantity */}
                        <div className="mt-6 flex flex-wrap space-y-2 items-center space-x-4">
                           <button className="px-6 py-3 bg-primary shadow-primary text-white rounded-full shadow-2xl hover:bg-blue-700">
                              Add to Cart
                           </button>

                           {/* Quantity Update Buttons with Icons */}
                           <div className="border-2 border-gray-300 rounded-full gap-4 flex items-center px-4">
                              {/* Decrease Button */}
                              <button
                                 className="text-purple-600 hover:text-purple-700 p-3 rounded-full"
                                 onClick={decreaseQuantity}
                              >
                                 <FaMinus />
                              </button>

                              {/* Quantity */}
                              <p className="text-xl">{quantity}</p>

                              {/* Increase Button */}
                              <button
                                 className="text-purple-600 hover:text-purple-700 p-3 rounded-full"
                                 onClick={increaseQuantity}
                              >
                                 <FaPlus />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default ProductDetls;
