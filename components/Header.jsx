"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // El-Tai Brand Colors
  const elTaiBlue = "#2B5C7A";
  const elTaiOrange = "#F28C38";

  return (
    <header className="header" style={{ backgroundColor: elTaiBlue, padding: '10px 0', borderBottom: `3px solid ${elTaiOrange}` }}>
      <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/Eltai Logo.jpg" 
            alt="El-Tai Logo" 
            style={{ height: '60px', width: 'auto', borderRadius: '4px' }} 
            onError={(e) => { e.target.style.display='none'; }} // Hides broken image if path is wrong
          />
          <span style={{ color: 'white', fontWeight: 'bold', marginLeft: '10px', fontSize: '1.2rem' }}>EL-TAI</span>
        </Link>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} style={{ color: 'white', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
          ☰
        </button>

        {/* NAV */}
        <nav className={`nav ${open ? "open" : ""}`} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link href="/contact" style={{ backgroundColor: elTaiOrange, color: 'white', padding: '8px 16px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
            Request a Ride
          </Link>
        </nav>
      </div>
    </header>
  );
}
