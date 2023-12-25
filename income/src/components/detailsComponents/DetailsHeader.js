"use client";

export default function DetailsHeader() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex gap-[10px]">
        <div>&lt;</div>
        <div>Last 30 days</div>
        <div>&gt;</div>
      </div>
      <div>
        <select name="showList">
          <option value="2">Newest First</option>
          <option value="1">medium</option>
          <option value="0">low</option>
        </select>
      </div>
    </div>
  );
}
