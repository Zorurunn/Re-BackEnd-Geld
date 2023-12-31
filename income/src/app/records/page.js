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
  const [isDisplayInputField, setIsDisplayInputField] = useState(false);
  const [isDisplayAddCategory, setIsDisplayAddCategory] = useState(false);
  const [visiblityInputField, setVisiblityInputField] = useState(true);
  const [stateUpToDate, setStateUpToDate] = useState(0);
  const [amountMax, setAmountMax] = useState(5000);
  const [amountMin, setAmountMin] = useState(0);
  const [amountValue, setAmountValue] = useState(1000);

  useEffect(() => {}, []);
  return (
    <Container bg={"bg-gray-100"}>
      <SetIsDisplayContext.Provider
        value={{
          isDisplayInputField,
          setIsDisplayInputField,
          isDisplayAddCategory,
          setIsDisplayAddCategory,
          visiblityInputField,
          setVisiblityInputField,
          stateUpToDate,
          setStateUpToDate,
          amountMax,
          setAmountMax,
          amountMin,
          setAmountMin,
          amountValue,
          setAmountValue,
        }}
      >
        {isDisplayInputField && <InputField />}
        {isDisplayAddCategory && <AddCategory />}

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

export const useRecordData = () => useContext(SetIsDisplayContext);
