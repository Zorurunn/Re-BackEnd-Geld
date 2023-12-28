"use client";

import { useContext, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useLayout } from "@/app/layout";
import { useData } from "../providers/DataProvider";

export default function Category() {
  const { categories, setCategories } = useData();

  // const { cards, setCards } = useLayout();
  // const [categories, setCategories] = useState([
  //   {
  //     icon: "❤︎",
  //     category: "Food & Drink",
  //     id: 0,
  //   },
  //   {
  //     icon: "💡",
  //     category: "Electricity",
  //     id: 1,
  //   },
  //   {
  //     icon: "💲",
  //     category: "Rent",
  //     id: 2,
  //   },
  //   {
  //     icon: "👶",
  //     category: "Baby",
  //     id: 3,
  //   },
  // ]);
  // const [cards, setCards] = useState([
  //   {
  //     icon: categories[0].icon,
  //     id: 0,
  //     type: "income",
  //     amount: 100,
  //     category: categories[0].category,
  //     date: "yesterday",
  //     payee: "house owner",
  //     note: "note is here",
  //   },
  //   {
  //     icon: "●",
  //     id: 0,
  //     type: "income",
  //     amount: 100,
  //     category: categories[1].category,
  //     date: "yesterday",
  //     payee: "house owner",
  //     note: "note is here",
  //   },
  //   {
  //     icon: "●",
  //     id: 0,
  //     type: "income",
  //     amount: 100,
  //     category: categories[2].category,
  //     date: "yesterday",
  //     payee: "house owner",
  //     note: "note is here",
  //   },
  //   {
  //     icon: categories[1].icon,
  //     id: 0,
  //     type: "expense",
  //     amount: 100,
  //     category: "cat and dog",
  //     date: "yesterday",
  //     payee: "house owner",
  //     note: "note is here",
  //   },
  //   {
  //     icon: categories[2].icon,
  //     id: 0,
  //     type: "expense",
  //     amount: 100,
  //     category: "clothing $ branding",
  //     date: "yesterday",
  //     payee: "house owner",
  //     note: "note is here",
  //   },
  // ]);

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <p>Category</p>
        <p>clear</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        {categories.map((item) => {
          return <CategoryCard key={item.id} {...item} />;
        })}
        <div className="text-center w-full bg-sky-400 rounded-[10px]">
          + Add Category
        </div>
      </div>
    </div>
  );
}
