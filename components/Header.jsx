"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          Noble Medic Wheels
        </Link>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link href="/services">Services</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/brokers">For Brokers</Link>
          <Link href="/contact" className="btn-nav">Request a Ride</Link>
        </nav>
      </div>
    </header>
  );
}


