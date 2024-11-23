import { FC } from "react";
import InProgress1Image from "../assets/in-progress-1.png";
import { cn } from "../lib/cn";
import { SocialLinks } from "../pages/index/social-links";
import { ArrowRightIcon } from "./icons/arrow-right";
import { LinkButton } from "./ui/link-button";
import { ACEDIA_CONTACT_EMAIL } from "../lib/constants";

export const LetsBuildSomethingTogether: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-6 md:gap-16 px-16 py-[80px] overflow-hidden", className)}>
      <img src={InProgress1Image} className="h-auto w-[90px] md:w-full max-w-[200px]" />
      <h2 className="max-w-[490px] text-center font-serif text-3xl md:text-[60px] font-semibold leading-7 md:leading-[63px] text-lime-primary text-opacity-80">
        Let’s build something really good together!
      </h2>
      <LinkButton
        variant="blue"
        href={`mailto:${ACEDIA_CONTACT_EMAIL}`}
        icon={<ArrowRightIcon className="text-lime-secondary" />}
      >
        Reach out to us via email
      </LinkButton>
      <SocialLinks />
    </div>
  );
};
