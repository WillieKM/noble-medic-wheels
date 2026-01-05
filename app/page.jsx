// This is a SERVER COMPONENT (no "use client" needed)

import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import FleetSection from "../components/FleetSection";
import BrokerSection from "../components/BrokerSection";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Noble Medic Wheels – NEMT Services in King & Pierce County",
  description:
    "Safe, reliable, and compassionate Non-Emergency Medical Transportation (NEMT) serving King & Pierce County.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FleetSection />
      <BrokerSection />
      <ContactSection />
    </>
  );
}

