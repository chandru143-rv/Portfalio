import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';
import { GiBirdHouse } from 'react-icons/gi';
import { BrowserRouter } from 'react-router-dom';


AOS.init();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
      <App></App>
  </StrictMode>
  </BrowserRouter>,
)
