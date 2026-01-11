"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function ClientShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
