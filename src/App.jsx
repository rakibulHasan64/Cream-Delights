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
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
