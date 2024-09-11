"use client";

import React, { useEffect, useState, useRef } from "react";
import SendButton from "@/images/search/btn-send"
import styled from "styled-components";
// import { useClarioState } from "@/contexts/clario";
// import SpeechBox from "../action/speech";
import useSpeechToText from "@/utils/SpeechToText";
import Input from "@/components/ui/input";

const SearchBox = ({
  callBack,
}: {
  callBack?: () => void;
}) => {
//   const { setSearchContent, isLoading, setStartSearch } = useClarioState();
  const { listening } = useSpeechToText();
  const [currentContent, setCurrentContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // input값 바뀔 때마다 currentContent에 저장
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentContent(e.target.value);
  };

  // 엔터키 입력 시 submitContent 함수 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitContent();
    }
  };

  // currentContent가 있을 때만 searchContent에 저장
  const submitContent = async (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e && e.preventDefault();
    // if (isLoading || listening) return;
    // if (currentContent) {
    //   setSearchContent(currentContent);
    //   setCurrentContent("");
    //   setStartSearch(true);
    //   callBack && callBack();
    // }
  };
//   useEffect(() => {
//     if(isLoading) setCurrentContent("");
//   }, [isLoading]);

  return (
    <form className="relative w-full" onSubmit={submitContent}>
      <Input
        ref={inputRef}
        className="shadow-md bg-white border-gray-300 focus:border-primary"
        type="text"
        placeholder={`${
          true ? "열심히 답변중입니다" : "대화를 시작하세요"
        }`}
        value={currentContent}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute top-1/2 right-[10px] transform -translate-y-1/2"
        onClick={submitContent}
      >
        <SendButton
          className={`${currentContent ? "text-primary" : "text-[#8F8F8F]"}`}
        />
      </button>
    </form>
  );
};

export default SearchBox;