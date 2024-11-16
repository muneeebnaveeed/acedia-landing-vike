import { FC, ReactNode } from "react";

export const ServiceCard: FC<{ title: string; children: ReactNode; img: string }> = ({ title, children, img }) => {
  return (
    <div className="w-full xl:max-w-[400px] flex flex-col min-[920px]:flex-row min-[920px]:items-center min-[920px]:justify-between gap-10">
      <img src={img} className="w-full mx-auto order-1 min-[920px]:order-3 inline xl:hidden" />
      <div className="order-2 min-[920px]:max-w-[400px]">
        <h3 className="mb-[26px] font-serif text-[26px] font-bold leading-[32px] tracking-[-0.56px] text-[#F7FCDE]">
          {title}
        </h3>
        <p className="font-serif text-lg leading-[25px] text-[#F7FCDE]">{children}</p>
      </div>
    </div>
  );
};
