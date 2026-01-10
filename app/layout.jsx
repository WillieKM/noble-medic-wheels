import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ border: "4px solid red", padding: "20px" }}>
          <h1>LAYOUT WRAPPER</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
