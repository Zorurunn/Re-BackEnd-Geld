"use client";
import { api } from "@/common";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const router = useRouter();
  const [records, setRecords] = useState([]);
  const [categories, setCategories] = useState([]);

  const getRecords = async (token) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3002/records",

        {
          headers: {
            Authorization: token,
          },
        }
      );
      setRecords(data.records);
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async (token) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3002/categories",

        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  const postRecord = async (
    type,
    icon,
    category,
    date,
    amount,
    currency,
    token
  ) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3002/records",

        {
          type,
          icon,
          category,
          date,
          amount,
          currency,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setRecords(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    getRecords(token);
    getCategories(token);
  }, []);

  return (
    <DataContext.Provider
      value={{
        records,
        setRecords,
        categories,
        setCategories,
        getRecords,
        postRecord,
      }}
    >
      {console.log(records)}
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
