import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Noble Medic Wheels",
  description:
    "Safe, reliable, and compassionate non-emergency medical transportation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
