export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Noble Medic Wheels",
    url: "https://noblemedicwheels.com",
    logo: "https://noblemedicwheels.com/logo.png",
    image: "https://noblemedicwheels.com/og-image.jpg",
    description:
      "Safe, reliable Non-Emergency Medical Transportation (NEMT) serving King & Pierce County.",
    telephone: "+1-253-000-0000",
    areaServed: [
      { "@type": "AdministrativeArea", name: "King County, WA" },
      { "@type": "AdministrativeArea", name: "Pierce County, WA" }
    ],
    serviceType: "Non-Emergency Medical Transportation",
    openingHours: "Mo-Sa 06:00-20:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

