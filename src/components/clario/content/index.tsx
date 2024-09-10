"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Intro from "../intro/intro";

const InitContent = () => {
  // const { startSearch, isMenuOpen, setIsMenuOpen } = useClarioState();

  return (
    <main
      className={` relative flex flex-1 flex-col items-center ${
        true ? " md:justify-start" : "md:justify-center"
      } w-full h-full px-0 md:px-5
      `}
    >
      <div
        className={`transition-all duration-300 ease-in-out ${
          true
            ? "fixed top-3 left-[272px] opacity-0"
            : "fixed top-3 left-3 cursor-pointer opacity-100"
        }`}
        onClick={() => {
          // setIsMenuOpen(!isMenuOpen);
        }}
      >
        {/* <Image src={openerImage} alt="menu" width={30} height={30} /> */}
      </div>
      <Intro />
      {/* {startSearch ? <ContentList /> : <Intro />} */}
    </main>
  );
};

export default InitContent;
