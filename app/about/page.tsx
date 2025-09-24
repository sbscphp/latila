import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutHeroSection from "../components/sections/AboutHeroSection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import DigitalTransformationSection from "../components/sections/DigitalTransformationSection";
// import MeetTeamSection from "../components/sections/MeetTeamSection";
import ContactSection from "../components/sections/ContactSection";

const page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHeroSection />
        <MissionVisionSection />
        <DigitalTransformationSection />
        {/* <MeetTeamSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
