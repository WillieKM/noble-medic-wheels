// This is a SERVER COMPONENT (no "use client")

export const metadata = {
  title: "Services – Noble Medic Wheels",
  description:
    "Non-Emergency Medical Transportation services including ambulatory, wheelchair, recurring appointments, and hospital discharge.",
};

export default function ServicesPage() {
  return (
    <section className="page page-services">
      <div className="page-header">
        <h1>Our Services</h1>
        <p>
          Noble Medic Wheels provides safe, reliable, and compassionate Non-Emergency Medical Transportation
          (NEMT) for riders across King & Pierce County. We support individuals, families, and healthcare
          partners with dependable transportation to essential medical care.
        </p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <h2>Ambulatory Transportation</h2>
          <p>
            Comfortable, safe rides for passengers who can walk independently or with minimal assistance.
            Ideal for routine medical appointments, follow-ups, and outpatient visits.
          </p>
          <ul>
            <li>Door-to-door assistance</li>
            <li>Scheduled pick-up and drop-off</li>
            <li>Clean, comfortable vehicles</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Wheelchair Transportation</h2>
          <p>
            ADA-compliant vehicles equipped with ramps and securement systems to safely transport wheelchair
            users to and from their appointments.
          </p>
          <ul>
            <li>Wheelchair lifts and securement</li>
            <li>Trained drivers for mobility assistance</li>
            <li>Extra time and care for loading and unloading</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Recurring Medical Appointments</h2>
          <p>
            Reliable transportation for ongoing care needs such as dialysis, physical therapy, wound care,
            and specialist visits.
          </p>
          <ul>
            <li>Pre-scheduled recurring rides</li>
            <li>Consistent timing and routing</li>
            <li>Ideal for long-term care plans</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Hospital Discharge Transportation</h2>
          <p>
            Safe, timely transport for patients being discharged from hospitals, rehabilitation centers, or
            emergency departments.
          </p>
          <ul>
            <li>Coordinated pick-up times</li>
            <li>Door-to-door support</li>
            <li>Space for caregivers or family</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Specialty & Post-Procedure Rides</h2>
          <p>
            Transportation for riders with mobility challenges or special instructions from healthcare
            providers, including post-procedure follow-ups.
          </p>
          <ul>
            <li>Gentle handling and extra care</li>
            <li>Clear communication with riders and families</li>
            <li>Flexible scheduling options</li>
          </ul>
        </div>
      </div>

      <div className="page-cta">
        <h2>Need Transportation for Medical Care?</h2>
        <p>
          Whether you're a rider, caregiver, or healthcare partner, Noble Medic Wheels is ready to help
          you get to your appointments safely and on time.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="btn-primary">Request a Ride</a>
          <a href="/brokers" className="btn-secondary">For Brokers</a>
        </div>
      </div>
    </section>
  );
}

