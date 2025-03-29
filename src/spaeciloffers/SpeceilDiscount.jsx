import SpecDiscoutItem from "./SpecDiscoutItem";


function SpeceilDiscount() {

   const favoriteItems = [
      {
         name: "Chocolate Brownie Sundae",
         image: "/Figure → seller-image4.png.png",
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
         image: "/Figure → seller-image1.png.png",
         rating: 4.9,
         description: "Creamy vanilla ice cream topped with cherry.",
         price: 5.19,
         bgColor: "#F7F2F7"
      }
   ];
   return (
      <>
         

         <div className="bg-white">
            <div className="container mx-auto py-20">
               <h2 className="text-center font-family text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
                  Upto <span className="text-primary">
                     30 %</span> Discount
               </h2>
               <p className="text-center text-[16px] sm:text-[18px] md:text-[20px] max-w-2xl mx-auto">
                  Discover the favorites that keep our customers coming back for more.
               </p>


               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 p-2">
                  {favoriteItems.map((item, index) => (
                     <SpecDiscoutItem key={index} item={item} />
                  ))}
               </div>
            </div>
         </div>
         

         

         
      </>
   );
}

export default SpeceilDiscount; 
