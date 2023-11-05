import { Accordion } from "@/components/accordion";
import WhyCare from "@/containers/why-care";
import Limitations from "@/containers/limitations";
import CalcSegment from "@/containers/calc-segment";
import AverageSite from "@/containers/average-site";
import Emissions from "@/containers/emissions";
import Hero from "@/containers/hero";
import Calculate from "@/containers/calculate";

export default function Home() {
  return (
    <div className="w-screen space-y-4 p-2 md:px-5 flex flex-col items-center justify-center">
      <Hero />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 max-w-[500px] md:space-y-0 md:max-w-none items-stretch">
        <AverageSite />
        <CalcSegment />
        <Emissions />
      </div>
      <Calculate />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-5 max-w-[500px] md:space-y-0 md:max-w-none items-stretch">
        <Accordion />
        <WhyCare />
        <Limitations />
      </div>
    </div>
  );
}
