"use client";

import { useState } from "react";
import DetailCard from "./DetailCard";
import { useLayout } from "@/app/layout";

export default function Details() {
  const { cards, setCards } = useLayout();

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
