import { Outlet } from "react-router-dom";
import Naver from "./Naver";


function Outlate() {
   return (
      <>
         
         
         <Naver />
         <Outlet />
         
      </>
   );
}

export default Outlate;