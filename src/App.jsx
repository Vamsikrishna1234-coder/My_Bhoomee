import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import SocialBar from './components/SocialMediabar.jsx';
import Footer from './components/Footer.jsx';
import ChatAssistant from "./components/ChatAssistant";
import SiteVisit from './components/SiteVisit.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Projects from "./pages/projects/Projects";
import Woodenvilla from './pages/projects/WoodenVillaPage.jsx';
import GlassVilla from "./pages/projects/GlassVillaPage.jsx";
import KeralaManduva from "./pages/projects/KeralaManduvaPage.jsx";
import BaliHarmony from "./pages/projects/BaliHarmonyPage.jsx";
import Gallery from './pages/Gallery.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop /> 

        
          <Header />
           
          <SocialBar/>

          
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/sitevisit" element={<SiteVisit />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/woodenvilla" element={<Woodenvilla />} />
              <Route path="/projects/glassvilla" element={<GlassVilla />} />
              <Route path="/projects/keralamanduva" element={<KeralaManduva />} />
              <Route path="/projects/baliharmony" element={<BaliHarmony />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/contact" element={<Contact />} />
              
            </Routes>
        

          <ChatAssistant />
          <Footer />
        
      </Router>
    </>
  );
}

export default App
