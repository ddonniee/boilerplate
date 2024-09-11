import React from "react";

export default function SendButton({
  width = 22,
  className = "text-[#8F8F8F]",
}: {
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        width: width,
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7936 10.793L0.683414 0.043464C0.380038 -0.112101 0.0412031 0.175694 0.147582 0.498492L2.86638 8.54348C3.27833 9.76246 4.42176 10.583 5.70847 10.583H9.45767C9.69407 10.583 9.88319 10.7697 9.88319 11.003C9.88319 11.2364 9.69407 11.4231 9.45767 11.4231H5.68894C4.41558 11.4231 3.28096 12.2269 2.85869 13.4282L0.0215033 21.4998C-0.0888151 21.8187 0.24608 22.1104 0.553396 21.9587L21.7897 11.4619C22.0694 11.3258 22.0694 10.933 21.7936 10.793Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}