import { FC } from "react";
import AcediaGuide18Image from "../../assets/acedia guide (1)-18.svg";
import AcediaGuide18AboutImage from "../../assets/acedia guide (1)-18-about.png";
import { Container } from "../../components/container";
import Imti1 from "../../assets/Imti1.svg";
import Tooba1 from "../../assets/Tooba1.svg";
import Hussain1 from "../../assets/Hussain1.svg";
import Hassaan1 from "../../assets/Hassaan1.svg";
import Imti2 from "../../assets/Imti2.png";
import Tooba2 from "../../assets/Tooba2.png";
import Hussain2 from "../../assets/Hussain2.png";
import Hassaan2 from "../../assets/Hassaan2.png";
import AcediaGuide14Image from "../../assets/acedia-guide-(1)-14-services.png";
import { LetsBuildSomethingTogether } from "../../components/lets-build-something-together";

const AboutPage: FC = () => {
  return (
    <>
      <section className="w-full font-serif py-20 pt-40 bg-black relative">
        <img src={AcediaGuide18AboutImage} className="absolute right-0 top-0" />
        <img src={AcediaGuide18AboutImage} className="absolute left-0 top-1/3 rotate-180" />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-9 grid-rows-5 md:grid-rows-2 gap-10 ">
            <div className="col-span-1 md:col-span-6">
              <div className="w-full space-y-4 z-10 pr-4">
                <h1 className="uppercase underline text-lime-primary font-bold text-3xl md:text-5xl leading-[86px] ">
                  Origin Story
                </h1>
                <p className="text-base md:text-xl leading-5 text-white max-w-[300px] md:max-w-[500px] min-[1130px]:max-w-[650px] xl:max-w-[750px]">
                  ACEDIA originated out of a visual designer, an architect, a game designer, a game developer and a
                  music producer&apos;s desire to tell big, interactive stories right at the intersection of their
                  skillsets. So much so, they quit their day jobs and went all-in on this dream one random Tuesday. In
                  case you&apos;re curious, here are those impulsive individuals.
                </p>
              </div>
            </div>
            <div className="col-span-1 h-[300px] md:col-span-3 z-10">
              <div className="w-full h-full bg-no-repeat bg-center bg-contain bg-[url(/assets/Hussain1.svg)] hover:bg-[url(/assets/Hussain2.png)]"></div>
            </div>
            <div className="col-span-1 h-[300px] md:col-span-3 z-10">
              <div className="w-full h-full  bg-no-repeat bg-center bg-contain bg-[url(/assets/Hassaan1.svg)] hover:bg-[url(/assets/Hassaan2.png)]"></div>
            </div>
            <div className="col-span-1 h-[300px] md:col-span-3 z-10">
              <div className="w-full h-full  bg-no-repeat bg-center bg-contain bg-[url(/assets/Tooba1.svg)] hover:bg-[url(/assets/Tooba2.png)]"></div>
            </div>
            <div className="col-span-1 h-[300px] md:col-span-3 z-10">
              <div className="w-full h-full  bg-no-repeat bg-center bg-contain bg-[url(/assets/Imti1.svg)] hover:bg-[url(/assets/Imti2.png)]"></div>
            </div>
          </div>
        </Container>
      </section>
      <div className="relative overflow-hidden w-full bg-black">
        <img src={AcediaGuide14Image} alt="" className="md:hidden absolute left-1/2 bottom-0 rotate-[130deg]" />

        <img src={AcediaGuide14Image} className="hidden md:inline absolute right-0 top-0" height={380} width={830} />
        <img src={AcediaGuide18Image} className="hidden md:inline absolute left-0 -top-1/2" height={630} width={730} />
        <LetsBuildSomethingTogether />
      </div>
    </>
  );
};

export default AboutPage;
