"use client";

export default function DetailCard({ icon, category, amount, date }) {
  return (
    <div className="w-full flex justify-between bg-gray-100 border-[2px] rounded-[10px] p-[15px]">
      <div className="flex gap-[10px]">
        <div>
          <input type="checkbox" />
        </div>
        <div>{icon}</div>
        <div className="flex flex-col">
          <div>{category}</div>
          <div>{date}</div>
        </div>
      </div>
      <div>{amount}</div>
    </div>
  );
}
