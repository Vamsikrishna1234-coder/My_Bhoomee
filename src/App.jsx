import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import SocialBar from './components/SocialMediabar.jsx';
import Footer from './components/Footer.jsx';
import SiteVisit from './components/SiteVisit.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Projects from "./pages/projects/Projects";
import SVNSwapnlok from './pages/projects/SVN-SwapnlokPage.jsx';
import NatureValley from './pages/projects/Nature-ValleyPage.jsx';
import SugundhaMeadows from "./pages/projects/Sugundha-MeadowsPage.jsx";
import CMRGoldfields from "./pages/projects/CMR-GoldfieldsPage.jsx";
import PurnaSai from "./pages/projects/Purna-SaiPage.jsx";
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
              <Route path="/projects/SVN-SwapnlokPage" element={<SVNSwapnlok />} />
              <Route path="/projects/Nature-ValleyPage" element={<NatureValley />} />
              <Route path="/projects/Sugundha-MeadowsPage" element={<SugundhaMeadows />} />
              <Route path="/projects/CMR-GoldfieldsPage" element={<CMRGoldfields />} />
              <Route path="/projects/Purna-SaiPage" element={<PurnaSai />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogs" element={<Blogs/>} />
              <Route path="/contact" element={<Contact />} />
              
            </Routes>
        

          
          <Footer />
        
      </Router>
    </>
  );
}

export default App
