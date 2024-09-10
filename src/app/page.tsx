"use client";

import Clario from "@/components/clario";
import { useState } from "react";

function Main() {
  const [isBright, setIsBright] = useState(true);
  const [history, setHistory] = useState([]);
  return (
    <div
      className={`flex-1 ${
        isBright ? "bg-bright-bodyBg" : "bg-dark-bodyBg"
      } p-8 h-screen`}
    >
      <Clario />
    </div>
  );
}

export default Main;
