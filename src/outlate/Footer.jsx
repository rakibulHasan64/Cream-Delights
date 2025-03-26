import { FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

function Footer() {
   return (
      <div className="bg-[#683292] text-white py-20">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left mb-10">

               {/* Logo Section */}
               <div className="flex flex-col items-center md:items-start">
                  <img src="/logo.png" alt="Logo" className="w-16" />
                  <h2 className="text-2xl font-bold mt-2">IcyTales</h2>
               </div>

               {/* Navigation */}
               <div>
                  <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-8">
                     <ul className="list-disc list-inside">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                     </ul>
                     <ul className="list-disc list-inside">
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Support</li>
                     </ul>
                  </div>
               </div>

               {/* Contact Info */}
               <div className="space-y-6">
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                        <MdLocationOn size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold">Address:</h3>
                        <p>121 King Street, Melbourne, 3000, Australia</p>
                     </div>
                  </div>

                  <div className="flex items-center gap-4 justify-center md:justify-start">
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                        <HiOutlineMail size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold">Email:</h3>
                        <p>info@example.com</p>
                     </div>
                  </div>
               </div>

               {/* Phone & Social Icons */}
               <div className="space-y-6">
                  <div className="text-center md:text-left">
                     <h1 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2">
                        <FaPhone size={24} /> +123456780123
                     </h1>
                     <p className="text-sm">Got Questions? Call us 24/7</p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center md:justify-start gap-4">
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                        <FaFacebook size={24} />
                     </div>
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                        <FaTwitter size={24} />
                     </div>
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                        <FaLinkedin size={24} />
                     </div>
                     <div className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full">
                        <FaInstagram size={24} />
                     </div>
                  </div>
               </div>

            </div>

            {/* Bottom Line */}
            <div className="border-t border-gray-400 mt-6"></div>
            <p className="text-gray-300 text-center mt-4">
               Copyright © 2024 BlackRise Themes Inc. All rights reserved.
            </p>
         </div>
      </div>
   );
}

export default Footer;
