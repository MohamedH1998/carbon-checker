import InfoWrapper from "@/components/info-wrapper";
import { BiRun } from "react-icons/bi";
import React from "react";

const WhyCare = () => {
  return (
    <InfoWrapper
      icon={<BiRun />}
      title="Steps you can take"
      gradient="from-background to-renaissance text-glitter-shower"
    >
      <div className="text-gray-200 space-y-2">
        <p>
          The carbon emissions of a website can have a significant impact on the
          environment. In fact, the internet is responsible for approximately 3%
          of global carbon emissions, and this number is expected to continue
          rising.
        </p>
        <p>
          By measuring and reducing the carbon footprint of your website, you
          can help to combat this trend and do your part to protect the planet.
          Every website has the potential to make a difference, and every little
          bit helps.
        </p>
      </div>
    </InfoWrapper>
  );
};

export default WhyCare;
