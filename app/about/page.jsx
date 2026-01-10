export const metadata = {
  title: "About Noble Medic Wheels | Trusted NEMT Provider",
  description:
    "Learn about Noble Medic Wheels, a reliable and compassionate Non-Emergency Medical Transportation provider serving King & Pierce County.",
};

export default function AboutPage() {
  return (
    <section className="page container">
      <header className="page-header">
        <h1>About Noble Medic Wheels</h1>
        <p className="text-muted">
          Compassionate, reliable non-emergency medical transportation built on
          dignity, safety, and trust.
        </p>
      </header>

      <section>
        <h2>Who We Are</h2>
        <p>
          Noble Medic Wheels is a locally operated Non-Emergency Medical
          Transportation (NEMT) provider serving King and Pierce County. We
          specialize in dependable, on-time transportation for patients
          requiring ambulatory or wheelchair-accessible rides.
        </p>
        <p>
          Our mission is simple: ensure every rider arrives safely, comfortably,
          and with dignity — every time.
        </p>
      </section>

      <section>
        <h2>What We Do</h2>
        <ul>
          <li>Dialysis transportation</li>
          <li>Wheelchair-accessible medical rides</li>
          <li>Recurring medical appointments</li>
          <li>Hospital discharges</li>
          <li>Broker and facility coordination</li>
        </ul>
      </section>

      <section>
        <h2>Our Commitment</h2>
        <p>
          Every vehicle in our fleet is professionally maintained, sanitized,
          and ADA-compliant. Our drivers are trained, courteous, and focused on
          patient safety and punctuality.
        </p>
        <p>
          We work closely with medical facilities, social workers, and brokers
          to ensure seamless coordination and dependable service.
        </p>
      </section>
    </section>
  );
}
