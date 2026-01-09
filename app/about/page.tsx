"use client";
import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutHeroSection from "../components/sections/AboutHeroSection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import DigitalTransformationSection from "../components/sections/DigitalTransformationSection";
// import MeetTeamSection from "../components/sections/MeetTeamSection";
import ContactSection from "../components/sections/ContactSection";
import { aboutImage, missionIcon, visionIcon } from "@/public/assets/assets";
// import { useFetchData } from "@/app/hooks/useApis";

// Static fallback data for about cards
const STATIC_FALLBACK_ABOUT_CARDS = {
  data: [
    {
      id: "static-about-1",
      name: "Oladimeji Alao",
      position: "CEO, Latila Consulting",
      image: {
        url: aboutImage.src, // Placeholder - replace with actual image
      },
    },
  ],
};

// Static fallback data for missions
const STATIC_FALLBACK_MISSIONS = {
  data: [
    {
      id: "static-mission-1",
      title: "Mission",
      detail:
        "To empower businesses with innovative, secure, and efficient IT solutions that enable sustainable growth and operational excellence.",
      icon: {
        url: missionIcon.src, // Placeholder - replace with actual icon
      },
    },
  ],
};

// Static fallback data for visions
const STATIC_FALLBACK_VISIONS = {
  data: [
    {
      id: "static-vision-1",
      title: "Vision",
      detail:
        "To be the most trusted partner for cloud-driven transformation and digital innovation in Africa and beyond.",
      icon: {
        url: visionIcon.src, // Placeholder - replace with actual icon
      },
    },
  ],
};

const Page = () => {
  const [aboutCards, setAboutCards] = useState(STATIC_FALLBACK_ABOUT_CARDS);
  const [missions, setMissions] = useState(STATIC_FALLBACK_MISSIONS);
  const [visions, setVisions] = useState(STATIC_FALLBACK_VISIONS);

  // API requests commented out - using static fallback data
  // const { data: aboutCardsData } = useFetchData("about-cards?populate=*");
  // const { data: missionsData } = useFetchData("missions?populate=*");
  // const { data: visionsData } = useFetchData("visions?populate=*");

  // useEffect(() => {
  //   if (aboutCardsData?.data) {
  //     setAboutCards(aboutCardsData);
  //   }
  //   if (missionsData?.data) {
  //     setMissions(missionsData);
  //   }
  //   if (visionsData?.data) {
  //     setVisions(visionsData);
  //   }
  // }, [aboutCardsData, missionsData, visionsData]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHeroSection />
        <MissionVisionSection missions={missions} visions={visions} />
        <DigitalTransformationSection aboutCards={aboutCards} />
        {/* <MeetTeamSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
