import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Noble Medic Wheels – NEMT Services in King & Pierce County",
  description:
    "Safe, reliable, and compassionate Non-Emergency Medical Transportation (NEMT) serving King & Pierce County.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
