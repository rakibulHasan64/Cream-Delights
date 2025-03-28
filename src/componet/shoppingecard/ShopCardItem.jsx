import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

function ShopCardItem() {
   return (
      <div className="container mx-auto py-8 px-4">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-9 py-5 flex flex-col gap-4 p-5">
               {/* Product Card 1 */}
               <div className="border-b-1 border-gray-300 py-4">
                  <div className="flex items-center justify-between gap-7 py-5 border-b md:border-b-0">
                     <div className="flex items-center gap-4">
                        <div className="w-[93px] h-[93px] rounded-2xl bg-[#FFFAF4]">
                           <img className="mx-auto" src="/public/Figure → product1-image1.jpg.png" alt="Product" />
                        </div>
                        <div>
                           <h3 className="text-xl font-fam">Classic Vanilla</h3>
                           <p className="text-gray-500">Color: <span className="text-sm font-bold">White</span></p>
                           <p>Size: <span className="font-bold">L</span></p>
                        </div>
                     </div>
                     <p className="text-xl font-fam text-primary">$4.99</p>
                     <div className="border border-gray-300 rounded-full flex items-center px-4">
                        <button className="text-gray-500 text-sm p-3 rounded-full">
                           <FaMinus />
                        </button>
                        <p className="text-xl">1</p>
                        <button className="text-sm text-gray-500 p-3 rounded-full">
                           <FaPlus />
                        </button>
                     </div>
                     <p className="text-xl font-fam">$13.00</p>
                     <button className="w-[39px] h-[39px] border border-[#FF6565] rounded-full text-[#FF6565] flex items-center justify-center">
                        <FaTimes />
                     </button>
                  </div>
               </div>

               {/* Product Card 2 */}
               <div className="border-b-1 border-gray-300 py-4">
                  <div className="flex items-center justify-between gap-7 py-5 border-b md:border-b-0">
                     <div className="flex items-center gap-4">
                        <div className="w-[93px] h-[93px] rounded-2xl bg-[#FFFAF4]">
                           <img className="mx-auto" src="/public/Figure → product1-image1.jpg.png" alt="Product" />
                        </div>
                        <div>
                           <h3 className="text-xl font-fam">Classic Vanilla</h3>
                           <p className="text-gray-500">Color: <span className="text-sm font-bold">White</span></p>
                           <p>Size: <span className="font-bold">L</span></p>
                        </div>
                     </div>
                     <p className="text-xl font-fam text-primary">$4.99</p>
                     <div className="border border-gray-300 rounded-full flex items-center px-4">
                        <button className="text-gray-500 text-sm p-3 rounded-full">
                           <FaMinus />
                        </button>
                        <p className="text-xl">1</p>
                        <button className="text-sm text-gray-500 p-3 rounded-full">
                           <FaPlus />
                        </button>
                     </div>
                     <p className="text-xl font-fam">$13.00</p>
                     <button className="w-[39px] h-[39px] border border-[#FF6565] rounded-full text-[#FF6565] flex items-center justify-center">
                        <FaTimes />
                     </button>
                  </div>
               </div>

               {/* Product Card 3 */}
               <div className="border-b-1 border-gray-300 py-4">
                  <div className="flex items-center justify-between gap-7 py-5 border-b md:border-b-0">
                     <div className="flex items-center gap-4">
                        <div className="w-[93px] h-[93px] rounded-2xl bg-[#FFFAF4]">
                           <img className="mx-auto" src="/public/Figure → product1-image1.jpg.png" alt="Product" />
                        </div>
                        <div>
                           <h3 className="text-xl font-fam">Classic Vanilla</h3>
                           <p className="text-gray-500">Color: <span className="text-sm font-bold">White</span></p>
                           <p>Size: <span className="font-bold">L</span></p>
                        </div>
                     </div>
                     <p className="text-xl font-fam text-primary">$4.99</p>
                     <div className="border border-gray-300 rounded-full flex items-center px-4">
                        <button className="text-gray-500 text-sm p-3 rounded-full">
                           <FaMinus />
                        </button>
                        <p className="text-xl">1</p>
                        <button className="text-sm text-gray-500 p-3 rounded-full">
                           <FaPlus />
                        </button>
                     </div>
                     <p className="text-xl font-fam">$13.00</p>
                     <button className="w-[39px] h-[39px] border border-[#FF6565] rounded-full text-[#FF6565] flex items-center justify-center">
                        <FaTimes />
                     </button>
                  </div>
               </div>
            </div>

            {/* Sidebar (Order Summary) */}
            <div className="col-span-12 md:col-span-3 bg-white shadow-2xl border-t-2 rounded-2xl p-6">
               <h1 className="border-b-2 pb-5 text-[18px] font-fam text-center text-gray-800">Order Summary</h1>

               {/* Apply Coupons Section */}
               <div className="flex items-center justify-between py-4">
                  <h3 className="text-[14px] font-fam text-gray-700">Apply Coupons</h3>
                  <button className="py-2 px-5 bg-[#683292] rounded-full text-white font-bold hover:bg-[#54247C] transition duration-300 ease-in-out">Apply</button>
               </div>

               {/* Product Details */}
               <div className="mt-4 border-b-[2px] pb-4">
                  <h3 className="text-[14px] font-fam text-gray-700">Product Details:</h3>
                  <div className="mt-2">
                     <div className="flex items-center justify-between py-2">
                        <h3 className="font-semibold">Sub Total</h3>
                        <p className="font-bold text-gray-800">$63.99</p>
                     </div>
                     <div className="flex items-center justify-between py-2">
                        <h3 className="font-semibold">Shipping</h3>
                        <p className="font-bold text-gray-800">$0.00</p>
                     </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between py-2 border-t">
                     <h3 className="font-semibold text-lg">Grand Total</h3>
                     <p className="font-bold text-xl text-primary">$89.99</p>
                  </div>
               </div>

               {/* Proceed to Checkout Button */}
               <button className="py-3 bg-primary  shadow-2xl shadow-primary text-white rounded-full w-full mt-5 hover:bg-[#4B2578] transition duration-300 ease-in-out">
                  Proceed to checkout <MdKeyboardArrowRight className="inline-block ml-2" />
               </button>

               {/* Info Section */}
               <p className="mt-5 text-center text-gray-600 text-sm">
                  Safe and Secure Payments, Easy Returns. 100% Authentic Products
               </p>
            </div>

         </div>
      </div>
   );
}

export default ShopCardItem;
