"use client";
import { Container } from "@/components/Container";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import styles from "@/components/Css/page.module.css";
import { LastRecordsBar } from "@/components/LastRecordsBar";
import Link from "next/link";
import CashCard from "@/components/CashCard";
import IncomeCard from "@/components/IncomeCard";
import ExpenseCard from "@/components/ExpenseCard";
import BarChar from "@/components/BarChar";
import CircleChar from "@/components/CircleChar";
import DashBoardHeader from "@/components/DashboardHeader";
import { useAuthZ } from "@/components/providers/AuthProviderZ";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashBoard() {
  const router = useRouter();

  const { isLoggedIn } = useAuthZ();

  useEffect(() => {
    console.log(`dash`);
    if (!isLoggedIn) {
      router.push("/signIn");
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) return null;

  return (
    <Container bg={"bg-gray-100"}>
      <DashBoardHeader />

      <div className="w-full h-full flex flex-col gap-[20px] pt-[40px] pb-[40px]">
        <div className={styles.grid3Cont}>
          <div className={styles.box}>
            <CashCard />
          </div>
          <div className={styles.box}>
            <IncomeCard />
          </div>
          <div className={styles.box}>
            <ExpenseCard />
          </div>
        </div>

        <div className={styles.gridSpanCont}>
          <div className={styles.box}>
            <BarChar />
          </div>
          <div className={styles.box}>
            <CircleChar />
          </div>
          <div className={`${styles.box} ${styles.boxSpan}`}>
            <LastRecordsBar />
          </div>
        </div>
      </div>
    </Container>
  );
}
