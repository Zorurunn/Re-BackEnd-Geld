"use client";
import { Container } from "@/components/Container";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import styles from "@/components/Css/page.module.css";
import { LastRecordsBar } from "@/components/LastRecordsBar";
import Link from "next/link";

export default function DashBoard() {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex gap-[20px]">
          <div>
            <VectorSvg />
          </div>
          <div>DashBoard</div>
          <div>Records</div>
        </div>

        <div className="flex gap-[20px]">
          <div>Record</div>
          <div>Pro</div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-[20px] pt-[40px] pb-[40px]">
        <div className={styles.grid3Cont}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>

        <div className={styles.gridSpanCont}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={`${styles.box} ${styles.boxSpan}`}>
            <LastRecordsBar />
          </div>
        </div>
      </div>
    </Container>
  );
}
