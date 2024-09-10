"use client";

import Nav from "@/components/global/nav";
import { useState } from "react";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isOpen ? "ml-60" : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
