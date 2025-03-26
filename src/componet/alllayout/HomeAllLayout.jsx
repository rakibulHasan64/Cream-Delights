import Banner from "../homeus/Banner";
import BestVegan from "../homeus/BestVegan";
import Guilt from "../homeus/Guilt";
import HappyFns from "../homeus/HappyFns";
import LimaitTime from "../homeus/LimaitTime";
import Popular from "../homeus/Popular";


function HomeAllLayout() {
   return (
      <>
         
         <Banner />
         <Popular />
         <Guilt />
         <LimaitTime />
         <BestVegan />
         <HappyFns />
      
         
      </>
   );
}

export default HomeAllLayout;