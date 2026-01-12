import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Noble Medic Wheels",
  description: "Non-Emergency Medical Transportation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: "24px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
