"use client";

import { useState } from "react";
import BrightBanner from '@/images/banner/banner_bright.png'
import DartBanner from '@/images/banner/banner_dark.png';
import Image from "next/image";

// Props 타입 정의
interface NavProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isBright, setIsBright] = useState(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-screen border-r-2 ${
          isBright
            ? "bg-bright-navBg border-bright-navLine"
            : "bg-dark-navBg border-dark-navLine"
        } p-4 w-60 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`} // z-index를 설정하여 네비게이션이 다른 콘텐츠 위에 보이도록 설정
      >
        {/* 햄버거 버튼 */}
        <div>
            <Image width={100} src={isBright ? BrightBanner : DartBanner} alt="" />
          <button
            className={`absolute top-4 right-4 text-white text-2xl focus:outline-none ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? "☰" : ""}
          </button>
        </div>

        {/* 네비게이션 메뉴 */}
        <ul className="mt-16 space-y-4">
          <li className="p-2">
            <a
              href="#"
              className={`hover:text-selected font-bold ${
                isBright ? "text-bright-navColor" : "text-dark-navColor"
              }`}
            >
              홈
            </a>
          </li>
          <li className="p-2">
            <a
              href="#"
              className={`hover:text-selected font-bold ${
                isBright ? "text-bright-navColor" : "text-dark-navColor"
              }`}
            >
              스타일 변경
            </a>
          </li>
          <li className="p-2">
            <a
              href="#"
              className={`hover:text-selected font-bold ${
                isBright ? "text-bright-navColor" : "text-dark-navColor"
              }`}
            >
              보도자료 생성
            </a>
          </li>
          <li className="p-2">
            <a
              href="#"
              className={`hover:text-selected font-bold ${
                isBright ? "text-bright-navColor" : "text-dark-navColor"
              }`}
            >
              대화이력
            </a>
          </li>
        </ul>
      </nav>

      {/* 사이드 메뉴를 열기 위한 버튼 */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 text-white text-2xl focus:outline-none z-50"
          onClick={toggleMenu}
        >
          ☰
        </button>
      )}
    </>
  );
};

export default Nav;
