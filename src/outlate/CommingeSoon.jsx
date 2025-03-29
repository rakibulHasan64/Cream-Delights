import { IoIosArrowRoundForward } from "react-icons/io";


function CommingeSoon() {
   return (
      <>

         <div className="h-screen flex flex-col justify-center items-center gap-2 px-4">

            <div className="flex items-center gap-2">
               <img src="/public/logo.png" alt="" />
               <h3 className="text-[32px] font-family"><span className="text-primary">Icy</span>Tales</h3>
            </div>
            <h2 className="text-[80px] sm:text-[120px] md:text-[140px] font-family text-center">Coming Soon</h2>
            
            <p className="text-sm sm:text-base md:text-lg text-center max-w-lg">
               Be the first to know when our new site is live
            </p>

            <div className="">
               <input className="py-3 w-[690px] rounded-full bg-white shadow-2xl p-4" type="text" placeholder="Email Address" />
               <button className="py-3 bg-primary px-7 text-white rounded-r-full -translate-x-4">Submit</button>
            </div>
            
         </div>

      </>
   );
}

export default CommingeSoon;