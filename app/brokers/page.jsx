
export const metadata = {
  title: "For Brokers – Noble Medic Wheels",
  description: "Contract-ready NEMT provider with full compliance, insurance, and operational transparency.",
};

export default function BrokersPage() {
  return (
    <section className="page page-brokers">
      <div className="page-header">
        <h1>For Brokers & Healthcare Partners</h1>
        <p>
          Noble Medic Wheels is a fully insured, compliance-driven Non-Emergency Medical Transportation (NEMT)
          provider serving King & Pierce County. We deliver reliable, safe, and transparent transportation
          services for Medicaid, Medicare Advantage, managed care organizations, hospitals, and care facilities.
        </p>
      </div>

      <div className="broker-section">
        <h2>Why Partner With Us?</h2>
        <ul>
          <li>Fully insured and contract-ready</li>
          <li>GPS-verified ride logs and on-time performance</li>
          <li>Driver background checks and credential verification</li>
          <li>ADA-compliant vehicles with securement systems</li>
          <li>Documented safety, sanitization, and training protocols</li>
          <li>Professional communication with riders and facilities</li>
        </ul>
      </div>

      <div className="broker-section">
        <h2>Compliance & Documentation</h2>
        <p>
          We maintain strict compliance with state and federal NEMT standards. All documentation is available
          upon request or through our onboarding packet.
        </p>

        <ul>
          <li>Business License</li>
          <li>W-9</li>
          <li>Certificate of Insurance (COI)</li>
          <li>Vehicle Inspection Records</li>
          <li>Driver Background Checks</li>
          <li>Training & Safety Certifications</li>
        </ul>

        <p className="note">
          *Digital copies can be provided during onboarding or uploaded to your broker portal.*
        </p>
      </div>

      <div className="broker-section">
        <h2>Service Area</h2>
        <p>
          We proudly serve riders across King & Pierce County, including:
        </p>

        <ul className="columns">
          <li>Auburn</li>
          <li>Kent</li>
          <li>Federal Way</li>
          <li>Renton</li>
          <li>Tacoma</li>
          <li>Puyallup</li>
          <li>Des Moines</li>
          <li>Burien</li>
        </ul>

        <p>
          Additional areas may be available depending on scheduling and contract requirements.
        </p>
      </div>

      <div className="broker-section">
        <h2>Operational Standards</h2>
        <ul>
          <li>Real-time GPS tracking</li>
          <li>Daily vehicle sanitization</li>
          <li>Routine maintenance and inspections</li>
          <li>Driver training in ADA assistance and rider care</li>
          <li>Clear communication with facilities and dispatch</li>
        </ul>
      </div>

      <div className="page-cta">
        <h2>Partner With Noble Medic Wheels</h2>
        <p>
          We are ready to support your transportation needs with professionalism, reliability, and full
          compliance. Contact us to begin onboarding or request documentation.
        </p>

        <a href="/contact" className="btn-primary">Contact Us</a>
      </div>
    </section>
  );
}

