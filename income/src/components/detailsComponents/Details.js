"use client";

import { useState } from "react";
import DetailCard from "./DetailCard";
import { useLayout } from "@/app/layout";
import { useData } from "../providers/DataProvider";

export default function Details() {
  const { records, setRecords } = useData();
  const { hiddenCategories } = useData();

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
          {/* .filter((item) => {
              return item;
              // item.date === " ";
            }) */}
          {records
            .filter((el) => {
              // return
              const hiddencatname = hiddenCategories.filter(
                (hiddenCategory) => {
                  return el.category !== hiddenCategory;
                  if (el.category === hiddenCategory) {
                    // return hiddenCategory;
                    // console.log(el.category, "ret false");
                    return false;
                  }
                }
              );

              console.log(el.category, " nuusan ->", hiddencatname);
              if (el.category === hiddencatname) {
                console.log(el.category, "butsaa");
              }
              return true;
            })
            .map((item) => {
              return <DetailCard key={item.id} {...item} />;
            })}
        </div>
      </div>
      <div>
        <div>Yesteday</div>
        <div className="flex flex-col gap-[10px]">
          {records
            .filter((item) => {
              return item.date === "yesterday";
            })
            .map((item) => {
              return <DetailCard key={item.id} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}
