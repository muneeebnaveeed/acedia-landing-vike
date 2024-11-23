import { FC } from "react";
import TwitterBannerImage from "../../assets/twitter-banner-1.png";
import { ArrowRightIcon } from "../../components/icons/arrow-right";
import { LinkButton } from "../../components/ui/link-button";
import { Container } from "../../components/container";
import { ACEDIA_DISCORD_SERVER } from "../../lib/constants";

export const DiscordSection: FC = () => {
  return (
    <div className="relative" id="portfolio">
      <img src={TwitterBannerImage} className="w-full h-full min-h-[470px] max-h-[600px] object-cover" />
      <Container className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full flex flex-col justify-center items-start font-serif">
        <h2 className="mb-[24px] text-2xl lg:text-[50px] font-semibold uppercase leading-8 lg:leading-[79px] tracking-[-0.56px] text-white">
          JOIN THE GRAVE KEEPER’S DISCORD
        </h2>
        <p className="mb-12 max-w-[500px] min-[1400px]:max-w-[750px] text-lg lg:text-lg font-medium leading-[28px] text-white text-opacity-90">
          Dev updates, exclusive artwork from the game and behind-the scenes from the team, it’s all here. Wanna be a
          part of our little community and see The Grave Keeper come to life in real-time?
        </p>
        <LinkButton href={ACEDIA_DISCORD_SERVER} target="_blank" variant="blue" icon={<ArrowRightIcon />}>
          Join Up!
        </LinkButton>
      </Container>
    </div>
  );
};
