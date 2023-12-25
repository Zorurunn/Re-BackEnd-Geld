"use client";

import { useContext, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useLayout } from "@/app/layout";

export default function Category() {
  const { cards, setCards } = useLayout();

  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="flex justify-between">
        <p>Category</p>
        <p>clear</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        {cards.map((item, index) => {
          item.id = index;
          return <CategoryCard key={index} {...item} />;
        })}
        <div className="text-center w-full bg-sky-400 rounded-[10px]">
          + Add Category
        </div>
      </div>
    </div>
  );
}
