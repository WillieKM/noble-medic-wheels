export const metadata = {
  title: "FAQ | Noble Medic Wheels",
  description:
    "Frequently asked questions about our non-emergency medical transportation services.",
};

export default function FAQPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <ul>
        <li>Do you provide wheelchair-accessible rides? Yes.</li>
        <li>Do you serve dialysis patients? Yes.</li>
        <li>Which counties do you serve? King & Pierce County.</li>
        <li>How do I request a ride? Use our contact form.</li>
      </ul>
    </section>
  );
}
