"use client";

import { useLayout } from "@/app/layout";
import styles from "@/components/Css/input.module.css";
import { useEffect, useState } from "react";
import CategoryLine from "./CategoryLine";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useCategory } from "../InputField";
import { useRecordData } from "@/app/records/page";
import { useData } from "../providers/DataProvider";

export function ChooseCategory() {
  const [isHidden, setIshidden] = useState(true);
  const { selectedCategory, setSelectedCategory } = useCategory();
  const { categories } = useData();

  const categoryClicked = (event) => {
    const x = categories.filter((item, index) => {
      if (index === Number(event.target.id)) {
        return item;
      }
    });
    setSelectedCategory(x[0]);
    setIshidden((prev) => !prev);
  };

  const addCategory = (event) => {
    postCategories("●", "Rents");
  };

  return (
    <div className="w-full" id="Category">
      <div className=""> Category</div>
      <div
        onClick={() => {
          setIshidden((prev) => !prev);
        }}
        className="cursor-pointer flex justify-between p-[10px] bg-gray-50 items-center"
      >
        <div>
          {selectedCategory === null ? (
            <div className="flex gap-[10px] p-[10px]">
              <div>Find or choose category</div>
            </div>
          ) : (
            <CategoryLine {...selectedCategory} />
          )}
        </div>
        <div>🔽</div>
        {/* {selectedCategory === null ? (
          <div
            className="cursor-pointer flex  p-[10px] bg-gray-50"
            style={{ justifyContent: "space-between" }}
          >
            <div>Find or Choose Category</div>
            <div>🔽</div>
          </div>
        ) : (
          <CategoryLine {...selectedCategory} />
        )} */}
      </div>
      <div className="relative">
        <div
          className="absolute top-0 left-0 bg-gray-50 w-full"
          style={{
            display: `${isHidden ? "none" : "block"}`,
          }}
        >
          <div
            className="flex gap-[10px] p-[10px] cursor-pointer"
            onClick={addCategory}
          >
            <div>+</div>
            <div className="text-black"> Add Category</div>
          </div>

          {categories.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedCategory(item);
                  setIshidden((prev) => !prev);
                }}
                className={`cursor-pointer`}
              >
                <CategoryLine {...item} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <select
      className={styles.selectBox}
      name="categoryList"
      required
    >
      <option value="" selected disabled>
        Choose or Find category
      </option>
      {categories.map((item, index) => {
        return (
          <option value={item.category}>
            <CategoryLine key={index} {...item} />
          </option>
        );
      })}
    </select> */}
    </div>
  );
}
