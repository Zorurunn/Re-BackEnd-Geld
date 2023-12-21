"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const LayoutContext = createContext();

export default function RootLayout({ children }) {
  const signIn = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status !== 200) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContext.Provider value={{ signIn }}>
          {children}
        </LayoutContext.Provider>
      </body>
    </html>
  );
}

export const useLayout = () => useContext(LayoutContext);
