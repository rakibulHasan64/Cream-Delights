import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom"; 

function ErrorPage() {
   const navigate = useNavigate(); 

   const handleBackToHome = () => {
      navigate(-1); 
   };
   return (
      <>
         <div className="h-screen flex flex-col justify-center items-center gap-4 px-4">
            <h2 className="text-[80px] sm:text-[120px] md:text-[140px] font-family text-center">404</h2>
            <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold text-center">Sorry! The Page Not Found</h1>
            <p className="text-sm sm:text-base md:text-lg text-center max-w-lg">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
               onClick={handleBackToHome}
               className="flex mx-auto lg:mx-0 text-md items-center gap-3 px-6 py-3 bg-[#F83D8E] rounded-4xl text-white mt-6 hover:bg-[#F63D7C] transition-colors duration-300"
            >
               Back to Home <IoIosArrowRoundForward />
            </button>
         </div>
      </>
   );
}

export default ErrorPage;
