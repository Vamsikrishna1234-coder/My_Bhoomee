
import React from "react";
import SVNSwapnlokintro from "../../components/SVN-Swapnlokintro";
import SVNSwapnlokMasterPlan from "../../components/SVN-Swapnlokmast";
import SVNSwapnlokLocation from "../../components/Getdirect";
import SVNPhighlights from "../../components/SVN-Phighlights";
import SVNFAQ from "../../components/SVN-Faq";
import SVNGallery from "../../components/SVN-Gallery";
import OngoingProjects from "../../components/OngoingProjects";

// Import your video
import BannerVideo from "../../assets/videos/home animation.mp4";

const SVNSwapnlokPage = () => {
  return (
    <>
      {/* ================= HERO VIDEO SECTION ================= */}
      <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">

        {/* Hero Background Video */}
        <video
          src={BannerVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/15"></div>

      </section>

      {/* SVN-Swapnlok Full Page Content */}
      <SVNSwapnlokintro />
      <SVNSwapnlokMasterPlan />\
      <SVNSwapnlokLocation />
      <SVNPhighlights />
      <SVNFAQ />
      <SVNGallery />
      <OngoingProjects />
    </>
  );
};

export default SVNSwapnlokPage;
