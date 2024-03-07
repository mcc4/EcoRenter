"use client";

import { IconType } from "react-icons";
import { BiChevronRight } from "react-icons/bi";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  arrow?: boolean;
  icon?: IconType;
  none?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  arrow,
  none,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        w-full
        flex
        justify-center
        items-center 
        group
        transition-all
        ${outline ? "bg-white" : "bg-green-500"}
        ${outline ? "border-black" : "border-green-500"}
        ${outline ? "text-black" : "text-white"}
        ${outline ? "hover:shadow-md" : "hover:bg-green-700 hover:border-green-700"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-2 px-3" : "py-3"}
        ${small ? "font-semibold" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
        ${arrow ? "pr-6" : ""}
        ${none ? "border-none bg-transparent hover:" : ""}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
      {arrow && (
        <BiChevronRight
          size={24}
          className="
      absolute
      right-0
      top-auto
      bottom-auto
      group-hover:-right-[.2rem]
      transition-all
    "
        />
      )}
    </button>
  );
};

export default Button;
