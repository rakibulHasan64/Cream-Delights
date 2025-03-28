import OurFavaritItem from "../componet/home/OurFavaritItem";


function ProductRelated() {
   const favoriteItems = [
      {
         name: "Chocolate Brownie Sundae",
         image: "/public/Figure → classic-image2.png.png",
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
   return (
      <>
       
         
         
         <div className="bg-white">

            <div className="container mx-auto py-20">
               <h1 className="text-[42px] md:text-[60px] text-center font-family leading-tight">
                  Related
                  <span className="text-primary"> Products</span> Flavors
               </h1>

               <p className="text-[18px] text-center md:text-[16px] font-semibold mt-5">
                  Choose from some of related products
               </p>


               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20 p-2">
                  {favoriteItems.map((item, index) => (
                     <OurFavaritItem key={index} item={item} />
                  ))}
               </div>
            </div>

         </div>
         
      </>
   );
}

export default ProductRelated;