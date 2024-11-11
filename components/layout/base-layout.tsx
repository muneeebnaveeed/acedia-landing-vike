import React from "react";
import { Navbar } from "./navbar/navbar";
import "./tailwind.css";

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
