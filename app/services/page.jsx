export const metadata = {
  title: "Our Services – Noble Medic Wheels",
  description:
    "Explore our Non-Emergency Medical Transportation services including dialysis, wheelchair transport, and medical appointments.",
};

export default function ServicesPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Our Transportation Services</h1>
        <p>
          We provide safe, reliable Non-Emergency Medical Transportation services tailored to
          patients, families, and healthcare partners.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <h3>Dialysis Transportation</h3>
          <p>Reliable recurring rides to and from dialysis centers.</p>
        </div>

        <div className="service-card">
          <h3>Doctor & Hospital Appointments</h3>
          <p>Transportation for routine, follow-up, and specialty visits.</p>
        </div>

        <div className="service-card">
          <h3>Wheelchair Transportation</h3>
          <p>ADA-compliant vehicles with securement systems.</p>
        </div>

        <div className="service-card">
          <h3>Airport Medical Transport</h3>
          <p>Safe and comfortable transportation for medical-related travel.</p>
        </div>

        <div className="service-card">
          <h3>Facility Discharges</h3>
          <p>Coordinated pickups from hospitals and care facilities.</p>
        </div>
      </div>
    </section>
  );
}
