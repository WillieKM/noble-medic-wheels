export const metadata = {
  title: "Thank You – Noble Medic Wheels",
  description: "Thank you for contacting Noble Medic Wheels.",
};

export default function ThankYouPage() {
  return (
    <section className="page page-thank-you">
      <div className="page-header text-center">
        <h1>Thank You</h1>
        <p>
          We have received your information. A member of our team will contact you shortly to confirm details.
        </p>
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </section>
  );
}

