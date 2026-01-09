"use client";

import StickyCTA from "./StickyCTA";

export default function ClientShell({ children }) {
  return (
    <>
      {children}
      <StickyCTA />
    </>
  );
}
