import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import ServicesSection from "./components/sections/ServicesSection";
// import BlogSection from "./components/sections/BlogSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        {/* <WhyChooseUsSection /> */}
        <ServicesSection />
        {/* <BlogSection /> */}
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
