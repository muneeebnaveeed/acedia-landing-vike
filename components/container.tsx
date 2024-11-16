import { FC, PropsWithChildren } from "react";
import { cn } from "../lib/cn";

export const Container: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <div className={cn("w-full max-w-[1686px] px-10 sm:px-20 mx-auto py-14 sm:py-20", className)}>{children}</div>;
};
