"use client";
import { IoEarthSharp } from "react-icons/io5";
import { Gradient } from "../../utils/gradient";
import { useEffect } from "react";

import { Noto_Sans_Kawi } from "next/font/google";

const notoSansKawi = Noto_Sans_Kawi({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const Hero = () => {
  useEffect(() => {
    if (!window) {
      return;
    }
    const gradient = new Gradient(
      document.querySelector("#gradient-canvas"),
      window.innerWidth,
      window.innerHeight
    );
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative bg-[#94FAFB] rounded-xl px-7 pt-2 pb-20 space-y-8 z-[999] py-20 md:space-y-10 md:px-10 text-black">
      <canvas
        id="gradient-canvas"
        className="absolute top-0 left-0 rounded-xl z-[-99]"
        data-transition-in
      ></canvas>
      <div className="flex items-center justify-between z-[999]">
        <div className="">
          <i className="text-big-stone text-3xl">
            <IoEarthSharp />
          </i>
        </div>
        <button className="bg-background rounded-full px-4 py-1 text-white">
          Try now
        </button>
      </div>
      <div className="flex justify-start">
        <div className="hidden max-w-[150px] h-full lg:flex flex-col flex-2">
          <p className="">make a difference, reduce your digital emissions.</p>
        </div>
        <div className="md:min-w-[750px]">
          <h1
            className={`font-medium text-4xl px-0  md:min-w-[750px] xs:text-5xl uppercase text-big-stone z-1 md:text-7xl xs:px-10 md:px-20 md:pb-10 w-8/12 ${notoSansKawi.className}`}
          >
            {" "}
            Estimate your website&apos;s carbon
            <span className="flex items-start justify-start">
              footprint
              <span className="hidden pl-2 text-black text-base  lg:inline w-full normal-case max-w-[270px]">
                find out the impact of your website on the planet
              </span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
