import React from "react";
import { Navbar } from "./navbar/navbar";
import "./tailwind.css";
import "../fonts/clash-grotesk.css";
import { Toaster } from "sonner";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" richColors />
      {children}
    </>
  );
}
