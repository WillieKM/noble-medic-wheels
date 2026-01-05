

  // ... rest of your form
}
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="page page-contact">
      <div className="page-header">
        <h1>Request a Ride</h1>
        <p>
          Need safe, reliable transportation to a medical appointment? Fill out the form below and our team
          will contact you to confirm your ride.
        </p>
      </div>

      {!submitted ? (
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="contact-form"
          onSubmit={() => setSubmitted(true)}
        >
          <label>
            Rider Name
            <input type="text" name="rider_name" required />
          </label>

          <label>
            Pickup Address
            <input type="text" name="pickup_address" required />
          </label>

          <label>
            Drop-off Address
            <input type="text" name="dropoff_address" required />
          </label>

          <label>
            Appointment Date & Time
            <input type="datetime-local" name="appointment_time" required />
          </label>

          <label>
            Rider Mobility Type
            <select name="mobility_type" required>
              <option value="Ambulatory">Ambulatory</option>
              <option value="Wheelchair">Wheelchair</option>
            </select>
          </label>

          <label>
            Contact Phone
            <input type="tel" name="phone" required />
          </label>

          <label>
            Additional Notes (optional)
            <textarea name="notes" rows="4"></textarea>
          </label>

          <button type="submit" className="btn-primary">Submit Request</button>
        </form>
      ) : (
        <div className="submitted-message">
          <h2>Thank You!</h2>
          <p>Your ride request has been submitted. We will contact you shortly.</p>
        </div>
      )}

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> (your number)</p>
        <p><strong>Email:</strong> (your email)</p>
        <p><strong>Hours:</strong> Monday–Saturday, 6 AM – 8 PM</p>
      </div>
    </section>
  );
}

