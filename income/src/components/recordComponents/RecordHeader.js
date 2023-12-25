"use client";

export default function RecordHeader() {
  const showWindow = () => {};
  return (
    <div className="w-full flex flex-col gap-[20px]">
      <div className="text-[24px]">Records</div>
      <button
        onClick={showWindow}
        className="w-full h-[30px] bg-[blue] text-white rounded-[20px]"
      >
        + Add
      </button>

      <input
        className="w-full border-[2px] rounded-[5px] h-[30px] pl-[20px]"
        type="text"
        placeholder="search"
      />
    </div>
  );
}
