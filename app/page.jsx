export const metadata = {
  title: "Noble Medic Wheels | Non-Emergency Medical Transportation",
  description:
    "Safe, reliable, and compassionate non-emergency medical transportation serving King & Pierce County.",
};

import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import FleetSection from "../components/FleetSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FleetSection />
      <ContactSection />
    </>
  );
}
