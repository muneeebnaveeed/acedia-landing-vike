import AcediaGuide14ServicesImage from "../../assets/acedia-guide-(1)-14-services.png";
import AcediaGuide114Iamge from "../../assets/acedia guide (1)-14.png";
import AcediaGuide14Image from "../../assets/acedia guide (1)-14.svg";
import AcediaGuide18Image from "../../assets/acedia guide (1)-18.svg";
import Collage1Image from "../../assets/collage-1.png";
import ModelFImage from "../../assets/model-f.png";
import ServiceCardImage from "../../assets/service-image.jpg";
import ServicesGridImage from "../../assets/services-grid.png";
import TwitterBannerImage from "../../assets/twitter-banner-1.png";
import { ArrowRightIcon } from "../../components/icons/arrow-right";
import { LetsBuildSomethingTogether } from "../../components/lets-build-something-together";
import { Button } from "../../components/ui/button";
import { ServiceCard } from "./service-card";
import { HeroHeader } from "./HeroHeader";
import { PressAToStart } from "./PressAToStart";

export default function Page() {
  return (
    <>
      <HeroHeader />

      <PressAToStart />

      <div className="w-full -translate-y-3">
        <div className="relative overflow-hidden px-20 pt-0 md:pt-[190px]">
          <img
            src={AcediaGuide114Iamge}
            width="1189px"
            height="1511px"
            className="absolute -right-20 top-0 -z-10 translate-y-[-150px] rotate-[-17deg]"
          />
          <h2
            id="work"
            className="font-serif text-3xl  md:text-[60px] text-center md:text-left font-semibold uppercase leading-[88px] text-lime-primary underline underline-offset-8"
          >
            Our Work
          </h2>
          <img src={Collage1Image} className="h-auto w-full" />
        </div>

        <>
          <div className="relative overflow-hidden px-20 pt-0 md:pt-[100px]">
            <img src={ServicesGridImage} className="absolute bottom-0 left-0 -z-10 h-auto w-full" />
            <img src={AcediaGuide14ServicesImage} className="absolute -top-20 left-0 -z-10 w-full" />

            <h2
              id="our-services"
              className="mb-[46px] font-serif text-3xl text-center md:text-left md:text-[60px] font-semibold uppercase leading-[88px] text-lime-primary underline underline-offset-8"
            >
              Our Services
            </h2>
            <div className="flex flex-wrap md:flex-nowrap items-end gap-16">
              <div className="pb-[100px] w-full">
                <div className="mb-6 flex flex-wrap gap-16 w-full">
                  <ServiceCard title="Game Development" img={ServiceCardImage}>
                    Need a tiny mobile game developed? We’re your people. Need a big, sprawling 18-hour PC epic? We’re
                    your people.
                    <br />
                    <br />
                    Our tool of choice is Unreal Engine, and our small team of artists &amp; developers (but first of
                    all gamers) is up for any development challenge.
                    <br />
                    <br />
                    <span className="font-semibold text-lime-secondary">
                      You bring us the idea, we bring you the execution.
                    </span>
                  </ServiceCard>
                  <ServiceCard title="Game Development" img={ServiceCardImage}>
                    Need a tiny mobile game developed? We’re your people. Need a big, sprawling 18-hour PC epic? We’re
                    your people.
                    <br />
                    <br />
                    Our tool of choice is Unreal Engine, and our small team of artists &amp; developers (but first of
                    all gamers) is up for any development challenge.
                    <br />
                    <br />
                    <span className="font-semibold text-lime-secondary">
                      You bring us the idea, we bring you the execution.
                    </span>
                  </ServiceCard>
                </div>
                <div className="flex flex-wrap gap-16 w-full">
                  <ServiceCard title="Game Development" img={ServiceCardImage}>
                    Need a tiny mobile game developed? We’re your people. Need a big, sprawling 18-hour PC epic? We’re
                    your people.
                    <br />
                    <br />
                    Our tool of choice is Unreal Engine, and our small team of artists &amp; developers (but first of
                    all gamers) is up for any development challenge.
                    <br />
                    <br />
                    <span className="font-semibold text-lime-secondary">
                      You bring us the idea, we bring you the execution.
                    </span>
                  </ServiceCard>
                  <ServiceCard title="Game Development" img={ServiceCardImage}>
                    Need a tiny mobile game developed? We’re your people. Need a big, sprawling 18-hour PC epic? We’re
                    your people.
                    <br />
                    <br />
                    Our tool of choice is Unreal Engine, and our small team of artists &amp; developers (but first of
                    all gamers) is up for any development challenge.
                    <br />
                    <br />
                    <span className="font-semibold text-lime-secondary">
                      You bring us the idea, we bring you the execution.
                    </span>
                  </ServiceCard>
                </div>
              </div>
              <img src={ModelFImage} width="552.33px" height="840.29" className="hidden xl:inline" />
            </div>
          </div>
          <div className="relative" id="portfolio">
            <img src={TwitterBannerImage} className="h-auto min-h-[400px] w-full object-cover" />
            <div className="absolute left-0 top-0 flex h-full w-full items-center p-10 md:p-[90px]">
              <div className="font-serif">
                <h2 className="mb-[24px] text-2xl lg:text-[50px] font-semibold uppercase leading-8 lg:leading-[79px] tracking-[-0.56px] text-white">
                  JOIN THE GRAVE KEEPER’S DISCORD
                </h2>
                <p className="mb-12 max-w-[750px] text-lg lg:text-lg font-medium leading-[28px] text-white text-opacity-90">
                  Dev updates, exclusive artwork from the game and behind-the scenes from the team, it’s all here. Wanna
                  be a part of our little community and see The Grave Keeper come to life in real-time?
                </p>
                <Button variant="blue" icon={<ArrowRightIcon />}>
                  Join Up!
                </Button>
              </div>
            </div>
          </div>
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
