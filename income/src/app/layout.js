"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useContext, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

const LayoutContext = createContext();

export default function RootLayout({ children }) {
  const [categories, setCategories] = useState([
    {
      icon: "❤︎",
      category: "Food & Drink",
    },
    {
      icon: "❤💡",
      category: "Electricity",
    },
    {
      icon: "💲",
      category: "Rent",
    },
    {
      icon: "👶",
      category: "Baby",
    },
  ]);
  const [cards, setCards] = useState([
    {
      icon: categories[0].icon,
      id: 0,
      type: "income",
      amount: 100,
      category: categories[0].category,
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: "●",
      id: 0,
      type: "income",
      amount: 100,
      category: categories[1].category,
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: "●",
      id: 0,
      type: "income",
      amount: 100,
      category: categories[2].category,
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: categories[1].icon,
      id: 0,
      type: "expense",
      amount: 100,
      category: "cat and dog",
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
    {
      icon: categories[2].icon,
      id: 0,
      type: "expense",
      amount: 100,
      category: "clothing $ branding",
      date: "yesterday",
      payee: "house owner",
      note: "note is here",
    },
  ]);
  const signIn = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: "test token",
          },
        }
      );

      const { token } = data;

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutContext.Provider
          value={{ signIn, cards, setCards, categories, setCategories }}
        >
          {children}
        </LayoutContext.Provider>
      </body>
    </html>
  );
}

export const useLayout = () => useContext(LayoutContext);
