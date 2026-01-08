"use client";

export default function StickyCTA() {
  return (
    <div style={{
      position: "fixed",
      bottom: "1rem",
      right: "1rem",
      background: "#0f172a",
      color: "#fff",
      padding: "0.75rem 1rem",
      borderRadius: "0.5rem",
      zIndex: 50
    }}>
      <a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Request a Ride
      </a>
    </div>
  );
}
