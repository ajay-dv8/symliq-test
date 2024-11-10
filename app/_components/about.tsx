"use client";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";  
import { BlueDot } from "./dot";

export function About() {

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-lg text-black px-4 md:text-2xl lg:text-3xl dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-justify mx-auto drop-shadow-2xl font-sans"
      > 
      {/* <div className=" "> */}
        <h2 className="text-3xl md:text-6xl text-neutral-800 dark:text-neutral-200 font-sans text-left pb-10 md:pb-0 ">About Us</h2> 
        <img src="/svg/blue-h-line.svg" alt="" className="h-24 hidden md:block" />
        <BlueDot/>
      {/* </div> */}

        We are a dynamic software development company with a diverse team of skilled developers and designers. From mobile app and enterprise application development to graphic design, we deliver comprehensive solutions tailored to your needs, blending an extensive tech stack with innovative UI/UX expertise to drive results.{" "}

      </motion.h1> 
    </HeroHighlight>
  );
}
