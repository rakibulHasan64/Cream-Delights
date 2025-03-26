function ReviwoProfile() {
   const reviews = [
      {
         image: "/Figure → testimonial3-quoteimage.png.png",
         text: "Quisuam est rui dolorem ipsum rui do sit amet, consectetur, adipise velit seu non numquam eiusm temora incidunt aut labore siner...",
         personImage: "/Item → Figure → testimonial2-personimage1.jpg.png",
         rating: "⭐⭐⭐⭐",
         name: "Peri James",
         role: "Happy Client"
      },
      {
         image: "/Figure → testimonial3-quoteimage.png.png",
         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius ligula a eros convallis interdum.",
         personImage: "/Item → Figure → testimonial2-personimage1.jpg.png",
         rating: "⭐⭐⭐⭐⭐",
         name: "Sarah Miller",
         role: "Longtime Customer"
      },
      {
         image: "/Figure → testimonial3-quoteimage.png.png",
         text: "Donec sollicitudin, nisi sit amet bibendum efficitur, ante neque sodales sapien, ut pretium ante risus ut sapien.",
         personImage: "/Item → Figure → testimonial2-personimage1.jpg.png",
         rating: "⭐⭐⭐⭐",
         name: "John Doe",
         role: "Satisfied Customer"
      }
   ];

   return (
      <div className="bg-white">
         <div className="container mx-auto py-24">
            <h3 className="text-center text-[60px] font-family">
               Hear From Our <span className="text-primary">Gelato</span> Enthusiasts
            </h3>
            <p className="text-gray-500 text-center font-semibold mt-4">
               Read testimonials from those who have enjoyed our artisan gelato.
            </p>

            {/* Grid for review cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
               {reviews.map((review, index) => (
                  <div key={index} className="py-16 p-5 bg-white shadow-2xl space-y-3 border-b-6 border-primary rounded-2xl">
                     <img src={review.image} alt="quote" className="mb-4" />
                     <p>{review.text}</p>

                     <div className="flex items-center gap-3 mt-4">
                        <div>
                           <img src={review.personImage} alt={review.name} className="w-12 h-12 rounded-full" />
                        </div>

                        <div>
                           <p className="text-lg">{review.rating}</p>
                           <h3 className="text-xl font-semibold">{review.name}</h3>
                           <p className="text-gray-500">{review.role}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default ReviwoProfile;
