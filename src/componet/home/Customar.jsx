import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
   {
      name: "Kevin Andrew",
      text: `Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit.`,
      rating: "⭐⭐⭐⭐⭐",
   },
   {
      name: "Sarah Johnson",
      text: `Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor incidunt aut labore.`,
      rating: "⭐⭐⭐⭐",
   },
   {
      name: "David Smith",
      text: `Tempor incidunt. Labore et dolore magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor.`,
      rating: "⭐⭐⭐⭐⭐",
   },
];

function Customer() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1, // সব স্ক্রিনে একবারে ১টা করে দেখাবে
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
   };

   return (
      <div className="container mx-auto py-20 px-4">
         <h2 className="text-[40px] md:text-[60px] font-family text-center">
            Hear from Our <span className="text-primary">Happy<br />Ice Cream</span> Lovers
         </h2>

         <Slider {...settings} className="mt-10 max-w-2xl mx-auto">
            {reviews.map((review, index) => (
               <div key={index} className="p-6">
                  <div className="bg-white shadow-lg p-8 rounded-xl text-center">
                     <p className="text-[18px] text-gray-700">{review.text}</p>
                     <strong className="text-primary block mt-4">{review.name}</strong>
                     <p className="mt-2">{review.rating}</p>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
}

export default Customer;
