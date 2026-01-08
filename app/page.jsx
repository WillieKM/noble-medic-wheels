

export default function HomePage() {
  return (
    <>
      <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Noble Medic Wheels",
          url: "https://noblemedicwheels.com",
          areaServed: "Washington State",
          serviceType: "Non-Emergency Medical Transportation",
        }}
      />

      <main>
        {/* page content */}
      </main>
    </>
  );
}
