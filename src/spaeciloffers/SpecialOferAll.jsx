import Summer from "../componet/home/Summer";
import SpacileCommets from "./SpacileCommets";
import SpeceilDiscount from "./SpeceilDiscount";
import SpecilBanner from "./SpecilBanner";


function SpecialOferAll() {
   return (
      <>
         <SpecilBanner />
         <SpeceilDiscount />
         <Summer />

         <SpacileCommets />
         
      </>
   );
}

export default SpecialOferAll;