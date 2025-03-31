import { Routes, Route } from 'react-router-dom';
import Outlate from './outlate/Outlatedd';
import AllLayout from './componet/alllayout/AllLayout';
import HomeAllLayout from './componet/alllayout/HomeAllLayout';
import AboutAllLay from './componet/alllayout/AboutAllLay';
import ErrorPage from './outlate/ErrorPage';
import AllAboutUs from './Aboutus/AllAboutUs';
import Team from './componet/team/Team';
import ReviewAll from './componet/review/ReviewAll';
import ShopeLayoutAll from './Aboutus/ShopeLayoutAll';
import ShopTwoAll from './Aboutus/ShopTwoAll';
import ShopLayoutThree from './Aboutus/ShopLayoutThreeAll';
import ShopLayoutThreeAll from './Aboutus/ShopLayoutThreeAll';
import ProductDetls from './productditals/ProductDetls';
import ProductDetils from './productditals/ProductDetils';
import TwoDetilsAllLayout from './ProudetAllLayoutDetlisMain/ProductTwoDetils/TwoDetilsAllLayout';
import ProductThreeAllLayout from './ProudetAllLayoutDetlisMain/ProductThreeDetalis/ProductThreeAllLayout';
import ShopingCard from './componet/shoppingecard/ShopingCard';
import ChakeoutAll from './componet/chakeout/ChakeoutAll';
import SpecialOferAll from './spaeciloffers/SpecialOferAll';
import CommingeSoon from './outlate/CommingeSoon';
import Privcey from './componet/privecyteam/Privcey';
import Terms from './componet/privecyteam/Terms';
import Tanks from './componet/privecyteam/Tanks';
import AllBlog from './blog/AllBlog';
import LoadALL from './componet/loadmore/LoadALL.JSX';
import FrequtionAll from './componet/fqetion/FrequtionAll';
import ContactAll from './componet/contact/ContactAll';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlate />} >
          <Route index element={<AllLayout />} />

          <Route path='data' element={<HomeAllLayout />} />
          <Route path='blog' element={<AboutAllLay />} />
          <Route path='pageabout' element={<AllAboutUs />} />
          <Route path='aboutTeam' element={<Team />} /> 
          <Route path='review' element={<ReviewAll />} />  
          <Route path='shopLayoit' element={<ShopeLayoutAll />} />  
          <Route path='shopLayout2' element={<ShopTwoAll />} />  
          <Route path='shopLayouttree3' element={<ShopLayoutThreeAll />} />  

          {/* product detalis */}
          <Route path='productdetils' element={<ProductDetils />} />  
          
          {/* product detalis two */}
          <Route path='productdetilstwo' element={<TwoDetilsAllLayout />} />  

          {/* product detalis two */}
          <Route path='productdetilsthree' element={<ProductThreeAllLayout />} />  

          
            {/* Chake out */}
          <Route path='ChakeOut' element={<ChakeoutAll />} />  


          {/* Spacile Offer */}
          <Route path='SpacileOffer' element={<SpecialOferAll />} />  

          {/* Error Page */}
          <Route path='errorpage' element={<ErrorPage />} /> 


          {/* Comminge soon */}
          <Route path='ComingSoon' element={<CommingeSoon />} /> 
          
          {/* privcey */}
          <Route path='privcey' element={<Privcey />} />

          {/* terms */}
          <Route path='terms' element={<Terms />} />  

          {/* {Thank } */}
          <Route path='Thank' element={<Tanks />} />  


             {/* blog item all */}
          <Route path='allblog' element={<AllBlog />} /> 
          

          {/* blog load more data */}
          
          <Route path='loadmore' element={<LoadALL />} />  




          {/* { Feqtion} */}

          <Route path='Faqs' element={<FrequtionAll />} />  


          {/* { Feqtion} */}

          <Route path='Contact' element={<ContactAll />} />  




    




             {/* shoppinge card */}
          <Route path='cart' element={<ShopingCard />} />  
          
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
} 

export default App;
