export const metadata = {
  title: "Services | Noble Medic Wheels",
  description:
    "Non-emergency medical transportation services including wheelchair, ambulatory, dialysis, and airport medical transport across King & Pierce County.",
};

export default function ServicesPage() {
  return (
    <section className="page services-page">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h1>Our Services</h1>
        <p>
          Noble Medic Wheels provides reliable, compassionate, and
          ADA-compliant non-emergency medical transportation tailored
          to patient needs.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">
        <div className="service-card">
          <h3>Wheelchair Transportation</h3>
          <p>
            Safe, ADA-compliant wheelchair-accessible transportation with
            hydraulic lifts and securement systems.
          </p>
        </div>

        <div className="service-card">
          <h3>Ambulatory Transportation</h3>
          <p>
            Comfortable transportation for patients who can walk
            independently or with minimal assistance.
          </p>
        </div>

        <div className="service-card">
          <h3>Dialysis Appointments</h3>
          <p>
            Reliable, on-time transportation to and from dialysis centers
            with recurring scheduling available.
          </p>
        </div>

        <div className="service-card">
          <h3>Hospital & Clinic Visits</h3>
          <p>
            Transportation for medical appointments, follow-ups,
            discharges, and outpatient procedures.
          </p>
        </div>

        <div className="service-card">
          <h3>Medical Airport Transport</h3>
          <p>
            Wheelchair-accessible and assisted airport transportation
            for patients traveling for medical care.
          </p>
        </div>

        <div className="service-card">
          <h3>Broker & Facility Services</h3>
          <p>
            Professional transportation support for brokers, hospitals,
            clinics, and care facilities.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="services-cta">
        <h2>Need Transportation?</h2>
        <p>
          Contact us today to schedule a ride or discuss ongoing
          transportation needs.
        </p>
        <a href="/contact" className="btn-primary">
          Request a Ride
        </a>
      </div>
    </section>
  );
}
