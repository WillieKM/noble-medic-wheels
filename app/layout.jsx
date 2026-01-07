<body>
  <Header />
  <main className="container">{children}</main>
  <Footer />
</body>

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Noble Medic Wheels – NEMT Services in King & Pierce County",
  description: "Safe, reliable, and compassionate Non-Emergency Medical Transportation (NEMT) serving King & Pierce County.",
  metadataBase: new URL("https://noblemedicwheels.com"),
  openGraph: {
    title: "Noble Medic Wheels – NEMT Services",
    description: "Contract-ready, compliant NEMT provider serving King & Pierce County.",
    url: "https://your-domain.com",
    siteName: "Noble Medic Wheels",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Noble Medic Wheels fleet vehicle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Medic Wheels – NEMT Services",
    description: "Safe, reliable medical transportation in King & Pierce County.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

