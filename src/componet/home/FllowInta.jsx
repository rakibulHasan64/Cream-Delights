function FllowInta() {
   const images = [
      { normal: "/follow-image1.jpg.png", hover: "/follow-image2.jpg.png" },
      { normal: "/follow-image3.jpg.png", hover: "/follow-image1.jpg.png" },
      { normal: "/follow-image2.jpg.png", hover: "/follow-image3.jpg.png" },
      { normal: "/follow-image1.jpg.png", hover: "/follow-image2.jpg.png" },
   ];

   return (
      <div className="container mx-auto py-20 px-5">
         <h2 className="text-[60px] text-center font-family">
            Follow Us on <span className="text-primary">Instagram</span>
         </h2>
         <p className="text-center text-[20px]">
            Join our Instagram community for updates, special deals, and more!
         </p>

         <div className="grid grid-cols-4 gap-7 py-20">
            {images.map((img, index) => (
               <div key={index} className="relative overflow-hidden rounded-lg">
                  {/* Normal Image */}
                  <img
                     className="w-full transition-opacity duration-500 absolute opacity-100 hover:opacity-0"
                     src={img.normal}
                     alt={`Image ${index + 1}`}
                  />
                  {/* Hover Image */}
                  <img
                     className="w-full transition-opacity duration-500 opacity-0 hover:opacity-100"
                     src={img.hover}
                     alt={`Hover Image ${index + 1}`}
                  />
               </div>
            ))}
         </div>
      </div>
   );
}

export default FllowInta;
