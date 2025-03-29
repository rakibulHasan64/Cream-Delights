import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function ChakeOutMain() {

   const [cardNumber, setCardNumber] = useState("");
   return (
      <div className="bg-white">
         <div className="container mx-auto px-4 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
               {/* Billing Form */}
               <div className="md:col-span-8 lg:col-span-9">
                  <form className="space-y-4">
                     <h4 className="text-lg font-semibold">Billing Address:</h4>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label htmlFor="firstName">First Name</label>
                           <input id="firstName" className={inputField} type="text" />
                        </div>
                        <div>
                           <label htmlFor="lastName">Last Name</label>
                           <input id="lastName" className={inputField} type="text" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label htmlFor="email">Email</label>
                           <input id="email" className={inputField} type="email" />
                        </div>
                        <div>
                           <label htmlFor="phone">Phone Number</label>
                           <input id="phone" className={inputField} type="tel" />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <label htmlFor="country">Country</label>
                           <select id="country" className={inputField}>
                              <option value="">Select Country</option>
                              <option value="bd">Bangladesh</option>
                              <option value="us">United States</option>
                              <option value="uk">United Kingdom</option>
                           </select>
                        </div>
                        <div>
                           <label htmlFor="city">City</label>
                           <input id="city" className={inputField} type="text" />
                        </div>
                     </div>

                     <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input id="cardNumber" className={inputField} type="text" />
                     </div>


                     <div className="relative">
                        <label htmlFor="cardNumber" className="block mb-1">
                           Payment Method:
                        </label>
                        <div className="relative">
                           
                           <input
                              id="cardNumber"
                              type="text"
                              placeholder="Credit card"
                              className="w-full pl-12 pr-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                           />
                           <img
                              src="/public/checkout-cardimage.png.png"
                              alt="Card"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-[122px] h-[22px]"
                           />
                        </div>
                     </div>

                     <h4 className="text-lg font-semibold">Expiration Date</h4>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                           <label htmlFor="month">Month</label>
                           <select id="month" className={inputField}>
                              <option value="">Select Month</option>
                              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                                 <option key={index} value={month}>{month}</option>
                              ))}
                           </select>
                        </div>
                        <div>
                           <label htmlFor="year">Year</label>
                           <select id="year" className={inputField}>
                              <option value="">Select Year</option>
                              {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                 <option key={year} value={year}>{year}</option>
                              ))}
                           </select>
                        </div>
                        <div>
                           <label htmlFor="securityCode">Security Code</label>
                           <input id="securityCode" className={inputField} type="text" />
                        </div>
                     </div>

                     <p className="text-center py-4">By clicking the button, you agree to the <span className="text-primary">Terms and Conditions</span></p>
                     <button className={btnPrimary + " w-full "}>Place Order Now</button>
                  </form>
               </div>

               {/* Order Summary */}
               <div className="md:col-span-4 lg:col-span-3 bg-white shadow-lg border rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-gray-800 border-b pb-3">Order Summary</h2>
                  <div className="space-y-4 mt-4">
                     {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex justify-between border-b pb-3">
                           <div>
                              <h3 className="text-base font-semibold">3 x Classic Vanilla</h3>
                              <p className="text-sm text-gray-600">Creamy vanilla ice cream topped with cherry.</p>
                           </div>
                           <p className="text-base font-semibold">$13.00</p>
                        </div>
                     ))}
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4">
                     <h3>Grand Total</h3>
                     <p className="text-primary">$83.99</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChakeOutMain;

const inputField = "py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary";
const btnPrimary = "py-3 px-4 bg-primary text-white font-semibold rounded-full shadow-primary shadow-2xl hover:bg-opacity-90";
