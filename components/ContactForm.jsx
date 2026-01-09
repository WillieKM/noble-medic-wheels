"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return <p>Thank you. We will contact you shortly.</p>;
  }

  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      onSubmit={() => setSent(true)}
    >
      <input name="name" placeholder="Full Name" required />
      <input name="phone" placeholder="Phone Number" required />
      <button type="submit">Submit</button>
    </form>
  );
}
