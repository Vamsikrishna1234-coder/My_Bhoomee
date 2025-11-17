import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Initialise AOS
AOS.init({
  duration: 800,   // smooth duration
  easing: "ease-out-cubic",
  once: true,      // animate only once
  offset: 100,
});