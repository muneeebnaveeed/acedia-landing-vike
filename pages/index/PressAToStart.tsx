import { FC } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRightIcon } from "../../components/icons/arrow-right";
import PressAImage from "../../assets/pressA-1.png";
import { Container } from "../../components/container";
import { cn } from "../../lib/cn";

export const PressAToStart: FC = () => {
  return (
    <section className="bg-black relative">
      <Container className="flex flex-nowrap items-start min-[1045px]:items-center justify-between gap-20">
        <div className="flex-1 flex-shrink space-y-12">
          <div className={cn("w-full space-y-2.5 font-serif text-white pr-[calc(200px+40px)] min-[680px]:pr-0")}>
            <h2
              className={cn(
                "text-2xl font-semibold uppercase leading-6",
                "md:text-[40px] md:leading-[40px]",
                "min-[1130px]:text-[55px] min-[1130px]:leading-[60px]",
              )}
            >
              Your friendly neighborhood Game devs & creatives
            </h2>
            <p className="mb-9 max-w-[860px] text-base leading-5 md:text-[27px] md:leading-[36px]">
              If your neighborhood happens to be Islamabad, Pakistan.
            </p>
          </div>
          <div className="flex w-full justify-center md:justify-start">
            <Button variant="blue" icon={<ArrowRightIcon />}>
              More about our game
            </Button>
          </div>
        </div>
        <img
          src={PressAImage}
          className={cn(
            "absolute w-[120px]",
            "min-[490px]:w-[200px]",
            "min-[680px]:static right-10 top-10",
            "min-[1130px]:w-[300px]",
          )}
        />
      </Container>
    </section>
  );
};
