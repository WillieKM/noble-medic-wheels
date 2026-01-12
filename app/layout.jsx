import "./globals.css";
import ClientShell from "../components/ClientShell";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientShell>
          <main className="container page">
            {children}
          </main>
        </ClientShell>
      </body>
    </html>
  );
}
