import React, { useState } from "react";
import Image from "next/image";
// icon
import logoBright from "@/images/logo/logo_bright.png";
import logoDark from '@/images/logo/logo_dark.png'
import Search from '@/images/search/Icon_search.png'
// import IntroContent from "./IntroContent";

const NAME = `AI Chatbot`
const TEXT = `CLARIO는 아래와 같은 내용에 대한 질의응답이 가능합니다.
모든 대화 내용은 챗봇 성능 향상을 위해 저장되고 있음을 미리 알려드립니다.
보다 나은 서비스를 위해 여러 가지로 노력을 기울이고 있습니다.`;
const TEMP = [
  {
    name: "질문예시 1",
    detail: "예)......",
  },
  {
    name: "질문예시 2",
    detail: "예).....",
  },
  {
    name: "질문예시 3",
    detail: "예)....",
  },
  {
    name: "질문예시 4",
    detail: "예)..",
  },
];
export default function Intro() {
  
  const [sample, setSample] = useState([...TEMP])
  const [isBright, setIsBright ] = useState(true)
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-742 flex flex-col flex-wrap items-center justify-center gap-3 pt-5 pb-4 px-3 md:px-0">
        <div className="flex">
          <Image
            src={isBright ? logoBright : logoDark}
            alt="main"
            width={270}
            height={40}
            className="max-w-[240px] md:max-w-[270px]"
          />
          <p className="font-noto text-26 leading-75 ml-3 bg-gradient-to-r from-[rgba(34,172,57,1)] via-[rgba(5,111,184,1)] to-[rgba(46,167,224,1)] text-transparent bg-clip-text font-bold text-xl">
            {NAME}
          </p>
        </div>
        <div className="max-w-[340px] md:max-w-full text-[14px] md:text-[18px] font-[600] text-center mt-1">
          <p className="whitespace-pre text-base font-medium">{TEXT}</p>
        </div>
        <div className="w-full">
          <ul className="">
            {
              sample?.map(item => {
                return (
                  <li
                    className={`w-full my-3.5 p-3 rounded-xl cursor-pointer ${
                      isBright ? "bg-bright-sampleBg" : "bg-dark-sampleBg"
                    }`}
                    key={item?.name}
                  >
                    <div className="flex">
                      <div
                        className={`w-9 h-9 rounded-full flex
                        ${
                          isBright
                            ? "bg-bright-sampleIcon"
                            : "bg-dark-sampleIcon"
                        }`}
                      >
                        <Image className="m-auto" src={Search} alt="" />
                      </div>
                      <div className="font-bold text-[18px] leading-[36px] ml-[17px]">
                        {item?.name}
                      </div>
                    </div>
                    <div className="ml-[52px] font-noto text-[16px] font-medium leading-[21.79px] text-left">
                      {item?.detail}
                    </div>
                  </li>
                );
              })
           }
          </ul>
        </div>
      </div>
      {/* <IntroContent /> */}
    </div>
  );
};

