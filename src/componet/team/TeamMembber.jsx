import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const teamMembers = [
   {
      name: "Marvin Joner",
      role: "Bakery Worker",
      image: "/Figure → team-image1.jpg.png",
      socialLinks: {
         facebook: "#",
         instagram: "#",
         twitter: "#",
         linkedin: "#",
      },
   },
   {
      name: "Sarah Watson",
      role: "Ice Cream Maker",
      image: "/Figure → team-image3.jpg.png",
      socialLinks: {
         facebook: "#",
         instagram: "#",
         twitter: "#",
         linkedin: "#",
      },
   },
   {
      name: "James Carter",
      role: "Customer Service",
      image: "/Figure → team-image1.jpg.png",
      socialLinks: {
         facebook: "#",
         instagram: "#",
         twitter: "#",
         linkedin: "#",
      },
   },
   {
      name: "Ella Brown",
      role: "Marketing Manager",
      image: "/Figure → team-image3.jpg.png",
      socialLinks: {
         facebook: "#",
         instagram: "#",
         twitter: "#",
         linkedin: "#",
      },
   },
   {
      name: "John Doe",
      role: "Operations Manager",
      image: "/Figure → team-image1.jpg.png",
      socialLinks: {
         facebook: "#",
         instagram: "#",
         twitter: "#",
         linkedin: "#",
      },
   },
   {
      name: "Alice Smith",
      role: "Creative Director",
      image: "/Figure → team-image3.jpg.png",
      socialLinks: {
         facebook: "#",
         instagram: "#",
         twitter: "#",
         linkedin: "#",
      },
   },
];

function TeamMembber() {
   return (
      <>
         <div className="bg-white">
            <div className="container mx-auto py-28">
               <h3 className="text-center text-[40px] sm:text-[50px] md:text-[60px] font-family">
                  Our <span className="text-primary">Team</span> Members
               </h3>

               <p className="text-gray-500 text-center font-semibold mt-4">
                  Get to know the friendly faces behind your favorite flavors.
               </p>

               {/* Grid for team members */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16">
                  {teamMembers.map((member, index) => (
                     <div key={index} className="text-center">
                        <img
                           src={member.image}
                           alt={member.name}
                           className="w-full object-cover rounded-lg"
                        />
                        <h3 className="text-[22px] mt-4 font-family">{member.name}</h3>
                        <p className="text-[16px] text-gray-500">{member.role}</p>

                        <ul className="flex justify-center gap-5 mt-4">
                           <li className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center">
                              <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                 <FaFacebook />
                              </a>
                           </li>
                           <li className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center">
                              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                 <FaInstagram />
                              </a>
                           </li>
                           <li className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center">
                              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                 <FaTwitter />
                              </a>
                           </li>
                           <li className="w-[45px] h-[45px] rounded-full bg-primary text-white flex items-center justify-center">
                              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                 <FaLinkedin />
                              </a>
                           </li>
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

export default TeamMembber;
