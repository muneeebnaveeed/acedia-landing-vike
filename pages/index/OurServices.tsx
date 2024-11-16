import { FC } from "react";
import ModelFImage from "../../assets/model-f.png";
import ServiceCardImage from "../../assets/service-image.jpg";
import ServicesGridImage from "../../assets/services-bg-grid.png";

import { ServiceCard } from "./service-card";
import { Container } from "../../components/container";

export const OurServices: FC = () => {
  return (
    <div className="relative bg-black">
      <Container className="!pt-0 !pb-2.5">
        <h2
          id="our-services"
          className="mb-12 font-serif text-3xl text-center md:text-left md:text-[60px] font-semibold uppercase leading-[88px] text-lime-primary underline underline-offset-8"
        >
          Our Services
        </h2>
        <div className="flex flex-wrap md:flex-nowrap items-end gap-16">
          <div className="pb-[100px] w-full z-10">
            <div className="mb-6 flex flex-wrap gap-16 w-full">
              <ServiceCard title="Game Development" img={ServiceCardImage}>
                Need a tiny mobile game developed? We’re your people. Need a big, sprawling 18-hour PC epic? We’re your
                people.
                <br />
                <br />
                Our tool of choice is Unreal Engine, and our small team of artists &amp; developers (but first of all
                gamers) is up for any development challenge.
                <br />
                <br />
                <span className="font-semibold text-lime-secondary">
                  You bring us the idea, we bring you the execution.
                </span>
              </ServiceCard>
              <ServiceCard title="3D Animation" img={ServiceCardImage}>
                While we have a particular affinity for making 3D music videos being fans of the medium (I mean, look at
                KDA’s stuff. How good are those guys?!), we’re well-versed in everything from narrative animation for
                film & TV to product animation & visualization to motion design for advertisement.
                <br />
                <br />
                And we absolutely hate Autodesk Maya. That should tell you something about how good we’re at it.{" "}
                <span className="font-semibold text-lime-secondary">
                  Check out some of our animation work at our Artstation.
                </span>
              </ServiceCard>
            </div>
            <div className="flex flex-wrap gap-16 w-full">
              <ServiceCard title="3D Asset Creation" img={ServiceCardImage}>
                We’ve been working in game development for 5 years, so we’ve gotten pretty good at asset creation. Be it
                stylized, realistic or optimized for games, no matter the game’s scale.
                <br />
                <br />
                Need some assets or even characters for your game, animation, film or TV show? You know what to do.
              </ServiceCard>
              <ServiceCard title="Graphic Design" img={ServiceCardImage}>
                This is where it all starts. The beginnings of digital design for every creative. The freshman year at
                art school.
                <br />
                <br />
                Needless to say, graphic design is one of our strong suits. Again, for reference, our Artstation. Just
                shoot your requirement at us and watch it come to life.
              </ServiceCard>
            </div>
          </div>
          <img
            src={ModelFImage}
            className="w-[550px] min-[1490px]:w-[400px] min-[1650px]:w-[550px] h-auto hidden xl:inline z-10"
          />
          <img src={ServicesGridImage} className="absolute bottom-0 left-0 w-full" />
        </div>
      </Container>
    </div>
  );
};
