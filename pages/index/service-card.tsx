import { FC, ReactNode } from "react";

export const ServiceCard: FC<{ title: string; children: ReactNode; img: string }> = ({ title, children, img }) => {
  return (
    <div className="max-w-[500px] md:max-w-[unset] flex flex-col md:flex-row md:items-center md:justify-between gap-10">
      <img src={img} className="w-full mx-auto order-1 md:order-3 inline xl:hidden" />
      <div className="order-2">
        <h3 className="mb-[26px] font-serif text-[26px] font-bold leading-[32px] tracking-[-0.56px] text-[#F7FCDE]">
          {title}
        </h3>
        <p className="font-serif text-lg leading-[25px] text-[#F7FCDE]">{children}</p>
      </div>
    </div>
  );
};
