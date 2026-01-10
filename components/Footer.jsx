export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Noble Medic Wheels</h3>
          <p>Safe, reliable, and compassionate NEMT services.</p>
        </div>

      <Link href="/services">Services</Link>
<Link href="/fleet">Fleet</Link>
<Link href="/brokers">For Brokers</Link>
<Link href="/contact">Contact</Link>
<Link href="/faq">FAQ</Link>


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


