// /clario/index.tsx
"use client";

import React from "react";
import Search from "@/components/clario/search";

export default function Clario() {
  return (
    // <div className="fixed bottom-0 left-0 right-0 bg-white pb-[10px]">
    <div className="h-screen flex flex-col">
      <div className="px-[20px] flex-1">
        <Search />
      </div>
      <p className="text-[8px] text-gray-500 text-center pt-[7px] h-[100px]">
        인공지능은 방대한 데이터를 기반으로 답변을 생성하나 질문에 따라 부정확한
        정보가 포함될 수 있습니다.
      </p>
    </div>
  );
}
