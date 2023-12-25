import { useLayout } from "@/app/layout";
import styles from "@/components/Css/input.module.css";
import { useEffect, useState } from "react";

const types = [
  {
    label: "Expense",
    color: "#0166FF",
  },
  {
    label: "Income",
    color: "#D1D5DB",
  },
];
const dates = [
  {
    label: "Start Date",
    color: "#0166FF",
  },
  {
    label: "End Date",
    color: "#D1D5DB",
  },
];

export const InputField = () => {
  const { categories, setCategories } = useLayout();
  const [color, setColor] = useState("Expense");

  const clicked = (e) => {
    const active = e.target.innerHTML;
    setColor(active);
  };

  return (
    <>
      <div className={styles.hidden}>
        <form className="w-full flex justify-center items-center">
          <div className="w-[40%] flex flex-col justify-center items-center p-[20px]">
            <div className="w-full flex justify-between">
              <div>Add record</div>
              <div>X</div>
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
                            color === item.label ? "#0166FF" : "#D1D5DB"
                          }`,
                        }}
                      >
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                <div className="w-full bg-gray-50" id="Amount">
                  <div>Amount</div>
                  <input
                    className="bg-gray-50"
                    type="text"
                    placeholder={`000.00`}
                  />
                </div>

                <div className="w-full bg-gray-50" id="Category">
                  <div>Category</div>
                  <select className="w-full" name="categoryList">
                    {categories.map((item) => {
                      return (
                        <option value={item.category}> {item.category} </option>
                      );
                    })}
                  </select>
                </div>

                <div className="w-full h-fit flex bg-gray-300 rounded-[20px] gap-[20px]">
                  {dates.map((item, index) => {
                    return (
                      <div>
                        <div>{item.label}</div>
                        <input
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
                  type="submit"
                >
                  Add record
                </button>
              </div>
              <div className={styles.gridBox}>
                <div className="flex flex-col justify-between gap-[20px]">
                  <div className="w-full bg-gray-50" id="Payee">
                    <div>Payee</div>
                    <input
                      className="bg-gray-50"
                      type="text"
                      placeholder={`000.00`}
                    />
                  </div>

                  <div className="w-full bg-gray-50 grow" id="Note">
                    <div>Note</div>
                    <textarea
                      className="bg-gray-50"
                      placeholder={`note is here`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

{
  /* <form className={styles.addForm} onSubmit={props.getValue}>
          <h1 className="text-[60px] bg-green-500 rounded-[5px] col-span-2 ">
            Add New
          </h1>

          <div className="bg-green-500 rounded-[5px] pl-[10px]">title:</div>
          <div>
            <input id="title" type="text" />
          </div>

          <div className="bg-green-500 rounded-[5px] pl-[10px] h-fit">
            description:
          </div>
          <div>
            <textarea
              id="description"
              className={styles.description}
            ></textarea>
          </div>
          <div className="bg-green-500 rounded-[5px] pl-[10px]">
            <label htmlFor="status">Status:</label>
          </div>
          <div>
            <select name="statusList">
              <option value="toDo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="stuck">Stuck</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="bg-green-500 rounded-[5px] pl-[10px]">
            <label htmlFor="priority">Priority:</label>
          </div>
          <div>
            <select name="priorityList">
              <option value="2">high</option>
              <option value="1">medium</option>
              <option value="0">low</option>
            </select>
          </div>
          <div className="col-span-2">
            <button
              className="bg-green-500  rounded-[5px] w-full"
              type="submit"
            >
              Add
            </button>
          </div>
        </form> */
}
