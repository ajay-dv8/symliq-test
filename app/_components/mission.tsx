"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GreenDot } from "./dot";

const words = `Transform your business and lifestyle with cutting-edge digital innovations and premium software solutions designed to elevate every experience.
`;

export function Mission() {
  return (
    <div className="w-full py-20 px-12 bg-blue flex justify-center flex-col">
      {/* <div className="">  */}
        <h2 className="max-w-7xl mx-auto text-3xl md:text-6xl font-sans text-white">
          <GreenDot/> 
          Our Mission
        </h2>
        <img src="/svg/line7.svg" alt="" className="h-20" />
        <TextGenerateEffect words={words} />
      {/* </div> */}
      {/* <div className="">
        <p className=""></p>
      </div> */}
    </div>
  );
}
