import { IoIosArrowRoundForward } from "react-icons/io";

function Banner() {
   return (
      <div className="">
         <div className="container mx-auto py-20 px-6 lg:px-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

               
               <div className="text-center lg:text-left space-y-6">
                  <h3 className="text-[32px] md:text-[40px] font-family">Welcome to The</h3>
                  <h1 className="text-[42px] md:text-[64px] lg:text-[112px] font-family leading-tight w-full max-w-[800px] break-words">
                     Discover <span className="text-primary">Sweet</span> <br /> Delights!
                  </h1>


                  <p className="text-[18px] md:text-[22px]">
                     Relish the timeless taste of handcrafted ice cream, made
                     <br className="hidden md:block" /> with passion and the finest ingredients.
                  </p>

                  <button className="flex mx-auto lg:mx-0 text-md items-center gap-3 px-6 py-3 bg-[#683292] rounded-4xl text-white">
                     Browse Our Classic Flavors <IoIosArrowRoundForward />
                  </button>
               </div>

            
               <div className="flex justify-center lg:justify-end">
                  <img className="w-72 md:w-96 lg:w-[500px]" src="/banner-image.png.png" alt="Ice Cream" />
               </div>

               
            </div>

         </div>
         <svg className="absolute bottom-1 -z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L11.4,64C22.9,96,46,160,69,197.3C91.4,235,114,245,137,229.3C160,213,183,171,206,154.7C228.6,139,251,149,274,170.7C297.1,192,320,224,343,240C365.7,256,389,256,411,250.7C434.3,245,457,235,480,218.7C502.9,203,526,181,549,181.3C571.4,181,594,203,617,224C640,245,663,267,686,261.3C708.6,256,731,224,754,224C777.1,224,800,256,823,266.7C845.7,277,869,267,891,240C914.3,213,937,171,960,133.3C982.9,96,1006,64,1029,80C1051.4,96,1074,160,1097,197.3C1120,235,1143,245,1166,213.3C1188.6,181,1211,107,1234,112C1257.1,117,1280,203,1303,224C1325.7,245,1349,203,1371,186.7C1394.3,171,1417,181,1429,186.7L1440,192L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path></svg>

      </div>
   );
}

export default Banner;
