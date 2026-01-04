export const metadata = {
  title: "Fleet – Noble Medic Wheels",
  description: "Explore our ADA-compliant, professionally maintained NEMT vehicles.",
};

export default function FleetPage() {
  return (
    <section className="page page-fleet">
      <div className="page-header">
        <h1>Our Fleet</h1>
        <p>
          Noble Medic Wheels operates a clean, safe, and ADA-compliant fleet designed to meet the needs of riders
          across King &amp; Pierce County. Every vehicle is professionally maintained, sanitized, and equipped
          for comfort and accessibility.
        </p>
      </div>

      <div className="fleet-grid">
        <div className="fleet-card">
          <img src="/fleet1.jpg" alt="Wheelchair-accessible van" />
          <h2>Wheelchair-Accessible Vans</h2>
          <p>
            Equipped with hydraulic lifts, securement systems, and extra space for caregivers. Ideal for riders
            with mobility challenges.
          </p>
        </div>

        <div className="fleet-card">
          <img src="/fleet2.jpg" alt="Ambulatory transport vehicle" />
          <h2>Ambulatory Transport Vehicles</h2>
          <p>
            Comfortable seating, climate control, and easy entry for riders who walk independently or with
            assistance.
          </p>
        </div>

        <div className="fleet-card">
          <img src="/fleet3.jpg" alt="Clean interior of NEMT vehicle" />
          <h2>Sanitized Interiors</h2>
          <p>
            All vehicles are cleaned and disinfected daily, with high-touch surfaces sanitized between rides.
          </p>
        </div>
      </div>

      <div className="fleet-details">
        <h2>Fleet Standards</h2>
        <ul>
          <li>ADA-compliant ramps and lifts</li>
          <li>Securement systems for wheelchairs</li>
          <li>GPS tracking and route monitoring</li>
          <li>Routine maintenance and inspections</li>
          <li>Safety equipment and first aid kits</li>
        </ul>
      </div>

      <div className="page-cta">
        <h2>Need a Safe, Comfortable Ride?</h2>
        <p>
          Our fleet is ready to serve riders with diverse needs — from ambulatory to wheelchair transport.
        </p>
        <a href="/contact" className="btn-primary">Request a Ride</a>
      </div>
    </section>
  );
}


