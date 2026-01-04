import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "Noble Medic Wheels – NEMT Services in King & Pierce County",
  description: "Safe, reliable, and compassionate Non-Emergency Medical Transportation.",
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

