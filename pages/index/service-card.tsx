import { FC, ReactNode } from "react";

export const ServiceCard: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <div className="max-w-[500px]">
      <h3 className="mb-[26px] font-serif text-[26px] font-bold leading-[32px] tracking-[-0.56px] text-[#F7FCDE]">
        {title}
      </h3>
      <p className="font-serif text-lg leading-[25px] text-[#F7FCDE]">{children}</p>
    </div>
  );
};
