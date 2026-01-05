export default function ServiceAreaSection() {
  return (
    <section className="page page-service-area">
      <div className="page-header">
        <h2>Service Area</h2>
        <p>
          Noble Medic Wheels proudly serves riders across King &amp; Pierce County and surrounding communities.
        </p>
      </div>

      <div className="service-area-layout">
        <div>
          <h3>Cities We Serve</h3>
          <ul className="service-area-list">
            <li>Auburn</li>
            <li>Kent</li>
            <li>Federal Way</li>
            <li>Renton</li>
            <li>Tacoma</li>
            <li>Puyallup</li>
            <li>Des Moines</li>
            <li>Burien</li>
          </ul>
          <p className="text-muted">
            Additional locations may be available depending on schedule and contract requirements.
          </p>
        </div>

        <div className="service-area-map">
          <iframe
            title="Service Area Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d268780.738...YOUR_EMBED..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

