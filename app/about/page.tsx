"use client";
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutHeroSection from "../components/sections/AboutHeroSection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import DigitalTransformationSection from "../components/sections/DigitalTransformationSection";
// import MeetTeamSection from "../components/sections/MeetTeamSection";
import ContactSection from "../components/sections/ContactSection";
import { useFetchData } from "@/app/hooks/useApis";
import Skeleton from "react-loading-skeleton";
// import { Metadata } from "next";

// export function generateMetadata(): Metadata {
//   return {
//   title: "LATILA",
//   description: "Latila is a growing IT project management consulting firm committed to excellence.",
//   icons: "/Favicon.png",
//   };
   
// };

const Page = () => {
  const { data: aboutCards, isLoading } = useFetchData(
      "about-cards?populate=*"
    );
  
    console.log(aboutCards, "about-cards");
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {isLoading ? (
          <Skeleton height={600} count={1} />
        ) : (
          <>
            <AboutHeroSection />
            <MissionVisionSection />
            <DigitalTransformationSection aboutCards={aboutCards}/>
            {/* <MeetTeamSection /> */}
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
