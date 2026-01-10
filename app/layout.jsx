import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import Schema from "../components/Schema";

export const metadata = {
  title: "Noble Medic Wheels – NEMT Services in King & Pierce County",
  description:
    "Safe, reliable, and compassionate Non-Emergency Medical Transportation serving King & Pierce County.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Schema />
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
