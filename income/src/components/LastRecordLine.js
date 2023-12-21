import styles from "@/components/Css/lastRecord.module.css";
import Link from "next/link";
export function LastRecordLine({ svg, title, time, value, currency, id, hr }) {
  return (
    <Link href={`/`}>
      <div className={styles.lineCont}>
        <div className="flex gap-[15px] justify-center items-center">
          <div className="flex  justify-center items-center">{svg}</div>
          <div>
            <div>{title}</div>
            <div className="text-[12px] text-gray-500">{time} hours ago</div>
          </div>
        </div>

        <div className="flex justify-center items-center text-[green]">
          <div>{value}</div>
          <div>{currency}</div>
        </div>
      </div>
      <div>{hr}</div>
    </Link>
  );
}
