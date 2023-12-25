"use client";

import { useState } from "react";

export default function CategoryCard({ category }) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-[5px]">
        <div>👁</div>
        <div>{category}</div>
      </div>
      <div>▶️</div>
    </div>
  );
}
