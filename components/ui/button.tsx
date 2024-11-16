import { FC, ReactNode } from "react";
import { cn } from "../../lib/cn";

export const Button: FC<{
  children: ReactNode;
  variant: "blue" | "lime";
  type?: "button" | "submit";
  size?: "base" | "sm";
  icon?: ReactNode;
}> = ({ children, variant, type = "button", icon }) => {
  return (
    <button
      type={type}
      className={cn(
        "font-regular flex items-center rounded-full font-serif transition-colors gap-4",
        { "bg-lime-primary hover:bg-[#8ad900] text-black": variant === "lime" },
        {
          "bg-[#4813D8] hover:bg-[#3d10b8] text-white": variant === "blue",
        },
        { "px-6 py-1.5 text-base leading-[36px]": true },
      )}
    >
      {children}
      {icon}
    </button>
  );
};
