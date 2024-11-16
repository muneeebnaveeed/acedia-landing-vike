import { FC } from "react";
import { Button } from "../../components/ui/button";
import { Container } from "../../components/container";
import { cn } from "../../lib/cn";
import { ArrowRightIcon } from "../../components/icons/arrow-right";

export const HeroHeader: FC = () => {
  return (
    <section
      className={cn(
        "relative w-full bg-no-repeat bg-cover",
        "bg-[url(/assets/gun2-1.jpg)] h-[900px]",
        "md:bg-[url(/assets/home-header.png)] h-[780px]",
      )}
    >
      <Container className="flex items-end h-full">
        <div
          className={cn(
            "w-full flex flex-col items-start justify-center gap-6",
            "sm:items-center",
            "md:flex-row md:flex-wrap md:items-end md:gap-8",
            "lg:justify-between",
          )}
        >
          <div className={cn("space-y-2 font-serif text-white", "text-left", "sm:text-center", "lg:text-left")}>
            <h1 className={cn("text-5xl font-semibold uppercase leading-[50px]", "md:text-[80px] md:leading-[80px]")}>
              The Grave Keeper
            </h1>
            <p className={cn("max-w-[1160px] text-xl leading-5", "md:text-[29px] md:leading-[36px]")}>
              A soulslike FPS. A Lovecraftian tale of an archaeologist’s bid for sanity and survival in the cosmic
              nightmare he finds himself in. <span className="font-bold">Coming early 2025.</span>
            </p>
          </div>
          <Button variant="lime" icon={<ArrowRightIcon />}>
            Wishlist on Steam
          </Button>
        </div>
      </Container>
    </section>
  );
};
