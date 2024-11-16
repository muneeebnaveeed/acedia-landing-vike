import { FC, PropsWithChildren } from "react";
import { cn } from "../lib/cn";

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <div className={cn("w-full max-w-screen-[1686px] px-20 mx-auto", className)}>{children}</div>;
};
