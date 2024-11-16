import { FC } from "react";
import { Button } from "../../components/ui/button";
import { Container } from "../../components/container";
import { cn } from "../../lib/cn";

export const HeroHeader: FC = () => {
  return (
    <section
      className={cn(
        "relative w-full bg-no-repeat bg-cover",
        "bg-[url(/assets/gun2-1.jpg)] h-[900px]",
        "md:bg-[url(/assets/home-header.png)] h-[780px]",
      )}
    >
      <Container className="flex items-end h-full py-20">
        <div
          className={cn(
            "w-full flex flex-col items-center justify-center gap-6",
            "md:flex-row md:flex-wrap md:items-end md:gap-8 md:px-20",
            "lg:justify-between",
          )}
        >
          <div className={cn("space-y-2 text-center font-serif text-white", "lg:text-left")}>
            <h1 className={cn("text-5xl font-semibold uppercase leading-[50px]", "md:text-[80px] md:leading-[80px]")}>
              The Grave Keeper
            </h1>
            <p className={cn("max-w-[1160px] text-xl leading-5", "md:text-[29px] md:leading-[36px]")}>
              A soulslike FPS. A Lovecraftian tale of an archaeologist’s bid for sanity and survival in the cosmic
              nightmare he finds himself in. <span className="font-bold">Coming early 2025.</span>
            </p>
          </div>
          <div className="shrink-0">
            <Button variant="lime" icon="arrow-right">
              Wishlist on Steam
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
