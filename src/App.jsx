import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import SocialBar from './components/SocialMediabar.jsx';
import DownloadBrochure from './components/Brochure.jsx';
import Footer from './components/Footer.jsx';
import ChatAssistant from "./components/ChatAssistant";
import SiteVisit from './components/SiteVisit.jsx';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Projects from './pages/Projects.jsx';
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

          <DownloadBrochure/>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/sitevisit" element={<SiteVisit />} />
              <Route path="/projects" element={<Projects />} />
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
