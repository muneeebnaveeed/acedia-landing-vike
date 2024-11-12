import { FC, ReactNode } from "react";
import AcediaArt14Image from "../../assets/acedia guide (1)-14.svg";
import AcediaArt1Image from "../../assets/acedia-art-1.svg";
import AcediaWomanImage from "../../assets/acedia-woman.svg";
import { LetsBuildSomethingTogether } from "../../components/lets-build-something-together";
import AcediaGuide14Image from "../../assets/acedia guide (1)-14.svg";
import AcediaGuide18Image from "../../assets/acedia guide (1)-18.svg";
import { cn } from "../../lib/cn";

const ContactInput: FC<{ className?: string }> = ({ className }) => {
  return (
    <form className={cn("w-full relative h-12 z-20", className)}>
      <input
        type="text"
        className="w-full rounded-[13px] px-3 py-2 h-full bg-[#F8F8F8] border-none bg-opacity-35 font-medium text-[#F7FCDE] outline-none"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="h-full px-7 rounded-[13px] bg-[#F8F8F8] bg-opacity-35 font-serif font-medium text-[#F7FCDE] hover:bg-opacity-45 absolute right-0 top-0"
      >
        Send
      </button>
    </form>
  );
};

const ContactBlock: FC<{ title: string; children: ReactNode; titleVariant: "lime" | "blue" }> = ({
  title,
  children,
  titleVariant,
}) => {
  return (
    <div className="space-y-4">
      <h1
        className={cn("font-serif text-[30px] md:text-[50px] font-bold md:leading-[80px] tracking-[0px] uppercase", {
          "text-lime-primary": titleVariant === "lime",
          "text-[#4813D8]": titleVariant === "blue",
        })}
      >
        {title}
      </h1>
      <p className="font-serif leading-5 tracking-[-0.64px] md:text-[25px] text-[#F7FCDE]">{children}</p>
    </div>
  );
};

const ContactPage: FC = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white w-full">
      <img src={AcediaArt1Image} alt="" className="absolute -right-1/4 top-0 rotate-[270deg]" />
      <img src={AcediaArt1Image} alt="" className="absolute -left-1/4 top-1/3 rotate-[82.5deg]" />
      <div className="flex w-full justify-between items-end w-[1540px]:items-start">
        <div className="mt-[150px] lg:mt-[300px] sm:mb-[300px] px-[36px] md:px-20 space-y-12 flex-[2]">
          <ContactBlock title="Get in Touch" titleVariant="lime">
            Have an idea you want us to bring to life? Wanna inquire about our services? Just wanna tell us about your
            day?
            <br />
            <span className="text-lime-secondary">contact@acediadevs.com</span> or{" "}
            <span className="text-lime-secondary">@acediadevs</span> on your social medium of choice.
          </ContactBlock>
          <ContactBlock title="Stay Tuned" titleVariant="blue">
            Enter your email address to receive exclusive artwork and occasional news on The Grave Keeper’s development,
            or if you just feel like giving a bit of your information away for no&nbsp;reason&nbsp;today.
          </ContactBlock>
          <ContactInput className="hidden md:block" />
        </div>
        <img src={AcediaWomanImage} alt="" className="z-10 min-h-[700px] hidden sm:inline flex-[1]" />
      </div>

      <div className="relative w-full px-10 mt-[350px] sm:hidden">
        <img src={AcediaWomanImage} alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10" />
        <ContactInput />
      </div>

      <div className="relative bg-transparent sm:bg-[#161616] overflow-hidden">
        <img src={AcediaArt14Image} alt="" className="sm:hidden absolute left-1/2 bottom-0 rotate-[130deg]" />

        <img src={AcediaGuide14Image} className="hidden sm:inline absolute right-0 top-0" height={380} width={830} />
        <img src={AcediaGuide18Image} className="hidden sm:inline absolute left-0 -top-1/2" height={630} width={730} />
        <LetsBuildSomethingTogether />
      </div>
    </div>
  );
};

export default ContactPage;
