export const metadata = {
  title: "About Us – Noble Medic Wheels",
  description:
    "Learn about Noble Medic Wheels, our mission, values, and commitment to safe, reliable Non-Emergency Medical Transportation in King & Pierce County.",
};

export default function AboutPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>About Noble Medic Wheels</h1>
        <p>
          Noble Medic Wheels is a locally operated Non-Emergency Medical Transportation (NEMT)
          provider dedicated to safety, dignity, and reliability.
        </p>
      </div>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide dependable, compassionate transportation for individuals who
          require assistance getting to and from medical appointments. We believe every rider
          deserves safe, respectful, and timely service.
        </p>
      </section>

      <section>
        <h2>Who We Serve</h2>
        <ul>
          <li>Seniors and individuals with mobility challenges</li>
          <li>Dialysis and recurring medical appointment patients</li>
          <li>Hospitals, clinics, and care facilities</li>
          <li>Medicaid and managed care brokers</li>
        </ul>
      </section>

      <section>
        <h2>Our Standards</h2>
        <p>
          We operate with strict adherence to safety, compliance, and professionalism. Our drivers
          are trained, screened, and committed to providing respectful assistance on every ride.
        </p>
      </section>
    </section>
  );
}
