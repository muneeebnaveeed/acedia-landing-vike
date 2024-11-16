import AcediaGuide14Image from "../../assets/acedia guide (1)-14.svg";
import AcediaGuide18Image from "../../assets/acedia guide (1)-18.svg";

import TwitterBannerImage from "../../assets/twitter-banner-1.png";
import { ArrowRightIcon } from "../../components/icons/arrow-right";
import { LetsBuildSomethingTogether } from "../../components/lets-build-something-together";
import { Button } from "../../components/ui/button";
import { HeroHeader } from "./HeroHeader";
import { PressAToStart } from "./PressAToStart";
import { OurWork } from "./OurWork";
import { OurServices } from "./OurServices";

export default function Page() {
  return (
    <>
      <HeroHeader />

      <PressAToStart />

      <OurWork />

      <OurServices />

      <div className="relative" id="portfolio">
        <img src={TwitterBannerImage} className="h-auto min-h-[400px] w-full object-cover" />
        <div className="absolute left-0 top-0 flex h-full w-full items-center p-10 md:p-[90px]">
          <div className="font-serif">
            <h2 className="mb-[24px] text-2xl lg:text-[50px] font-semibold uppercase leading-8 lg:leading-[79px] tracking-[-0.56px] text-white">
              JOIN THE GRAVE KEEPER’S DISCORD
            </h2>
            <p className="mb-12 max-w-[750px] text-lg lg:text-lg font-medium leading-[28px] text-white text-opacity-90">
              Dev updates, exclusive artwork from the game and behind-the scenes from the team, it’s all here. Wanna be
              a part of our little community and see The Grave Keeper come to life in real-time?
            </p>
            <Button variant="blue" icon={<ArrowRightIcon />}>
              Join Up!
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full -translate-y-3">
        <>
          <div className="-mt-2 w-full bg-[#161616] relative">
            <img src={AcediaGuide14Image} className="absolute right-0 top-0" height={380} width={830} />
            <img src={AcediaGuide18Image} className="absolute left-0 -top-1/2" height={630} width={730} />
            <LetsBuildSomethingTogether />
          </div>
        </>
      </div>
    </>
  );
}
