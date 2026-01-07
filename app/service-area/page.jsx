export const metadata = {
  title: "Service Area – Noble Medic Wheels",
  description:
    "Noble Medic Wheels proudly serves King County and Pierce County with reliable Non-Emergency Medical Transportation.",
};

export default function ServiceAreaPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Our Service Area</h1>
        <p>
          We provide Non-Emergency Medical Transportation throughout King and Pierce County.
        </p>
      </div>

      <section>
        <h2>King County</h2>
        <ul className="columns">
          <li>Auburn</li>
          <li>Kent</li>
          <li>Renton</li>
          <li>Federal Way</li>
          <li>Burien</li>
          <li>Des Moines</li>
        </ul>
      </section>

      <section>
        <h2>Pierce County</h2>
        <ul className="columns">
          <li>Tacoma</li>
          <li>Puyallup</li>
          <li>Lakewood</li>
          <li>Spanaway</li>
        </ul>
      </section>

      <section>
        <p className="note">
          Additional areas may be available based on scheduling and contract requirements.
        </p>
      </section>
    </section>
  );
}
