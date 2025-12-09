import React from "react";
import HeroSection from "../components/Herosection";
import ProjectsHighlights from "../components/ProjectHighlights";
import AboutSection from "../components/About";
import Intro from "../components/Intro";
import Parallax from "../components/Parallax";
import Milestones from "../components/Milestones";
import LocationHighlights from "../components/LocationHighlights";
import AmenitiesSection from "../components/Amenities";
import FeaturedProperties from "../components/OngoingProjects";
import GallerySection from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FAQ";





const Home = () => {
  return (
    <main>                           
        <HeroSection />   
        <ProjectsHighlights/>
        <Intro/>
        <AboutSection />
        <Parallax/>
        <Milestones />
        <LocationHighlights/>
        <AmenitiesSection/>
        <FeaturedProperties />
        <GallerySection />
        <Testimonials />
        <FaqSection />
    </main>
  );
}       
export default Home;
