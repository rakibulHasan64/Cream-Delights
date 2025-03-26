import { IoIosArrowRoundForward } from "react-icons/io";

function Guilt() {
   return (
      <div className="" style={{ background: "linear-gradient(45deg, #EAF8F9, #F8EAE1, #F5F9FC, #EFD7EF)" }}>
         <div className="container mx-auto py-20 px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10 bg-white ">

               <div className=" lg:w-1/2">
                  <img src="/Image.png" alt="Vegan Ice Cream" className=" rounded-lg shadow-lg" />
               </div>


               <div className="w-full lg:w-1/2 text-center lg:text-left p-3 sm:p-2">
                  <h3 className="text-[40px] lg:text-[60px] font-semibold leading-tight">
                     Our Guilt-Free <br />
                     <span className="text-primary">Vegan</span> Ice Cream
                  </h3>
                  <p className="text-lg text-gray-700 mt-4">
                     Enjoy creamy, dairy-free ice cream that’s both tasty and kind to the planet.
                  </p>
                  <p className="text-lg text-gray-700 mt-2">
                     Delicious flavors made with only the best plant-based ingredients.
                  </p>

               
                  <button className="flex items-center justify-center gap-3 px-6 py-3 bg-[#F83D8E] shadow-2xl shadow-primary rounded-full text-white mt-6 mx-auto lg:mx-0">
                     Explore Our Menu <IoIosArrowRoundForward />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Guilt;
