import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechnologyOverview from "@/components/TechnologyOverview";
import EquipmentCatalog from "@/components/EquipmentCatalog";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TechnologyOverview />
      <EquipmentCatalog />
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
