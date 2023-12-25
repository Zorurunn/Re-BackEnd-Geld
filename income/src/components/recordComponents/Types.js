"use client";

export default function Types() {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <p>Types</p>
      <div className="flex gap-[10px]">
        <input type="radio" id="all" name="type" value={"All"} />
        <label forhtml={"all"}>All</label>
      </div>

      <div className="flex gap-[10px]">
        <input type="radio" id="income" name="type" value={"Income"} />
        <label forhtml={"all"}>Income</label>
      </div>

      <div className="flex gap-[10px]">
        <input type="radio" id="expense" name="type" value={"Expense"} />
        <label forhtml={"all"}>Expense</label>
      </div>
    </div>
  );
}
