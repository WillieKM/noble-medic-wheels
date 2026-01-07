export const metadata = {
  title: "FAQ – Noble Medic Wheels",
  description:
    "Frequently asked questions about Non-Emergency Medical Transportation with Noble Medic Wheels.",
};

export default function FAQPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Answers to common questions about our transportation services.</p>
      </div>

      <section>
        <h3>How far in advance should I book a ride?</h3>
        <p>We recommend booking as early as possible, especially for recurring appointments.</p>
      </section>

      <section>
        <h3>Do you provide wheelchair-accessible vehicles?</h3>
        <p>Yes. Our fleet includes ADA-compliant vehicles with securement systems.</p>
      </section>

      <section>
        <h3>Are your drivers trained and screened?</h3>
        <p>All drivers undergo background checks and receive training in rider assistance.</p>
      </section>

      <section>
        <h3>What areas do you serve?</h3>
        <p>We primarily serve King County and Pierce County.</p>
      </section>
    </section>
  );
}
