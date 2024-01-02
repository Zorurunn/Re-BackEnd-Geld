"use client";
import { ImCross } from "react-icons/im";
export function AddCategory() {
  return (
    <div className="w-[500px] h-[200px] rounded-[12px] bg-[#fff] flex flex-col justify-between p-[16px]">
      <div className="flex justify-between items-center">
        <div className="text-[20px]">Add Category</div>
        <ImCross />
      </div>
      <div>middle</div>
      <button class="btn btn-info bg-[#16A34A] rounded-[20px] h-[40px]">
        Info
      </button>
    </div>
  );
}
