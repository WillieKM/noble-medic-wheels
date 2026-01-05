export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* PAGE INTRO */}
      <section className="services-hero">
        <h1>Our NEMT Services</h1>
        <p>
          Noble Medic Wheels provides safe, reliable non-emergency medical
          transportation for ambulatory and wheelchair riders. We support
          one-time and recurring medical trips across King & Pierce Counties.
        </p>

        <div className="cta-group">
          <a href="/contact" className="btn-primary">Request a Ride</a>
          <a href="tel:2533749087" className="btn-secondary">Call Now</a>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="services-list">

        <div className="service-card">
          <h2>Ambulatory Transportation</h2>
          <p>
            Safe and comfortable transportation for riders who walk independently
            or with minimal assistance. Our vehicles offer easy entry, climate
            control, and door-to-door service to help you arrive on time and
            stress-free.
          </p>
        </div>

        <div className="service-card">
          <h2>Wheelchair Transportation</h2>
          <p>
            Wheelchair-accessible vans equipped with hydraulic lifts and securement
            systems for safe transport. Our trained drivers assist with boarding,
            positioning, and unloading to ensure a dignified and comfortable ride.
          </p>
        </div>

        <div className="service-card">
          <h2>Recurring Medical Appointments</h2>
          <p>
            Reliable scheduled rides for dialysis, physical therapy, and ongoing
            treatments. We prioritize punctuality and consistency so riders never
            miss critical care.
          </p>
        </div>

        <div className="service-card">
          <h2>Hospital Discharge Transportation</h2>
          <p>
            Safe transportation home following hospital discharge, rehabilitation,
            or clinic visits. We provide patient, careful service for riders who may
            need extra time or support.
          </p>
        </div>

        <div className="service-card">
          <h2>Specialty & Post-Procedure Rides</h2>
          <p>
            Transportation for outpatient procedures and specialty appointments
            when a safe, non-emergency ride is required. Ideal for riders recovering
            from treatment or needing additional assistance.
          </p>
        </div>

        <p className="services-helper">
          Need help choosing the right service? Call us and we’ll guide you based
          on mobility needs and appointment type.
        </p>

      </section>

      {/* SAFETY SECTION */}
      <section className="safety-standards">
        <h2>Safety & Care Standards</h2>
        <ul>
          <li>ADA-compliant vehicles and wheelchair securement systems</li>
          <li>Trained, professional, and courteous drivers</li>
          <li>Daily vehicle cleaning and disinfection</li>
          <li>High-touch surfaces sanitized between every ride</li>
          <li>Climate-controlled vehicles for year-round comfort</li>
          <li>Door-to-door assistance when needed</li>
        </ul>
      </section>

      {/* REFERRAL / MEDICAL PARTNERS */}
      <section className="referral-info">
        <h2>For Clinics, Case Managers, and Caregivers</h2>
        <p>
          We assist with transportation coordination for recurring appointments
          and discharge rides. If you’re scheduling on behalf of a patient, our
          team can help confirm mobility needs, pickup instructions, and timing to
          reduce missed appointments.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>Request a Ride Today</h2>
        <p>
          Call us or submit a request online. Scheduled and short-notice rides
          available when possible.
        </p>

        <div className="cta-group">
          <a href="/contact" className="btn-primary">Request a Ride</a>
          <a href="tel:2533749087" className="btn-secondary">Call Now</a>
        </div>
      </section>

    </main>
  );
}
