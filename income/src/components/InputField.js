import { useLayout } from "@/app/layout";
import styles from "@/components/Css/input.module.css";
import { createContext, useContext, useEffect, useState } from "react";
import CategoryLine from "./inputComponents/CategoryLine";
import { ChooseCategory } from "./inputComponents/ChooseCategory";
import { useRecordData, useSetDisplay } from "@/app/records/page";
import axios from "axios";
import { useData } from "./providers/DataProvider";

const types = [
  {
    label: "Expense",
    color: "#0166FF",
  },
  {
    label: "Income",
    color: "#16A34A",
  },
];
const dates = [
  {
    label: "Start Date",
    color: "#0166FF",
    id: "startDate",
  },
  {
    label: "End Date",
    color: "#D1D5DB",
    id: "endDate",
  },
];

const SelectedCat = createContext();

export const InputField = () => {
  const { postRecord } = useData();
  const {
    setIsDisplayInputField,
    visiblityInputField,
    setVisiblityInputField,
  } = useRecordData();
  const [color, setColor] = useState("Expense");
  const [isHidden, setIshidden] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const clicked = (e) => {
    const active = e.target.innerHTML;
    setColor(active);
  };

  const submitted = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const type = "income";
    const icon = selectedCategory.icon;
    const category = selectedCategory.category;
    const date = elements.startDate.value;
    const amount = elements.amount.value;
    const currency = "T";

    // console.log(selectedCategory);
    // console.log(`startDate: ${elements.startDate.value}`);
    // console.log(`endDate: ${elements.endDate.value}`);
    // console.log(`payee: ${elements.payee.value}`);
    // console.log(`note: ${elements.note.value}`);

    // const title = e.target.elements.title.value;
    // const description = event.target.elements.description.value;
    // const status = event.target.elements.statusList.value;
    // const priority = event.target.elements.priorityList.value;

    const token = localStorage.getItem("token");

    postRecord(type, icon, category, date, amount, currency, token);

    setIsDisplayInputField((prev) => !prev);
  };
  {
    /* ${
          visiblityInputField ? "visible" : "invisible"
        } */
  }
  return (
    <SelectedCat.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      <div
        className={`fixed top-[0] left-[0]  z-[20] w-full h-full flex justify-center items-center bg-[#00000070] ${
          visiblityInputField ? "visible" : "invisible"
        } `}
      >
        <form
          className=" flex justify-center items-center bg-[#fff] rounded-[10px]"
          onSubmit={submitted}
        >
          <div className="w-full flex flex-col justify-center items-center p-[20px]">
            <div className="w-full flex justify-between">
              <div>Add record</div>
              <div
                onClick={() => {
                  setIsDisplayInputField((prev) => !prev);
                }}
                className={`cursor-pointer`}
              >
                X
              </div>
            </div>
            <hr />

            <div className={styles.gridCont}>
              <div className={styles.gridBox}>
                <div className="w-full h-fit flex bg-[#D1D5DB] rounded-[20px]">
                  {types.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={clicked}
                        className={`w-full bg-gray-50 rounded-[20px] cursor-pointer grow p-[10px]`}
                        style={{
                          background: `${
                            color === item.label ? item.color : "#D1D5DB"
                          }`,
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                <div className="w-full bg-gray-50">
                  <div>Amount</div>
                  <input
                    id="amount"
                    className="bg-gray-50"
                    type="text"
                    placeholder={`000.00`}
                  />
                </div>

                <ChooseCategory />

                <div className="w-full h-fit flex bg-gray-300 rounded-[20px] gap-[20px]">
                  {dates.map((item, index) => {
                    return (
                      <div key={index}>
                        <div>{item.label}</div>
                        <input
                          id={item.id}
                          type="date"
                          key={index}
                          className={`w-full bg-gray-50 rounded-[20px] cursor-pointer grow p-[10px] border-[5px]`}
                          style={{
                            background: `${
                              color === item.label ? "#0166FF" : "#D1D5DB"
                            }`,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>

                <button
                  className="w-full bg-sky-400 rounded-[10px]"
                  style={{
                    background: `${
                      color === "Expense" ? "#0166FF" : "#16A34A"
                    }`,
                  }}
                  type="submit"
                >
                  Add record
                </button>
              </div>
              <div className={styles.gridBox}>
                <div className="flex flex-col justify-between gap-[20px]">
                  <div className="w-full bg-gray-50">
                    <div>Payee</div>
                    <input
                      id="payee"
                      className="bg-gray-50"
                      type="text"
                      placeholder={`000.00`}
                    />
                  </div>

                  <div className="w-full bg-gray-50 grow">
                    <div>Note</div>
                    <textarea
                      id="note"
                      className="bg-gray-50 w-full"
                      placeholder={`note is here`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </SelectedCat.Provider>
  );
};

export const useCategory = () => useContext(SelectedCat);
