function SpacileCommets() {
   return (
      <div className="bg-white">
         <div className="container mx-auto py-44 text-center">
            {/* Title */}
            <h2 className="font-bold text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
               Our <span className="text-primary">Commitments</span> to You
            </h2>
            <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
               Exceeding expectations with every promise we make.
            </p>

            {/* Main Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-28 justify-center items-center px-3">
               {/* Left Side (Info Cards) */}
               <div className="space-y-6">
                  <InfoCard
                     icon="🚚"
                     title="Free Shipping"
                     text="Enjoy the convenience of free shipping on all orders!"
                  />
                  <InfoCard
                     icon="📦"
                     title="Unique Packaging"
                     text="Experience our commitment to uniqueness with every order."
                  />
               </div>

               {/* Ice Cream Image */}
               <div className="relative flex justify-center items-center w-[300px] sm:w-[400px] md:w-[456px] h-[300px] sm:h-[400px] md:h-[456px] bg-[#FAEBE1] rounded-full hidden lg:block">
                  <img
                     src="/public/commitment-image.png.png"
                     alt="Ice Cream"
                     className="absolute top-[-14px] sm:top-[-20px] md:top-[-30px] -translate-y-6"
                  />
               </div>

               {/* Right Side (Info Cards) */}
               <div className="space-y-6 lg:hidden block xl:block">
                  <InfoCard
                     icon="💰"
                     title="100% Money Back"
                     text="Rest assured with our money-back guarantee at any time."
                  />
                  <InfoCard
                     icon="⚡"
                     title="Fast Delivery"
                     text="Experience swift and efficiently reliable delivery with us."
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

// Info Card Component
function InfoCard({ icon, title, text }) {
   return (
      <div className="flex flex-col items-center gap-4 p-4 w-full sm:w-64 md:w-72 bg-gray-100 rounded-xl shadow-lg">
         <div className="w-[75px] h-[75px] rounded-full bg-[#F83D8E] flex items-center justify-center">
            <span className="text-4xl">{icon}</span>
         </div>
         <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-500 text-sm">{text}</p>
         </div>
      </div>
   );
}

export default SpacileCommets;
