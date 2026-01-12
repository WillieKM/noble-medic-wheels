"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Noble Medic Wheels
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/fleet" onClick={() => setOpen(false)}>Fleet</Link>
          <Link href="/service-area" onClick={() => setOpen(false)}>Service Area</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/brokers" onClick={() => setOpen(false)}>For Brokers</Link>
          <Link
            href="/contact"
            className="btn-nav"
            onClick={() => setOpen(false)}
          >
            Request a Ride
          </Link>
        </nav>
      </div>
    </header>
  );
}
