"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Brand Colors
  const elTaiBlue = "#2B5C7A";
  const elTaiOrange = "#F28C38";

  return (
    <header className="header" style={{ backgroundColor: elTaiBlue, padding: '10px 0' }}>
      <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* LOGO SECTION */}
        <Link href="/" className="logo" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/Eltai Logo.jpg" 
            alt="El-Tai Medical Transportation" 
            style={{ height: '60px', width: 'auto', borderRadius: '4px' }} 
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="menu-toggle" 
          onClick={() => setOpen(!open)}
          style={{ color: 'white', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ☰
        </button>

        {/* NAVIGATION LINKS */}
        <nav className={`nav ${open ? "open" : ""}`} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
          <Link href="/fleet" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Fleet</Link>
          <Link href="/service-area" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Service Area</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>FAQ</Link>
          <Link href="/brokers" onClick={() => setOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>For Brokers</Link>
          
          {/* ORANGE CALL TO ACTION BUTTON */}
          <Link
            href="/contact"
            className="btn-nav"
            onClick={() => setOpen(false)}
            style={{ 
                backgroundColor: elTaiOrange, 
                color: 'white', 
                padding: '10px 20px', 
                borderRadius: '5px', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Request a Ride
          </Link>
        </nav>
      </div>

      {/* Basic Mobile Support Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav {
            display: ${open ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            background-color: ${elTaiBlue};
            padding: 20px;
            z-index: 100;
          }
          .menu-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
