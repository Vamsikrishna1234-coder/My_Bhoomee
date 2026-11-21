import React from "react";
import HeroSection from "../components/Herosection";
import Abouthome from "../components/Aboutk";
import AboutSection from "../components/About";
import OngoingProjects from "../components/OngoingProjects";
import Milestones from "../components/Milestones";
import PropertyTypes from "../components/PropertyTypes";
import Journey from "../components/Journey";
import Unique from "../components/Unique";
import Homeform1 from "../components/Homeform1";
import Testimonials from "../components/Testimonials";






const Home = () => {
  return (
    <main>                           
        <HeroSection />   
        <Abouthome />
        <AboutSection />
        <OngoingProjects />
        <Milestones />
        <PropertyTypes />
        <Journey youtubeUrl="https://www.youtube.com/watch?v=wJYAwJKd9yE" />
        <Unique />
        <Homeform1 />
        <Testimonials />
        
    </main>
  );
}       
export default Home;
