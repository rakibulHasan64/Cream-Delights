import { FaAddressBook } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";

const blogData = [
   {
      id: 1,
      imgSrc: "/Figure → single-blog-tab-img1.jpg.png",
      author: "Admin",
      date: "October 30, 2022",
      title: "Our strength, Your Business",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur"
   },
   {
      id: 2,
      imgSrc: "/Figure → single-blog-tab-img2.jpg.png",
      author: "Admin",
      date: "November 10, 2022",
      title: "Tech Trends for 2023",
      description: "Stay ahead with the latest advancements in technology and business solutions modern marketing techniques that drive engagement and sales.."
   },
   {
      id: 3,
      imgSrc: "/Figure → single-blog-tab-img3.jpg.png",
      author: "Admin",
      date: "December 5, 2022",
      title: "Boosting Productivity",
      description: "Explore how smart strategies can elevate efficiency in your workplace modern marketing techniques that drive engagement and sales.."
   },
   {
      id: 4,
      imgSrc: "/Figure → single-blog-tab-img1.jpg.png",
      author: "Admin",
      date: "January 15, 2023",
      title: "Marketing in the Digital Age",
      description: "Learn about modern marketing techniques that drive engagement and sales. modern marketing techniques that drive engagement and sales."
   },
   {
      id: 5,
      imgSrc: "/Figure → single-blog-tab-img1.jpg.png",
      author: "Admin",
      date: "February 20, 2023",
      title: "AI and Automation",
      description: "How AI is revolutionizing industries and automating tasks like never before modern marketing techniques that drive engagement and sales.."
   },
   {
      id: 6,
      imgSrc: "/Figure → single-blog-tab-img2.jpg.png",
      author: "Admin",
      date: "March 10, 2023",
      title: "Cybersecurity in 2023",
      description: "Protecting your business from cyber threats in an increasingly digital world modern marketing techniques that drive engagement and sales.."
   }
];

function BlogCard() {
   return (
      <div className="bg-white">
         <div className="container mx-auto py-24 px-4">
            <div className="space-x-2 flex flex-wrap justify-center gap-2">
               <button className="py-2 px-4 bg-primary rounded-full text-white">All</button>
               <button className="py-2 px-4 hover:bg-primary rounded-full hover:text-white">Advices</button>
               <button className="py-2 px-4 hover:bg-primary rounded-full hover:text-white">Announcements</button>
               <button className="py-2 px-4 hover:bg-primary rounded-full hover:text-white">News</button>
               <button className="py-2 px-4 hover:bg-primary rounded-full hover:text-white">Consultation</button>
               <button className="py-2 px-4 hover:bg-primary rounded-full hover:text-white">Development</button>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 py-20">
               {blogData.map((blog) => (
                  <div key={blog.id} className="bg-white shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105">
                     <img className="w-full h-[285px] object-cover rounded-t-2xl" src={blog.imgSrc} alt={blog.title} />

                     <div className="p-6 bg-white rounded-2xl space-y-3">
                        <div className="flex items-center gap-4 text-gray-600">
                           <span className="flex items-center gap-2">
                              <FaAddressBook className="text-primary" />
                              <p>{blog.author}</p>
                           </span>

                           <span className="flex items-center gap-2">
                              <FaClapperboard className="text-primary" />
                              <p>{blog.date}</p>
                           </span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                        <p className="text-sm text-gray-600">{blog.description}</p>

                        <button className="text-sm font-bold text-primary hover:underline">Read More</button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default BlogCard;
