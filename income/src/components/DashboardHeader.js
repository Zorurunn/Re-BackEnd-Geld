"use client";
import { Container } from "@/components/Container";
import { VectorSvg } from "@/components/SVG/VectorSvg";
import Link from "next/link";

export default function DashBoardHeader() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-[20px]">
          <div>
            <VectorSvg />
          </div>
          <Link href={"#"}>DashBoard</Link>
          <Link href={"records"}>Records</Link>
        </div>

        <div className="flex gap-[20px]">
          <div>Record</div>
          <div>Pro</div>
        </div>
      </div>
    </div>
  );
}
