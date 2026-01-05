"use client";

import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  return (
    <main className="contact-page">
      <h1>Contact Us</h1>

      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

        <textarea
          placeholder="How can we help?"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
