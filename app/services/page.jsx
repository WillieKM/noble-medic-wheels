export const metadata = {
  title: "NEMT Services | Noble Medic Wheels",
  description:
    "Reliable Non-Emergency Medical Transportation including dialysis, wheelchair, ambulatory, and hospital discharge services in King & Pierce County.",
};

export default function ServicesPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>
          Noble Medic Wheels provides safe, reliable, and compassionate
          non-emergency medical transportation across King & Pierce County.
        </p>
      </div>

      <div className="services-grid">
        <Service
          title="Dialysis Transportation"
          description="Recurring and scheduled transportation to and from dialysis centers with punctuality and care."
        />

        <Service
          title="Wheelchair-Accessible Rides"
          description="ADA-compliant vehicles equipped with secure lifts and trained assistance."
        />

        <Service
          title="Ambulatory Medical Appointments"
          description="Doctor visits, follow-ups, outpatient procedures, and specialty care appointments."
        />

        <Service
          title="Hospital Discharges"
          description="Coordinated, safe discharge transportation from hospitals and medical facilities."
        />
      </div>
    </section>
  );
}

function Service({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
