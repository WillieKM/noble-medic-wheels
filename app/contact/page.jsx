import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact – Noble Medic Wheels",
  description:
    "Request a ride or contact Noble Medic Wheels for safe, reliable Non-Emergency Medical Transportation in King & Pierce County.",
};

export default function ContactPage() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Request a Ride</h1>
        <p>
          Need safe, reliable transportation to a medical appointment? Fill out
          the form below and our team will contact you to confirm your ride.
        </p>
      </div>

      <ContactForm />

      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> (your phone number)</p>
        <p><strong>Email:</strong> (your email address)</p>
        <p><strong>Hours:</strong> Monday–Saturday, 6 AM – 8 PM</p>
      </section>
    </section>
  );
}
