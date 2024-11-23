import { FC } from "react";

import Imti1 from "../../assets/Imti1.svg";
import Tooba1 from "../../assets/Tooba1.svg";
import Hussain1 from "../../assets/Hussain1.svg";
import Hassaan1 from "../../assets/Hassaan1.svg";
import Imti2 from "../../assets/Imti2.png";
import Tooba2 from "../../assets/Tooba2.png";
import Hussain2 from "../../assets/Hussain2.png";
import Hassaan2 from "../../assets/Hassaan2.png";

const Head: FC = () => {
  return (
    <>
      <link rel="preload" href={Imti1} as="image" />
      <link rel="preload" href={Imti2} as="image" />
      <link rel="preload" href={Tooba1} as="image" />
      <link rel="preload" href={Tooba2} as="image" />
      <link rel="preload" href={Hussain1} as="image" />
      <link rel="preload" href={Hussain2} as="image" />
      <link rel="preload" href={Hassaan1} as="image" />
      <link rel="preload" href={Hassaan2} as="image" />
    </>
  );
};

export default Head;
