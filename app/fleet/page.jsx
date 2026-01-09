export const metadata = {
  title: "Our Fleet | Noble Medic Wheels",
  description:
    "View our ADA-compliant, wheelchair-accessible vehicles designed for safe and comfortable medical transportation.",
};

export default function FleetPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Our Fleet</h1>
        <p>
          Our vehicles are professionally maintained, ADA-compliant, and
          designed to ensure patient comfort and safety.
        </p>
      </div>

      <ul className="fleet-list">
        <li>Wheelchair-accessible vans with hydraulic lifts</li>
        <li>Clean, sanitized interiors after every trip</li>
        <li>Secure wheelchair locking systems</li>
        <li>Climate-controlled for patient comfort</li>
        <li>Professional, trained drivers</li>
      </ul>
    </section>
  );
}
