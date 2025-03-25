import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter import করা হচ্ছে
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* শুধুমাত্র এখানে BrowserRouter থাকুক */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
