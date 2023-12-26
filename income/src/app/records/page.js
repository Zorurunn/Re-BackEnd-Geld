"use client";
import { Container } from "@/components/Container";
import recStyle from "@/components/Css/records.module.css";
import DashBoardHeader from "@/components/DashboardHeader";
import { InputField } from "@/components/InputField";
import Details from "@/components/detailsComponents/Details";
import DetailsHeader from "@/components/detailsComponents/DetailsHeader";
import AmountRange from "@/components/recordComponents/AmountRange";
import Category from "@/components/recordComponents/Category";
import RecordHeader from "@/components/recordComponents/RecordHeader";
import Types from "@/components/recordComponents/Types";
import { createContext, useCallback, useContext, useState } from "react";

const SetIsDisplayContext = createContext();
export default function Records() {
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <Container bg={"bg-gray-100"}>
      <SetIsDisplayContext.Provider
        value={{
          isDisplay,
          setIsDisplay,
        }}
      >
        {isDisplay && <InputField />}
        <DashBoardHeader />
        <div className={recStyle.gridCont}>
          <div className={recStyle.gridCols}>
            <RecordHeader />
            <Types />
            <Category />
            <AmountRange />
          </div>
          <div className={recStyle.gridCols}>
            <DetailsHeader />
            <Details />
          </div>
        </div>
      </SetIsDisplayContext.Provider>
    </Container>
  );
}

export const useSetDisplay = () => useContext(SetIsDisplayContext);
