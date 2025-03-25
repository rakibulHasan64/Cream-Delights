import OurFavaritItem from "./OurFavaritItem";

const favoriteItems = [
   {
      name: "Chocolate Brownie Sundae",
      image: "/Figure → special-image.png.png",
      rating: 4.9,
      description: "Rich chocolate ice cream with chunks of brownie.",
      price: 5.49,
      bgColor: "#FFEEEE"
   },
   {
      name: "Strawberry Shortcake",
      image: "/Figure → classic-image3.png.png",
      rating: 4.8,
      description: "Strawberry ice cream layered with shortcake",
      price: 4.99,
      bgColor: "#FFFAF4"
   },
   {
      name: "Mint Chocolate Chip Cone",
      image: "/Figure → classic-image4.png.png",
      rating: 4.7,
      description: "Refreshing mint ice cream with chocolate chips.",
      price: 5.29,
      bgColor: "#F6F9E1"
   },
   {
      name: "Classic Vanilla Ice Cream",
      image: "/Figure → classic-image1.png.png",
      rating: 4.9,
      description: "Creamy vanilla ice cream topped with cherry.",
      price: 5.19,
      bgColor: "#F7F2F7"
   }
];

function OurFavarite() {
   return (
      <div className="relative">
         <div className="container mx-auto py-64 relative z-10">

            <h3 className="text-center text-[60px] font-family">
               Our <span className="text-primary">Classic</span> Favorites
            </h3>
            <p className="text-center text-[20px]">
               Check out our top products that our customers love.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 p-2">
               {favoriteItems.map((item, index) => (
                  <OurFavaritItem key={index} item={item} />
               ))}
            </div>

         </div>

         {/* Adjusted image positioning */}
         <img className="absolute top-[-20px] left-[-20px] md:top-0 md:left-[-50px] z-0" src="/classic-leftimage.png.png" alt="" />
         <img className="absolute right-0 bottom-[-80px] md:bottom-[-56px] z-0" src="/classic-rightimage.png.png" alt="" />
      </div>
   );
}

export default OurFavarite;
