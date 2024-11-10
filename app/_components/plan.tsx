"use client"; 
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"; 
import { content } from "@/constants/planData";
import { GreenDot } from "./dot";

export function Plan() {
  return (
    <div className="bg-blue"> 
      <div className="flex justify-center"> 
        <img 
          src="/svg/white-curved-arrow-down.svg" 
          alt="svg" 
          className="h-16 md:h-24 transform -scale-x-100 -rotate-12 z-40"
        />
        <GreenDot/>
        <h2 className="max-w-7xl pb-6 text-3xl md:text-6xl text-white font-sans">
          Our Plan
        </h2>
      </div> 

      <StickyScroll content={content} />
    </div>
  );
}
