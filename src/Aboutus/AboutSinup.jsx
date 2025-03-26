import { IoIosArrowRoundForward } from "react-icons/io";


function AboutSinup() {
   return (
      <>
         
               <div className="bg-white">
         <div className="container mx-auto py-28 px-4">
            <h1 className="text-[40px] md:text-[60px] font-family text-center">
               Sign up For{" "}
               <span className="text-primary">Exclusive Deals<br /></span>
               and Updates
            </h1>

            <p className="text-center text-[16px] md:text-[20px] mt-4">
               Get 10% off your next order and stay updated with our latest offers.
            </p>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
               <input
                  className="w-full md:w-[400px] lg:w-[500px] px-6 py-4 bg-[#FFFFFF] shadow rounded-full text-center"
                  placeholder="Enter Your Email Address"
                  type="text"
               />

               <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] shadow-2xl shadow-primary rounded-full text-white text-md">
                  Subscribe <IoIosArrowRoundForward />
               </button>
            </div>
         </div>
      </div>
         
      </>
   );
}

export default AboutSinup;