// /clario/search/SearchBox.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import SendButton from "@/images/search/btn-send";
import styled from "styled-components";
import useSpeechToText from "@/utils/SpeechToText";
import Input from "@/components/ui/input";

const SearchBox = ({ callBack }: { callBack?: () => void }) => {
  const { listening } = useSpeechToText();
  const [currentContent, setCurrentContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitContent();
    }
  };

  const submitContent = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e && e.preventDefault();
    console.log(e)
    // if (isLoading || listening) return;
    // if (currentContent) {
    //   setSearchContent(currentContent);
    //   setCurrentContent("");
    //   setStartSearch(true);
      // callBack && callBack();
    // }
    if (inputRef.current) {
      const value = inputRef.current.value
      inputRef.current.value = ''
      console.log(value);
    }
  };

  return (
    <form
      className="relative w-full flex items-center max-w-[742px] mx-auto"
      onSubmit={submitContent}
    >
      <Input
        ref={inputRef}
        className="flex-grow shadow-md bg-white border-gray-300 focus:border-primary"
        type="text"
        placeholder={`${true ? "열심히 답변중입니다" : "대화를 시작하세요"}`}
        value={currentContent}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute top-1/2 right-[10px] transform -translate-y-1/2 z-[100]"
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
