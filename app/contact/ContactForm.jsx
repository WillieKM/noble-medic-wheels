"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
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
              <option value="">Select one</option>
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

          <button type="submit" className="btn-primary">
            Submit Request
          </button>
        </form>
      ) : (
        <div className="submitted-message">
          <h2>Thank You!</h2>
          <p>Your ride request has been submitted.</p>
        </div>
      )}
    </>
  );
}
