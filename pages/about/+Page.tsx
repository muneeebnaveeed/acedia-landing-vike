import { FC } from "react";
import AcediaGuide18Image from "../../assets/acedia guide (1)-18.svg";
import AcediaGuide18AboutImage from "../../assets/acedia guide (1)-18-about.png";
import { Container } from "../../components/container";
import Imti from "../../assets/Imti 1.svg";
import Tooba from "../../assets/Tooba 1.svg";
import Hussain from "../../assets/Hussain 1.svg";
import Hassaan from "../../assets/Hassaan 1.svg";
import AcediaGuide14Image from "../../assets/acedia-guide-(1)-14-services.png";
import { LetsBuildSomethingTogether } from "../../components/lets-build-something-together";

const AboutPage: FC = () => {
  return (
    <>
      <section className="w-full font-serif py-20 bg-black relative">
        <img src={AcediaGuide18AboutImage} className="absolute right-0 top-0" />
        <img src={AcediaGuide18AboutImage} className="absolute left-0 top-1/3 rotate-180" />
        <Container className="space-y-20 z-10">
          <div className="space-y-4 z-10">
            <h1 className="uppercase underline text-lime-primary font-bold text-3xl leading-[86px] ">Origin Story</h1>
            <p className="text-base leading-5 text-white max-w-[300px]">
              ACEDIA originated out of a visual designer, an architect, a game designer, a game developer and a music
              producer&apos;s desire to tell big, interactive stories right at the intersection of their skillsets. So
              much so, they quit their day jobs and went all-in on this dream one random Tuesday. In case you&apos;re
              curious, here are those impulsive individuals.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center z-10">
            <img src={Hussain} />
            <img src={Hassaan} />
            <img src={Tooba} />
            <img src={Imti} />
          </div>
        </Container>
      </section>
      <div className="relative w-full bg-black">
        <img src={AcediaGuide14Image} alt="" className="md:hidden absolute left-1/2 bottom-0 rotate-[130deg]" />

        <img src={AcediaGuide14Image} className="hidden md:inline absolute right-0 top-0" height={380} width={830} />
        <img src={AcediaGuide18Image} className="hidden md:inline absolute left-0 -top-1/2" height={630} width={730} />
        <LetsBuildSomethingTogether />
      </div>
    </>
  );
};

export default AboutPage;
