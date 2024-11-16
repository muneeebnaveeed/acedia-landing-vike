import { FC } from "react";
import AcediaGuide114Iamge from "../../assets/acedia guide (1)-14.png";
import Collage1Image from "../../assets/collage-1.png";
import { Container } from "../../components/container";

export const OurWork: FC = () => {
  return (
    <section className="bg-black relative z-10">
      <Container className="!pt-0">
        <img
          src={AcediaGuide114Iamge}
          width="1189px"
          height="1511px"
          className="absolute -right-20 top-0 -z-10 translate-y-[-150px] rotate-[-17deg]"
        />
        <h2
          id="work"
          className="mb-12 font-serif text-3xl  md:text-[60px] text-center md:text-left font-semibold uppercase leading-[88px] text-lime-primary underline underline-offset-8"
        >
          Our Work
        </h2>
        <img src={Collage1Image} className="h-auto w-full" />
      </Container>
    </section>
  );
};
