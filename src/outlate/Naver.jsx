import React from 'react';
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';


function Naver() {

   const [open, setOpen] = useState(false);
   return (
      <>
         
         <div className="" >
            <nav className="flex justify-between items-center p-4 container mx-auto">
               <div className="text-3xl font-bold flex items-center gap-1">
                  <img src="/logo.png" alt="Logo" />
                  <h2 className="text-[32px] font-sans">IcyTales</h2>
               </div>

               <div className="hidden md:flex gap-5">
                  <Link to={"/"}>
                     <a href="#" className="text-lg hover:text-primary font-family">Home</a>
                  </Link>
                  <a href="#" className="text-lg hover:text-primary font-family">About Us</a>
                  <a href="#" className="text-lg hover:text-primary font-family">Blog</a>
                  <a href="#" className="text-lg hover:text-primary font-family">Faq's</a>
               </div>

               <div className="hidden md:block">
                  <div className="flex items-center gap-8 relative">
                     <LuSearch className="text-2xl" />
                     <HiOutlineShoppingBag className="text-2xl" />

                     <span className="absolute -top-1 right-[169px] w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#F83D8E]">4</span>

                     <button className="flex text-md items-center gap-3 px-4 py-2 bg-primary rounded-4xl text-white">
                        Contact Us <IoIosArrowRoundForward />
                     </button>
                  </div>
               </div>

               <button onClick={() => setOpen(true)} className="block md:hidden text-2xl">
                  <VscMenu />
               </button>
            </nav>
         </div>

         <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out shadow-lg`}>
            <div className="p-4 flex justify-between items-center border-b border-gray-700">
               <h2 className="text-xl font-bold">Sidebar Menu</h2>
               <button onClick={() => setOpen(false)} className="text-xl">
                  <VscClose />
               </button>
            </div>

            <ul className="mt-4 space-y-4 p-4 flex flex-col gap-5 items-center">
               <a href="#" className="text-lg hover:text-primary font-family">Home</a>
               <a href="#" className="text-lg hover:text-primary font-sans">About Us</a>
               <a href="#" className="text-lg hover:text-primary font-sans">Blog</a>
               <a href="#" className="text-lg hover:text-primary font-sans">Faq's</a>
            </ul>

            <div className="flex flex-col items-center gap-8 relative">
               <LuSearch className="text-2xl" />
               <HiOutlineShoppingBag className="text-2xl" />

               <span className="absolute -top-1 right-[169px] w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#F83D8E]">4</span>

               <button className="flex text-md items-center gap-3 px-4 py-2 bg-primary rounded-4xl text-white">
                  Contact Us <IoIosArrowRoundForward />
               </button>
            </div>
         </div>

         {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black opacity-50 md:hidden"></div>}
         

         
      </>
   );
}

export default Naver;


