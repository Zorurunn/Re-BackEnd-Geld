"use client";
import { Container } from "@/components/Container";
import { WaitAMinute } from "@/components/WaitAMinute";
import { WelcomePage } from "@/components/WelcomePage";
import { createContext, useContext, useState } from "react";

export default function Home() {
  return (
    <Container>
      <WelcomePage />
      {/* <WaitAMinute /> */}
      {/* <></> */}
    </Container>
  );
}

// const usePro = () => useContext(Pro);
