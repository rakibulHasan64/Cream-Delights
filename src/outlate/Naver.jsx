import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { VscMenu, VscClose } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHome, FaBlog, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Naver() {
   const [open, setOpen] = useState(false);
   const [faqOpen, setFaqOpen] = useState(false); // State for dropdown
   const [blog, setBlog] = useState(false); 

   return (
      <>
         <div className="container mx-auto">
            <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-4">
               {/* Logo */}
               <div className="text-3xl font-bold flex items-center gap-2">
                  <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                  <h3 className="text-[32px] font-family"><span className="text-primary">Icy</span>Tales</h3>
               </div>

               {/* Desktop Menu */}
               <div className="hidden md:flex gap-6">
                  <Link to="/" className="text-lg hover:text-primary">Home</Link>
                  <Link to="/data" className="text-lg hover:text-primary">About Us</Link>
                  <Link to="/blog" className="text-lg hover:text-primary">Page</Link>

                  {/* Faq's Dropdown */}
                  <div className="relative">
                     <button
                        onClick={() => setFaqOpen(!faqOpen)}
                        className="text-lg hover:text-primary focus:outline-none"
                     >
                        Faq's ▾
                     </button>
                     {faqOpen && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-lg font-family shadow-md">
                           <li>
                              <Link
                                 to="/pageabout"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 About
                              </Link>
                           </li>

                           <li>
                              <Link
                                 to="/aboutTeam"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Team
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/review"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Review
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/shopLayoit"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Shop 1
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/shopLayout2"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Shop 2
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/shopLayouttree3"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Shop 3
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/productdetils"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Single Product 2
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/productdetilstwo"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Single Product 3
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/productdetilsthree"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Cart
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/ChakeOut"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Checkout
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/SpacileOffer"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Special Offers
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/errorpage"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 404
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/ComingSoon"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Coming Soon
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/privcey"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                   Privacy Policy
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/terms"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Terms & Conditions
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/Thank"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Thank You
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>


                      {/* blog dropdoune */}
                  <div className="relative">
                     <button
                        onClick={() => setBlog(!blog)}
                        className="text-lg hover:text-primary focus:outline-none"
                     >
                        blog ▾
                     </button>
                     {blog && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-lg font-family shadow-md">
                           <li>
                              <Link
                                 to="/allblog"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Blog
                              </Link>
                           </li>

                           

                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Single Blog
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/loadmore"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Load More
                              </Link>
                           </li>






                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 One Column
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Two Column
                              </Link>
                           </li>


                           

                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Three Column
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Four Column
                              </Link>
                           </li>




                           <li>
                              <Link
                                 to="/Thank"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Six Column
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>
               </div>

               {/* Right Icons */}
               <div className="hidden md:flex items-center gap-6 relative">
                  <LuSearch className="text-2xl cursor-pointer" />
                  <Link to={"/cart"}>
                     <div className="relative">
                        <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
                        <span className="absolute -top-1 -right-2 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#F83D8E] text-white text-xs">4</span>
                     </div>
                  </Link>

                  <button className="flex text-md items-center gap-3 px-4 py-2 bg-primary rounded-full text-white">
                     Contact Us <IoIosArrowRoundForward />
                  </button>
               </div>

               {/* Mobile Menu Button */}
               <button onClick={() => setOpen(true)} className="block md:hidden text-3xl">
                  <VscMenu />
               </button>
            </nav>

            {/* Sidebar for Mobile */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg z-50`}>
               <div className="p-4 flex justify-between items-center border-b border-gray-700">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <button onClick={() => setOpen(false)} className="text-2xl">
                     <VscClose />
                  </button>
               </div>

               {/* Sidebar Links */}
               <ul className="mt-4 space-y-6 px-6">
                  <Link to="/" className="flex items-center gap-3 text-lg hover:text-primary" onClick={() => setOpen(false)}>
                     <FaHome /> Home
                  </Link>
                  <Link to="/data" className="flex items-center gap-3 text-lg hover:text-primary" onClick={() => setOpen(false)}>
                     <IoIosArrowRoundForward /> About Us
                  </Link>
                  <Link to="/blog" className="flex items-center gap-3 text-lg hover:text-primary" onClick={() => setOpen(false)}>
                     <FaBlog /> Blog
                  </Link>

                  {/* Faq's Dropdown in Mobile */}
                  <div className="relative">
                     <button
                        onClick={() => setFaqOpen(!faqOpen)}
                        className="flex items-center gap-3 text-lg hover:text-primary w-full"
                     >
                        <FaQuestionCircle /> Faq's
                     </button>
                     {faqOpen && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-md">
                           <li>
                              <Link
                                 to="/pageabout"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 About
                              </Link>
                           </li>

                           <li>
                              <Link
                                 to="/aboutTeam"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Team
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/review"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Review
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/shopLayoit"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Shop 1
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/shopLayout2"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Shop 2
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/shopLayouttree3"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Shop 3
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/productdetils"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Single Product 2
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/productdetilstwo"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Single Product 3
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/productdetilsthree"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Cart
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/ChakeOut"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Checkout
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/SpacileOffer"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Special Offers
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/errorpage"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 404
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/ComingSoon"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Coming Soon
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/privcey"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Privacy Policy
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to="/terms"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Terms & Conditions
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/Thank"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Thank You
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>



                  <div className="relative">
                     <button
                        onClick={() => setBlog(!blog)}
                        className="text-lg hover:text-primary focus:outline-none"
                     >
                        blog ▾
                     </button>
                     {blog && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded-lg font-family shadow-md">
                           <li>
                              <Link
                                 to="/allblog"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Blog
                              </Link>
                           </li>



                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Single Blog
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/loadmore"
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Load More
                              </Link>
                           </li>






                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 One Column
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Two Column
                              </Link>
                           </li>




                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Three Column
                              </Link>
                           </li>


                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Four Column
                              </Link>
                           </li>




                           <li>
                              <Link
                                 to=""
                                 className="block px-4 py-2 text-gray-700 hover:bg-primary"
                              >
                                 Six Column
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>
               </ul>

               {/* Mobile Contact Section */}
               <div className="flex flex-col items-center gap-6 mt-8">
                  <LuSearch className="text-2xl cursor-pointer" />
               
                  <Link to={"/cart"}>
                     <div className="relative">
                        <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
                        <span className="absolute -top-1 -right-2 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#F83D8E] text-white text-xs">4</span>
                     </div>
                  </Link>

                  <button className="flex text-md items-center gap-3 px-4 py-2 bg-primary rounded-full text-white">
                     Contact Us <IoIosArrowRoundForward />
                  </button>
               </div>
            </div>

            {/* Overlay */}
            {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black opacity-50 md:hidden z-40"></div>}

            {/* Space for fixed nav */}
            <div className="h-16 md:h-20"></div>
         </div>
      </>
   );
}

export default Naver;
