import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";


function Outlate() {
   return (
      <>
         
         
         <Naver />
         <Outlet />
         <Footer />
         
      </>
   );
}

export default Outlate;