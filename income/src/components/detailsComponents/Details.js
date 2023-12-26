"use client";

import { useState } from "react";
import DetailCard from "./DetailCard";
import { useLayout } from "@/app/layout";

export default function Details() {
  // const { cards, setCards } = useLayout();
  const [categories, setCategories] = useState([
    {
      icon: "❤︎",
      category: "Food & Drink",
      id: 0,
    },
    {
      icon: "💡",
      category: "Electricity",
      id: 1,
    },
    {
      icon: "💲",
      category: "Rent",
      id: 2,
    },
    {
      icon: "👶",
      category: "Baby",
      id: 3,
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

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="w-full flex justify-between bg-gray-100 border-[2px] rounded-[10px] p-[15px]">
        <div className="flex gap-[5px]">
          <input type="checkbox" />
          <div>Select All</div>
        </div>
        <div>100</div>
      </div>
      <div>
        <div>Today</div>
        <div className="flex flex-col gap-[10px]">
          {cards
            .filter((item) => {
              return item.date === "today";
            })
            .map((item, index) => {
              return <DetailCard key={index} {...item} />;
            })}
        </div>
      </div>
      <div>
        <div>Yesteday</div>
        <div className="flex flex-col gap-[10px]">
          {cards
            .filter((item) => {
              return item.date === "yesterday";
            })
            .map((item, index) => {
              return <DetailCard key={index} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}
