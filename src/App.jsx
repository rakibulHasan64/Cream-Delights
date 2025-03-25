import { Routes, Route } from 'react-router-dom';
import Outlate from './outlate/Outlatedd';
import AllLayout from './componet/alllayout/AllLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlate />} >
          <Route index element={<AllLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
