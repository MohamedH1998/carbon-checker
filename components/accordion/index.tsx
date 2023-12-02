import {
  Accordion as AccordionShad,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import InfoWrapper from "../info-wrapper";

export function Accordion() {
  return (
    <InfoWrapper
      icon={<BsFillBalloonHeartFill />}
      title="What steps can you take?"
      gradient="from-background to-renaissance text-thallium-flame"
    >
      <AccordionShad type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Use an energy efficient host</AccordionTrigger>
          <AccordionContent>
            A web hosting provider that uses renewable energy and has a strong
            track record of energy efficiency can help reduce your emissions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Optimise your website</AccordionTrigger>
          <AccordionContent>
            A faster loading site uses less energy and generates fewer
            emissions, there are many ways to optimise for this i.e., optimising
            images, caching, and reducing number of plugins.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Support reforestation projcets</AccordionTrigger>
          <AccordionContent>
            Reforestation and conservation projects can help to absorb carbon
            dioxide from the atmosphere, offsetting the emissions associated
            with your website.
          </AccordionContent>
        </AccordionItem>
      </AccordionShad>
    </InfoWrapper>
  );
}
