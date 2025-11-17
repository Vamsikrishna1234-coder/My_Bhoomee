import React from "react";
import HeroSection from "../components/Herosection";
import ProjectsHighlights from "../components/ProjectHighlights";
import AboutSection from "../components/About";
import Milestones from "../components/Milestones";
import Parallax from "../components/Parallax";
import FeaturedProperties from "../components/OngoingProjects";
import GallerySection from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FAQ";





const Home = () => {
  return (
    <main>                           
        <HeroSection />   
        <ProjectsHighlights/>
        <AboutSection />
        <Milestones />
        <Parallax/>
        <FeaturedProperties />
        <GallerySection />
        <Testimonials />
        <FaqSection />
    </main>
  );
}       
export default Home;
