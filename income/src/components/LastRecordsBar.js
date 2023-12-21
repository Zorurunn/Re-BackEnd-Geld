import { useState } from "react";
import { LastRecordLine } from "./LastRecordLine";
import { HomeSvg } from "./SVG/HomeSvg";
import styles from "@/components/Css/lastRecord.module.css";

export function LastRecordsBar(props) {
  const [data, setData] = useState([
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
    {
      svg: <HomeSvg />,
      title: "Lending & Renting",
      time: 3,
      value: 1000,
      currency: "$",
      hr: <hr className={styles.hrStyle} />,
      id: 0,
    },
  ]);

  console.log(data.length);
  return (
    <div
      className={`${styles.allCont} `}
      style={{
        gridTemplateRows: `repeat(${data.length + 1} ,1fr)`,
      }}
    >
      <div className={styles.head}>
        <div className="p-[15px]">Last Records</div>
        <hr className="w-full" />
      </div>

      {data.map((item, index) => {
        item.id = index;
        return <LastRecordLine key={index} {...item} />;
      })}
    </div>
  );
}
