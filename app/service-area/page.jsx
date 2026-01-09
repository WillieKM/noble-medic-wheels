export const metadata = {
  title: "Service Area | Noble Medic Wheels",
  description:
    "Noble Medic Wheels proudly serves King & Pierce County with reliable NEMT services.",
};

export default function ServiceAreaPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Service Area</h1>
        <p>
          We proudly serve patients, healthcare facilities, and brokers across
          King & Pierce County.
        </p>
      </div>

      <ul>
        <li>Seattle</li>
        <li>Renton</li>
        <li>Kent</li>
        <li>Auburn</li>
        <li>Tacoma</li>
        <li>Federal Way</li>
        <li>Surrounding communities</li>
      </ul>
    </section>
  );
}
