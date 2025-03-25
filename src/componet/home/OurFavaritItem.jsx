import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

function OurFavaritItem({ item }) {
   return (
      <div className="bg-white shadow-2xl p-4 rounded-2xl ">

         <div className="rounded-xl relative p-4" style={{ backgroundColor: item.bgColor }}>
            <img className="p-3 mx-auto" src={item.image} alt={item.name} />
            <button className="absolute top-2 right-2 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
               <IoMdHeartEmpty />
            </button>
         </div>

         <div className="">
            <div className="flex items-center justify-between gap-4 py-4">
               <h1 className="font-fam text-[20px]">{item.name}</h1>
               <span className="font-semibold">⭐ {item.rating}/5</span>
            </div>

            <p className="text-[16px] font-semibold text-gray-500">{item.description}</p>

            <div className="flex items-center justify-between mt-4">
               <h3 className="font-fam text-[20px] text-primary">${item.price}</h3>
               <button className="w-[46px] h-[46px] flex items-center justify-center text-xl rounded-full text-white bg-[#683292]">
                  <RiShoppingCartLine />
               </button>
            </div>
         </div>
      </div>
   );
}

export default OurFavaritItem;
