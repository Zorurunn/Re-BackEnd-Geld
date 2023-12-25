"use client";

export default function AmountRange() {
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <p>Amount Range</p>
      <div className="flex gap-[10px]">
        <input className="border-[2px] rounded-[10px] h-[40px]" />
        <input className="border-[2px] rounded-[10px] h-[40px]" />
      </div>
      <div>0-1000</div>
    </div>
  );
}
