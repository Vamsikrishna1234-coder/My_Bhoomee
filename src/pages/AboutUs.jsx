import React from "react";
import AboutHero from "../components/AboutHero";
import WhoWeAre from "../components/WhoWeAre";
import MissionVision from "../components/MissionVision";
import CoreValues from "../components/CoreValues";  
import WhyChooseUs from "../components/WhyChooseUs";
import Team from "../components/Team";

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues/>
      <WhyChooseUs />
      <Team />
      
    </main>
  );
};

export default AboutUs;
