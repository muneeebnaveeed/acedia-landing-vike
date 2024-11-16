import AcediaGuide14Image from "../../assets/acedia guide (1)-14.svg";
import AcediaGuide18Image from "../../assets/acedia guide (1)-18.svg";

import { LetsBuildSomethingTogether } from "../../components/lets-build-something-together";
import { HeroHeader } from "./HeroHeader";
import { PressAToStart } from "./PressAToStart";
import { OurWork } from "./OurWork";
import { OurServices } from "./OurServices";
import { DiscordSection } from "./DiscordSection";

export default function Page() {
  return (
    <>
      <HeroHeader />

      <PressAToStart />

      <OurWork />

      <OurServices />

      <DiscordSection />

      <div className="-mt-2 w-full bg-black relative overflow-hidden">
        <img src={AcediaGuide14Image} className="absolute right-0 top-0 w-[600px] min-[1000px]:w-[830px]" />
        <img
          src={AcediaGuide18Image}
          className="absolute left-0 -top-1/2 h-auto hidden min-[1000px]:inline"
          width="730px"
        />
        <LetsBuildSomethingTogether />
      </div>
    </>
  );
}
