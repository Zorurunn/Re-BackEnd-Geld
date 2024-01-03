"use client";
import { ImCross } from "react-icons/im";
import { useData } from "../providers/DataProvider";
import {
  AiFillAndroid,
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillAlipaySquare,
  AiFillAmazonSquare,
  AiFillAmazonCircle,
  AiFillAudio,
  AiFillAppstore,
  AiFillBackward,
  AiFillApple,
  AiFillApi,
  AiFillBank,
  AiFillAliwangwang,
  AiFillBehanceCircle,
  AiFillBehanceSquare,
  AiFillBell,
  AiFillBook,
} from "react-icons/ai";
import { useState } from "react";
import { useRecordData } from "@/app/records/page";
import { useCategory } from "../InputField";

const iconsReact = [
  <AiFillAndroid className="w-[30px] h-[30px]" />,
  <AiFillAlert className="w-[30px] h-[30px]" />,
  <AiFillAlipayCircle className="w-[30px] h-[30px]" />,
  <AiFillAlipaySquare className="w-[30px] h-[30px]" />,
  <AiFillAmazonSquare className="w-[30px] h-[30px]" />,
  <AiFillApi className="w-[30px] h-[30px]" />,
  <AiFillApple className="w-[30px] h-[30px]" />,
  <AiFillAudio className="w-[30px] h-[30px]" />,
  <AiFillBackward className="w-[30px] h-[30px]" />,
  <AiFillBell className="w-[30px] h-[30px]" />,
  <AiFillBook className="w-[30px] h-[30px]" />,
  <AiFillAppstore className="w-[30px] h-[30px]" />,
  <AiFillBank className="w-[30px] h-[30px]" />,
  <AiFillBehanceSquare className="w-[30px] h-[30px]" />,
  <AiFillBehanceCircle className="w-[30px] h-[30px]" />,
  <AiFillAliwangwang className="w-[30px] h-[30px]" />,
];

const icons = ["❤︎", "👶", "🍰", "🌸", "🖥", "📴", "🐕", "😸", "🏠"];

export function AddCategory() {
  const {
    isDisplayAddCategory,
    setIsDisplayAddCategory,
    setVisiblityInputField,
  } = useRecordData();

  // const { setSelectedCategory } = useCategory();

  const [selectedIcon, setSelectedIcon] = useState("🏠");
  const [isHiddenIcon, setisHiddenIcon] = useState(true);

  const { categories, postCategory } = useData();

  const addCategoryClicked = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const category = elements.category.value;

    const token = localStorage.getItem("token");
    console.log(selectedIcon.value);

    postCategory(selectedIcon, category, token);

    setVisiblityInputField((prev) => !prev);

    setIsDisplayAddCategory((prev) => !prev);
  };
  return (
    <div className="fixed top-[0] left-[0]  z-[20] w-full h-full flex justify-center items-center bg-[#00000070]">
      <div className="w-[500px] h-[200px] rounded-[12px] bg-[#fff] flex flex-col justify-between p-[16px]">
        <div className="flex justify-between items-center">
          <div className="text-[20px]">Add Category</div>
          <ImCross />
        </div>

        <form
          onSubmit={addCategoryClicked}
          className="flex flex-col gap-[20px]"
        >
          <div className="w-ful flex gap-[20px]">
            <div>
              <div
                className="cursor-pointer w-fit p-[10px] bg-[#fff] items-center border-[1px] border-[#D1D5DB] rounded-[10px]"
                onClick={() => {
                  setisHiddenIcon((prev) => !prev);
                }}
              >
                {selectedIcon}
              </div>
              <div className="relative">
                <div
                  className="absolute top-0 left-0 bg-[#fff] p-[20px] shadow-sm rounded-[10px] w-[250px]"
                  style={{
                    display: `${isHiddenIcon ? "none" : "block"}`,
                  }}
                >
                  <div className="grid grid-cols-4 gap-[20px]">
                    {icons.map((item, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedIcon(item);
                            setisHiddenIcon((prev) => !prev);
                          }}
                          className={`cursor-pointer`}
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full border-[#D1D5DB] "
                id="category"
              />
            </div>

            {/* <details class="dropdown">
          <summary class="m-1 btn">{selectedIcon}</summary>
          <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <div className="grid grid-cols-4 gap-[10px]">
              {icons.map((item, index) => {
                return (
                  <li key={index} onClick={() => setSelectedIcon(item)}>
                    <a>{item}</a>
                  </li>
                );
              })}
            </div>
          </ul>
        </details> */}
          </div>

          <button
            type="submit"
            className="btn btn-info bg-secondary rounded-[20px] h-[40px] hover:bg-primary w-full"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
