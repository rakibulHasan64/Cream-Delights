import { IoIosArrowRoundForward } from "react-icons/io";

function OurJourney() {
   return (
      <div className="container mx-auto py-32 px-4">
         <div className="flex flex-col lg:flex-row items-center justify-around gap-10">
            
            {/* Image Section */}
            <div className="mt-3 flex justify-center md:w-[450px] md:h-[450px] w-[300px] h-[300px]">
               <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/Figure → journey-image.jpg.png" alt="Journey" className="w-full h-full object-cover" />
               </div>
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
               <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-family leading-tight">
                  Our <span className="text-primary">Journey</span> Began<br />
                  With a Simple Dream
               </h1>

               <p className="mt-4 text-base sm:text-lg md:text-xl">
                  Our goal is to make the best ice cream using only the finest,<br />
                  natural ingredients. From rich, creamy classics to adventurous<br />
                  new creations, every flavor is meticulously crafted in-house to<br />
                  ensure the highest quality and freshness.
               </p>

               <p className="mt-4 text-base sm:text-lg md:text-xl">
                  We take pride in offering a diverse range of options, including<br />
                  dairy-free, vegan, and gluten-free choices, so everyone can find<br />
                  their perfect scoop.
               </p>

               <div className="mt-6 flex justify-center md:justify-start">
                  <button className="flex items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-4xl text-white text-md shadow-2xl shadow-primary hover:bg-[#F63D7C] transition-colors duration-300">
                     Read More <IoIosArrowRoundForward />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OurJourney;
