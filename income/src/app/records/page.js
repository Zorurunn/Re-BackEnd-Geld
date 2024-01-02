"use client";
import { Container } from "@/components/Container";
import recStyle from "@/components/Css/records.module.css";
import DashBoardHeader from "@/components/DashboardHeader";
import { InputField } from "@/components/InputField";
import Details from "@/components/detailsComponents/Details";
import DetailsHeader from "@/components/detailsComponents/DetailsHeader";
import { AddCategory } from "@/components/inputComponents/AddCategory";
import { useData } from "@/components/providers/DataProvider";
import AmountRange from "@/components/recordComponents/AmountRange";
import Category from "@/components/recordComponents/Category";
import RecordHeader from "@/components/recordComponents/RecordHeader";
import Types from "@/components/recordComponents/Types";
import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const SetIsDisplayContext = createContext();
export default function Records() {
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {}, []);
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
        <AddCategory />
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

export const useRecordData = () => useContext(SetIsDisplayContext);
