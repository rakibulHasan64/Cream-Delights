import { IoArrowForwardSharp } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { useState } from "react";

function HappyFns() {
   const [currentIndex, setCurrentIndex] = useState(0);

   // Array of customer images
   const customers = [
      "/public/Item → Figure → testimonial2-personimage1.jpg.png",
      "/public/Item → Figure → testimonial2-personimage1.jpg.png",
      "/public/Figure → classic-image2.png.png",
      "/public/Item → Figure → testimonial2-personimage4.jpg.png"
   ];

   // Handle next and previous clicks
   const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
   };

   const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + customers.length) % customers.length);
   };

   return (
      <div className="" style={{ background: "linear-gradient(45deg, #EAF8F9, #F8EAE1, #F5F9FC, #EFD7EF)" }}>
         <div className="container mx-auto py-28">
            <div className="flex flex-col gap-5 justify-center items-center ">
               <h3 className="text-[60px] font-family text-center">Hear From Our <span className="text-primary">Happy</span> Fans</h3>

               <p className="text-center text-[18px] font-semibold">
                  “Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas aspernatur aur odit aut fugit,<br /> sed neatae vitae dicta ripiscing elit, sed do euismod tempor incidun<br /> labore aredolore magna aliqua ubr  enim ad minim adipiscing elit, sed do euismod tempor<br /> incidunt labore minima veniam.”
               </p>

               <p className="text-[22px] text-primary text-center font-fam">Fergus Douchebag</p>
               <p className="text-[18px] text-gray-500 text-center">Happy Customer</p>

               <div className="relative">
                  {/* Slider Images */}
                  <ul className="flex items-center justify-center gap-5">
                     <li className="text-2xl font-bold cursor-pointer" onClick={prevImage}>
                        <MdArrowBack />
                     </li>

                     {/* Customer Image */}
                     <li className="w-[60px] h-[60px] border border-primary rounded-full flex items-center justify-center">
                        <img src={customers[currentIndex]} alt="Customer" />
                     </li>


                     <li className="w-[60px] h-[60px] border border-primary rounded-full flex items-center justify-center">
                        <img src={customers[currentIndex]} alt="Customer" />
                     </li>

                     <li className="w-[60px] h-[60px] border border-primary rounded-full flex items-center justify-center">
                        <img src={customers[currentIndex]} alt="Customer" />
                     </li>

                     <li className="text-2xl font-bold cursor-pointer" onClick={nextImage}>
                        <IoArrowForwardSharp />
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HappyFns;
