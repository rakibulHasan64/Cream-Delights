import { IoIosArrowRoundForward } from "react-icons/io";


function Tanks() {
   return (
      <>
         <div className="h-screen flex flex-col justify-center items-center gap-4 px-4">

            <img  src="/public/thankyou-image.png.png" alt="" />
            <h2 className="text-[80px] sm:text-[120px] md:text-[140px] font-family text-center">Thank You!</h2>
            
            <p className="text-sm sm:text-base md:text-lg text-center max-w-lg">
               We're delighted you've decided to treat yourself to our delectable ice creams.<br />
               Your order has been received and is now being prepared with care.
            </p>
            <button
               
               className="flex mx-auto lg:mx-0 text-md items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-4xl text-white mt-6 hover:bg-[#F63D7C] transition-colors duration-300"
            >
               Back to Home <IoIosArrowRoundForward />
            </button>
         </div>
      </>
   );
}

export default Tanks;