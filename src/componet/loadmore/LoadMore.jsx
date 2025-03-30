import { AiFillTag, AiOutlineCalendar } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";

function LoadMore() {
   const cards = [
      {
         img: "/Figure → product2-image1.jpg.png",
         title: "Why You Need Virtual Assistant for Your Company",
         date: "Dec 20,2022"
      },
      {
         img: "/best-image2.jpg.png",
         title: "Top 5 Digital Marketing Trends in 2023",
         date: "Jan 15,2023"
      },
      {
         img: "/public/vegan-image3.jpg.png",
         title: "How to Boost Your Business with SEO?",
         date: "Feb 10,2023"
      }
   ];

   return (
      <div className="bg-white">
         <div className="container mx-auto py-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
               {cards.map((card, index) => (
                  <div key={index} className="bg-white shadow-2xl rounded-2xl">
                     <img className="rounded-t-2xl w-full h-[300px]" src={card.img} alt="" />
                     <div className="py-8 p-8">
                        <div className="flex items-center gap-3">
                           <span className="flex items-center gap-2">
                              <p className="text-primary text-[16px]"> <RiAdminFill /></p>
                              <p className="text-[14px]">By : Admin</p>
                           </span>
                           <span className="flex items-center gap-2">
                              <p className="text-primary"> <AiFillTag /></p>
                              <p>By : Admin</p>
                           </span>
                        </div>
                        <p className="text-[20px] font-medium py-4">{card.title}</p>
                        <p className="border-b-1 text-gray-300 mt-4"></p>
                        <div className="flex items-center justify-between mt-8">
                           <strong className="flex items-center gap-3">
                              <span className="text-[20px] font-bold text-primary"><AiOutlineCalendar /></span>
                              <p className="text-[18px] font-semibold text-gray-300">{card.date}</p>
                           </strong>
                           <button className="text-white bg-primary py-3 px-5 rounded-full">Read More</button>
                        </div>
                     </div>
                  </div>
               ))}

               
            </div>

            <div className="text-center py-9"><button className="text-white bg-primary py-3 px-5 rounded-full">Load More</button></div>
         </div>
      </div>
   );
}

export default LoadMore;
