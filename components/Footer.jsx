export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Noble Medic Wheels</h3>
          <p>Safe, reliable, and compassionate NEMT services.</p>
        </div>

        <div className="footer-links">
          <a href="/services">Services</a>
          <a href="/fleet">Fleet</a>
          <a href="/brokers">For Brokers</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-info">
          <p><strong>Phone:</strong> (your number)</p>
          <p><strong>Email:</strong> (your email)</p>
          <p><strong>Service Area:</strong> King & Pierce County</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Noble Medic Wheels. All rights reserved.</p>
      </div>
    </footer>
  );
}

