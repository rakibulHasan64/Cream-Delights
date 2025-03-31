import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

function ContactUs() {
   return (
      <div className="bg-white px-4 py-20">
         <div className="container mx-auto">
            <h2 className="font-bold text-[32px] sm:text-[48px] md:text-[60px] text-center leading-tight">
               Get in <span className="text-primary">Touch</span> With Us
            </h2>
            <p className="text-gray-600 text-center mt-4 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
               Reach out and connect with us today for any inquiries or assistance!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
               <div className="flex flex-col gap-5">
                  {[{
                     icon: <FaLocationDot />,
                     title: "Our Location",
                     text: "121 King Street, Melbourne Victoria 3000 Australia"
                  }, {
                     icon: <BsFillTelephoneOutboundFill />,
                     title: "Phone Number",
                     text: "(+61 3 8376 6284) (+800 2345 6789)"
                  }, {
                     icon: <MdMail />,
                     title: "Email us at",
                     text: "info@icedelights.com icedelights@gmail.com"
                  }].map((item, index) => (
                     <div key={index} className="bg-white rounded-2xl shadow-2xl py-6 px-6 flex flex-col sm:flex-row items-center gap-4">
                        <div className="w-[75px] h-[75px] text-2xl text-white bg-[#683292] flex items-center justify-center rounded-full">
                           {item.icon}
                        </div>
                        <div>
                           <h4 className="text-[20px] font-semibold">{item.title}</h4>
                           <p>{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="md:col-span-2">
                  <form className="bg-white p-6 rounded-2xl shadow-2xl">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                           <label className="block text-gray-500 font-medium mb-2">First Name</label>
                           <input type="text" className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                        </div>
                        <div>
                           <label className="block text-gray-500 font-medium mb-2">Last Name</label>
                           <input type="text" className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Last Name" />
                        </div>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                        <div>
                           <label className="block text-gray-500 font-medium mb-2">Email address</label>
                           <input type="email" className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email" />
                        </div>
                        <div>
                           <label className="block text-gray-500 font-medium mb-2">Phone</label>
                           <input type="text" className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Phone" />
                        </div>
                     </div>
                     <div className="mt-4">
                        <label className="block text-gray-500 font-medium mb-2">Message</label>
                        <textarea className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows="4" placeholder="Your Message"></textarea>
                     </div>
                     <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition mt-4 shadow-lg">
                        Submit Now
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactUs;