'use client'

import * as React from "react";

import { cn } from "@/lib/utils";
import IconClear from "@/images/icon-clear";
import SendButton from "@/images/search/btn-send";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  size?: SizeProps;
  containerClassName?: string;
  showClear?: boolean;
  controleVisible?: boolean;
}

type SizeProps = "default" | "sm" | "lg" | "icon";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      size = "default",
      containerClassName = "",
      controleVisible = false,
      showClear = false,
      ...props
    }: InputProps,
    ref
  ) => {
    const [visible, setVisible] = React.useState(true); 

    return (
      <div className={cn(input.container, containerClassName)}>
        <input
          {...props}
          type={controleVisible ? (visible ? "text" : "password") : props.type}
          className={`relative z-10 ${InputVariants({ size, className })} ${
            props.value ? formCn.active : formCn.placeholder
          }`}
          ref={ref}
        />
        {showClear && props.value && (
          <button
            className={input.clear}
            onClick={() => {
              if (props.onChange) {
                const event = {
                  target: { value: "" },
                } as React.ChangeEvent<HTMLInputElement>;
                props.onChange(event);
              }
            }}
          >
            <IconClear />
          </button>
        )}
        <button
          onClick={() => setVisible(!visible)}
          className={input.controleVisible}
        >
          <SendButton  />
        </button>
      </div>
    );
  }
);

const input = {
  container: "relative w-full",
  clear: "absolute top-1/2 right-[16px] -translate-y-1/2",
  controleVisible: "absolute top-1/2 right-[16px] -translate-y-1/2",
};

export const formCn = {
  base: "w-full border-[0.5px] outline-none h-[42px] rounded-[6px] px-[16px] text-[15px] ",
  active: "bg-white border-black",
  placeholder:
    "bg-gray-100 border-gray-100 focus:bg-white focus:border-selected",
};

const InputVariants = ({
  size,
  className,
}: {
  size: SizeProps;
  className: string;
}) => {
  let bCn = formCn.base;
  switch (size) {
    case "lg":
      bCn += "";
      break;
    default:
      bCn += "";
  }
  bCn += " " + className;
  return cn(bCn);
};

Input.displayName = "Input";

export default Input;
