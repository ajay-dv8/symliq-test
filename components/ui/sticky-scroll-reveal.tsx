
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image"; 
import "./scroll.css"
import { GreenDot } from "@/app/_components/dot";

interface ContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
  image?: string;
  number: string;
}

interface StickyScrollProps {
  content: ContentItem[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: ref, offset: ["start start", "end start"] });

  const cardLength = content.length;
  // const backgroundColors = ["var(--slate-900)", "var(--black)", "var(--neutral-900)"];
  // const backgroundColors = ["#0a15df", "#0a15df", "#0a15df"];
  // const backgroundColors = ["#0a15df", "#0a15df", "#0a15df"];
  const backgroundColors = ["#1f2fe6", "#1f2fe6", "#1f2fe6"];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] scroll-hidden overflow-y-scroll flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-20">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm mt-10 flex items-center gap-x-2"
              >
                <GreenDot/>{item.number}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{
          background: content[activeCard].image
            ? undefined
            : backgroundColors[activeCard % backgroundColors.length],
        }}
        className={cn(
          "hidden lg:block h-80 w-[35rem] rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].image ? (
          <Image
            src={content[activeCard].image as string}
            alt={content[activeCard].title}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          content[activeCard].content ?? null
        )}
      </div>
    </motion.div>
  );
};








